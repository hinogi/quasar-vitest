/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig(() => ({
  plugins: [Vue()],
  test: {
    globals: true,
    root: './',
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/vitest/__tests__/**/*.{test,spec}.{js,ts}?(x)',
    ],
    exclude: [
      ...configDefaults.exclude,
      'packages/template/*',
      '**/node_modules/**',
    ],
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/, /\.vue$/],
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'vue'],
    alias: {
      '@': './src',
      '@components': './src/components',
      '@layouts': './src/layouts',
      '@pages': './src/pages',
      '@store': './src/store',
      '@utils': './src/utils',
      quasar: 'quasar/dist/quasar.esm.prod.js',
      app: './',
      src: './src',
      '~': './',
      layouts: './src/layouts',
      pages: './src/pages',
      boot: './src/boot',
      '.*css': '@quasar/quasar-app-extension-testing-unit-jest/stub.css',
    },
  },
}));
