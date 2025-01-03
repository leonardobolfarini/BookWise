import Image from "next/image";
import Book from '@/src/assets/Book.svg'
import { BooksCardContainer, BooksCardImage, BooksCardInfos } from "./styles";
import { RatingStars } from "../RatingStars";

interface BookCardProps {
    size?: 'sm' | 'md'
}

export function BookCard({ size = 'md' }: BookCardProps){
    return (
        <BooksCardContainer size={size}>
            <BooksCardImage>
                <Image src={Book} alt="" width={64} height={94} />
            </BooksCardImage>
            <BooksCardInfos>
                <header>
                    <h1>A revolução dos bichos</h1>
                    <span>George Orwell</span>
                </header>
                <footer>
                    <RatingStars ratingValue={4} />
                </footer>
            </BooksCardInfos>
        </BooksCardContainer>
    )
}