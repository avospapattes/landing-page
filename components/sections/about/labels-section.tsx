import Image from "next/image";

export function LabelsSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-primary/10">
      <div className="grid grid-cols-3 items-center max-w-5xl mx-auto">
        <Image
          src="vercel.svg"
          alt="Label Pet Sitter Professionnelle"
          width={100}
          height={100}
          className="col-span-1 border-2 border-foreground"
        />

        <div className="col-span-2 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Cependant,</h2>
          <p className="text-xl mb-8">
            Parce que <strong>l&apos;amour des animaux</strong> ne suffit pas
            pour en garantir la <strong>sécurité</strong>, j’ai tenu à
            professionnaliser ma passion. <br />
            Pour leur offrir le meilleur, je suis aujourd&apos;hui titulaire de
            <strong>l&apos;ACACED complet (Chien/Chat/NAC)</strong> et formée
            aux Gestes de premiers secours canins ainsi qu&apos;au{" "}
            <strong>Métier de Pet-Sitter</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
