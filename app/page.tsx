import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex flex-row justify-center mt-8">
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl font-bold text-center my-8">
            Nathalie, votre Pet Sitter professionnelle
          </h1>
          <p className="max-w-3xl mx-auto text-center mb-6 px-4">
            déclarée et assurée, qui garde vos animaux à votre domicile !
            Confiez-moi vos précieux compagnons en toute sécurité !
            J&apos;assure leur quotidien avec bienveillance, tendresse et
            professionnalisme.
          </p>
          <div className="flex flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contactez-moi
                <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/services">
                Voir les services
                <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/tariffs">
                Voir les tarifs
                <Info className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <Image
            src="vercel.svg"
            alt="Nathalie avec un chien"
            width={90}
            height={90}
            className="rounded-lg ml-8 border-2 border-foreground"
          />
          <Image
            src="vercel.svg"
            alt="Nathalie avec un chien"
            width={90}
            height={90}
            className="rounded-lg ml-8 border-2 border-foreground"
          />
          <Image
            src="vercel.svg"
            alt="Nathalie avec un chien"
            width={90}
            height={90}
            className="rounded-lg ml-8 border-2 border-foreground"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around mt-12 mb-8 bg-foreground text-primary-foreground p-4">
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
