import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        content: ['Nunito', 'sans-serif'],
        headings: ['Fugaz One', 'cursive'],
      },
    },
  },
} satisfies Config
