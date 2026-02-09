import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <section className="flex flex-col bg-background text-foreground py-10 xl:py-20 overflow-hidden">
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
            animaux à votre <strong>domicile</strong> ! <br />
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
        <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-end min-h-[300px] md:min-h-[400px] xl:h-auto mt-8 xl:mt-0">
          {/* Container for images to control relative positioning context */}
          <div className="relative w-full max-w-[500px] xl:max-w-none ml-auto mr-auto xl:mr-0 aspect-square sm:aspect-video xl:aspect-auto">
            <Image
              src="/alfy.jpeg"
              alt="Alfy"
              width={250}
              height={250}
              className="absolute top-0 left-0 w-1/2 sm:w-[250px] z-10 neo-shadow object-cover object-top aspect-square"
            />
            <Image
              src="/hemy&co.jpg"
              alt="Hemy & Co"
              width={300}
              height={300}
              className="absolute top-[20%] right-[10%] sm:top-[40px] sm:right-[20px] xl:top-[60px] xl:right-[100px] w-[55%] sm:w-[300px] z-20 neo-shadow object-cover object-top aspect-square"
            />
            <Image
              src="/wifille.jpeg"
              alt="Wifille"
              width={250}
              height={250}
              className="absolute bottom-0 left-[10%] sm:bottom-[-20px] sm:left-[100px] xl:bottom-[-40px] xl:left-[150px] w-1/2 sm:w-[250px] z-30 neo-shadow object-cover object-top aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
