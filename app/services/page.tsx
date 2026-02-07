import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { TriangleAlert, PawPrint } from "lucide-react";

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
    image: "/hemy&co.jpg",
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
    image: "/hemy&co.jpg",
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
    image: "/hemy&co.jpg",
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
    image: "/hemy&co.jpg",
    points: [
      "Les visites chez le vétérinaire : je conduis votre animal à la clinique pour ses soins, vaccins ou examens de suivi. Je peux, selon vos besoins, assurer l'attente et vous faire un compte-rendu détaillé de la consultation.",
      "Les rendez-vous de toilettage : offrez-lui une séance beauté sans stress ! Je dépose votre compagnon au salon et le ramène à votre domicile une fois qu'il est tout beau et tout propre",
    ],
  },
];

import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto py-16 px-4 md:px-8 space-y-24">
        <div className="text-center space-y-4">
          <h1 className="text-7xl font-bold">Mes Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des prestations sur-mesure pour le bonheur de vos compagnons à
            quatre pattes.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row items-stretch border border-gray-200 shadow-sm rounded-2xl overflow-hidden bg-white ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Points Section */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-fit mt-4 cursor-pointer"
                      >
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full sm:max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-primary mb-4">
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.points.map((point, idx) => {
                            const parts = point.split(" : ");
                            const hasKey = parts.length > 1;
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <PawPrint className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <div className="text-muted-foreground text-lg">
                                  {hasKey ? (
                                    <>
                                      <span className="font-bold text-foreground">
                                        {parts[0]}
                                      </span>{" "}
                                      : {parts.slice(1).join(" : ")}
                                    </>
                                  ) : (
                                    point
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-4 py-16 bg-background">
        <TriangleAlert className="w-16 h-16 text-white" />
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-white">
            Pas de chiens catégorisés ou réactifs.
          </p>
          <p className="text-3xl font-bold text-white">
            Pas de garde à mon domicile.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 md:px-8 space-y-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Zone d’intervention gratuite
        </h1>
        <Image
          src="/zone.png"
          alt="Zone d'intervention"
          width={1000}
          height={600}
          className="rounded-xl shadow-lg border-4 border-white w-full max-w-4xl"
        />
      </div>
    </main>
  );
}
