import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Quelle est votre zone d’intervention ?",
    answer: (
      <>
        Je suis basée à Oberhausbergen. J’interviens sans frais supplémentaires
        dans un rayon de près de 10kms, en vert sur la{" "}
        <Link
          href="/services#zone"
          className="text-primary font-bold hover:underline"
        >
          carte d’intervention
        </Link>
        . Au-delà, un tarif de 0,5 €/km est appliqué.
      </>
    ),
  },
  {
    question: "Quels sont les animaux dont vous vous occupez ?",
    answer: (
      <>
        <p>
          Je m’occupe principalement des chats et des chiens. Sur demande, je
          peux également gérer des NACS (lapin, cochon d’Inde etc) selon vos
          instructions.
        </p>
        <p className="mt-2">
          Concernant les chiens, j’accepte toutes les races et gabarits, à
          l’exception des chiens :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            catégorisés (car je ne dispose pas de la formation ni d’une
            d’assurance RC Pro pour ce type de garde)
          </li>
          <li>
            dits « réactifs » qui peuvent présenter un danger pour le pet-sitter
            ou pour autrui.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Quelles sont vos principales prestations ?",
    answer: (
      <>
        <p>
          Visites à domicile (chat/chien) selon la durée définie: 30, 45 ou 60
          minutes.
        </p>
        <p className="mt-2">
          Pour les chiens, cela inclut une promenade soit « hygiénique », soit
          longue, mais toujours au rythme de l’animal et selon ses habitudes,
          son âge et son gabarit.
        </p>
        <p className="mt-2">
          Si vous n’avez pas le temps ou un moyen de locomotion, je transporte
          votre animal chez le vétérinaire (avec compte-rendu de la
          consultation) ou le toiletteur.
        </p>
      </>
    ),
  },
  {
    question: "Comment formaliser notre collaboration ?",
    answer: (
      <>
        <p>
          Vous trouverez le mode opératoire{" "}
          <Link
            href="/services#booking"
            className="text-primary font-bold hover:underline"
          >
            ici (déroulement d’une réservation)
          </Link>
          .
        </p>
        <p className="mt-2">
          La signature d’un devis, du contrat de service et de la remise des
          clés se fera de façon électronique : un mail vous invitera à signer
          les documents, via un code unique transmis par SMS). Pas de papier,
          tout est dématérialisé (sauf refus de votre part).
        </p>
      </>
    ),
  },
  {
    question: "Comment se passe la remise des clés ?",
    answer: (
      <>
        Lors de la pré-visite, vous me donnerez toutes les explications «
        logistiques » relatives à la garde (accès, alarme etc.). Ces
        informations seront consignées dans le contrat et nous signerons un
        document officiel justifiant la remise des clés (et leur restitution).
      </>
    ),
  },
  {
    question: "Dois-je préparer quelque chose pour la pré-visite ?",
    answer: (
      <>
        <p>
          La durée de cette pré-visite gratuite est de minimum 30 minutes. Voici
          les principaux thèmes que nous aborderons ensemble :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Caractéristiques de l’animal (race, identification, vaccinations) =
            carnet de santé
          </li>
          <li>
            Santé : allergies, traitements éventuels avec ordonnance uniquement
          </li>
          <li>Soins : brossage, entretien litière</li>
          <li>Alimentation : type, quantité</li>
          <li>Coordonnées du vétérinaire et d’une personne de confiance</li>
          <li>Caractère, tempérament, petites habitudes...</li>
          <li>Gestion de l’accès (clé, badge, digicode)</li>
        </ul>
      </>
    ),
  },
  {
    question: "Comment vous contacter ?",
    answer: (
      <>
        Le mieux est de compléter le{" "}
        <Link
          href="/contact"
          className="text-primary font-bold hover:underline"
        >
          formulaire de contact
        </Link>
        . Vous pouvez également me faire une demande par mail, SMS ou Whatsapp.
      </>
    ),
  },
  {
    question:
      "Faites-vous des visites le week-end, jours fériés et pendant les vacances scolaires ?",
    answer: (
      <>
        <p>
          Tout à fait ! Je suis justement disponible pendant toutes les périodes
          de congés scolaires.
        </p>
        <p className="mt-2">
          Concernant les dimanches et jours fériés, une majoration de 3€ sera
          appliquée à la visite (quelle que soit sa durée).
        </p>
      </>
    ),
  },
  {
    question: "Aurai-je des nouvelles de mon animal ?",
    answer: (
      <>
        Bien sûr ! Lors de la pré-visite, nous définirons ensemble le format
        (photos, vidéos, compte-rendu..), la fréquence et le canal de
        transmission (SMS, Whatsapp..).
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-foreground" id="faq">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 text-stroke-title font-extrabold">
          Questions Fréquentes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-white p-5 rounded-xl neo-shadow space-y-4"
            >
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base md:text-lg font-bold cursor-pointer text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <Card className="bg-white neo-shadow border-4 border-white">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Une autre question ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 pt-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vous n&apos;avez pas trouvé la réponse que vous cherchiez ?
                  N&apos;hésitez pas à me contacter directement !
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:contact@avospapattes.fr">Envoyer un email</a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Ou via le{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-primary font-medium"
                  >
                    formulaire de contact
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
