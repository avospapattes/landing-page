import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certificationsConfig } from "@/config/certifications";
import type { Certification as LocalCertification } from "@/config/certifications";
import { urlForImage } from "@/sanity/lib/image";
import type { HOME_CERTIFICATIONS_QUERY_RESULT } from "@/sanity.types";
import type { Image as SanityImage } from "sanity";

interface BenefitsSectionProps {
  certifications?: HOME_CERTIFICATIONS_QUERY_RESULT | LocalCertification[];
}

export function BenefitsSection({
  certifications = certificationsConfig,
}: BenefitsSectionProps) {
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
    <section className="w-full py-20 px-4 md:px-8 bg-background text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-stroke-title font-extrabold px-2">
            Pourquoi choisir une Pet Sitter pro ?
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto px-4">
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
                className="flex flex-col border-2 border-transparent hover:border-primary/20 transition-colors duration-300 shadow-lg overflow-hidden bg-white"
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
                  <CardTitle className="text-xl font-bold">
                    {certification.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium uppercase tracking-wider text-primary">
                    {certification.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-justify leading-relaxed text-sm">
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
