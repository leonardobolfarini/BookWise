import { styled } from '@/src/styles/stitches'

export const TagBoxContainer = styled('div', {
  border: '1px solid $purple-100',
  borderRadius: '999px',
  fontSize: '$md',
  padding: '8px 16px',

  cursor: 'pointer',

  input: {
    all: 'unset',
  },

  transition: 'all 0.2s',

  '&:hover': {
    background: '$purple-200',
    borderColor: '$purple-100',
    color: '$gray-100',
  },

  variants: {
    checked: {
      true: {
        background: '$purple-200',
        color: '$gray-100',
        borderColor: 'transparent',
      },
      false: {
        background: 'transparent',
        color: '$purple-100',
      },
    },
  },
})
