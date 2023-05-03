/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "primary": "#563999",
        "secondary": "#8058dd",
        "tertiary": "#FFFDE3",
        "quaternary": "#CFE8A9",
      }
    },
  },
  plugins: [],
}