"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";
import { FloorTag } from "./FloorTag";
import { SITE, waLink } from "@/lib/constants";

const headline = ["Aquí,", "tu sonrisa", "está en casa."];

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-28 pb-16"
    >
      {/* ambient glow — the clinic's own neon tooth sign, blurred into a soft backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[90px] sm:left-2/3">
          <Image
            src="/images/clinica/diente-neon.jpg"
            alt=""
            fill
            className="scale-125 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FloorTag code="P7" label={SITE.tagline} tone="onDark" className="mb-8" />
          </motion.div>

          <h1 className="font-display text-6xl leading-[0.98] tracking-tight text-cream-50 sm:text-7xl md:text-8xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-gold-400 italic" : ""}`}
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
            className="mt-8 max-w-md text-balance text-lg leading-relaxed text-stone-400"
          >
            Un equipo que combina precisión clínica y calidez humana, con
            planeación digital milimétrica, para que confíes en tu sonrisa
            desde el primer momento.
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
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-950 transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Agenda tu cita
            </Link>
            <Link
              href="#equipo"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Conoce al equipo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500"
          >
            <span>Dr. Carlos Inzunza</span>
            <span className="h-1 w-1 rounded-full bg-current/50" />
            <span>Dr. Jesús Cambustón</span>
            <span className="h-1 w-1 rounded-full bg-current/50" />
            <span>{SITE.city}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-ink-700" />
          <div className="absolute inset-8 rounded-full border border-dashed border-gold-500/30 animate-[spin_60s_linear_infinite]" />
          <div className="relative h-52 w-52 overflow-hidden rounded-full border border-ink-700 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)]">
            <Image
              src="/images/clinica/diente-neon.jpg"
              alt="Letrero de neón con el logo de Piso7 Dental"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-6 right-6 rounded-full border border-ink-700 bg-ink-900 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-400">
            Nuestro consultorio
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-500 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Desplázate</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
