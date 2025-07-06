import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    posts: sections,
};
