import type { Metadata } from "next";
import Navbar from "./ui/navbar";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
