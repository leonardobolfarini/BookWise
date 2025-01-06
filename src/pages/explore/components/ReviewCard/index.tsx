import { RatingStars } from '@/src/components/RatingStars'
import {
  ImageContainer,
  ReviewCardContainer,
  ReviewCardContent,
  ReviewCardHeader,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

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
          <ImageContainer>
            <Image
              src={user.image || '/default-avatar.png'}
              alt={user.name || 'Usuário'}
              width={40}
              height={40}
            />
          </ImageContainer>
          <div>
            <h3>{user.name}</h3>
            <span>{createdAt}</span>
          </div>
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
