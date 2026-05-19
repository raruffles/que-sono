import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft']).default('published'),
    publishedDate: z.string().optional(),
    author: z.string().optional(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
  }),
});

export const collections = { posts, authors };