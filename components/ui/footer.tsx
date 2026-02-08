import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram } from "@/components/ui/icons";

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
      <div className="py-6 px-4 md:px-8">
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
              Votre Pet Sitter professionnelle, déclarée et assurée, qui garde
              vos animaux à votre domicile
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/avospapattespetsitter/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-foreground/80 hover:text-foreground" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585780601994&locale=fr_FR"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-6 h-6 text-foreground/80 hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold uppercase text-stroke-title">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-foreground/80" />
                <a
                  href="https://www.google.com/maps/place/Oberhausbergen/"
                  target="_blank"
                  className="hover:underline transition-colors"
                >
                  Oberhausbergen, France
                </a>
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
                <Link href="/cgv" className="hover:underline transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:underline transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm w-full mt-6">
          © {new Date().getFullYear()} À vos papattes. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
