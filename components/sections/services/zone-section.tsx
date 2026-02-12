"use client";
import dynamic from "next/dynamic";

const InterventionMap = dynamic(() => import("./InterventionMap"), {
  ssr: false,
  loading: () => <div className="bg-neutral-900 w-full h-full animate-pulse" />,
});
export function ZoneSection() {
  return (
    <section
      className="bg-foreground px-4 md:px-8 py-20 w-full text-white"
      id="zone"
    >
      <div className="flex flex-col items-center gap-8 md:gap-12 mx-auto max-w-6xl container">
        <h2 className="text-stroke-title text-3xl md:text-5xl text-center">
          Zone d’intervention
        </h2>

        <div className="z-0 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 rounded-2xl w-full max-w-4xl aspect-square md:aspect-video overflow-hidden">
          <InterventionMap />
        </div>

        <div className="space-y-4 max-w-3xl text-center px-4">
          <p className="font-light text-lg md:text-2xl">
            J’interviens sans frais supplémentaires dans la zone indiquée en
            vert d&apos;Oberhausbergen.
          </p>
          <p className="text-neutral-400 text-xs md:text-sm">
            Au-delà, un tarif de <strong>0,50€ / km</strong> supplémentaire est
            appliqué.
          </p>
        </div>
      </div>
    </section>
  );
}
