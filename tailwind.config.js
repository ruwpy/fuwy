/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'pr1': { 'raw': '(-webkit-min-device-pixel-ratio: 1)' },
        'pr1.25': { 'raw': '(-webkit-min-device-pixel-ratio: 1.25)' }
      },
      colors: {
        indigo: '#545BFF',
        indigoHover: '#494fe3'
      }
    },
  },
  plugins: [],
}