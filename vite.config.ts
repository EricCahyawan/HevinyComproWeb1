import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const productPhotoDirectory = path.resolve(__dirname, 'public/product-images');
const productPhotoFiles = fs.readdirSync(productPhotoDirectory)
  .filter((file) => /\.webp$/i.test(file))
  .sort((first, second) => first.localeCompare(second));
const publicDirectory = path.resolve(__dirname, 'public');

const copyPublicAssetsWithoutOriginalPhotos = {
  name: 'copy-public-assets-without-original-product-photos',
  apply: 'build' as const,
  closeBundle() {
    const outputDirectory = path.resolve(__dirname, 'dist');

    for (const entry of fs.readdirSync(publicDirectory, { withFileTypes: true })) {
      if (entry.name === 'FOTO PRODUK UNTUK WEBSITE') continue;

      const sourcePath = path.join(publicDirectory, entry.name);
      const outputPath = path.join(outputDirectory, entry.name);
      if (entry.isDirectory()) {
        fs.cpSync(sourcePath, outputPath, { recursive: true });
      } else {
        fs.copyFileSync(sourcePath, outputPath);
      }
    }

  },
};

export default defineConfig(() => {
  return {
    define: {
      __PRODUCT_PHOTO_FILES__: JSON.stringify(productPhotoFiles),
    },
    plugins: [copyPublicAssetsWithoutOriginalPhotos, react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      copyPublicDir: false,
      sourcemap: false,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('jspdf') || id.includes('jspdf-autotable')) {
                return 'pdf-generator';
              }
              if (id.includes('motion')) {
                return 'motion';
              }
              if (id.includes('lucide-react') || id.includes('@heroicons')) {
                return 'icons';
              }
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
