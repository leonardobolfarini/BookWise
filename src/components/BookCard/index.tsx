import Image from 'next/image'
import { BooksCardContainer, BooksCardImage, BooksCardInfos } from './styles'
import { RatingStars } from '../RatingStars'

interface BookCardProps {
  title: string
  author: string
  averageRating: number
  cover_url: string
  size?: 'sm' | 'md'
}

export function BookCard({
  title,
  author,
  averageRating,
  cover_url,
  size = 'md',
}: BookCardProps) {
  return (
    <BooksCardContainer size={size}>
      <BooksCardImage>
        <Image src={cover_url} alt="" width={64} height={94} />
      </BooksCardImage>
      <BooksCardInfos>
        <header>
          <h1>{title}</h1>
          <span>{author}</span>
        </header>
        <footer>
          <RatingStars ratingValue={averageRating} />
        </footer>
      </BooksCardInfos>
    </BooksCardContainer>
  )
}
