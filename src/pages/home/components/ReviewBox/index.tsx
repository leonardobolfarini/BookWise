import Image from 'next/image'
import Avatar from '@/src/assets/Avatar.svg'
import Book from '@/src/assets/Book.svg'
import {
  ReviewBoxContainer,
  ReviewBoxHeader,
  ReviewBoxContent,
  ReviewBoxContentImage,
  ReviewBoxContentContainer,
} from './styles'
import { RatingStars } from '@/src/components/RatingStars'

export function ReviewBox() {
  return (
    <ReviewBoxContainer>
      <ReviewBoxHeader>
        <header>
          <Image src={Avatar} width={40} height={40} alt="" />
          <div>
            <p>Leonardo Bolfarini</p>
            <span>Hoje</span>
          </div>
        </header>
        <footer>
          <RatingStars ratingValue={4} />
        </footer>
      </ReviewBoxHeader>
      <ReviewBoxContentContainer>
        <ReviewBoxContentImage>
          <Image src={Book} width={108} height={152} alt="" />
        </ReviewBoxContentImage>
        <ReviewBoxContent>
          <header>
            <h1>O Hobbit</h1>
            <span>J.R.R. Tolkien</span>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            nostrum autem molestiae quidem debitis deleniti earum atque iusto ex
            quos incidunt, inventore maiores placeat facilis voluptatum? Labore
            possimus eius distinctio? Semper et sapien proin vitae nisi. Feugiat
            neque integer donec et aenean posuere amet ultrices. Cras fermentum
            id pulvinar varius leo a in. Amet libero pharetra nunc elementum
            fringilla velit ipsum. Sed vulputate massa velit nibh
          </p>
        </ReviewBoxContent>
      </ReviewBoxContentContainer>
    </ReviewBoxContainer>
  )
}
