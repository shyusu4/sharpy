/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //...colors,
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#080A47',
        secondary: '#3A30BA',
        pink: {
          100: '#F7CEDC',
          200: '#F480D4',
        },
        green: {
          100: '#E6FFD7',
          200: '#00B67A',
        },
        paste: '#CCEFF6',
        yellow: '#FAEA73',
        neutral: {
          100: '#FFF',
          200: '#FFF9F3',
          300: '#6D7D93',
          400: '#9B9B9B',
          500: '#3E3F59',
          600: '#080A47',
          700: '#000',
        },
        radial: {
          pink: '#F480D4',
          blue: '#45C9C1',
        },
      },
      boxShadow: {
        'solid': '6px 6px 0 0 rgba(8, 10, 71)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.primary') },
      });
    }),
  ],
};
