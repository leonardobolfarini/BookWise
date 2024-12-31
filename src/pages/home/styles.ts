import { styled } from "@/src/styles/stitches";

export const HomeHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    margin: '4.5rem 0 2.5rem 6rem',

    h1: {
        fontSize: '$2xl',
        fontWeight: 'bold',
        lineHeight: '$short',
    },

    svg: {
        color: '$green-100'
    }
})

export const HomeContainer = styled('div', {

})