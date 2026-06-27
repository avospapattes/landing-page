import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    defineField({
      name: "author_name",
      title: "Nom de l'auteur",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Note (1 à 5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Avis / Témoignage",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relative_time_description",
      title: "Date relative (ex: il y a 2 mois)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
