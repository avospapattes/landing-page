"use client";

import { useEffect, useState } from "react";
import { X, Info, AlertTriangle, AlertOctagon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AlertData } from "./alert-banner";

const SEVERITY_CONFIG = {
  info: {
    icon: Info,
    headerClass: "bg-sky-600",
    bodyClass: "bg-white",
    iconClass: "text-white",
    titleColor: "text-sky-700",
    label: "Information",
  },
  warning: {
    icon: AlertTriangle,
    headerClass: "bg-amber-500",
    bodyClass: "bg-white",
    iconClass: "text-white",
    titleColor: "text-amber-700",
    label: "Avertissement",
  },
  urgent: {
    icon: AlertOctagon,
    headerClass: "bg-red-600",
    bodyClass: "bg-white",
    iconClass: "text-white",
    titleColor: "text-red-700",
    label: "Message urgent",
  },
};

const POPUP_STORAGE_KEY = "avospapattes_alert_popup_dismissed";

export function AlertPopup({ alert }: { alert: AlertData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!alert.active) return;
    if (alert.type === "banner") return;

    // Don't show if dismissed in this session
    const dismissed = sessionStorage.getItem(`${POPUP_STORAGE_KEY}_${alert._id}`);
    if (!dismissed) {
      // Small delay for polish
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, [alert]);

  const handleDismiss = () => {
    sessionStorage.setItem(`${POPUP_STORAGE_KEY}_${alert._id}`, "true");
    setVisible(false);
  };

  if (!visible) return null;

  const { icon: Icon, headerClass, bodyClass, iconClass, label } =
    SEVERITY_CONFIG[alert.severity] ?? SEVERITY_CONFIG.info;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleDismiss}
    >
      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/20 animate-in zoom-in-95 duration-300",
          bodyClass
        )}
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-label="Alerte"
      >
        {/* Header */}
        <div className={cn("flex items-center gap-3 px-6 py-4", headerClass)}>
          <Icon className={cn("w-6 h-6 shrink-0", iconClass)} />
          <span className="font-bold text-white text-base tracking-wide uppercase">{label}</span>
          <button
            onClick={handleDismiss}
            aria-label="Fermer"
            className="ml-auto p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          <p className="text-secondary text-sm leading-relaxed font-medium">{alert.message}</p>

          <div className="flex items-center justify-end gap-3">
            {alert.linkLabel && alert.linkUrl && (
              <Link
                href={alert.linkUrl}
                target={alert.linkUrl.startsWith("http") ? "_blank" : undefined}
                rel={alert.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={handleDismiss}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold bg-secondary text-white hover:bg-secondary/80 transition-colors"
              >
                {alert.linkLabel}
                {alert.linkUrl.startsWith("http") && <ExternalLink className="w-3.5 h-3.5" />}
              </Link>
            )}
            <button
              onClick={handleDismiss}
              className="px-4 py-2 rounded-full text-sm font-bold border-2 border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
