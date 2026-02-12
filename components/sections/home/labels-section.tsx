import Image from "next/image";

export function LabelsSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-foreground text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        <div className="col-span-1 flex justify-center">
          <Image
            src="acaced.svg"
            alt="Label Pet Sitter Professionnelle"
            width={300}
            height={300}
            className="border-2 border-foreground w-50 md:w-75 h-auto"
          />
        </div>

        <div className="col-span-1 md:col-span-2 max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-stroke-title">
            Cependant,
          </h2>
          <p className="text-lg text-justify md:text-xl mb-6 md:mb-8 leading-relaxed">
            Parce que <strong>l&apos;amour des animaux</strong> ne suffit pas
            pour en garantir la <strong>sécurité</strong>, j’ai tenu à
            professionnaliser ma passion. <br />
            Pour leur offrir le meilleur, je suis aujourd&apos;hui titulaire de{" "}
            <strong>l&apos;ACACED complet (Chien/Chat/NAC)</strong> et formée
            aux Gestes de premiers secours canins ainsi qu&apos;au{" "}
            <strong>Métier de Pet-Sitter</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
