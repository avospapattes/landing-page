import { Home, PawPrint, Mail } from "lucide-react";

export const siteConfig = {
  name: "À vos papattes",
  description:
    "À vos papattes by Nath - Votre Pet Sitter professionnelle, déclarée et assurée, qui garde vos animaux à votre domicile.",
  url: "https://avospapattes.fr",
  ogImage: "https://avospapattes.fr/icons/icon.png",
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
    { href: "/contact", label: "Contact", icon: Mail },
  ],
};
