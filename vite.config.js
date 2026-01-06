import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/site.daniel.lesson/", // Mantendo o caminho base conforme o terminal mostra nas fotos
})