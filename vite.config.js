import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Debe coincidir EXACTAMENTE con el nombre del repositorio en GitHub
  base: '/t3_act4_react/',
})
