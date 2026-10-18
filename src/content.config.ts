import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod'; // if this import fails on your Astro version, use: import { z } from 'astro:content';

const pillar = z.enum(['education', 'necessities', 'cleanliness', 'medicine', 'awareness', 'dharma']);

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    title_te: z.string().optional(),
    date: z.coerce.date(),
    pillar,
    summary: z.string(),
    summary_te: z.string().optional(),
    cover: z.string().optional(),
    photos: z.array(z.string()).default([]),
    youtube: z.string().optional(),
    location: z.string().optional(),
    body_te: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    title_te: z.string().optional(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
    pillar: pillar.optional(),
    description: z.string().optional(),
    description_te: z.string().optional(),
    cover: z.string().optional(),
    register_link: z.string().optional(),
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    title_te: z.string().optional(),
    date: z.coerce.date(),
    pillar: pillar.optional(),
    description: z.string().optional(),
    description_te: z.string().optional(),
    cover: z.string().optional(),
    photos: z.array(z.string()).min(1),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    title_te: z.string().optional(),
    updated: z.coerce.date(),
    body_te: z.string().optional(), // the English text is the markdown body
  }),
});

export const collections = { updates, events, albums, legal };
