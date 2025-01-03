import { styled } from "@/src/styles/stitches";

export const RatingStarsContainer = styled('div', {})

export const RatingStarsButton = styled('button', {
    background: 'transparent',
    border: 'none',
    lineHeight: 0,

    cursor: 'pointer',

    svg: {
        color: '$purple-100',
    },

    '&:disabled': {
        cursor: 'default',
    }
})