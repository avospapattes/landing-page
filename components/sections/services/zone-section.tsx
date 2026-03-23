"use client";
import dynamic from "next/dynamic";
import { PawPrint, Bone } from "lucide-react";

const InterventionMap = dynamic(() => import("./InterventionMap"), {
  ssr: false,
  loading: () => <div className="bg-neutral-900 w-full h-full animate-pulse" />,
});

export function ZoneSection() {
  return (
    <section
      className="bg-foreground px-4 md:px-8 py-20 w-full text-white relative overflow-hidden"
      id="zone"
    >
      <Bone
        className="absolute top-10 right-10 w-40 h-40 text-white/50 rotate-30 pointer-events-none"
        strokeWidth={1}
      />

      {/* 2. Primary Orange Paw - Bottom Left, peaking in */}
      <PawPrint
        className="absolute bottom-10 left-[-30px] w-28 h-28 text-primary/60 -rotate-45 pointer-events-none"
        strokeWidth={1.5}
      />

      {/* 3. Small Teal Bone - Mid Left */}
      <Bone className="absolute top-1/2 left-10 w-12 h-12 text-teal-500/10 rotate-12 pointer-events-none hidden xl:block" />

      <div className="flex flex-col items-center gap-8 md:gap-12 mx-auto max-w-6xl container relative z-10">
        <h2 className="text-stroke-title text-3xl md:text-5xl text-center font-extrabold uppercase">
          Zone d’intervention
        </h2>

        {/* --- MAP CONTAINER --- */}
        <div className="z-0 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white neo-shadow-lg w-full max-w-4xl aspect-square md:aspect-video overflow-hidden bg-neutral-900">
          {/* --- INTERNAL DECORATIONS (Map Framing) --- */}
          {/* Paw in Top Left */}
          <PawPrint className="absolute top-4 left-4 w-6 h-6 text-primary z-20 -rotate-12" />

          {/* Bone in Bottom Right */}
          <Bone
            className="absolute bottom-4 right-4 w-10 h-10 text-primary z-20 rotate-45 opacity-60"
            strokeWidth={1.5}
          />

          <InterventionMap />
        </div>

        <div className="space-y-4 max-w-3xl text-center px-4 relative">
          <PawPrint className="hidden md:block absolute -left-16 top-0 w-10 h-10 text-primary rotate-[30deg]" />

          <Bone className="hidden md:block absolute -right-16 bottom-0 w-12 h-12 text-teal-500 -rotate-12 opacity-80" />

          <p className="font-light text-lg md:text-2xl leading-relaxed">
            J’interviens sans frais supplémentaires dans la zone indiquée en
            vert autour d&apos;Oberhausbergen.
          </p>

          <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-widest font-bold">
            Au-delà, un tarif de <span className="text-white">0,50€ / km</span>{" "}
            supplémentaire est appliqué.
          </p>
        </div>
      </div>
    </section>
  );
}
