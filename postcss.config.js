/* eslint-disable no-undef */
// postcss.config.js
module.exports = {
  plugins: {
    // config location
    tailwindcss: { config: './tailwind.config.ts' },
    autoprefixer: {},

    // nest css
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    // optimizing for production
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
