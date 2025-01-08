import {
  Bookmark,
  BookOpen,
  Books,
  User,
  UserList,
} from '@phosphor-icons/react/dist/ssr'
import { formatDistanceToNow, getYear } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { ReviewBox } from '@/src/components/ReviewBox'
import { SearchBar } from '@/src/components/SearchBar'
import { prisma } from '@/src/lib/prisma'

import {
  UserProfileContainer,
  UserProfileContent,
  UserProfileHeader,
  UserProfileInfos,
  UserProfileInfosDetails,
  UserProfileInfosDetailsItem,
  UserProfileInfosHeader,
  UserProfileInfosImageContainer,
  UserProfileReviews,
  UserProfileReviewWithDate,
  UserProfileSearchBar,
} from './styles'

interface UserProfileProps {
  user: {
    id: string
    name: string
    avatarUrl: string
    memberSince: string
    ratings: {
      id: string
      user_id: string
      book_id: string
      description: string
      rate: number
      created_at: string
      book: {
        title: string
        author: string
        cover_url: string
      }
    }[]
    totalPagesRead: number
    totalAuthorsRead: number
    mostReadCategory: string
  }
}

export default function UserProfile({ user }: UserProfileProps) {
  const router = useRouter()

  function handleSearchReview(search: string) {
    router.push(`/users/${user.id}?review=${search}`)
  }

  if (!user) {
    return <div>Book not found</div>
  }

  return (
    <UserProfileContainer>
      <UserProfileHeader>
        <User height={32} width={32} />
        <h1>Perfil</h1>
      </UserProfileHeader>
      <UserProfileContent>
        <UserProfileReviews>
          <UserProfileSearchBar>
            <SearchBar
              placeholder="Buscar livro avaliado"
              onSearch={handleSearchReview}
            />
          </UserProfileSearchBar>
          {user.ratings.map((rating) => (
            <UserProfileReviewWithDate key={rating.id}>
              <span>{rating.created_at}</span>
              <ReviewBox
                book={{
                  author: rating.book.author,
                  title: rating.book.title,
                  cover_url: rating.book.cover_url,
                  review: rating.description,
                }}
                rating={rating.rate}
                isInProfile={true}
              />
            </UserProfileReviewWithDate>
          ))}
        </UserProfileReviews>
        <UserProfileInfos>
          <UserProfileInfosImageContainer>
            <Image
              src={user.avatarUrl}
              alt="User Image"
              width={70}
              height={70}
            />
          </UserProfileInfosImageContainer>
          <UserProfileInfosHeader>
            <h1>{user.name}</h1>
            <span>membro desde {user.memberSince}</span>
          </UserProfileInfosHeader>
          <UserProfileInfosDetails>
            <UserProfileInfosDetailsItem>
              <BookOpen width={32} height={32} />
              <div>
                <p>{user.totalPagesRead}</p>
                <span>Páginas lidas</span>
              </div>
            </UserProfileInfosDetailsItem>
            <UserProfileInfosDetailsItem>
              <Books width={32} height={32} />
              <div>
                <p>{user.ratings.length}</p>
                <span>Livros avaliados</span>
              </div>
            </UserProfileInfosDetailsItem>
            <UserProfileInfosDetailsItem>
              <UserList width={32} height={32} />
              <div>
                <p>{user.totalAuthorsRead}</p>
                <span>Autores lidos</span>
              </div>
            </UserProfileInfosDetailsItem>
            <UserProfileInfosDetailsItem>
              <Bookmark width={32} height={32} />
              <div>
                <p>{user.mostReadCategory}</p>
                <span>Categoria mais lida</span>
              </div>
            </UserProfileInfosDetailsItem>
          </UserProfileInfosDetails>
        </UserProfileInfos>
      </UserProfileContent>
    </UserProfileContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const userId = String(params?.userId)
  const review = query.review as string | undefined

  if (!userId) {
    return {
      notFound: true,
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      image: true,
      createdAt: true,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
      ...(review
        ? {
            OR: [
              { description: { contains: review } },
              { book: { title: { contains: review } } },
              { book: { author: { contains: review } } },
            ],
          }
        : {}),
    },
    include: {
      book: {
        include: {
          categories: true,
        },
      },
    },
  })

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  const memberSince = getYear(user.createdAt)
  const ratingsWithFormattedDate = ratings.map((rating) => {
    const createdAt = formatDistanceToNow(new Date(rating.created_at), {
      addSuffix: true,
      locale: ptBR,
    })
    return {
      ...rating,
      created_at: createdAt,
      book: {
        title: rating.book.title,
        author: rating.book.author,
        cover_url: rating.book.cover_url,
      },
    }
  })

  const totalPagesRead = ratings.reduce((acc, rating) => {
    return acc + rating.book.total_pages
  }, 0)

  const authorsReadList = ratings.reduce<string[]>((previous, next) => {
    if (previous.includes(next.book.author)) {
      return previous
    }
    return [...previous, next.book.author]
  }, [])

  const totalAuthorsRead = authorsReadList.length

  const categoriesCount = ratings.reduce<Record<string, number>>(
    (acc, rating) => {
      rating.book.categories.forEach((category) => {
        if (!acc[category.category_id]) {
          acc[category.category_id] = 0
        }
        acc[category.category_id]++
      })
      return acc
    },
    {},
  )

  const mostReadCategoryId = Object.entries(categoriesCount).sort(
    ([, a], [, b]) => b - a,
  )[0]?.[0]

  const mostReadCategory =
    categories.find((category) => category.id === mostReadCategoryId)?.name ||
    'Nenhuma categoria'

  return {
    props: {
      user: {
        id: user.id,
        name: user.name,
        avatarUrl: user.image,
        ratings: ratingsWithFormattedDate,
        memberSince,
        totalPagesRead,
        mostReadCategory,
        totalAuthorsRead,
      },
    },
  }
}
