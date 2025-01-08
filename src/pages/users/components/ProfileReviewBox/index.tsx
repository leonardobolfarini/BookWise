import Image from 'next/image'

import { RatingStars } from '@/src/components/RatingStars'

import {
  ProfileReviewBoxContainer,
  ProfileReviewBoxContent,
  ProfileReviewBoxContentContainer,
  ProfileReviewBoxContentImage,
  ProfileReviewBoxGridContentContainer,
} from './styles'

interface ProfileReviewBoxProps {
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
  isInProfile?: boolean
}

export function ProfileReviewBox({ book, rating }: ProfileReviewBoxProps) {
  return (
    <ProfileReviewBoxContainer>
      <ProfileReviewBoxContentContainer>
        <ProfileReviewBoxGridContentContainer>
          <ProfileReviewBoxContentImage>
            <Image src={book?.cover_url} width={108} height={152} alt="" />
          </ProfileReviewBoxContentImage>
          <ProfileReviewBoxContent>
            <header>
              <div>
                <h1>{book?.title}</h1>
                <span>{book?.author}</span>
              </div>
            </header>
            <footer>
              <RatingStars ratingValue={rating} />
            </footer>
          </ProfileReviewBoxContent>
        </ProfileReviewBoxGridContentContainer>
        <p>{book?.review}</p>
      </ProfileReviewBoxContentContainer>
    </ProfileReviewBoxContainer>
  )
}
