"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary border-b-2 border-b-secondary">
      <div className="container mx-auto flex flex-row justify-between items-center h-20 px-4">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={150} // Approximate width based on aspect ratio, adjusted for auto height
          height={60} // Approximate height to fit in h-20 (80px)
          className="h-16 w-auto" // h-16 is 64px, fits nicely in h-20
          style={{ width: "auto", height: "auto" }}
          priority
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex h-full font-medium">
          {siteConfig.navLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="h-full">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-6 h-full transition-colors text-label-bold",
                    isActive
                      ? "bg-secondary text-white"
                      : "text-secondary hover:bg-secondary/10",
                  )}
                >
                  {LinkIcon && <LinkIcon className="h-5 w-5" />}
                  <span className="text-lg">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-secondary hover:bg-secondary/10 rounded-md focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[220px] sm:w-[220px]"
              showCloseButton={false}
            >
              <div className="flex flex-col mt-3">
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <div className="flex flex-col">
                  {siteConfig.navLinks.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-4 p-3 transition-colors text-lg font-medium rounded-md",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {LinkIcon && <LinkIcon className="h-6 w-6" />}
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
