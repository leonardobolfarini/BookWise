import { styled } from '@/src/styles/stitches'

export const AvatarContainer = styled('div', {
  width: '74px',
  height: '74px',

  img: {
    borderRadius: '999px',
    objectFit: 'cover',

    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  cursor: 'pointer',

  variants: {
    hasBorder: {
      true: {
        borderRadius: '999px',
        background: '$gradiant-vertical',
      },
      false: {},
    },
    size: {
      sm: {
        width: '34px',
        height: '34px',
        img: {
          width: '30px',
          height: '30px',
        },
      },
      md: {
        width: '44px',
        height: '44px',
        img: {
          width: '36px',
          height: '36px',
        },
      },
      lg: {
        width: '74px',
        height: '74px',
        img: {
          width: '70px',
          height: '70px',
        },
      },
    },
  },
})
