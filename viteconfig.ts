import { defineConfig } from 'vite';
import crx from 'vite-plugin-crx-mv3';
import path from 'path';

export default defineConfig({
  plugins: [crx({ manifest: path.resolve(__dirname, 'public/manifest.json') })],
  build: {
    rollupOptions: {
      input: {
        index: 'src/index.ts',
        content: 'src/content.ts',
        background: 'src/background.ts',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist'
  },
});
