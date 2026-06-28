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

  const validFaqs = faqs.filter((faq) => faq.question && typeof faq.answer === "string");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer as string,
      },
    })),
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-secondary" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-headline-lg text-white text-center mb-8 md:mb-12">
          Questions Fréquentes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-white p-5 neo-shadow space-y-4"
            >
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-serif text-lg md:text-xl font-bold cursor-pointer text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body-md text-justify text-muted-foreground leading-relaxed">
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
            <Card className="bg-white neo-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl font-bold">
                  Une autre question ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 pt-4">
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Vous n&apos;avez pas trouvé la réponse que vous cherchiez ?
                  N&apos;hésitez pas à me contacter directement !
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:contact@avospapattes.fr">Envoyer un email</a>
                </Button>
                <p className="text-caption text-muted-foreground">
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
