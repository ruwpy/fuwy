/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#545BFF',
        indigoHover: '#494fe3'
      }
    },
  },
  plugins: [],
}