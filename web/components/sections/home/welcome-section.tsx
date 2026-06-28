import Image from "next/image";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function WelcomeSection() {
  return (
    <section className="flex flex-col text-foreground py-10 xl:py-20 overflow-hidden relative">
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-stretch gap-12 xl:gap-8 px-4">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left w-full xl:w-1/2 z-40">
          <h1 className="mb-6 text-display-lg leading-tight">
            Nathalie, <br />
            votre Pet Sitter <br />à Strasbourg & Oberhausbergen
          </h1>
          <p className="mb-8 max-w-2xl text-body-lg">
            Service professionnel de{" "}
            <strong>garde d&apos;animaux à domicile</strong>. Pet Sitter{" "}
            <strong>déclarée</strong>, <strong>assurée</strong> et certifiée{" "}
            <strong>ACACED</strong>, je prends soin de vos fidèles compagnons
            (chiens, chats, NAC) à Strasbourg, Oberhausbergen et alentours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg h-14"
            >
              <Link href="/contact">
                Contactez-moi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg h-14"
            >
              <Link href="/services">
                Voir les services
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full xl:w-1/2 mt-12 xl:mt-0 flex flex-row gap-4 justify-center z-20 xl:items-stretch">
          <div className="relative w-[45%] max-w-[270px] aspect-[3/4] xl:w-auto">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Un chat roux"
              fill
              priority
              className="object-cover rounded-sm"
            />
          </div>
          <div className="relative w-[45%] max-w-[270px] aspect-[3/4] xl:w-auto">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Un chihuahua assis"
              fill
              priority
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
