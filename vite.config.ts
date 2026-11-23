import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite = the tool that runs the local preview and builds the final site into /dist
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // The private preview build uses relative paths so it works inside the preview host
  base: mode === 'preview' ? './' : '/',
}))
