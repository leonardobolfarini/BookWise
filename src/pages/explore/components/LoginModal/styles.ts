import { Modal } from '@mui/material'

import { styled } from '@/src/styles/stitches'

export const ModalContainer = styled(Modal, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .MuiModal-backdrop': {
    opacity: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export const LoginModalContainer = styled('div', {
  background: '$gray-700',
  borderRadius: '12px',
})

export const CloseButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem 1rem 0 0',

  svg: {
    color: '$gray-400',
    cursor: 'pointer',
  },
})

export const LoginModalContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  padding: '1rem 4.75rem 3.5rem',

  h1: {
    color: '$gray-200',
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '$short',

    marginBottom: '1.5rem',
  },
})
