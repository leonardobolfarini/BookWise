import { styled } from '@/src/styles/stitches'

export const ReviewBoxContainer = styled('div', {
  width: '100%',

  padding: '24px',
  borderRadius: '8px',

  backgroundColor: '$gray-700',

  variants: {
    isLastReview: {
      true: {
        backgroundColor: '$gray-600',
      },
    },
  },
})

export const ReviewBoxHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  marginBottom: '32px',

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  div: {
    span: {
      fontSize: '$sm',
      lineHeight: '$base',
      color: '$gray-400',
    },
  },

  img: {
    objectFit: 'cover',
    borderRadius: '999px',
  },
})

export const ReviewBoxContentContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '108px 1fr',
  gap: '20px',
})

export const ReviewBoxContentImage = styled('div', {
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
})

export const ReviewBoxContent = styled('article', {
  maxHeight: '152px',
  height: '100%',

  fontSize: '$sm',
  color: '$gray-300',

  overflow: 'hidden',
  textOverflow: 'ellipsis',

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
    },
  },

  p: {
    marginTop: '1.25rem',
  },
})

export const ReviewBoxWhenLastReview = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',

  marginBottom: '0.75rem',
})
