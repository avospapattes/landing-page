/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
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
      <img
        src="/grid.png"
        alt="Background"
        className="absolute inset-0 w-8/10 left-1/8 h-full object-cover z-0"
      />
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-8 px-4">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left w-full xl:w-1/2 z-40">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-7xl font-extrabold text-stroke-title leading-tight">
            Nathalie, <br />
            votre Pet Sitter <br />
            professionnelle
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl leading-relaxed">
            <strong>déclarée</strong> et <strong>assurée</strong>, qui garde vos
            animaux à votre <strong>domicile</strong>. <br />
            Confiez-moi vos précieux compagnons en toute{" "}
            <strong>sécurité</strong> ! <br />
            J&apos;assure leur quotidien avec bienveillance, tendresse et
            professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-white text-lg h-14"
            >
              <Link href="/contact">
                Contactez-moi
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 shadow-[5px_5px_0px_rgba(255,126,0,1)] border-2 border-white rounded-none text-black text-lg h-14"
            >
              <Link href="/services">
                Voir les services
                <Info className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-center mt-4 xl:mt-0">
          {/* Reduced max-width and min-height for a more compact cluster */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] min-h-[400px] sm:min-h-[500px]">
            {/* Alfy - Top Left */}
            <Image
              src="/alfy.jpeg"
              alt="Alfy"
              width={180}
              height={180}
              className="absolute top-0 left-0 w-[55%] z-10 neo-shadow object-cover aspect-square"
            />

            {/* Hemy & Co - Center Right */}
            <Image
              src="/hemy&co.jpg"
              alt="Hemy & Co"
              width={220}
              height={220}
              className="absolute top-[20%] right-0 w-[60%] z-20 neo-shadow object-cover aspect-square"
            />

            {/* Wifille - Bottom Left */}
            <Image
              src="/wifille.jpeg"
              alt="Wifille"
              width={180}
              height={180}
              className="absolute bottom-0 left-[5%] w-[55%] z-30 neo-shadow object-cover aspect-square"
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
