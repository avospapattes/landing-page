import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground flex flex-col">
      <div
        className="w-full h-2"
        style={{
          backgroundImage: "url('/images/footer-lines.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />
      <div className="py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/icons/logo.svg"
              alt={`Logo ${siteConfig.name}`}
              width={250}
              height={250}
              className="object-contain"
            />
            <p className="text-center md:text-left text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-foreground/80 hover:text-foreground" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
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
                  href={siteConfig.contact.addressMapLink}
                  target="_blank"
                  className="hover:underline transition-colors"
                >
                  {siteConfig.contact.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-foreground/80" />
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:underline transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-foreground/80" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:underline transition-colors"
                >
                  {siteConfig.contact.phone}
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
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
