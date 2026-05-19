import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
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