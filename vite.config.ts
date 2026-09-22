import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
