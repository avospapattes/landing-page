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
import type { HOME_FAQS_QUERY_RESULT } from "@/sanity.types";

interface FaqSectionProps {
  faqs?: HOME_FAQS_QUERY_RESULT;
}

export function FaqSection({ faqs }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

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
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base md:text-lg font-bold cursor-pointer text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-justify md:text-base text-muted-foreground leading-relaxed">
                    {typeof item.answer === "string" ? (
                      <p className="whitespace-pre-line">{item.answer}</p>
                    ) : (
                      item.answer
                    )}
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
