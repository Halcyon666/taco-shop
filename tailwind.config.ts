import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        content: ['Nunito', 'sans-serif'],
        headings: ['Fugaz One', 'cursive'],
      },
      /*     borderWidth: {
        DEFAULT: '1px',
      }, */
      boxShadow: {
        custom: '0 0 10px var(--BORDER-COLOR)',
      },
    },
  },
} satisfies Config
