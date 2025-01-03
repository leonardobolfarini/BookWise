import { Star } from "@phosphor-icons/react/dist/ssr";
import { RatingStarsButton, RatingStarsContainer } from "./styles";
import { useState } from "react";

interface RatingStarsProps {
    ratingValue: number
    canChangeRating?: boolean
}

export function RatingStars({ ratingValue, canChangeRating = false }: RatingStarsProps){
    const [rating, setRating] = useState(ratingValue)

    function handleRatingStars(index: number){
        if(canChangeRating){
            setRating(index + 1)
        }
    }

    return (
        <RatingStarsContainer>
            {
                Array.from({ length: 5 }).map((_, index) => (
                    <RatingStarsButton 
                        key={index} 
                        onClick={() => handleRatingStars(index)}
                        disabled={!canChangeRating}
                    >
                        <Star weight={rating >= index + 1 ? 'fill' : 'regular'} />
                    </RatingStarsButton>
                ))
            }
        </RatingStarsContainer>
    )
}