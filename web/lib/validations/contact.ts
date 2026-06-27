import * as z from "zod";

export const contactFormSchema = z
  .object({
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    email: z
      .string()
      .email("Adresse email invalide")
      .min(1, "L'email est requis"),
    telephone: z
      .string()
      .min(10, "Le numéro doit contenir au moins 10 chiffres"),
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
  })
  .refine((data) => new Date(data.dateFin) >= new Date(data.dateDebut), {
    message: "La date de fin doit être égale ou après la date de début",
    path: ["dateFin"],
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
