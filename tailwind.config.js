/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        nem: {
          50: '#F7FEE7',
          100: '#DBF8B1',
          200: '#C1F27C',
          300: '#A6EC48',
          400: '#8CE614',
          light: '#8ce614' /* nem-400 */,
          500: '#62be0d',
          600: '#3a9707',
          700: '#117000',
          dark: '#117000' /* nem-700 */,
          800: '#145a02',
          900: '#174403',
          950: '#1A2E05',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-aria-attributes')],
};
