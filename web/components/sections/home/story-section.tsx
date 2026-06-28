import Image from "next/image";

export function StorySection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 text-foreground" id="presentation">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header for SEO */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-display-lg mb-4 text-stroke-title">
            Qui suis-je ?
          </h2>
          <p className="text-body-lg text-secondary/85 max-w-3xl mx-auto font-medium">
            Découvrez mon parcours de <strong>Pet Sitter à Strasbourg</strong>, mon histoire et mon engagement au quotidien pour le bien-être de vos compagnons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Column: Narrative (Story & Goal) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-body-lg text-justify text-secondary/90">
              <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
                Mon histoire
              </h3>
              <p>
                Je m’appelle <strong>Nathalie</strong>. Après 25 ans de carrière
                dans le secteur financier, j&apos;ai choisi de me consacrer
                pleinement à ma passion : <strong>le monde animal</strong>.
              </p>
              <p>
                Ce changement de vie est le fruit d’une{" "}
                <strong>volonté profonde</strong>{" "}d&apos;aligner mon quotidien
                avec mes valeurs de bienveillance et de partage.
              </p>
              <p>
                <strong>Mère de deux grands enfants</strong>, la présence de
                compagnons à <strong>quatre pattes</strong> a toujours été une
                évidence dans notre foyer.
              </p>
            </div>

            <hr className="border-t border-secondary/20 my-6" />

            <div className="space-y-4 text-body-lg text-justify text-secondary/90">
              <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
                Mon objectif ?
              </h3>
              <p>
                Que votre absence soit la plus <strong>sereine</strong> possible
                pour eux comme pour vous.
              </p>

              {/* Editorial Quote Callout */}
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-sm italic text-secondary font-serif text-xl my-6 leading-relaxed">
                « S’occuper de vos compagnons n’est pas un simple travail, c’est une responsabilité que j’assume avec dévouement et tendresse. »
              </div>

              <p>
                Sérieuse, organisée et profondément attentive à leurs besoins, je
                m&apos;engage à leur offrir une{" "}
                <strong>présence aimante et sécurisante</strong>.
              </p>
              <p>
                Je projette d&apos;ailleurs de me spécialiser prochainement dans
                les <strong>massages</strong> pour leur apporter encore plus de{" "}
                <strong>détente</strong> et de confort physique.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Proof (Staggered Gallery & Credentials Card) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Magazine Layout Gallery */}
            <div className="flex flex-col gap-4">
              {/* Featured Large Photo */}
              <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden border-2 border-secondary shadow-sm">
                <Image
                  src="/images/nathalie-and-alfy.jpg"
                  alt="Nathalie avec son chat Alfy"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Staggered Row */}
              <div className="flex flex-row gap-4">
                <div className="relative flex-1 aspect-[3/4] rounded-sm overflow-hidden border-2 border-secondary shadow-sm">
                  <Image
                    src="/images/hero/hero-3.jpg"
                    alt="Un chien regardant Strasbourg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative flex-1 aspect-[3/4] rounded-sm overflow-hidden border-2 border-secondary shadow-sm">
                  <Image
                    src="/images/hero/hero-4.jpg"
                    alt="Une femme cajolant un chien"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Credentials Card (Cependant...) */}
            <div className="bg-white border-2 border-secondary neo-shadow p-6 rounded-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 w-24 h-24 relative">
                <Image
                  src="/icons/badge-acaced.svg"
                  alt="Badge ACACED Professionnel"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 text-justify">
                <h4 className="font-serif text-lg font-bold text-secondary">
                  Sécurité & Professionnalisme
                </h4>
                <p className="text-body-md text-secondary/80 leading-relaxed">
                  Parce que l&apos;amour des animaux ne suffit pas, je suis titulaire de{" "}
                  <strong>l&apos;ACACED complet (Chien/Chat/NAC)</strong>, formée aux
                  premiers secours canins et certifiée pour le <strong>métier de Pet-Sitter</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
