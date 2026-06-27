import emailjs from "@emailjs/browser";
import { ContactFormValues } from "@/lib/validations/contact";
import { env } from "@/lib/env";

const serviceLabels: Record<string, string> = {
  "30min": "Visite de 30 minutes",
  "45min": "Visite de 45 minutes",
  "1h": "Visite de 1 heure",
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const sendContactEmail = (data: ContactFormValues): Promise<unknown> => {
  const serviceId = env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const publicKey = env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error("Email configuration is missing."));
  }

  // Chaîne de caractères pure sans aucune balise HTML
  const animauxString = data.animauxList
    .map((a) => `${a.quantite}x ${a.type === "Autre" ? (a.autrePrecisez || "Autre") : a.type}`)
    .join(", ");

  const emailParams = {
    nom: data.nom || "",
    prenom: data.prenom || "",
    email: data.email || "",
    telephone: data.telephone || "",
    ville: data.ville || "",
    codePostal: data.codePostal || "",
    adresseRueComplete: `${data.numeroRue || ""} ${data.nomRue || ""}`.trim() || data.adresse || "",
    adresseComplement: "",
    animaux: animauxString, // Variable de texte simple
    serviceType: serviceLabels[data.serviceType] || data.serviceType || "",
    frequence: data.frequence || "1",
    transportToilettage: data.transportToilettage ? "Oui" : "Non",
    transportVeto: data.transportVeto ? "Oui" : "Non",
    dateDebut: formatDate(data.dateDebut),
    dateFin: formatDate(data.dateFin),
    messageClean: data.message || "Pas de message supplémentaire.",
  };

  return emailjs.send(serviceId, templateId, emailParams, publicKey);
};