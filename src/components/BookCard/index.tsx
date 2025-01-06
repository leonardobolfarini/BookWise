import Image from 'next/image'

import { RatingStars } from '../RatingStars'
import { BooksCardContainer, BooksCardImage, BooksCardInfos } from './styles'

interface BookCardProps {
  title: string
  author: string
  averageRating: number
  cover_url: string
  size?: 'sm' | 'md'
  alreadyRead?: boolean
}

export function BookCard({
  title,
  author,
  averageRating,
  cover_url,
  size = 'md',
  alreadyRead = false,
}: BookCardProps) {
  return (
    <BooksCardContainer size={size} alreadyRead={alreadyRead}>
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
      {alreadyRead && <span data-read>LIDO</span>}
    </BooksCardContainer>
  )
}
