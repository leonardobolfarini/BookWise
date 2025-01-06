import { styled } from "@/src/styles/stitches";

export const ReviewCardContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    backgroundColor: '$gray-700',
    padding: '24px',
    borderRadius: '8px',
})

export const ReviewCardHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',

        img: {
            width: '40px',
            height: '40px',
            borderRadius: '999px',
        },

        div: {
            h3: {
                fontSize: '$md',
                fontWeight: 'bold',
                color: '$gray-100',
                lineHeight: '$short',
            },
            span: {
                fontSize: '$sm',
                color: '$gray-400',
                lineHeight: '$base',
                fontWeight: 'normal'
            }
        }
    },
})

export const ImageContainer = styled('div', {
    width: '42px',
    height: '42px',
    borderRadius: '999px',
    background: '$gradiant-vertical',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ReviewCardContent = styled('div', {
})