import Image from "next/image";

export function ZoneSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 space-y-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-stroke-title">
        Zone d’intervention gratuite
      </h1>
      <Image
        src="/zone.png"
        alt="Zone d'intervention"
        width={1000}
        height={600}
        className="rounded-xl shadow-lg border-4 border-white w-full max-w-4xl"
      />
    </section>
  );
}
