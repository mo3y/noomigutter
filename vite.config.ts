import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ still correct for Vercel
  plugins: [react()],
  // ✅ Removed the rollupOptions that included sitemap.xml
});
