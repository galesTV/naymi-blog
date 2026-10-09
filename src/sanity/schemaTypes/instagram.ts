import { defineField, defineType } from "sanity";

export const instagramType = defineType({
  name: "instagram",
  title: "Instagram Reels",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título / Descrição Curta",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Link do Reel do Instagram",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de Capa (Print do vídeo)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Data de Publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
