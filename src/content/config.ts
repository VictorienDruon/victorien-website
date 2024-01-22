import { z, defineCollection } from "astro:content";

const experiences = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			startDate: z.string().pipe(z.coerce.date()),
			period: z.string(),
			description: z.string(),
			logo: image(),
		}),
});

const projects = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publishedOn: z.string().pipe(z.coerce.date()).optional(),
			summary: z.string(),
			techStack: z.array(z.string()),
			visuals: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
					})
				)
				.optional(),
		}),
});

export const collections = {
	experiences,
	projects,
};
