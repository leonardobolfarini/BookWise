import { styled } from "@/src/styles/stitches";

export const ReviewBoxContainer = styled('div', {
    maxWidth: '608px',
    width: '100%',

    padding: '24px',
    borderRadius: '8px',
    
    backgroundColor: '$gray-700'
})

export const ReviewBoxHeader = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    marginBottom: '32px',

    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    },
    
    div: {
        span: {
            fontSize: '$sm',
            lineHeight: '$base',
            color: '$gray-400',
        },

    }

})

export const ReviewBoxContentContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '108px 1fr',
    gap: '20px',
})  

export const ReviewBoxContentImage = styled('div', {})

export const ReviewBoxContent = styled('article', {
    maxHeight: '152px',
    height: '100%',

    fontSize: '$sm',
    color: '$gray-300',

    overflow: 'hidden', 
    textOverflow: 'ellipsis',

    p: {
        margin: 0,
        padding: 0,
    },
    
    header: {
        h1: {
            fontSize: '$md',
            fontWeight: 'bold',
            lineHeight: '$short',
            color: '$gray-100',
        },

        span: {
            fontSize: '$sm',
            lineHeight: '$base',
            color: '$gray-400',
        }
    }
})