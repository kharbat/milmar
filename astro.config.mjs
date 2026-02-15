// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to your GitHub Pages URL
  // e.g., 'https://username.github.io' for user site
  // or 'https://username.github.io/repo-name' for project site
  site: 'https://www.milmar.info',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});