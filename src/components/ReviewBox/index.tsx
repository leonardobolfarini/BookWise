import { formatDistanceToNow, isToday } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import { useMemo } from 'react'

import { RatingStars } from '@/src/components/RatingStars'

import {
  ReviewBoxContainer,
  ReviewBoxContent,
  ReviewBoxContentContainer,
  ReviewBoxContentImage,
  ReviewBoxGridContentContainer,
  ReviewBoxHeader,
  ReviewBoxWhenLastReview,
} from './styles'

interface ReviewBoxProps {
  book: {
    title: string
    author: string
    cover_url: string
    review: string
  }
  rating: number

  user?: {
    name: string
    image: string
  }
  created_at?: string
  variant?: 'primary' | 'secondary'
  isInProfile?: boolean
}

export function ReviewBox({
  user,
  book,
  rating,
  created_at,
  variant = 'primary',
  isInProfile = false,
}: ReviewBoxProps) {
  const isSecondaryVariant = variant === 'secondary'

  const createdAtFormatted = useMemo(() => {
    if (!created_at) return undefined

    return isToday(new Date(created_at))
      ? 'Hoje'
      : formatDistanceToNow(new Date(created_at), {
          addSuffix: true,
          locale: ptBR,
        })
  }, [created_at])

  return (
    <ReviewBoxContainer variant={variant}>
      {!isInProfile && !isSecondaryVariant ? (
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

      <ReviewBoxContentContainer isInProfile={isInProfile}>
        <ReviewBoxGridContentContainer isInProfile={isInProfile}>
          <ReviewBoxContentImage>
            <Image src={book?.cover_url} width={108} height={152} alt="" />
          </ReviewBoxContentImage>
          <ReviewBoxContent isInProfile={isInProfile}>
            <header>
              <div>
                <ReviewBoxWhenLastReview>
                  {isSecondaryVariant && !isInProfile && (
                    <span>{createdAtFormatted}</span>
                  )}
                  {isSecondaryVariant && !isInProfile && (
                    <RatingStars ratingValue={rating} />
                  )}
                </ReviewBoxWhenLastReview>
                <h1>{book?.title}</h1>
                <span>{book?.author}</span>
              </div>
            </header>
            <footer>
              {isInProfile && <RatingStars ratingValue={rating} />}
            </footer>
            {!isInProfile && <p>{book?.review}</p>}
          </ReviewBoxContent>
        </ReviewBoxGridContentContainer>
        {isInProfile && <p>{book?.review}</p>}
      </ReviewBoxContentContainer>
    </ReviewBoxContainer>
  )
}
