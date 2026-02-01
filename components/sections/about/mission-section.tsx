import Image from "next/image";
import { Target } from "lucide-react";

export function MissionSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          Mon objectif ?
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-lg leading-relaxed">
            <p>
              Que votre absence soit la plus <strong>sereine</strong> possible
              pour eux comme pour vous.
            </p>
            <p>
              Je projette d&apos;ailleurs de me spécialiser prochainement dans
              les <strong>massages canins</strong> pour leur apporter encore
              plus de <strong>détente</strong>.
            </p>
            <p>
              Sérieuse, organisée et profondément attentive à leurs besoins, je
              m&apos;engage à leur offrir une{" "}
              <strong>présence aimante et sécurisante</strong>.
            </p>
          </div>
          <div className="shrink-0 flex gap-4">
            <Image
              src="vercel.svg"
              alt="Mon objectif"
              width={100}
              height={100}
              className="border-4 border-foreground rounded-lg"
            />
            <Image
              src="vercel.svg"
              alt="Mon objectif"
              width={100}
              height={100}
              className="border-4 border-foreground rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
