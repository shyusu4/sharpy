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
        lightPink: '#FFF9F3',
        pink: '#F7CEDC',
        deepPink: '#EA7DD2',
        yellow: '#FAEA73',
        paste: '#CCEFF6',
        lightGreen: '#E6FFD7',
        green: '#00B67A',
        gray: '#393B6C',
        offBlack: '#0E0F11'
        
      },
      boxShadow: {
        'solid': '6px 6px 0 0 rgba(8, 10, 71)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
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
