/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      '../public/index.html'
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
