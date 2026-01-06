/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'musica-orange': '#ff8c00', // Cor do botão da Colorindo Sons
      }
    },
  },
  plugins: [],
}