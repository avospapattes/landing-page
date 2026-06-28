import { Home, PawPrint, Mail, Camera } from "lucide-react";

export const siteConfig = {
  name: "À vos papattes | Pet Sitter à Strasbourg & Oberhausbergen",
  description:
    "À vos papattes by Nath - Votre Pet Sitter professionnelle à Strasbourg, Oberhausbergen et alentours. Garde d'animaux à domicile (visites de chats, promenades de chiens, NAC) certifiée ACACED, déclarée et assurée.",
  url: "https://avospapattes.fr",
  ogImage: "https://avospapattes.fr/icons/icon.png",
  keywords: [
    "pet sitter strasbourg",
    "pet sitter oberhausbergen",
    "garde chat strasbourg",
    "garde chien strasbourg",
    "visite chat domicile strasbourg",
    "promenade chien strasbourg",
    "garde d'animaux strasbourg",
    "pet sitting bas-rhin",
    "garde chat bas-rhin",
    "garde chien bas-rhin",
    "pet sitter alsace"
  ],
  contact: {
    phone: "06 15 42 29 50",
    phoneHref: "tel:+33615422950",
    email: "contact@avospapattes.fr",
    emailHref: "mailto:contact@avospapattes.fr",
    address: "Oberhausbergen, France",
    addressMapLink: "https://www.google.com/maps/place/Oberhausbergen/",
  },
  socials: {
    instagram: "https://www.instagram.com/avospapattespetsitter/",
    facebook:
      "https://www.facebook.com/profile.php?id=61585780601994&locale=fr_FR",
  },
  navLinks: [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/services", label: "Services & Tarifs", icon: PawPrint },
    { href: "/gallery", label: "Galerie", icon: Camera },
    { href: "/contact", label: "Contact", icon: Mail },
  ],
};
