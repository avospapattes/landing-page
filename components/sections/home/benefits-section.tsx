import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    image: "/acaced.svg",
    title: "ACACED complet (chien-chat-NAC)",
    subtitle: "N°2025/b58a-64dc ",
    description:
      "Attestation de connaissance pour les Animaux de Compagnie d’Espèces Domestiques obtenue en 2025 auprès de l’organisme de formation ZOOPRO. Obligatoire pour toute personne travaillant dans les métiers animaliers !",
  },
  {
    image: "/gouv.svg",
    title: "Entreprise Individuelle Déclarée",
    subtitle: "N° 99922677200013",
    description:
      "Cette immatriculation officielle confirme l'existence légale de mon activité auprès des autorités françaises et assure la transparence totale de mes prestations et de ma facturation.",
  },
  {
    image: "/resp.svg",
    title: "Assurance Responsabilité Civile Professionnelle",
    subtitle: "N° RCPH278507216",
    description:
      "Cette couverture spécifique aux métiers animaliers protège votre compagnon, les tiers et moi-même contre les dommages accidentels pouvant survenir durant l'exercice de mes fonctions.",
  },
  {
    image: "/mediator.svg",
    title: "Médiateur de la Consommation",
    subtitle: "N° MEDIAVET-D-26-5548",
    description:
      "Conformément à la loi, je mets à votre disposition un service de médiation indépendant et gratuit pour le client, visant à résoudre à l'amiable tout litige éventuel dans un esprit de dialogue.",
  },
  {
    image: "/animae.svg",
    title: "Formation PET SITTER",
    subtitle: "VOX ANIMAE 2025",
    description:
      "Cette formation spécialisée approfondit les connaissances en comportement animalier et en gestion de garde, garantissant une prise en charge professionnelle, éthique et respectueuse du rythme de chaque animal.",
  },
  {
    image: "/miaou.svg",
    title: "Initiation au secourisme canin",
    subtitle: "JLC 67 2026",
    description:
      "Une compétence essentielle qui me permet de maîtriser les gestes d’urgence et les réflexes de survie. En cas d'imprévu, je suis capable d'intervenir avec calme et efficacité pour assurer la sécurité de votre chien.",
  },
  {
    image: "/acaced.svg",
    title: "Membre de l’Association France Petsitters",
    subtitle: "XXXXXXXXXXXXXXXXXXXX",
    description:
      "L'adhésion à ce réseau national de référence témoigne de mon engagement envers une charte de qualité stricte. C'est pour vous l'assurance d'un service sérieux, passionné et ancré dans une communauté de professionnels du bien-être animal.",
  },
];

export function BenefitsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-stroke-title">
            Pourquoi choisir une Pet Sitter pro ?
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Faire appel à une professionnelle, c&apos;est l&apos;assurance de
            partir l&apos;esprit tranquille en sachant votre animal entre de
            bonnes mains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col border-2 border-transparent hover:border-primary/20 transition-colors duration-300 shadow-lg overflow-hidden bg-white"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium uppercase tracking-wider text-primary">
                  {feature.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
