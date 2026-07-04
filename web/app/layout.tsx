import type { Metadata } from "next";
import { Libre_Caslon_Text, Work_Sans } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AlertBanner } from "@/components/ui/alert-banner";
import { AlertPopup } from "@/components/ui/alert-popup";
import type { AlertData } from "@/components/ui/alert-banner";

import { siteConfig } from "@/config/site";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/icons/icon.svg",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/icons/icon.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/icons/icon.png"],
  },
};

async function getActiveAlerts(): Promise<AlertData[]> {
  const isSanityConfigured =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!isSanityConfigured) return [];

  try {
    const { client } = await import("@/sanity/lib/client");
    const alerts = await client.fetch<AlertData[]>(
      `*[_type == "alert" && active == true] | order(_createdAt desc)[0...5]`
    );
    return alerts ?? [];
  } catch (e) {
    console.error("Failed to fetch alerts from Sanity", e);
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const alerts = await getActiveAlerts();
  const bannerAlerts = alerts.filter((a) => a.type === "banner" || a.type === "both");
  const popupAlert = alerts.find((a) => a.type === "popup" || a.type === "both") ?? null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: siteConfig.ogImage,
    telephone: siteConfig.contact.phone.replace(/\s+/g, ""),
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Pierre de Coubertin",
      addressLocality: "Oberhausbergen",
      addressRegion: "Bas-Rhin",
      postalCode: "67205",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.6083,
      longitude: 7.6853,
    },
    url: siteConfig.url,
    priceRange: "€€",
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook
    ],
    areaServed: [
      { "@type": "AdministrativeArea", "name": "Strasbourg" },
      { "@type": "AdministrativeArea", "name": "Oberhausbergen" },
      { "@type": "AdministrativeArea", "name": "Mittelhausbergen" },
      { "@type": "AdministrativeArea", "name": "Niederhausbergen" },
      { "@type": "AdministrativeArea", "name": "Schiltigheim" },
      { "@type": "AdministrativeArea", "name": "Bischheim" },
      { "@type": "AdministrativeArea", "name": "Hœnheim" },
      { "@type": "AdministrativeArea", "name": "Eckbolsheim" },
      { "@type": "AdministrativeArea", "name": "Wolfisheim" }
    ]
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${libreCaslon.variable} ${workSans.variable} font-sans min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />

        {/* Alert banners — below the navbar */}
        {bannerAlerts.map((alert) => (
          <AlertBanner key={alert._id} alert={alert} />
        ))}

        <div className="flex-1">{children}</div>

        {/* Alert banners — above the footer */}
        {bannerAlerts.map((alert) => (
          <AlertBanner key={`footer-${alert._id}`} alert={alert} />
        ))}

        <Footer />
        <Toaster />

        {/* Alert popup — rendered once per session */}
        {popupAlert && <AlertPopup alert={popupAlert} />}
      </body>
    </html>
  );
}
