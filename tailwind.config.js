/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#102657',
        primaryLight: '#1C85C8',
        grayText: '#A1A1A1',
        grayOutline: '#E9E9E9',
        greenColor: '#89BC89'
      },
    },
  },
  plugins: [],
}

