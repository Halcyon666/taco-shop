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
      keyframes: {
        showWelcome: {
          '0%': {
            top: '-20px',
            transform: 'skew(0deg, -5deg) scaleY(0)',
          },

          '80%': {
            top: '30px',
            transform: 'skew(10deg, -5deg) scaleY(1.2)',
          },

          '100%': {
            top: '20px',
            transform: 'skew(-10deg, -5deg) scaleY(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
