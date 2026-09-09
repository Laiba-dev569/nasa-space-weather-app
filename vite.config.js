/// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Required for GitHub Pages: must match the exact GitHub repository name
  base: '/-NASA-Space-Weather-Exploration-Hub-Hackathon/',
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

