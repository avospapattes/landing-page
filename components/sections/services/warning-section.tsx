import { TriangleAlert } from "lucide-react";

export function WarningSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-8 bg-background">
      <TriangleAlert className="w-16 h-16 text-foreground" />
      <div className="text-center space-y-2">
        <p className="text-3xl font-bold text-foreground">
          Pas de chiens catégorisés ou réactifs.
        </p>
        <p className="text-3xl font-bold text-foreground">
          Pas de garde à mon domicile.
        </p>
      </div>
    </section>
  );
}
