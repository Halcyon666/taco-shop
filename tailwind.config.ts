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
      colors: {
        highlight: {
          light: '#33b233',
          dark: 'whitesmoke',
        },
        border: {
          light: '#333',
          dark: 'whitesmoke',
        },
        body: {
          light: '#fff',
          dark: '#333',
        },
        font: {
          light: '#000',
          dark: 'whitesmoke',
        },
        hero: {
          light: '#fff',
          dark: '#333',
        },
      },
      boxShadow: {
        custom: '0 0 10px var(--BORDER-COLOR)',
      },
    },
  },
} satisfies Config
