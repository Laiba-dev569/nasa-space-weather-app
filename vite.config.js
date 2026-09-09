/// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Required for GitHub Pages: assets are served from /nasa-space-weather-app/
  base: '/nasa-space-weather-app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // external libraries in their own chunk
          }
        }
      }
    }
  }
})

