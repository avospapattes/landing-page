export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
};

export const servicesConfig: Service[] = [
  {
    id: "visite",
    title: "Visites à Domicile",
    description:
      "Je me déplace chez vous pour veiller sur vos compagnons dans leur environnement habituel, afin de leur éviter le stress du transport ou de la pension.",
    image: "/images/service-visit-30m.jpg",
    points: [
      "Alimentation et eau fraîche : respect strict de leur régime alimentaire.",
      "Hygiène : nettoyage des litières, cages.",
      "Bien-être : séances de jeux, brossage et câlins à volonté.",
      "Suivi de santé : administration de traitements médicaux (uniquement sur ordonnance) et surveillance attentive.",
    ],
  },
  {
    id: "promenade",
    title: "Promenades Canines",
    description:
      "Pour les chiens qui ont besoin de se dégourdir les pattes pendant vos journées de travail ou vos absences.",
    image: "/images/service-visit-45m.png",
    points: [
      "Sorties de quartier ou en pleine nature : adaptées à l’âge et au dynamisme de votre chien.",
      "Hygiène et exercice : un moment privilégié pour se dépenser et explorer.",
      "Éducation positive : respect des ordres de base et des règles de sécurité.",
    ],
  },
  {
    id: "lesplus",
    title: 'Les "Petits Plus" de Nathalie',
    description:
      "En me confiant votre compagnon, vous bénéficiez de garanties supplémentaires :",
    image: "/images/service-visit-1h.jpg",
    points: [
      "Communication constante : vous recevez des nouvelles, des photos ou des vidéos après chaque visite ou promenade.",
      "Sécurité & Secourisme : Formée aux premiers secours, je sais réagir avec calme et efficacité en cas d'urgence.",
      "Rigueur administrative : contrat de garde clair, respect des consignes et discrétion absolue concernant votre domicile.",
      "Services de maison : je peux également relever votre courrier, arroser vos plantes et ouvrir/fermer les volets en cas d’absence prolongée",
    ],
  },
  {
    id: "taxi",
    title: "Taxi Animalier",
    description:
      "Vous manquez de temps ou vous n'êtes pas véhiculé ? A vos papattes by Nathalie s'occupe du transport de vos boules de poils pour leurs rendez-vous essentiels.",
    image: "/images/service-taxi.png",
    points: [
      "Les visites chez le vétérinaire : je conduis votre animal à la clinique pour ses soins, vaccins ou examens de suivi. Je peux, selon vos besoins, assurer l'attente et vous faire un compte-rendu détaillé de la consultation.",
      "Les rendez-vous de toilettage : offrez-lui une séance beauté sans stress ! Je dépose votre compagnon au salon et le ramène à votre domicile une fois qu'il est tout beau et tout propre",
    ],
  },
];
