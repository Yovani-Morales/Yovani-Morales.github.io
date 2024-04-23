/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'color-black': '#0d0e10',
        'color-purple': '#6127d1',
        'color-very-gray': '#1d1c20',
        'color-gray': '#71767b',
      }
    },
  },
  plugins: [],
}

