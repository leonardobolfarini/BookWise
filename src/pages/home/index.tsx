import { CaretRight, ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { BookCard } from '@/src/components/BookCard'
import { api } from '@/src/lib/axios'

import { ReviewBox } from '../../components/ReviewBox'
import { LastReview } from './components/LastReview'
import {
  HomeContainer,
  HomeHeader,
  PopularBooks,
  PopularBooksHeader,
  RecentReviews,
  ReviewsContainer,
} from './styles'

export interface RatingPropsResponse {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    title: string
    author: string
    cover_url: string
    summary: string
  }
  user: {
    name: string
    image: string
  }
}

interface BookPropsResponse {
  id: string
  title: string
  author: string
  cover_url: string
  summary: string
  averageRating: number
}

interface HomeProps {
  lastReview: {
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
    user_id: string
    book: {
      id: string
      title: string
      author: string
      cover_url: string
      summary: string
    }
    user: {
      name: string
      image: string
    }
  } | null
}

export default function Home({ lastReview }: HomeProps) {
  const { data: session } = useSession()
  const isAuthenticated = !!session
  const router = useRouter()

  const { data: mostRatedBooks } = useQuery<BookPropsResponse[]>({
    queryKey: ['mostRatedBooks'],
    queryFn: async () => {
      const response = await api.get('/books/most-rated-books')
      return response.data
    },
  })

  const { data: recentRatings } = useQuery<RatingPropsResponse[]>({
    queryKey: ['recentRatings'],
    queryFn: async () => {
      const response = await api.get('/ratings/recent-ratings')
      return response.data
    },
  })

  function handleOpenDrawer(bookId: string) {
    router.push(`/explore?popularBook=${bookId}`)
  }

  return (
    <>
      <HomeHeader>
        <ChartLineUp height={32} width={32} />
        <h1>Início</h1>
      </HomeHeader>
      <HomeContainer>
        <ReviewsContainer>
          {isAuthenticated && <LastReview lastReview={lastReview} />}
          <RecentReviews>
            <h2>Avaliações mais recentes</h2>
            {recentRatings?.map((rating) => {
              return (
                <ReviewBox
                  key={rating.id}
                  book={{
                    author: rating.book.author,
                    title: rating.book.title,
                    cover_url: rating.book.cover_url,
                    review: rating.description,
                  }}
                  user={rating.user}
                  rating={rating.rate}
                  created_at={rating.created_at}
                />
              )
            })}
          </RecentReviews>
        </ReviewsContainer>
        <PopularBooks>
          <PopularBooksHeader>
            <h2>Livros populares</h2>
            <a href="/explore">
              Ver todos
              <CaretRight />
            </a>
          </PopularBooksHeader>
          {mostRatedBooks?.map((book) => {
            return (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                averageRating={book.averageRating}
                cover_url={book.cover_url}
                onClick={() => handleOpenDrawer(book.id)}
              />
            )
          })}
        </PopularBooks>
      </HomeContainer>
    </>
  )
}
