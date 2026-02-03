import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000', 10),
    watch: {
      usePolling: true, 
      interval: 100,    
    },
    hmr: {
      
      clientPort: parseInt(process.env.PORT || '3000', 10),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/assets/styles',
    },
  },
});