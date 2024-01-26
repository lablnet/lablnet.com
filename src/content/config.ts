import { z, defineCollection } from 'astro:content';

// Education Collection.
const educationCollections = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      grade: z.string(),
      institution: z.string(),
      duration: z.string(),
      step: z.number(),
    }),
});

export const collections = {
    'educations': educationCollections,
};
