import { z, defineCollection } from 'astro:content';

// Companies Collection.
const companiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    title: z.string(),
    link: z.string(),
    heroImage: z.string().optional(),
    icon: z.string().optional(),
    company: z.string(),
    step: z.number(),
    featured: z.boolean().default(false),
    type: z.enum(['company', 'project']).default('company'),
  }),
});

// Projects Collections.
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    title: z.string(),
    stacks: z.array(z.string()),
    company: z.string(),
    collaborators: z.array(z.object({
      name: z.string(),
      picture: z.string().optional(),
    })).optional(),
    live: z.string().optional(),
    github: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Education Collection.
const educationCollections = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      grade: z.string(),
      institution: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
    }),
});

// Certificate Collection.
const certificateCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      institute: z.string(),
      completed: z.date(),
      picture: z.string(),
      link: z.string(),
      step: z.number(),
    }),
});

// Skills Collection.
const skillsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      step: z.number(),
    }),
});

export const collections = {
    'companies': companiesCollection,
    'projects': projectsCollection,
    'educations': educationCollections,
    'certificates': certificateCollection,
    'skills': skillsCollection,
};
