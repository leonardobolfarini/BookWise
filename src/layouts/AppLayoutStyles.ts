import { styled } from "@/src/styles/stitches";

export const AppLayoutStyles = styled('div', {
    display: 'grid',
    gridTemplateColumns: '323px 1fr',
    height: '100%',

    '@media (max-width: 850px)': {
        gridTemplateColumns: '1fr',
        padding: '0 2rem',
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box'
    }
})