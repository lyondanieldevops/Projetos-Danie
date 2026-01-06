/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso diz ao Tailwind para ler TUDO dentro de src
  ],
  theme: {
    extend: {
      colors: {
        'musica-orange': '#ff8c00', // Cor inspirada na Colorindo Sons
      }
    },
  },
  plugins: [],
}