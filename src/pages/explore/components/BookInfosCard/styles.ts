import { styled } from '@/src/styles/stitches'

export const BookInfosCardContainer = styled('div', {
  height: '100%',
  width: '100%',
  maxHeight: '414px',

  padding: '24px 32px 16px',
  background: '$gray-700',
  borderRadius: '10px',

  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
})

export const BookMainInfos = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
})

export const BookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    h1: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$gray-100',
      lineHeight: '$short',
    },
    span: {
      fontSize: '$md',
      lineHeight: '$base',
      color: '$gray-300',
    },
  },
  footer: {
    span: {
      fontSize: '$sm',
      lineHeight: '$base',
      color: '$gray-400',
    },
  },
})

export const CategoryAndPagesContainer = styled('div', {
  borderTop: '1px solid $gray-600',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '56px',

  padding: '24px 0',
})

export const CategoryAndPages = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',

  svg: {
    color: '$green-100',
  },

  div: {
    h2: {
      fontWeight: 'normal',
      fontSize: '$sm',
      color: '$gray-300',
    },
    span: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray-200',
      lineHeight: '$short',
    },
  },
})
