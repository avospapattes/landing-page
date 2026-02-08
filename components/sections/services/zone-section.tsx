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
      <div className="flex flex-col items-center gap-12 mx-auto max-w-6xl container">
        <h2 className="text-stroke-title text-4xl md:text-5xl text-center">
          Zone d’intervention
        </h2>

        <div className="z-0 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 rounded-2xl w-full max-w-4xl aspect-square md:aspect-video overflow-hidden">
          <InterventionMap />
        </div>

        <div className="space-y-4 max-w-3xl text-center">
          <p className="font-light text-xl md:text-2xl">
            J’interviens sans frais supplémentaires dans un rayon de{" "}
            <strong className="font-bold text-green-400 decoration-green-400/30 underline underline-offset-8">
              10kms
            </strong>{" "}
            autour d&apos;Oberhausbergen.
          </p>
          <p className="text-neutral-400 text-sm">
            Au-delà, un tarif de <strong>0,50€ / km</strong> supplémentaire est
            appliqué.
          </p>
        </div>
      </div>
    </section>
  );
}
