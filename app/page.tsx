import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-background mx-auto max-w-360 h-full text-foreground">
        <div className="flex flex-row flex-start m-5">
          <div className="flex flex-col justify-center items-start">
            <h1 className="mb-4 text-7xl text-left text-stroke-title">
              Nathalie, <br />
              votre Pet Sitter <br />
              professionnelle
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-2xl text-left">
              <strong>déclarée</strong> et <strong>assurée</strong>, qui garde
              vos animaux à votre <strong>domicile</strong> ! <br />
              Confiez-moi vos précieux compagnons en toute{" "}
              <strong>sécurité</strong> ! <br />
              J&apos;assure leur quotidien avec bienveillance, tendresse et
              professionnalisme.
            </p>
            <div className="flex flex-row justify-around gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-white"
              >
                <Link href="/contact">
                  Contactez-moi
                  <Info className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/80 shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-black"
              >
                <Link href="/services">
                  Voir les services
                  <Info className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-white"
              >
                <Link href="/prices">
                  Voir les tarifs
                  <Info className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col my-8">
            <Image
              src="/alfy.jpeg"
              alt="Nathalie avec un chien"
              width={250}
              height={250}
              className="z-10 relative neo-shadow ml-0"
            />
            <Image
              src="/hemy&co.jpg"
              alt="Nathalie avec un chien"
              width={300}
              height={300}
              className="z-20 relative neo-shadow -mt-80 ml-50"
            />
            <Image
              src="/wifille.jpeg"
              alt="Nathalie avec un chien"
              width={250}
              height={250}
              className="z-30 relative neo-shadow -mt-80 ml-115"
            />
          </div>
        </div>
        {/* Stats Section */}
      </main>
      <div className="flex flex-row justify-around bg-foreground mt-auto p-4 text-white text-2xl">
        <div className="ml-4 text-center">
          <strong>10+</strong>
          <br />
          Clients satisfaits
        </div>
        <div className="ml-4 text-center">
          <strong>2+</strong>
          <br />
          Labels
        </div>
        <div className="ml-4 text-center">
          <strong>5+</strong>
          <br />
          Services
        </div>
        <div className="ml-4 text-center">
          <strong>Strasbourg</strong>
          <br />
          Lieu de travail
        </div>
      </div>
    </>
  );
}
