import { styled } from "@/src/styles/stitches";

export const ExploreContainer = styled('div', {
    width: '100%',
    padding: '72px 96px 0 0',
})

export const ExploreHeader = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
    
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.75rem',

        h1: {
            color: '$gray-100',
            fontSize: '$2xl',
            fontWeight: 'bold',
            lineHeight: '$short'
        },

        svg: {
            color: '$green-100'
        }
    },

    div: {
        maxWidth: '433px',
        width: '100%'
    }
})

export const ExploreFilters = styled('div', {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '48px'
})

export const ExploreContent = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.25rem',
})