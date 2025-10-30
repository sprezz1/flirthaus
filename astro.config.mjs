// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://flirthaus.com', // Update with your actual domain
  integrations: [mdx(), sitemap(), vue()],

  server: {
    host: '0.0.0.0', // Allow external connections for Coolify
    port: 4321,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.io'],
    },
  },
});