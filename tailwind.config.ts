import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headings: ['Fugaz One', 'cursive'],
      },
      spacing: {
        off: '-10000px',
      },
    },
  },
} satisfies Config
