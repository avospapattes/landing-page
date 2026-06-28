import Image from "next/image";
import Link from "next/link";
import { Info, PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function WelcomeSection() {
  const PAW_PATH = [
    { top: "65%", left: "5%", rotate: "-15deg", scale: 1 },
    { top: "87%", left: "15%", rotate: "10deg", scale: 0.9 },
    { top: "64%", left: "25%", rotate: "-5deg", scale: 1.1 },
    { top: "68%", left: "35%", rotate: "20deg", scale: 0.8 },
    { top: "85%", left: "45%", rotate: "0deg", scale: 1 },
    { top: "87%", left: "55%", rotate: "-10deg", scale: 0.9 },
    { top: "64%", left: "65%", rotate: "15deg", scale: 1.1 },
    { top: "88%", left: "75%", rotate: "-20deg", scale: 0.8 },
    { top: "85%", left: "85%", rotate: "5deg", scale: 1 },
  ];
  return (
    <section className="flex flex-col bg-background text-foreground py-10 xl:py-20 overflow-hidden relative">
      {/* Repeating Dot Grid (Notebook style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#4b331c 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-8 px-4">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left w-full xl:w-1/2 z-40">
          <h1 className="mb-6 text-display-lg leading-tight">
            Nathalie, <br />
            votre Pet Sitter <br />à Strasbourg & Oberhausbergen
          </h1>
          <p className="mb-8 max-w-2xl text-body-lg">
            Service professionnel de{" "}
            <strong>garde d&apos;animaux à domicile</strong>. Pet Sitter{" "}
            <strong>déclarée</strong>, <strong>assurée</strong> et certifiée{" "}
            <strong>ACACED</strong>, je prends soin de vos fidèles compagnons
            (chiens, chats, NAC) à Strasbourg, Oberhausbergen et alentours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg h-14"
            >
              <Link href="/contact">
                Contactez-moi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg h-14"
            >
              <Link href="/services">
                Voir les services
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full xl:w-1/2 mt-12 xl:mt-0 flex justify-center z-20">
          <div className="relative w-full max-w-[550px] aspect-[3/4]">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Nathalie - Pet Sitter à Strasbourg"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative h-30 mb-5 ">
        <style>
          {`
    @keyframes pawAppear {
      0% {
        opacity: 0;
        filter: blur(8px);
        transform: scale(0.5) rotate(-20deg);
        }
        50% {
          opacity: 0.5;
          filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1) rotate(var(--rotation));
            }
            }
            .animate-paw {
              opacity: 0;
              /* Using ease-in-out for a smoother clarity transition */
              animation: pawAppear 0.6s ease-in-out forwards;
              }
              `}
        </style>

        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          {PAW_PATH.map((step, i) => (
            <PawPrint
              key={i}
              className="absolute animate-paw fill-primary"
              style={
                {
                  top: step.top,
                  left: step.left,
                  width: `${step.scale * 48}px`,
                  height: `${step.scale * 48}px`,
                  animationDelay: `${i * 0.2}s`,
                  "--rotation": step.rotate,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
