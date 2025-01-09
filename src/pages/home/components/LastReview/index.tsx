import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/router'

import { ReviewBox } from '../../../../components/ReviewBox'
import { LastReviewContainer } from './styles'

interface LastReviewProps {
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
      id: string
      name: string
      image: string
    }
  }
}

export function LastReview({ lastReview }: LastReviewProps) {
  const router = useRouter()
  if (!lastReview) return null

  return (
    <LastReviewContainer>
      <div>
        <h2>Sua última leitura</h2>
        <span onClick={() => router.push(`/users/${lastReview.user.id}`)}>
          Ver todas <CaretRight width={16} height={16} />
        </span>
      </div>
      <ReviewBox
        book={{
          author: lastReview.book.author,
          title: lastReview.book.title,
          cover_url: lastReview.book.cover_url,
          review: lastReview.description,
        }}
        rating={lastReview.rate}
        created_at={lastReview.created_at}
        variant="secondary"
      />
    </LastReviewContainer>
  )
}
