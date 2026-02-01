// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to your GitHub Pages URL
  // e.g., 'https://username.github.io' for user site
  // or 'https://username.github.io/repo-name' for project site
  site: 'https://milmarramirez.github.io',
  // Uncomment if deploying to a subdirectory (e.g., /website)
  // base: '/website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});