import { Star } from '@phosphor-icons/react/dist/ssr'
import { RatingStarsButton, RatingStarsContainer } from './styles'
import { useState } from 'react'

interface RatingStarsProps {
  ratingValue: number
  canChangeRating?: boolean
  onRatingChange?: (rating: number) => void
  size?: 'md' | 'lg'
}

export function RatingStars({
  ratingValue,
  canChangeRating = false,
  onRatingChange,
  size = 'md',
}: RatingStarsProps) {
  const [rating, setRating] = useState(ratingValue)

  function handleRatingStars(index: number) {
    if (canChangeRating) {
      setRating(index + 1)
      onRatingChange?.(index + 1)
    }
  }

  return (
    <RatingStarsContainer>
      {Array.from({ length: 5 }).map((_, index) => (
        <RatingStarsButton
          key={index}
          onClick={() => handleRatingStars(index)}
          disabled={!canChangeRating}
          type="button"
          size={size}
        >
          <Star weight={rating >= index + 1 ? 'fill' : 'regular'} />
        </RatingStarsButton>
      ))}
    </RatingStarsContainer>
  )
}
