import { Mail, FileText, CalendarRange } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    icon: Mail,
    title: "1. Prise de contact",
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
          <Button asChild className="w-full">
            <Link href="/contact">Accéder au formulaire</Link>
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: FileText,
    title: "2. Devis personnalisé",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Je vous contacte si j&apos;ai besoin de plus d&apos;informations pour
          vous établir un devis personnalisé et gratuit. Puis vous recevrez par
          mail une proposition tarifaire détaillée répondant à votre demande.
        </p>
      </div>
    ),
  },
  {
    icon: CalendarRange,
    title: "3. Pré-visite & Contrat",
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
    <section className="w-full py-16 px-4 md:px-8 bg-background" id="booking">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-stroke-title text-center mb-12">
          Déroulement d’une réservation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col border-2 border-transparent shadow-lg bg-white neo-shadow h-full"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold uppercase">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                {step.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
