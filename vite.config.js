import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // 👈 Change to dot-slash for relative path rendering
    build: {
        cssMinify: 'esbuild',
    },
})
