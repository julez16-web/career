import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Two builds:
// 1. Client (default): multi-page — each page ships its own HTML shell so
//    per-page <head> metadata (title, description, OG locale) is real,
//    crawler-visible markup.
// 2. SSR (`vite build --ssr`): bundles entry-server.jsx to dist-ssr/, which
//    scripts/prerender.mjs uses to inject full page HTML into the shells so
//    bots and no-JS visitors see the complete content.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {
        ssr: true,
        outDir: 'dist-ssr',
        rollupOptions: { input: resolve(__dirname, 'src/entry-server.jsx') },
      }
    : {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            de: resolve(__dirname, 'de.html'),
            impressum: resolve(__dirname, 'impressum.html'),
          },
        },
      },
}))
