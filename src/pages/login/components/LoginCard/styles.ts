import { styled } from '@/src/styles/stitches'

export const LoginCardContainer = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  width: '372px',
  height: '72px',
  alignItems: 'center',
  justifyContent: 'flex-start',

  backgroundColor: '$gray-600',
  color: '$purple-100',
  textDecoration: 'none',
  borderRadius: '8px',
  padding: '20px 24px',
  gap: '20px',

  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$gray-500',
    color: '$gradiant-horizontal',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray-500',
    color: '$gray-200',
  },
})

export const LoginCardContent = styled('div', {
  fontWeight: 'bold',
  fontSize: '$lg',
  lineHeight: '$regular',
  color: '$gray-200',
})
