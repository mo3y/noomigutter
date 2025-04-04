// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // ✅ correct for Vercel
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sitemap: resolve(__dirname, 'public/sitemap.xml'), // ✅ include the sitemap file
      },
    },
  },
});
