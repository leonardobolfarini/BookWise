import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { Rating } from '@prisma/client'
import { useRouter } from 'next/router'

import { ReviewBox } from '../../../../components/ReviewBox'
import { LastReviewContainer } from './styles'

interface RatingResponse extends Omit<Rating, 'created_at'> {
  created_at: string
  book: {
    id: string
    title: string
    author: string
    cover_url: string
    summary: string
  }
}

interface LastReviewProps {
  lastReview: RatingResponse | null
}

export function LastReview({ lastReview }: LastReviewProps) {
  const router = useRouter()
  if (!lastReview) return null

  return (
    <LastReviewContainer>
      <div>
        <h2>Sua última leitura</h2>
        <span onClick={() => router.push(`/users/${lastReview.user_id}`)}>
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
