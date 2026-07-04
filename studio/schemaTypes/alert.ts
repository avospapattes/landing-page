import { defineField, defineType } from "sanity";
import { BellIcon } from "@sanity/icons";

export const alertType = defineType({
  name: "alert",
  title: "Alertes",
  type: "document",
  icon: BellIcon,
  fields: [
    defineField({
      name: "message",
      title: "Message d'alerte",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(400),
      description: "Le message affiché dans la bannière et/ou la popup d'alerte.",
    }),
    defineField({
      name: "active",
      title: "Actif",
      type: "boolean",
      initialValue: false,
      description: "Cochez cette case pour afficher l'alerte sur le site.",
    }),
    defineField({
      name: "type",
      title: "Type d'affichage",
      type: "string",
      options: {
        list: [
          { title: "Bannière uniquement (sous la navbar et avant le footer)", value: "banner" },
          { title: "Popup uniquement (à l'ouverture du site)", value: "popup" },
          { title: "Les deux (bannière + popup)", value: "both" },
        ],
        layout: "radio",
      },
      initialValue: "both",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "severity",
      title: "Niveau d'urgence",
      type: "string",
      options: {
        list: [
          { title: "Information", value: "info" },
          { title: "Avertissement", value: "warning" },
          { title: "Urgent", value: "urgent" },
        ],
        layout: "radio",
      },
      initialValue: "info",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkLabel",
      title: "Texte du lien (optionnel)",
      type: "string",
      description: 'Ex: "En savoir plus"',
    }),
    defineField({
      name: "linkUrl",
      title: "URL du lien (optionnel)",
      type: "url",
      description: "Lien associé au message d'alerte.",
      validation: (Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
    }),
  ],
  preview: {
    select: {
      title: "message",
      active: "active",
      severity: "severity",
    },
    prepare({ title, active, severity }) {
      const severityLabel = severity === "urgent" ? "[URGENT]" : severity === "warning" ? "[AVERTISSEMENT]" : "[INFO]";
      return {
        title: `${severityLabel} ${title?.slice(0, 55) ?? "Nouvelle alerte"}${(title?.length ?? 0) > 55 ? "..." : ""}`,
        subtitle: active ? "Active" : "Inactive",
      };
    },
  },
});
