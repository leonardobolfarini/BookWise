import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from '@/src/components/Avatar'
import { RatingStars } from '@/src/components/RatingStars'

import {
  ReviewCardContainer,
  ReviewCardContent,
  ReviewCardHeader,
  ReviewCardHeaderContent,
} from './styles'

interface ReviewCardProps {
  rate: number
  description: string
  created_at: string
  user: {
    id: string
    name: string
    image: string
  }
}

export function ReviewCard({
  rate,
  description,
  created_at,
  user,
}: ReviewCardProps) {
  const createdAt = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <header>
          <Avatar
            src={user.image}
            alt={user.name}
            size="md"
            userId={user.id}
            hasBorder
          />
          <ReviewCardHeaderContent>
            <h3>{user.name}</h3>
            <span>{createdAt}</span>
          </ReviewCardHeaderContent>
        </header>
        <footer>
          <RatingStars ratingValue={rate} />
        </footer>
      </ReviewCardHeader>
      <ReviewCardContent>
        <p>{description}</p>
      </ReviewCardContent>
    </ReviewCardContainer>
  )
}
