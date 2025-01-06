import { styled } from '@/src/styles/stitches'

export const BooksCardContainer = styled(
  'div',
  {
    backgroundColor: '$gray-700',
    borderRadius: '8px',
    padding: '18px 20px',
    width: '100%',

    display: 'flex',
    gap: '20px',

    cursor: 'pointer',

    '& + &': {
      marginTop: '12px',
    },
  },
  {
    variants: {
      size: {
        sm: {
          maxWidth: '10rem',
        },
        md: {
          maxWidth: '25rem',
        },
      },
    },
  },
)

export const BooksCardImage = styled('div', {
  img: {
    borderRadius: '4px',
  },
})

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
