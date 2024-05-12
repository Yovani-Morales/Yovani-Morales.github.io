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
    screens: {
      'cs-1420': {max: '1420px'},
      'cs-1330': {max: '1330px'},
      'cs-1255': {max: '1255px'},
      'cs-1185': {max: '1185px'},
      'cs-1110': {max: '1110px'},
      'cs-1050': {max: '1050px'},
      'cs-1000': {max: '1000px'},
      'cs-950': {max: '950px'},
      'cs-850': {max: '850px'},
      'cs-780': {max: '780px'},
      'cs-659': {max: '659px'},
      'cs-460': {max: '460px'},
      'cs-430': {max: '430px'},
      'cs-400': {max: '400px'},
    }
  },
  plugins: [],
}

