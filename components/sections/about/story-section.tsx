import Image from "next/image";

export function StorySection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white text-foreground">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-7xl text-center mb-12">Mon histoire</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-8">Bonjour,</h2>
            <p>
              Je m’appelle <strong>Nathalie</strong>. Après 25 ans de carrière
              dans le secteur financier, j&apos;ai choisi de me consacrer
              pleinement à ma passion : <strong>le monde animal</strong>.
            </p>
            <p>
              Ce changement de vie est le fruit d’une{" "}
              <strong>volonté profonde</strong> d&apos;aligner mon quotidien
              avec mes valeurs de bienveillance et de partage.
            </p>
            <p>
              <strong>Mère de deux grands enfants</strong>, la présence de
              compagnons à <strong>quatre pattes</strong> a toujours été une
              évidence dans notre foyer.
            </p>
          </div>
          <div className="shrink-0">
            <Image
              src="/nathalie&alfy.jpg"
              alt="Nathalie avec un chien"
              width={350}
              height={350}
              className="neo-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
