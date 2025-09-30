import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [react(), vike()],
  build: {
    cssTarget: ["chrome107", "edge107", "firefox104", "safari16"]
  }
})