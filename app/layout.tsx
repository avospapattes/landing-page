import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "À vos papattes",
  description: "À vos papattes by Nath",
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL("https://avospapattes.fr"),
  openGraph: {
    title: "À vos papattes",
    description: "À vos papattes by Nath",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "À vos papattes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À vos papattes",
    description: "À vos papattes by Nath",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${openSans.variable} font-sans min-h-screen flex flex-col`}
      >
        <header>
          <Navbar />
        </header>
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
