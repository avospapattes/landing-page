"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function VacationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-amber-50 px-4 py-2 flex items-center justify-center gap-4 text-sm font-medium">
      <span className="text-amber-300">🏖️</span>
      <span>
        Congés&nbsp;:{" "}
        <strong className="text-amber-100">29 mai → 6 juin</strong>
        <span className="mx-2 text-amber-400">•</span>
        <strong className="text-amber-100">20 juin → 24 juin</strong>
        <span className="mx-2 text-amber-400">—</span>
        <span className="text-amber-300">Aucune visite possible à ces dates</span>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        className="ml-2 text-amber-300 hover:text-amber-100 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
