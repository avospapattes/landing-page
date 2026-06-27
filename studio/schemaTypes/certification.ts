import { defineField, defineType } from "sanity";

export const certificationType = defineType({
  name: "certification",
  title: "Certifications / Labels",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Badge / Logo / Icône",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre de la certification / label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre (ex: N° Siret...)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
