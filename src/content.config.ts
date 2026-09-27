import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const publicationSchema = z.object({
  slug: z.string(),
  titleZh: z.string(),
  titleEn: z.string(),
  shortTitle: z.string(),
  date: z.string(),
  venue: z.string(),
  shortVenue: z.string(),
  category: z.enum(['conference', 'journal']),
  level: z.string(),
  status: z.string(),
  authors: z.string(),
  excerptZh: z.string(),
  excerptEn: z.string(),
  overviewZh: z.string(),
  overviewEn: z.string(),
  contributionZh: z.string(),
  contributionEn: z.string(),
  frameworkImage: z.string().optional(),
  frameworkAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  links: z.object({ paper: z.string().optional(), code: z.string().optional(), website: z.string().optional() }).default({}),
});

const projectSchema = z.object({
  slug: z.string(),
  titleZh: z.string(),
  titleEn: z.string(),
  levelZh: z.string(),
  levelEn: z.string(),
  roleZh: z.string(),
  roleEn: z.string(),
  excerptZh: z.string(),
  excerptEn: z.string(),
  overviewZh: z.string(),
  overviewEn: z.string(),
  contributionZh: z.string(),
  contributionEn: z.string(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  links: z.object({ website: z.string().optional(), code: z.string().optional() }).default({}),
});

const noteSchema = z.object({
  slug: z.string(),
  titleZh: z.string(),
  titleEn: z.string(),
  date: z.string(),
  excerptZh: z.string(),
  excerptEn: z.string(),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  publications: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/publications' }), schema: publicationSchema }),
  projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: projectSchema }),
  notes: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/notes' }), schema: noteSchema }),
};
