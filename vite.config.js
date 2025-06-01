import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: 'copy-cname',
      closeBundle() {
        fs.copyFileSync('public/CNAME', 'dist/CNAME')
      }
    }
  ],
  base: '',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  }
})
