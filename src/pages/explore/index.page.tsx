import { Binoculars, X } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'

import { BookCard } from '@/src/components/BookCard'
import { SearchBar } from '@/src/components/SearchBar'
import { api } from '@/src/lib/axios'

import { BookInfosCard } from './components/BookInfosCard'
import { LoginModal } from './components/LoginModal'
import { RatingForm } from './components/RatingForm'
import { ReviewCard } from './components/ReviewCard'
import { TagBox } from './components/TagBox/index'
import {
  DrawerComponent,
  DrawerContent,
  DrawerContentCloseButton,
  DrawerContentHeader,
  DrawerContentReviews,
  ExploreContainer,
  ExploreContent,
  ExploreFilters,
  ExploreHeader,
} from './styles'

interface CategoryProps {
  id: string
  name: string
}

interface BookProps {
  id: string
  title: string
  author: string
  averageRating: number
  cover_url: string
  summary: string | null
  total_pages: number
  categories: {
    book_id: string
    category_id: string
  }[]
  Rating: {
    rate: number
    description: string
    created_at: string
    user: {
      id: string
      name: string
      image: string
    }
  }[]
}

export default function Default() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { data: session } = useSession()
  const isAuthenticated = !!session

  const [openBookId, setOpenBookId] = useState<string | null>(null)
  const [openCommentForm, setOpenCommentForm] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const categoriesForFilter = searchParams.get('categoriesForFilter') || ''
  const bookOrAuthorName = searchParams.get('bookOrAuthorName') || ''

  const { data: categories } = useQuery<CategoryProps[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get('/books/get-categories')
      return response.data
    },
  })

  const { data: books } = useQuery<BookProps[]>({
    queryKey: ['books', categoriesForFilter, bookOrAuthorName],
    queryFn: async () => {
      const response = await api.get('/books', {
        params: {
          categoriesForFilter,
          bookOrAuthorName,
        },
      })
      return response.data
    },
  })

  function alreadyReviewed(bookId: string) {
    const bookViewing = books?.find((book) => book.id === bookId)
    return bookViewing?.Rating.some(
      (rating) => rating.user.id === session?.user.id,
    )
  }

  function handleAddFilter(filter: string) {
    if (categoriesForFilter === '') {
      router.push(`/explore?categoriesForFilter=${filter}`)
      return
    }

    if (categoriesForFilter.includes(filter)) {
      const newCategoriesForFilter = categoriesForFilter
        .replace(filter, '')
        .trim()
      router.push(`/explore?categoriesForFilter=${newCategoriesForFilter}`)
      return
    }

    const newCategoriesForFilter = `${categoriesForFilter} ${filter}`.trim()
    router.push(`/explore?categoriesForFilter=${newCategoriesForFilter}`)
  }

  function handleRemoveFilter() {
    router.push(`/explore`)
  }

  function handleSearch(value: string) {
    router.push(`/explore?bookOrAuthorName=${value}`)
  }

  function handleOpenCloseDrawer(bookId: string | null) {
    setOpenBookId(bookId)
  }

  function handleOpenCommentForm() {
    if (!isAuthenticated) {
      setOpenLoginModal(true)
      return
    }

    setOpenCommentForm(true)
  }

  async function handleLogin(provider: string) {
    await signIn(provider)

    setOpenLoginModal(false)
  }

  return (
    <>
      <ExploreContainer>
        <ExploreHeader>
          <header>
            <Binoculars width={32} height={32} />
            <h1>Explorar</h1>
          </header>
          <div>
            <SearchBar
              placeholder="Buscar livro ou autor"
              onSearch={handleSearch}
            />
          </div>
        </ExploreHeader>
        <ExploreFilters>
          <TagBox
            checked={categoriesForFilter === ''}
            onClick={() => handleRemoveFilter()}
          >
            Tudo
          </TagBox>
          {categories?.map((category) => {
            return (
              <TagBox
                key={category.id}
                checked={categoriesForFilter?.includes(category.id)}
                onClick={() => handleAddFilter(category.id)}
              >
                {category.name}
              </TagBox>
            )
          })}
        </ExploreFilters>
        <ExploreContent>
          {books?.map((book) => {
            return (
              <div key={book.id} onClick={() => handleOpenCloseDrawer(book.id)}>
                <BookCard
                  title={book.title}
                  author={book.author}
                  averageRating={book.averageRating}
                  cover_url={book.cover_url}
                  size="md"
                  alreadyRead={alreadyReviewed(book.id)}
                />
                <DrawerComponent
                  anchor="right"
                  open={openBookId === book.id}
                  onClose={() => handleOpenCloseDrawer(null)}
                  slotProps={{
                    backdrop: {
                      sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      },
                    },
                  }}
                >
                  <DrawerContent>
                    <DrawerContentHeader>
                      <DrawerContentCloseButton>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleOpenCloseDrawer(null)
                          }}
                        >
                          <X width={24} height={24} />
                        </button>
                      </DrawerContentCloseButton>
                      <BookInfosCard
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        averageRating={book.averageRating}
                        categories={book.categories}
                        pages={book.total_pages}
                        cover_url={book.cover_url}
                        Rating={book.Rating}
                      />
                    </DrawerContentHeader>
                    <DrawerContentReviews>
                      <header>
                        <h2>Avaliações</h2>
                        <button
                          onClick={handleOpenCommentForm}
                          disabled={openCommentForm || alreadyReviewed(book.id)}
                        >
                          Avaliar
                        </button>
                      </header>
                      {openCommentForm && (
                        <RatingForm
                          bookId={book.id}
                          userId={session?.user.id || ''}
                          onClose={() => setOpenCommentForm(false)}
                        />
                      )}
                      {book.Rating.sort(
                        (a, b) =>
                          new Date(b.created_at).getTime() -
                          new Date(a.created_at).getTime(),
                      ).map((review) => {
                        return (
                          <ReviewCard
                            key={review.user.id}
                            user={review.user}
                            description={review.description}
                            created_at={review.created_at}
                            rate={review.rate}
                          />
                        )
                      })}
                    </DrawerContentReviews>
                  </DrawerContent>
                </DrawerComponent>
              </div>
            )
          })}
        </ExploreContent>
      </ExploreContainer>
      <LoginModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        onLogin={handleLogin}
      />
    </>
  )
}
