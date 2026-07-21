"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/cn";

type WelcomeVideoProps = {
  className?: string;
};

export function WelcomeVideo({ className }: WelcomeVideoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ver el video de bienvenida de Piso7 Dental"
        className={cn(
          "group relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-[2px] border border-border-subtle bg-ink-950 shadow-[0_30px_80px_-25px_rgba(16,13,10,0.55)] transition-transform duration-500 hover:scale-[1.02]",
          className,
        )}
      >
        <Image
          src="/videos/bienvenida-poster.jpg"
          alt="Bienvenida a Piso7 Dental"
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cream-50/95 text-ink-950 shadow-lg transition-transform duration-500 group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </span>
        <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/85">
          Ver video &middot; 1:22
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-5 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] max-h-[88vh] w-auto overflow-hidden rounded-[4px] bg-black"
            >
              <video
                src="/videos/bienvenida.mp4"
                poster="/videos/bienvenida-poster.jpg"
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar video"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-cream-50 backdrop-blur transition-colors hover:bg-ink-950"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
