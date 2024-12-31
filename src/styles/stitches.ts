import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, getCssText, theme } = createStitches({
  theme: {
    colors: {
      'green-100': '#50b2c0',
      'green-200': '#255d6a',
      'green-300': '#0a313c',
      
      'purple-100': '#8381d9',
      'purple-200': '#2a2879',

      'gray-100': '#f8f9fc',
      'gray-200': '#e6e8f2',
      'gray-300': '#d1d6e4',
      'gray-400': '#8d95af',
      'gray-500': '#303f73',
      'gray-600': '#252d4a',
      'gray-700': '#181c2a',
      'gray-800': '#0e1116',

      'gradiant-horizontal': 'linear-gradient(to right, #7fd1cc, #9694f5)',
      'gradiant-vertical': 'linear-gradient(to bottom, #7fd1cc, #9694f5)',
    },
    fontSizes: {
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
    },
    lineHeights: {
      'regular': '160%',
      'short': '140%',
    }
  },
});

