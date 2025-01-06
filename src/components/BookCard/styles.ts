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
      alreadyRead: {
        true: {
          position: 'relative',

          'span[data-read]': {
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: '$green-300',
            color: '$green-100',
            padding: '4px 8px',
            borderRadius: '0 8px 0 4px',
            fontSize: '$xs',
            fontWeight: 'bold',
          },
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
