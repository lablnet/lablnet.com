import { z, defineCollection } from 'astro:content';

// Companies Collection.
const companiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    title: z.string(),
    link: z.string(),
    banner: z.string().optional(),
    icon: z.string(),
    company: z.string(),
    step: z.number(),
    featured: z.boolean().default(false),
    type: z.enum(['company', 'project']).default('companies'),
  }),
});

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

// Certificate Collection.
const certificateCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      institute: z.string(),
      completed: z.string(),
      picture: z.string(),
      link: z.string(),
      step: z.number(),
    }),
});


export const collections = {
    'companies': companiesCollection,
    'educations': educationCollections,
    'certificates': certificateCollection,
};
