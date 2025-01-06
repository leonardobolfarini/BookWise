import { styled } from "@/src/styles/stitches";

export const RatingFormContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    width: '100%',

    padding: '24px',
    background: '$gray-700',
    borderRadius: '8px',
})

export const RatingFormHeader = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const RatingFormProfile = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',


    h3: {
        fontSize: '$md',
        fontWeight: 'bold',
        lineHeight: '$short',
        color: '$gray-100',
    }
})

export const RatingFormProfileImageContainer = styled('div', {
    width: '44px',
    height: '44px',
    borderRadius: '999px',
    background: '$gradiant-vertical',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        borderRadius: '999px',
        objectFit: 'cover',
    }
})

export const RatingFormTextarea = styled('textarea', {
    background: '$gray-800',
    border: '1px solid $gray-500',
    borderRadius: '4px',

    minHeight: '10.25rem',
    padding: '0.875rem 1.25rem',

    fontSize: '$sm',
    fontWeight: 'normal',
    color: '$gray-200',
    lineHeight: '$base',

    resize: 'none',

    '&::placeholder': {
        color: '$gray-400',
    },

    '&:focus': {
        outline: 'none',
    }
})

export const RatingFormFooter = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',

    marginLeft: 'auto',
})

export const RatingFormFooterButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$gray-600',
    borderRadius: '4px',
    border: 0,
    
    lineHeight: 0,
    padding: '0.5rem',

    width: '40px',
    height: '40px',

    cursor: 'pointer',
    transition: 'background 0.2s',

    '&:hover': {
        background: '$gray-500',
    },

    variants: {
        variant: {
            cancel: {
                color: '$purple-100',
            },
            submit: {
                color: '$green-100',
            }   
        }
    },
    defaultVariants: {
        variant: 'cancel',
    }
})

export const RatingFormError = styled('p', {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '#F75A68',
})