"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall, X } from "lucide-react";

type ToastType = "admissions" | "consult";

interface ToastConfig {
  icon: React.ReactNode;
  iconBg: string;
  wrapperBg: string;
  badge?: { label: string; className: string };
  title: string;
  titleColor: string;
  body: string;
  bodyColor: string;
}

const toastConfig: Record<ToastType, ToastConfig> = {
  admissions: {
    icon: <Mail className="h-4 w-4 text-white" />,
    iconBg: "bg-violet-600",
    wrapperBg: "bg-gradient-to-br from-violet-50 to-indigo-100 border border-violet-200",
    title: "We're here to help!",
    titleColor: "text-violet-800",
    body: "Our admissions team will guide you through every step — from application to enrollment. Expect a reply within 24 hours.",
    bodyColor: "text-violet-700",
  },
  consult: {
    icon: <PhoneCall className="h-4 w-4 text-white" />,
    iconBg: "bg-sky-500",
    wrapperBg: "bg-gradient-to-br from-sky-50 to-cyan-100 border border-sky-200",
    badge: { label: "Free session", className: "bg-green-100 text-green-700" },
    title: "Book your free consultation",
    titleColor: "text-sky-800",
    body: "Speak 1-on-1 with an expert advisor. We'll match you with the right program and answer all your questions.",
    bodyColor: "text-sky-700",
  },
};

export default function ActionButtons() {
  const [active, setActive] = useState<ToastType | null>(null);

  const toggle = (type: ToastType) =>
    setActive((prev) => (prev === type ? null : type));

  const cfg: ToastConfig | null = active ? toastConfig[active] : null;

  return (
    <div className="flex flex-col gap-3 md:gap-4">

      {/* Toast notification */}
      {cfg && (
        <div className={`flex items-start gap-3 rounded-2xl p-4 shadow-sm transition-all duration-300 ${cfg.wrapperBg}`}>
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${cfg.iconBg}`}>
            {cfg.icon}
          </div>
          <div className="flex-1 min-w-0">
            {cfg.badge && (
              <span className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.badge.className}`}>
                {cfg.badge.label}
              </span>
            )}
            <p className={`text-sm font-semibold ${cfg.titleColor}`}>{cfg.title}</p>
            <p className={`mt-0.5 text-sm leading-relaxed ${cfg.bodyColor}`}>{cfg.body}</p>
          </div>
          <button
            onClick={() => setActive(null)}
            className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-3 md:gap-4">

        {/* Contact Admissions — original style */}
        <Button
          size="lg"
          onClick={() => toggle("admissions")}
          className="bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Admissions
        </Button>

        {/* Book a Consultation — original style */}
        <Button
          size="lg"
          onClick={() => toggle("consult")}
          className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-slate-900 font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <PhoneCall className="mr-2 h-4 w-4" />
          Book a Consultation
        </Button>

      </div>
    </div>
  );
}