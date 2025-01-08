import { styled } from '@/src/styles/stitches'

export const ProfileReviewBoxContainer = styled('div', {
  width: '100%',

  padding: '24px',
  borderRadius: '8px',

  backgroundColor: '$gray-700',
})

export const ProfileReviewBoxHeader = styled('div', {
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

export const ProfileReviewBoxContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

export const ProfileReviewBoxGridContentContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '108px 1fr',
  gap: '20px',
})

export const ProfileReviewBoxContentImage = styled('div', {
  img: {
    objectFit: 'cover',
    borderRadius: '4px',
  },
})

export const ProfileReviewBoxContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

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

export const ProfileReviewBoxWhenLastReview = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',

  marginBottom: '0.75rem',
})
