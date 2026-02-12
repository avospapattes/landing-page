import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PawPrint } from "lucide-react";

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
    image: "/rd1.jpg",
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
    image: "/rd2.png",
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
    image: "/rd3.jpg",
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
    image: "/rd4.png",
    points: [
      "Les visites chez le vétérinaire : je conduis votre animal à la clinique pour ses soins, vaccins ou examens de suivi. Je peux, selon vos besoins, assurer l'attente et vous faire un compte-rendu détaillé de la consultation.",
      "Les rendez-vous de toilettage : offrez-lui une séance beauté sans stress ! Je dépose votre compagnon au salon et le ramène à votre domicile une fois qu'il est tout beau et tout propre",
    ],
  },
];

export function ServicesListSection() {
  return (
    <section className="w-full pb-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row neo-shadow rounded-2xl overflow-hidden bg-foreground max-w-5xl mx-auto ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-62.5 md:h-auto min-h-62.5 md:min-h-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-base text-justify md:text-lg leading-relaxed text-white">
                    {service.description}
                  </p>

                  {/* Points Section */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-fit mt-2 md:mt-4 cursor-pointer"
                      >
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95%] sm:max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-primary mb-4">
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {service.points.map((point, idx) => {
                            const parts = point.split(" : ");
                            const hasKey = parts.length > 1;
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <PawPrint className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <div className="text-muted-foreground text-sm md:text-lg">
                                  {hasKey ? (
                                    <>
                                      <span className="font-bold text-foreground">
                                        {parts[0]}
                                      </span>
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
    </section>
  );
}
