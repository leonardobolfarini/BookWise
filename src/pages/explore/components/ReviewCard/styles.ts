import { styled } from '@/src/styles/stitches'

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
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',

    img: {
      width: '40px',
      height: '40px',
      borderRadius: '999px',
    },
  },
  footer: {
    whiteSpace: 'nowrap',
  },
})

export const ReviewCardHeaderContent = styled('div', {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
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
    fontWeight: 'normal',
  },
})

export const ReviewCardContent = styled('div', {})
