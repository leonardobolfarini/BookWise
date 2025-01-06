import { globalCss } from './stitches'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'body, button, input, textarea, select': {
    font: '400 1rem Nunito Sans, sans-serif',
    lineHeight: '$regular',
    color: '$gray-100',
    boxShadow: '0 0 0 $colors$purple-100',
  },

  body: {
    backgroundColor: '$gray-800',
  },
})
