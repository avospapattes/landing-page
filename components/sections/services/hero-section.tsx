"use client";

export function HeroSection() {
  return (
    <section className="w-full p-4 md:p-8 bg-background">
      <div className="container mx-auto text-center space-y-4">
        <h1 className="text-7xl font-bold text-stroke-title">Mes Services</h1>
        <p className="text-foreground text-lg max-w-2xl mx-auto">
          Des prestations sur-mesure pour le bonheur de vos compagnons à quatre
          pattes.
        </p>
      </div>
    </section>
  );
}
