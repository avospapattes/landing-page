import { TriangleAlert } from "lucide-react";

export function WarningSection() {
  return (
    <section className="w-full pb-16 px-4 bg-transparent">
      <div className="max-w-xl mx-auto bg-white border-2 border-secondary p-6 rounded-sm shadow-[4px_4px_0px_var(--primary)] flex items-start gap-4">
        <TriangleAlert className="w-8 h-8 text-primary shrink-0 mt-0.5" />
        <div className="space-y-1 text-left">
          <h4 className="font-serif text-lg font-bold text-secondary">
            Informations importantes
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-secondary/90 font-medium text-body-md">
            <li>Pas de chiens catégorisés ou réactifs.</li>
            <li>Pas de garde à mon domicile.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
