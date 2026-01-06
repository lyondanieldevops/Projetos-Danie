import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajustado para o nome do seu repositório atual
  base: "/Site-Musical-Oficial/",
})