// keystatic.config.ts
import React from 'react';
import { config, fields, collection, singleton } from '@keystatic/core';

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
  ui: {
    brand: {
      name: 'Que Sono',
      mark: () =>
        React.createElement('img', {
          src: '/logo.png',
          alt: 'Que Sono',
          style: { width: '32px', height: '32px', objectFit: 'contain' },
        }),
    },
    navigation: {
      Conteúdo: ['posts', 'authors'],
      Páginas: ['home'],
      Configurações: ['settings'],
    },
  },
  singletons: {
    home: singleton({
      label: 'Página Inicial',
      path: 'src/content/pages/home',
      schema: {
        heroHeadline: fields.text({ label: 'Título Principal' }),
        heroIntro: fields.text({ label: 'Texto de Introdução', multiline: true }),
      },
    }),
    settings: singleton({
      label: 'Configurações do Site',
      path: 'src/content/settings/seo',
      schema: {
        siteTitle: fields.text({ label: 'Título do Site' }),
        siteDescription: fields.text({ label: 'Descrição Global', multiline: true }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*/',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({
          label: 'Descrição',
          multiline: true,
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Rascunho', value: 'draft' },
            { label: 'Publicado', value: 'published' },
          ],
          defaultValue: 'draft',
        }),
        publishedDate: fields.date({
          label: 'Data de Publicação',
          defaultValue: { kind: 'today' },
        }),
        author: fields.relationship({
          label: 'Autor',
          collection: 'authors',
        }),
        coverImage: fields.image({
          label: 'Imagem de Capa',
          publicPath: './content',
        }),
        content: fields.markdoc({
          label: 'Conteúdo',
          options: {
            image: {
              publicPath: './content',
            },
          },
        }),
      },
    }),
    authors: collection({
      label: 'Autores',
      slugField: 'name',
      path: 'src/content/authors/*/',
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        role: fields.text({ label: 'Cargo' }),
      },
    }),
  },
})