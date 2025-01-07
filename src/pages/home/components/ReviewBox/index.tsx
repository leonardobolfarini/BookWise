import { formatDistanceToNow, isToday } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Image from 'next/image'

import { RatingStars } from '@/src/components/RatingStars'

import {
  ReviewBoxContainer,
  ReviewBoxContent,
  ReviewBoxContentContainer,
  ReviewBoxContentImage,
  ReviewBoxHeader,
  ReviewBoxWhenLastReview,
} from './styles'

interface ReviewBoxProps {
  user?: {
    name: string
    image: string
  }
  book: {
    title: string
    author: string
    cover_url: string
    summary: string
  }
  rating: number
  created_at: string

  lastReview?: boolean
}

export function ReviewBox({
  user,
  book,
  rating,
  created_at,
  lastReview = false,
}: ReviewBoxProps) {
  const createdAtFormatted = isToday(new Date(created_at))
    ? 'Hoje'
    : formatDistanceToNow(new Date(created_at), {
        addSuffix: true,
        locale: ptBR,
      })

  return (
    <ReviewBoxContainer isLastReview={lastReview}>
      {!lastReview ? (
        <ReviewBoxHeader>
          <header>
            <Image src={user?.image || ''} width={40} height={40} alt="" />
            <div>
              <p>{user?.name}</p>
              <span>{createdAtFormatted}</span>
            </div>
          </header>
          <footer>
            <RatingStars ratingValue={rating} />
          </footer>
        </ReviewBoxHeader>
      ) : null}

      <ReviewBoxContentContainer>
        <ReviewBoxContentImage>
          <Image src={book.cover_url} width={108} height={152} alt="" />
        </ReviewBoxContentImage>
        <ReviewBoxContent>
          <header>
            <div className={lastReview ? 'last-review-header' : ''}>
              <div className="book-info">
                <ReviewBoxWhenLastReview>
                  {lastReview && <span>{createdAtFormatted}</span>}
                  {lastReview && <RatingStars ratingValue={rating} />}
                </ReviewBoxWhenLastReview>
                <h1>{book.title}</h1>
                <span>{book.author}</span>
              </div>
            </div>
          </header>
          <p>{book.summary}</p>
        </ReviewBoxContent>
      </ReviewBoxContentContainer>
    </ReviewBoxContainer>
  )
}
