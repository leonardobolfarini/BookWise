import { styled } from "@/src/styles/stitches";

export const BooksCardContainer = styled('div', {
    backgroundColor: '$gray-700',
    borderRadius: '8px',
    padding: '18px 20px',

    display: 'flex',
    gap: '20px',

    '& + &': {
        marginTop: '12px',
    }
}, {
    variants: {
        size: {
            sm: {
                maxWidth: '130px',
            },
            md: {
                
            }
        }
    }
})

export const BooksCardImage = styled('div', {})

export const BooksCardInfos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h1: {
        fontSize: '$md',
        fontWeight: 'bold',
        lineHeight: '$short',
    },

    span: {
        fontSize: '$sm',
        fontWeight: 'normal',
        color: '$gray-400',
    },
})