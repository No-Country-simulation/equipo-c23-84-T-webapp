import { fileURLToPath, URL } from 'node:url'
import sitemap from 'vite-plugin-sitemap';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemap({
      hostname: 'https://tu-dominio.com', // TODO: Cambia esto por tu dominio
      routes: [
        { path: '/', priority: 1.0 },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/partials/_my-variabls.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['v-slick-carousel'], // Fuerza la optimización de este módulo
  },
})
