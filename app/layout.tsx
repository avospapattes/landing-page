import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "./ui/navbar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "À vos papattes",
  description: "À vos papattes by Nath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${openSans.variable} font-sans h-screen flex flex-col`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
