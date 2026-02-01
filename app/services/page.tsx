import Image from "next/image";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "promenade",
    title: "Promenades Canines",
    description:
      "Offrez à votre chien l'exercice et la stimulation dont il a besoin. Je propose des promenades individuelles ou en petit groupe, adaptées au rythme et à l'énergie de votre compagnon. Que ce soit pour une balade détente ou une sortie sportive, je m'assure qu'il rentre comblé et serein.",
    image: "/vercel.svg",
  },
  {
    id: "visite",
    title: "Visites à Domicile",
    description:
      "Partez l'esprit tranquille. Je viens rendre visite à vos animaux (chats, chiens, NAC) directement chez vous. Au programme : nourrissage, soins, jeux et beaucoup de câlins. Idéal pour ne pas perturber leurs habitudes tout en leur garantissant une présence bienveillante.",
    image: "/vercel.svg",
  },
  {
    id: "garde",
    title: "Garde à Domicile",
    description:
      "Pour des absences plus longues, je m'installe chez vous pour veiller sur vos animaux nuit et jour. Ils conservent leurs repères et vous retrouvez votre maison habitée et sécurisée. Une solution confort pour eux et rassurante pour vous.",
    image: "/vercel.svg",
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
