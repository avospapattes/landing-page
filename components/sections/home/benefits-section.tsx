import {
  Shield,
  Heart,
  MessageCircle,
  Clock,
  Star,
  FileText,
  Smile,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ACACED complet (chien-chat-NAC)",
    subtitle: "N°2025/b58a-64dc ",
    description:
      "Attestation de connaissance pour les Animaux de Compagnie d’Espèces Domestiques obtenue en 2025 auprès de l’organisme de formation ZOOPRO. Obligatoire pour toute personne travaillant dans les métiers animaliers !",
  },
  {
    icon: Heart,
    title: "Entreprise Individuelle Déclarée",
    subtitle: "N° 99922677200013",
    description:
      "Cette immatriculation officielle confirme l'existence légale de mon activité auprès des autorités françaises et assure la transparence totale de mes prestations et de ma facturation.",
  },
  {
    icon: Clock,
    title: "Assurance Responsabilité Civile Professionnelle",
    subtitle: "N° RCPH278507216",
    description:
      "Cette couverture spécifique aux métiers animaliers protège votre compagnon, les tiers et moi-même contre les dommages accidentels pouvant survenir durant l'exercice de mes fonctions.",
  },
  {
    icon: MessageCircle,
    title: "Médiateur de la Consommation",
    subtitle: "N° MEDIAVET-D-26-5548",
    description:
      "Conformément à la loi, je mets à votre disposition un service de médiation indépendant et gratuit pour le client, visant à résoudre à l'amiable tout litige éventuel dans un esprit de dialogue.",
  },
  {
    icon: Star,
    title: "Formation PET SITTER",
    subtitle: "VOX ANIMAE 2025",
    description:
      "Cette formation spécialisée approfondit les connaissances en comportement animalier et en gestion de garde, garantissant une prise en charge professionnelle, éthique et respectueuse du rythme de chaque animal.",
  },
  {
    icon: FileText,
    title: "Initiation au secourisme canin",
    subtitle: "JLC 67 2026",
    description:
      "Une compétence essentielle qui me permet de maîtriser les gestes d’urgence et les réflexes de survie. En cas d'imprévu, je suis capable d'intervenir avec calme et efficacité pour assurer la sécurité de votre chien.",
  },
  {
    icon: Smile,
    title: "Membre de l’Association France Petsitters",
    subtitle: "XXXXXXXXXXXXXXXXXXXX",
    description:
      "L'adhésion à ce réseau national de référence témoigne de mon engagement envers une charte de qualité stricte. C'est pour vous l'assurance d'un service sérieux, passionné et ancré dans une communauté de professionnels du bien-être animal.",
  },
];

export function BenefitsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Pourquoi choisir une Pet Sitter pro ?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Faire appel à une professionnelle, c&apos;est l&apos;assurance de
            partir l&apos;esprit tranquille en sachant votre animal entre de
            bonnes mains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-xl p-6 shadow-lg flex flex-col gap-4 border-2 border-transparent hover:border-primary-foreground/20 transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                  {feature.subtitle}
                </p>
              </div>

              <p className="text-card-foreground/80 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
