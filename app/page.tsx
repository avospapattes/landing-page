import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full bg-background text-foreground flex flex-col">
      <div className="flex flex-row flex-start m-5">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-7xl text-left mb-4">
            Nathalie, <br />
            votre Pet Sitter <br />
            professionnelle
          </h1>
          <p className="max-w-3xl mx-auto text-left mb-6 text-2xl">
            <strong>déclarée</strong> et <strong>assurée</strong>, qui garde vos
            animaux à votre <strong>domicile</strong> ! <br />
            Confiez-moi vos précieux compagnons en toute{" "}
            <strong>sécurité</strong> ! <br />
            J&apos;assure leur quotidien avec bienveillance, tendresse et
            professionnalisme.
          </p>
          <div className="flex flex-row justify-around gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="text-white rounded-none border-2 border-white shadow-[5px_5px_0px_rgba(255,126,0,1)]"
            >
              <Link href="/contact">
                Contactez-moi
                <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-black rounded-none border-2 border-white shadow-[5px_5px_0px_rgba(255,126,0,1)] hover:bg-white/80"
            >
              <Link href="/services">
                Voir les services
                <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-white rounded-none border-2 border-white shadow-[5px_5px_0px_rgba(255,126,0,1)]"
            >
              <Link href="/prices">
                Voir les tarifs
                <Info className="ml-2 h-5 w-5" />
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
            className="ml-0 neo-shadow z-10 relative"
          />
          <Image
            src="/hemy&co.jpg"
            alt="Nathalie avec un chien"
            width={300}
            height={300}
            className="ml-50 -mt-80 neo-shadow z-20 relative"
          />
          <Image
            src="/wifille.jpeg"
            alt="Nathalie avec un chien"
            width={250}
            height={250}
            className="ml-115 -mt-80 neo-shadow z-30 relative"
          />
        </div>
      </div>
      {/* Stats Section */}
      <div className="flex flex-row justify-around mt-auto bg-foreground text-white text-2xl p-4">
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
    </main>
  );
}
