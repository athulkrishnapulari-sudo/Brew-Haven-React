import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'brew-haven-react'

export default defineConfig({
  base: process.env.BASE_PATH || `/${repoName}/`,
  plugins: [react()],
})
