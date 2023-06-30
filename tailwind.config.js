/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "bubbles": "#0097ff",
        "main": "#00214B",
      },
      fontFamily: {
        bold: ['axiforma-bold'],
        black: ['axiforma-black'],
        medium: ['axiforma-medium'],
        semibold: ['axiforma-semibold'],
        regular: ['axiforma-regular']
      }
    },
  },
  plugins: [],
}
