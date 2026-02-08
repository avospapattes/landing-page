import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground flex flex-col">
      <div
        className="w-full h-2"
        style={{
          backgroundImage: "url('/footerlines.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />
      <div className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/logo.svg"
              alt="Logo À vos papattes"
              width={250}
              height={250}
              className="object-contain"
            />
            <p className="text-center md:text-left text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour le bien-être de vos animaux à
              Oberhausbergen et environs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold uppercase text-stroke-title">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-foreground/80" />
                <span>Oberhausbergen, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-foreground/80" />
                <a
                  href="mailto:contact@avospapattes.fr"
                  className="hover:underline transition-colors"
                >
                  contact@avospapattes.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-foreground/80" />
                <a
                  href="tel:+33615422950"
                  className="hover:underline transition-colors"
                >
                  06 15 42 29 50
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold uppercase text-stroke-title">
              Informations
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/CGV%20A%20VOS%20PAPATTES.docx"
                  target="_blank"
                  className="hover:underline transition-colors"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link
                  href="/MENTIONS%20LEGALES.docx"
                  target="_blank"
                  className="hover:underline transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="bg-foreground/20 mt-12 mb-8" />
        <p className="text-center text-sm w-full">
          © {new Date().getFullYear()} À vos papattes. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
