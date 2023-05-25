/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.js',
    './pages/**/*.js',
    './pages/**/*.tsx',
    './pages/**/*.html',
    './pages/**/*.md',
    './static/**/*.html',
    './static/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};

