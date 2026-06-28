import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlForImage } from "@/sanity/lib/image";
import type { HOME_CERTIFICATIONS_QUERY_RESULT } from "@/sanity.types";
import type { Image as SanityImage } from "sanity";

interface BenefitsSectionProps {
  certifications?: HOME_CERTIFICATIONS_QUERY_RESULT;
}

export function BenefitsSection({
  certifications,
}: BenefitsSectionProps) {
  if (!certifications || certifications.length === 0) return null;

  const getCertificationImageSrc = (img: NonNullable<HOME_CERTIFICATIONS_QUERY_RESULT[number]["image"]> | string | undefined | null) => {
    if (typeof img === "string") return img;
    if (img && typeof img === "object" && "asset" in img) {
      try {
        return urlForImage(img as SanityImage).url();
      } catch (e) {
        return "";
      }
    }
    return "";
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-headline-lg px-2">
            Pourquoi choisir une Pet Sitter pro ?
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto px-4">
            Faire appel à une professionnelle, c&apos;est l&apos;assurance de
            partir l&apos;esprit tranquille en sachant votre animal entre de
            bonnes mains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((certification, index) => {
            const imageSrc = getCertificationImageSrc(certification.image);
            return (
              <Card
                key={index}
                className="flex flex-col neo-shadow-interactive bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={certification.title || "Badge de certification"}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    )}
                  </div>
                  <CardTitle className="font-serif text-xl font-bold text-foreground">
                    {certification.title}
                  </CardTitle>
                  <CardDescription className="text-label-bold text-primary">
                    {certification.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body-md text-justify leading-relaxed">
                    {certification.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
