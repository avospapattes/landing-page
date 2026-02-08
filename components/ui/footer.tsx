import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white flex flex-col">
      <Separator className="bg-white/20" />
      <div className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/logo.svg"
              alt="Logo À vos papattes"
              width={250}
              height={250}
              className="object-contain px-2 rounded-2xl bg-background"
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
                <MapPin className="w-4 h-4 text-white" />
                <span>Oberhausbergen, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <a
                  href="mailto:contact@avospapattes.fr"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contact@avospapattes.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <a
                  href="tel:+33615422950"
                  className="hover:text-primary-foreground transition-colors"
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
                  className="hover:text-primary-foreground transition-colors"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link
                  href="/MENTIONS%20LEGALES.docx"
                  target="_blank"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} À vos papattes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
