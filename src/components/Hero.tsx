"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";
import { ToothMark } from "./ToothMark";
import { FloorTag } from "./FloorTag";
import { SITE, waLink } from "@/lib/constants";

const headline = ["Tu sonrisa,", "en el piso", "más alto."];

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-background pt-28 pb-16"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold-600/20 blur-[120px]" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-oak-600/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 30% 30%, black, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FloorTag code="P7" label={SITE.tagline} className="mb-8" />
          </motion.div>

          <h1 className="font-display text-6xl leading-[0.98] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-accent italic" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 max-w-md text-balance text-lg leading-relaxed text-muted-foreground"
          >
            Odontología estética integral en {SITE.city}. Rehabilitación,
            implantes, carillas y diseño de sonrisa bajo un mismo techo —
            con la precisión clínica y la calidez que tu familia merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")}
              target="_blank"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-950 transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Agenda tu cita
            </Link>
            <Link
              href="#equipo"
              className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Conoce al equipo
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-border-subtle" />
          <div className="absolute inset-8 rounded-full border border-dashed border-gold-500/30 animate-[spin_60s_linear_infinite]" />
          <div className="animate-float">
            <ToothMark animate className="h-40 w-40 text-accent drop-shadow-[0_0_40px_rgba(194,154,92,0.35)]" />
          </div>
          <span className="absolute bottom-6 right-6 rounded-full border border-border-subtle bg-surface px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Hermosillo, Son.
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Desplázate</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
