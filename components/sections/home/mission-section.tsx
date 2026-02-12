import Image from "next/image";

export function MissionSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8 md:mb-12 flex items-center justify-center gap-3 text-stroke-title">
          Mon objectif ?
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-base md:text-lg leading-relaxed text-center md:text-left">
            <p className="text-justify">
              Que votre absence soit la plus <strong>sereine</strong> possible
              pour eux comme pour vous.
            </p>
            <p className="text-justify">
              Sérieuse, organisée et profondément attentive à leurs besoins, je
              m&apos;engage à leur offrir une{" "}
              <strong>présence aimante et sécurisante</strong>.
            </p>
            <p className="text-justify">
              Je projette d&apos;ailleurs de me spécialiser prochainement dans
              les <strong>massages</strong> pour leur apporter encore plus de{" "}
              <strong>détente</strong>.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center md:block mt-8 md:mt-0 relative w-full md:w-auto h-87.5 md:h-auto">
            {/* Responsive container for images */}
            <div className="relative w-75 h-87.5 md:w-auto md:h-auto">
              <Image
                src="/aribo.jpg"
                alt="Mon objectif"
                width={200}
                height={200}
                className="absolute left-0 top-0 w-40 h-auto md:w-auto md:static md:ml-0 neo-shadow z-10"
              />
              <Image
                src="/hemy.jpg"
                alt="Mon objectif"
                width={200}
                height={200}
                className="absolute right-0 bottom-0 w-40 h-auto md:w-auto md:static md:ml-45 md:-mt-60 neo-shadow z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
