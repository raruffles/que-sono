import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

const publicKeystaticAppSlug = process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG ?? 'keystatic-que-sono';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    includeFiles: ['./node_modules/@vercel/routing-utils'],
  }),
  vite: {
    define: {
      'import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG': JSON.stringify(publicKeystaticAppSlug),
    },
  },
  integrations: [react(), markdoc(), keystatic()],
});
