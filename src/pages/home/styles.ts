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
    display: 'grid',
    gridTemplateColumns: '1fr 324px',
    gap: '64px',
    margin: '0 6rem',
})

export const RecentReviews = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    
    h2: {
        fontSize: '$sm',
        fontWeight: 'normal',
    }
})

export const PopularBooksHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',

    h2: {
        fontSize: '$sm',
        fontWeight: 'normal'
    },

    a: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',

        fontSize: '$sm',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '$purple-100',
    }
})

export const PopularBooks = styled('div', {
})