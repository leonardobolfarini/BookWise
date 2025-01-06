import { RatingStars } from '@/src/components/RatingStars'
import {
  BookMainInfos,
  BookInfos,
  CategoryAndPages,
  BookInfosCardContainer,
  CategoryAndPagesContainer,
} from './styles'
import { BookmarkSimple, BookOpen } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { api } from '@/src/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface BookProps {
  id: string
  title: string
  author: string
  averageRating: number
  pages: number
  cover_url: string
  categories: {
    book_id: string
    category_id: string
  }[]
  Rating: {
    rate: number
  }[]
}

interface Categories {
  name: string
}

export function BookInfosCard({
  id,
  title,
  author,
  averageRating,
  categories,
  pages,
  cover_url,
  Rating,
}: BookProps) {
  const categoriesId = categories.map((category) => category.category_id)

  const { data: categoriesName } = useQuery<Categories[]>({
    queryKey: ['categories', categoriesId],
    queryFn: async () => {
      const response = await api.get(`/books/get-book-categories`, {
        params: {
          categories_id: categoriesId.join(' '),
        },
      })

      return response.data
    },
  })

  return (
    <BookInfosCardContainer id={id}>
      <BookMainInfos>
        <Image
          src={cover_url}
          width={172}
          height={242}
          alt={title}
          className="object-cover"
        />
        <BookInfos>
          <header>
            <h1>{title}</h1>
            <span>{author}</span>
          </header>
          <footer>
            <RatingStars ratingValue={averageRating} />
            <span>{Rating.length} avaliações</span>
          </footer>
        </BookInfos>
      </BookMainInfos>
      <CategoryAndPagesContainer>
        <CategoryAndPages>
          <BookmarkSimple width={24} height={24} />
          <div>
            <h2>Categoria</h2>
            <span>
              {categoriesName?.map((category) => category.name).join(', ')}
            </span>
          </div>
        </CategoryAndPages>
        <CategoryAndPages>
          <BookOpen width={24} height={24} />
          <div>
            <h2>Páginas</h2>
            <span>{pages}</span>
          </div>
        </CategoryAndPages>
      </CategoryAndPagesContainer>
    </BookInfosCardContainer>
  )
}
