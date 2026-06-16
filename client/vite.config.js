import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
// Allow overriding the base path at build time via VITE_BASE env var.
// For local dev the default will be '/'. For GitHub Pages set VITE_BASE="/yn-website/"
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
})
