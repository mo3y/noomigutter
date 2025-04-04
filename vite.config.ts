// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Required for Vercel, not '/noomigutter/'
  plugins: [react()],
});
