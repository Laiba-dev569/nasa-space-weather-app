/// vite.config.js
export default {
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
}
