import { defineCollection, z } from 'astro:content';

const sectionsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    posts: sectionsCollection,
};
