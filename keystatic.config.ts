// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const isDevelopment = import.meta.env.DEV;

export default config({
  storage: isDevelopment
    ? {
        kind: 'local',
      }
    : {
        kind: 'github',
        repo: 'raruffles/que-sono',
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