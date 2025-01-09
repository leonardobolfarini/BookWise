import { styled } from '@/src/styles/stitches'

export const UserProfileContainer = styled('div', {
  margin: '4.5rem 0 2.5rem 6rem',
})

export const UserProfileForVisitor = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.75rem',

  maxWidth: 'fit-content',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',

  color: '$gray-200',
  fontWeight: 'bold',
  fontSize: '$md',
  lineHeight: '$base',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray-700',
  },
})

export const UserProfileHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  h1: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    lineHeight: '$short',
  },

  svg: {
    color: '$green-100',
  },
})

export const UserProfileContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 380px',
  gap: '64px',

  marginTop: '2.5rem',
})

export const UserProfileReviews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const UserProfileSearchBar = styled('div', {
  marginBottom: '0.5rem',
})

export const UserProfileReviewWithDate = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray-300',
  },
})

export const UserProfileInfos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',

  maxHeight: '600px',

  padding: '0 3.5rem',
  borderLeft: '1px solid $gray-700',
})

export const UserProfileInfosHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: '$short',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray-400',
  },

  '&::after': {
    content: '',
    display: 'block',
    height: '4px',
    width: '24px',

    borderRadius: '999px',
    background: '$gradiant-horizontal',

    marginTop: '1.5rem',
  },
})

export const UserProfileInfosDetails = styled('div', {
  marginTop: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const UserProfileInfosDetailsItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  div: {
    p: {
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: '$short',
      color: '$gray-200',
    },

    span: {
      fontSize: '$sm',
      lineHeight: '$base',
      color: '$gray-300',
    },
  },

  svg: {
    color: '$green-100',
  },
})
