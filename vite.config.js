import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brew-haven-react/',
  plugins: [react()],
})
