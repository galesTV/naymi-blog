import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Postagem",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título (ex: look da bienal!)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Link da URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Data da Polaroid",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "mainImage",
      title: "Foto Principal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      title: "Conteúdo do Post",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
