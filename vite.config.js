import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        science: './src/science.html',
        diseaseX: './src/disease-x.html',
        service: './src/service.html',
        products: './src/products.html',
        about: './src/about.html',
        privacyPolicy: './src/privacy-policy.html',
        termsAndConditions: './src/terms-and-conditions.html',
        legalDisclosure: './src/legal-disclosure.html',
      },
    },
  },
  server: {
    host: true,
    port: 5173,
    open: false,
    cors: true,
  },
  plugins: [createHtmlPlugin()],
});
