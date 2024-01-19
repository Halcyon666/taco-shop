/* eslint-disable no-undef */
// postcss.config.js
module.exports = {
  plugins: {
    // config location, need this, this is default configuration location
    // tailwindcss: { config: './tailwind.config.ts' },
    autoprefixer: {},
    cssnano: {},
    // nest css
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    // optimizing for production, compres css
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
