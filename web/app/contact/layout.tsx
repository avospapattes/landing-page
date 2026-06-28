import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Réservation & Contact | Pet Sitter Strasbourg & Oberhausbergen",
  description: "Planifiez la garde de vos animaux (chats, chiens, NAC) à Strasbourg, Oberhausbergen et alentours. Remplissez notre formulaire en quelques étapes pour un devis gratuit.",
  keywords: [
    "contact pet sitter strasbourg",
    "réservation pet sitting strasbourg",
    "devis garde chien strasbourg",
    "devis garde chat strasbourg",
    "tarifs pet sitting strasbourg",
    ...siteConfig.keywords,
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
