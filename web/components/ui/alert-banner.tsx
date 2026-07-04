"use client";

import { X, Info, AlertTriangle, AlertOctagon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AlertData {
  _id: string;
  message: string;
  active: boolean;
  type: "banner" | "popup" | "both";
  severity: "info" | "warning" | "urgent";
  linkLabel?: string;
  linkUrl?: string;
}

const SEVERITY_CONFIG = {
  info: {
    icon: Info,
    className: "bg-sky-50 border-sky-300 text-sky-800",
    iconClass: "text-sky-500",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-amber-50 border-amber-400 text-amber-900",
    iconClass: "text-amber-500",
  },
  urgent: {
    icon: AlertOctagon,
    className: "bg-red-50 border-red-400 text-red-900",
    iconClass: "text-red-500",
  },
};

/** ─── Banner ─────────────────────────────────────────────────── */
export function AlertBanner({ alert }: { alert: AlertData }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !alert.active) return null;
  if (alert.type === "popup") return null;

  const { icon: Icon, className, iconClass } = SEVERITY_CONFIG[alert.severity] ?? SEVERITY_CONFIG.info;

  return (
    <div
      className={cn(
        "w-full border-y-2 px-4 py-3 flex items-center gap-3 animate-in fade-in duration-300",
        className
      )}
      role="alert"
    >
      <Icon className={cn("w-5 h-5 shrink-0", iconClass)} />
      <p className="flex-1 text-sm font-medium leading-snug">{alert.message}</p>
      {alert.linkLabel && alert.linkUrl && (
        <Link
          href={alert.linkUrl}
          target={alert.linkUrl.startsWith("http") ? "_blank" : undefined}
          rel={alert.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className="shrink-0 inline-flex items-center gap-1 text-xs font-bold underline hover:no-underline"
        >
          {alert.linkLabel}
          {alert.linkUrl.startsWith("http") && <ExternalLink className="w-3 h-3" />}
        </Link>
      )}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Fermer l'alerte"
        className="shrink-0 ml-1 p-1 rounded hover:bg-black/10 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
