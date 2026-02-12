/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <section className="flex flex-col bg-background text-foreground py-10 xl:py-20 overflow-hidden relative">
      <img
        src="/grid.png"
        alt="Background"
        className="absolute inset-0 w-8/10 left-1/8 h-full object-cover z-0"
      />
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-8 px-4">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left w-full xl:w-1/2 z-40">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-7xl font-extrabold text-stroke-title leading-tight">
            Nathalie, <br />
            votre Pet Sitter <br />
            professionnelle
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl leading-relaxed">
            <strong>déclarée</strong> et <strong>assurée</strong>, qui garde vos
            animaux à votre <strong>domicile</strong>. <br />
            Confiez-moi vos précieux compagnons en toute{" "}
            <strong>sécurité</strong> ! <br />
            J&apos;assure leur quotidien avec bienveillance, tendresse et
            professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-white text-lg h-14"
            >
              <Link href="/contact">
                Contactez-moi
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-black text-lg h-14"
            >
              <Link href="/services">
                Voir les services
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-end min-h-75 md:min-h-100 xl:h-auto mt-8 xl:mt-0">
          {/* Container for images to control relative positioning context */}
          <div className="relative w-full max-w-125 xl:max-w-none ml-auto mr-auto xl:mr-0 aspect-square sm:aspect-video xl:aspect-auto">
            <Image
              src="/alfy.jpeg"
              alt="Alfy"
              width={250}
              height={250}
              className="absolute top-0 left-0 w-1/2 sm:w-62.5 z-10 neo-shadow object-cover object-top aspect-square"
            />
            <Image
              src="/hemy&co.jpg"
              alt="Hemy & Co"
              width={300}
              height={300}
              className="absolute top-[20%] right-[10%] sm:top-10 sm:right-5 xl:top-15 xl:right-25 w-[55%] sm:w-75 z-20 neo-shadow object-cover object-top aspect-square"
            />
            <Image
              src="/wifille.jpeg"
              alt="Wifille"
              width={250}
              height={250}
              className="absolute bottom-0 left-[10%] sm:-bottom-5 sm:left-25 xl:-bottom-10 xl:left-37.5 w-1/2 sm:w-62.5 z-30 neo-shadow object-cover object-top aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
