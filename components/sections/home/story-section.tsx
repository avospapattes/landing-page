import Image from "next/image";

export function StorySection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white text-foreground">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-12 text-stroke-title font-extrabold">
          Mon histoire
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-center md:text-left">
            <p className="text-justify">
              Je m’appelle <strong>Nathalie</strong>. Après 25 ans de carrière
              dans le secteur financier, j&apos;ai choisi de me consacrer
              pleinement à ma passion : <strong>le monde animal</strong>.
            </p>
            <p className="text-justify">
              Ce changement de vie est le fruit d’une{" "}
              <strong>volonté profonde</strong> d&apos;aligner mon quotidien
              avec mes valeurs de bienveillance et de partage.
            </p>
            <p className="text-justify">
              <strong>Mère de deux grands enfants</strong>, la présence de
              compagnons à <strong>quatre pattes</strong> a toujours été une
              évidence dans notre foyer.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <Image
              src="/nathalie&alfy.jpg"
              alt="Nathalie avec un chien"
              width={350}
              height={350}
              className="neo-shadow w-62.5 md:w-87.5 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
