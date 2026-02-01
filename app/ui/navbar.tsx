"use client";
import { Home, BookOpen, Sparkles, CircleDollarSign, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/about", label: "Mon histoire", icon: BookOpen },
  { href: "/services", label: "Services", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center bg-background border-b border-b-foreground p-2">
      <Link href="/">
        <Image
          src="vercel.svg"
          alt="Logo"
          width={80}
          height={80}
          className="m-2"
        />
      </Link>
      <ul key={pathname} className="flex space-x-2 p-4 font-medium">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Button
                asChild
                variant={isActive ? "default" : "ghost"}
                className="justify-start"
              >
                <Link href={link.href} className="flex items-center space-x-2">
                  {LinkIcon && <LinkIcon className="h-5 w-5" />}
                  <span className="text-lg">{link.label}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
