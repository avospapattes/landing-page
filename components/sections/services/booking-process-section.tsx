import { Mail, FileText, CalendarRange, PawPrint } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    icon: Mail,
    title: "1. Prise de contact",
    paws: [
      { position: "top-2 left-2", rotate: "-15deg" },
      { position: "bottom-4 right-4", rotate: "20deg" },
      { position: "top-6 right-10", rotate: "5deg" },
    ],
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
          Vous formulez votre demande de prestation idéalement à l’aide du
          formulaire de contact présent ici qui reprend toutes les informations
          nécessaires (espèce, race, âge de l’animal, le service souhaité, les
          dates ou la récurrence, vos informations pour le contact).
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Vous pouvez également me contacter par mail, SMS ou via Whatsapp.
        </p>
        <div className="pt-4 text-center">
          <Button
            asChild
            className="w-full"
          >
            <Link href="/contact">Accéder au formulaire</Link>
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: FileText,
    title: "2. Devis personnalisé",
    paws: [
      { position: "bottom-10 left-6", rotate: "-25deg" },
      { position: "top-4 right-1/4", rotate: "10deg" },
      { position: "bottom-2 right-2", rotate: "-5deg" },
    ],
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Je vous contacte si j&apos;ai besoin de plus d&apos;informations pour
          vous établir un devis personnalisé et gratuit. <br />
          Puis vous recevrez par mail une proposition tarifaire détaillée
          répondant à votre demande.
        </p>
      </div>
    ),
  },
  {
    icon: CalendarRange,
    title: "3. Pré-visite & Contrat",
    paws: [
      { position: "top-1/2 left-2", rotate: "15deg" },
      { position: "top-3 right-6", rotate: "-10deg" },
      { position: "bottom-6 left-1/3", rotate: "25deg" },
    ],
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Si accord, une <strong>pré-visite à votre domicile</strong> est
          obligatoire et gratuite (prévoir minimum 30 minutes) afin de faire
          connaissance et de noter toutes les caractéristiques de la garde
          (alimentation, sécurité, soins, horaires, état des lieux).
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Un contrat de services sera édité et signé par les parties (avec
          paiement d’un acompte selon le cas) et la remise des clés/badges
          d’accès sera actée (sauf si la prestation n’est pas prévue de suite).
        </p>
      </div>
    ),
  },
];

export function BookingProcessSection() {
  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-background relative"
      id="booking"
    >
      {/* Background paw prints for the section */}
      <PawPrint
        className="absolute top-10 left-10 w-24 h-24 fill-primary opacity-70 -rotate-12 pointer-events-none"
        strokeWidth={1}
      />
      <PawPrint
        className="absolute bottom-20 right-10 w-20 h-20 fill-primary opacity-70 rotate-25 pointer-events-none"
        strokeWidth={1}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl text-stroke-title text-center mb-8 md:mb-12 font-extrabold">
          Déroulement d’une réservation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col border-2 border-transparent shadow-lg bg-white neo-shadow h-full relative"
            >
              {/* Individual card paw prints */}
              {step.paws.map((paw, pawIndex) => (
                <PawPrint
                  key={pawIndex}
                  className={`absolute w-6 h-6 text-primary/20 pointer-events-none ${paw.position}`}
                  style={{ transform: `rotate(${paw.rotate})` }}
                />
              ))}

              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white neo-shadow-sm">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold uppercase italic tracking-tight">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-justify space-y-4 flex-1 flex flex-col relative z-10">
                {step.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
