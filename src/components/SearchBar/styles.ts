import { styled } from "@/src/styles/stitches";

export const SearchBarContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    background: '$gray800',
    border: '1px solid $gray-500',
    borderRadius: '4px',
    padding: '14px 20px',
    gap: '8px',

    svg: {
        color: '$gray-500'
    },

    '&:focus-within': {
        borderColor: '$green-200'
    }
})

export const SearchBarInput = styled('input', {
    background: 'transparent',
    border: 'none',
    width: '100%',
    color: '$gray-200',
    fontSize: '$sm',

    '&::placeholder': {
        color: '$gray-400',
        opacity: 1
    },

    '&:focus': {
        outline: 'none'
    }
})  