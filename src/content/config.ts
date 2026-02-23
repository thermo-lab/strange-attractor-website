import { z, defineCollection } from 'astro:content';

const printsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    peechoId: z.string(),       // The ID required for the buy button
    galleryId: z.string(),       // The ID required to load the attractor viewer
    coverImage: z.string(),     // Path to image in /public/images/
    date: z.date(),             // Used for sorting
    featured: z.boolean().default(false).optional(),
  }),
});

export const collections = {
  'prints': printsCollection,
};
