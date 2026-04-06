import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    trackSlug: z.string(),
    courseSlug: z.string(),
    moduleSlug: z.string(),
    lessonSlug: z.string(),
    title: z.string(),
    order: z.number().int().nonnegative(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  lessons,
  blog,
};
