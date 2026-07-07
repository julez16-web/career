import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Multi-page build: each page ships its own HTML shell so per-page <head>
// metadata (title, description, Open Graph locale) is real, crawler-visible
// markup rather than client-injected — this matters for LinkedIn/social previews.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        de: resolve(__dirname, 'de.html'),
        impressum: resolve(__dirname, 'impressum.html'),
      },
    },
  },
})
