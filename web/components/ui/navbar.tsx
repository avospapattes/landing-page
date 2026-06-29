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
    <header className="sticky top-0 w-full z-50 bg-primary backdrop-blur-md border-b-2 border-b-secondary">
      <nav className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo Link */}
        <Link
          href="/"
          className="flex items-center cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.97]"
        >
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={150}
            height={60}
            className="h-14 w-auto"
            style={{ width: "auto", height: "100%" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-medium gap-2">
          {siteConfig.navLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;

            return (
              <li
                key={link.href}
                className="relative flex items-center"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-5 h-14 transition-all text-label-bold text-secondary select-none rounded-full border-2",
                    isActive
                      ? "bg-secondary text-white border-secondary"
                      : "hover:bg-secondary/10 border-transparent"
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
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-secondary hover:bg-secondary/10 rounded-sm focus:outline-none cursor-pointer"
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
                <div className="flex flex-col gap-1">
                  {siteConfig.navLinks.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-4 p-3 transition-colors text-lg font-medium rounded-sm",
                          isActive
                            ? "bg-primary text-primary-foreground font-bold"
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
      </nav>
    </header>
  );
}
