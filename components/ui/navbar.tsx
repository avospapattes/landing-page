"use client";
import { Home, PawPrint, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/services", label: "Services & Tarifs", icon: PawPrint },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background  border-b border-b-foreground ">
      <div className="flex flex-row justify-between items-stretch h-20 mx-auto max-w-360">
        <Image
          src="logo.svg"
          alt="Logo"
          width={0}
          height={0}
          className="m-x-2 h-full w-auto"
        />
        <ul className="flex h-full font-medium">
          {links.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="h-full">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-6 h-full transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:text-foreground",
                  )}
                >
                  {LinkIcon && <LinkIcon className="h-5 w-5" />}
                  <span className="text-lg">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
