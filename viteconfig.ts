import { defineConfig } from 'vite';
import crx from 'vite-plugin-crx-mv3';
import path from 'path';

export default defineConfig({
  plugins: [crx({ manifest: path.resolve(__dirname, 'public/manifest.json') })],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
