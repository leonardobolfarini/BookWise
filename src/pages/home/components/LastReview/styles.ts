import { styled } from '@/src/styles/stitches'

export const LastReviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  marginBottom: '40px',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',

    '> h2': {
      fontSize: '$sm',
      fontWeight: 'normal',
      lineHeight: '$base',
    },

    '> span': {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',

      color: '$purple-100',
      fontSize: '$sm',
      fontWeight: 'bold',
      lineHeight: '$base',

      cursor: 'pointer',
    },
  },
})
