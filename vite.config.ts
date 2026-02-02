import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000', 10),
    // Configuración de HMR para Docker
    watch: {
      usePolling: true, // Crucial para detectar cambios en volúmenes Docker
      interval: 100,    // Revisa cambios cada 100ms
    },
    hmr: {
      // Forzamos a que el cliente de HMR se conecte al puerto correcto
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
    },
  },
});