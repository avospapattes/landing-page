import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    id: "visite",
    title: "Visites à Domicile",
    description:
      "Je me déplace chez vous pour veiller sur vos compagnons dans leur environnement habituel, afin de leur éviter le stress du transport ou de la pension.",
    image: "/vercel.svg",
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
    image: "/vercel.svg",
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
    image: "/vercel.svg",
    points: [
      "Communication constante : vous recevez des nouvelles, des photos ou des vidéos après chaque visite ou promenade.",
      "Sécurité &amp; Secourisme : Formée aux premiers secours, je sais réagir avec calme et efficacité en cas d'urgence.",
      "Rigueur administrative : contrat de garde clair, respect des consignes et discrétion absolue concernant votre domicile.",
      "Services de maison : je peux également relever votre courrier, arroser vos plantes et ouvrir/fermer les volets en cas d’absence prolongée",
    ],
  },
  {
    id: "taxi",
    title: "Taxi Animalier",
    description:
      "Vous manquez de temps ou vous n'êtes pas véhiculé ? A vos papattes by Nathalie s'occupe du transport de vos boules de poils pour leurs rendez-vous essentiels.",
    image: "/vercel.svg",
    points: [
      "Les visites chez le vétérinaire : je conduis votre animal à la clinique pour ses soins, vaccins ou examens de suivi. Je peux, selon vos besoins, assurer l'attente et vous faire un compte-rendu détaillé de la consultation.",
      "Les rendez-vous de toilettage : offrez-lui une séance beauté sans stress ! Je dépose votre compagnon au salon et le ramène à votre domicile une fois qu'il est tout beau et tout propre",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Mes Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Des prestations sur-mesure pour le bonheur de vos compagnons à quatre
          pattes.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover bg-gray-100 dark:bg-gray-800 p-8"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  {service.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              {/* Points Section */}
              <Dialog>
                <DialogTrigger className="mt-4 underline text-primary">
                  Voir les détails
                </DialogTrigger>
                <DialogContent className="max-w-lg mx-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                      {service.title} - Détails
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-2 py-8 bg-muted/30 rounded-xl">
        <p className="text-lg font-semibold text-muted-foreground">
          Pas de chiens catégorisés ou réactifs
        </p>
        <p className="text-lg font-semibold text-muted-foreground">
          Pas de garde à mon domicile
        </p>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">
        Zone d’intervention gratuite
      </h1>
      <Image src="/vercel.svg" alt="Service Image" width={600} height={400} />
    </div>
  );
}
