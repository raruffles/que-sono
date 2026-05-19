// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

declare const process: {
  env: {
    VERCEL?: string;
  };
};

export default config({
  storage: process.env.VERCEL
    ? {
        kind: 'github',
        repo: 'raruffles/que-sono',
      }
    : {
        kind: 'local',
      },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
})