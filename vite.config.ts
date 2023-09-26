import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy setup as per https://levelup.gitconnected.com/exploring-vite-fast-development-and-proxy-server-setup-for-effortless-frontend-development-d5e654e408e0
  server: {
    proxy: {
      '/api': {
        target: 'https://fletcher-40835-staging.botics.co',
        changeOrigin: true
      }
    }
  }
})
