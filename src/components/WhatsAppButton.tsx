"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-5 z-50 sm:bottom-8 sm:right-8"
    >
      <Link
        href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")}
        target="_blank"
        aria-label="Escríbenos por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink-950 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-ink-950 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-cream-50 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Escríbenos
        </span>
      </Link>
    </motion.div>
  );
}
