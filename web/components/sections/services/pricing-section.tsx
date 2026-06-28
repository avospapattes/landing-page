import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Clock, PawPrint, Plus, Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto space-y-12 max-w-6xl">
        <div className="text-center space-y-4">
          <h2 className="text-headline-lg text-white">
            Les Tarifs
          </h2>
          <p className="text-white text-body-lg max-w-2xl mx-auto">
            Des prix clairs et transparents pour la garde de vos animaux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visites à Domicile */}
          <Card className="flex flex-col bg-white neo-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <PawPrint className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl md:text-2xl font-bold">
                Visites à Domicile
              </CardTitle>
              <CardDescription className="text-body-md text-muted-foreground">
                Chat & Chien (incluant la promenade)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center px-6 py-3 bg-white border-2 border-secondary rounded-full">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-label-bold text-secondary">
                      Visite 30 minutes
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-primary">
                    15 €
                  </span>
                </div>
                <div className="flex justify-between items-center px-6 py-3 bg-white border-2 border-secondary rounded-full">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-label-bold text-secondary">
                      Visite 45 minutes
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-primary">
                    20 €
                  </span>
                </div>
                <div className="flex justify-between items-center px-6 py-3 bg-white border-2 border-secondary rounded-full">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-label-bold text-secondary">
                      Visite 1 heure
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-primary">
                    25 €
                  </span>
                </div>
              </div>

              <div className="bg-secondary p-4 rounded-lg space-y-3">
                <h4 className="font text-white flex items-center gap-2 text-label-bold">
                  <Check className="w-5 h-5 text-white" /> Inclus pour 2 animaux
                  :
                </h4>
                <ul className="space-y-2 text-caption text-white">
                  <li className="flex items-start gap-2">
                    <span className="min-w-1.5 h-1.5 rounded-full bg-white mt-2" />
                    Frais kilométriques selon la zone d’intervention
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-1.5 h-1.5 rounded-full bg-white mt-2" />
                    Soins et administration de médicaments sur ordonnance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-1.5 h-1.5 rounded-full bg-white mt-2" />
                    Services de maison (courrier, arrosage, etc.)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Taxi Animalier */}
          <Card className="flex flex-col bg-white neo-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl md:text-2xl font-bold">
                Taxi Animalier
              </CardTitle>
              <CardDescription className="text-body-md text-muted-foreground">
                Transport sécurisé pour vos animaux
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-white border-2 border-secondary rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-label-bold text-secondary">
                      RDV Toiletteur
                    </span>
                    <span className="text-lg md:text-xl font-bold text-primary">
                      15 €
                    </span>
                  </div>
                  <p className="text-caption text-muted-foreground">
                    Aller-retour dans la zone d’intervention
                  </p>
                </div>

                <div className="p-4 bg-white border-2 border-secondary rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-label-bold text-secondary">
                      RDV Vétérinaire
                    </span>
                    <span className="text-lg md:text-xl font-bold text-primary">
                      25 €{" "}
                      <span className="text-caption font-normal text-muted-foreground">
                        / heure
                      </span>
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit text-caption"
                  >
                    + 5€ par 1/4 d’heure supplémentaire
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suppléments */}
        <Card className="flex flex-col bg-white neo-shadow border-none">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl md:text-2xl font-bold">
                Suppléments
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border-2 border-secondary rounded-lg">
              <p className="text-label-bold text-secondary">
                À partir du 3ème animal :
                <span className="block text-lg font-bold text-primary mt-1">
                  + 3€ / visite
                </span>
              </p>
            </div>

            <div className="p-4 bg-white border-2 border-secondary rounded-lg">
              <p className="text-label-bold text-secondary">
                Dimanches et jours fériés :
                <span className="block text-lg font-bold text-primary mt-1">
                  + 3€ / visite
                </span>
              </p>
            </div>

            <div className="p-4 bg-white border-2 border-secondary rounded-lg">
              <p className="text-label-bold text-secondary">
                Au-delà de la zone d’intervention :
                <span className="block text-lg font-bold text-primary mt-1">
                  0,50 cts / km
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center pt-8 border-t border-white/20 max-w-2xl mx-auto">
          <p className="text-body-lg text-white">
            Pour tout autre type de prestations ou de durée, n’hésitez pas à me
            contacter pour un <strong>devis gratuit</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
