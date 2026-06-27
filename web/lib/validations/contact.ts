import * as z from "zod";

export const contactFormBaseSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z
    .string()
    .email("Adresse email invalide")
    .min(1, "L'email est requis"),
  telephone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Numéro de téléphone français invalide (ex: 0612345678, +33 6...)"
    ),
  ville: z.string().min(1, "La ville est requise"),
  codePostal: z
    .string()
    .regex(/^[0-9]{5}$/, "Le code postal doit contenir exactement 5 chiffres"),
  adresse: z.string().optional(),
  numeroRue: z.string().optional(),
  nomRue: z.string().optional(),
  animauxList: z
    .array(
      z.object({
        type: z.string().min(1, "Requis"),
        autrePrecisez: z.string().optional(),
        quantite: z.number().min(1, "Doit être au moins 1"),
      }),
    )
    .min(1, "Ajoutez au moins un animal"),
  serviceType: z.string().min(1, "Requis"),
  frequence: z.string().min(1, "Requis"),
  transportToilettage: z.boolean(),
  transportVeto: z.boolean(),
  dateDebut: z.string().min(1, "Date de début requise"),
  dateFin: z.string().min(1, "Date de fin requise"),
  message: z.string().optional(),
});

export const contactFormSchema = contactFormBaseSchema
  .refine(
    (data) => {
      if (!data.dateDebut || !data.dateFin) return true;
      const d1 = new Date(data.dateDebut);
      const d2 = new Date(data.dateFin);
      if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return true;
      return d2 >= d1;
    },
    {
      message: "La date de fin doit être égale ou après la date de début",
      path: ["dateFin"],
    },
  );

export type ContactFormValues = z.infer<typeof contactFormSchema>;