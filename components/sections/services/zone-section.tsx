import Image from "next/image";

export function ZoneSection() {
  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-foreground text-white"
      id="zone"
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl text-center text-stroke-title">
          Zone d’intervention gratuite
        </h2>

        <div className="relative w-full aspect-video max-w-4xl neo-shadow rounded-xl overflow-hidden bg-white">
          <Image
            src="/zone.png"
            alt="Carte de la zone d'intervention"
            fill
            className="object-contain"
          />
        </div>

        <div className="text-center space-y-4 max-w-3xl">
          <p className="text-xl leading-relaxed">
            J’interviens sans frais supplémentaires dans un rayon de près de{" "}
            <strong>10kms</strong> autour d&apos;Oberhausbergen (zone verte).
          </p>
          <p className="text-muted-foreground">
            Au-delà, un tarif de <strong>0,50€ / km</strong> supplémentaire est
            appliqué.
          </p>
        </div>
      </div>
    </section>
  );
}
