import { TriangleAlert } from "lucide-react";

export function WarningSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-8 px-4 bg-background">
      <TriangleAlert className="w-12 h-12 md:w-16 md:h-16 text-foreground mb-4" />
      <div className="text-center space-y-2">
        <p className="text-xl md:text-3xl font-bold text-foreground">
          Pas de chiens catégorisés ou réactifs.
        </p>
        <p className="text-xl md:text-3xl font-bold text-foreground">
          Pas de garde à mon domicile.
        </p>
      </div>
    </section>
  );
}
