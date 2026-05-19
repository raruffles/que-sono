import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    includeFiles: ['./node_modules/@vercel/routing-utils'],
  }),
  integrations: [react(), markdoc(), keystatic()],
});
