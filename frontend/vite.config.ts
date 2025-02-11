import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Use esbuild minification for better performance
    minify: 'esbuild',
    // Optimize dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion']
        }
      }
    },
    // Enable source maps for production debugging if needed
    sourcemap: false,
    // Enable CSS minification
    cssMinify: true,
    // Report bundle size
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  // Enable SWC for faster builds
  esbuild: {
    jsxInject: `import React from 'react'`,
    // Drop console in production
    drop: ['console', 'debugger']
  }
})
