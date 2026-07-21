"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE, waLink } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="grain relative min-h-[100svh] overflow-hidden bg-ink-950 text-cream-50">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
        src="/videos/hero-piso7.mp4"
        poster="/videos/hero-piso7-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Recorrido por las instalaciones de Piso7 Dental"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,8,.32)_0%,rgba(5,7,8,.15)_38%,rgba(5,7,8,.78)_100%)]" />
      <div className="hero-light absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,transparent_0%,rgba(5,7,8,.18)_38%,rgba(5,7,8,.58)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-36 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute left-1/2 top-[45%] hidden -translate-x-1/2 -translate-y-1/2 xl:block">
          <Image src="/logo-lockup.svg" alt="Piso7 Dental" width={300} height={265} loading="eager" className="h-auto w-[210px] brightness-0 invert drop-shadow-2xl 2xl:w-[235px]" />
        </motion.div>

        <div className="grid items-end gap-5 border-t border-white/35 pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mb-4 font-mono text-[9px] uppercase tracking-[0.34em] text-gold-300 sm:text-[10px]">
              Odontología estética integral · Piso 7
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl font-display text-[clamp(3.2rem,7.5vw,7.3rem)] leading-[0.82] tracking-[-0.045em]">
              Una nueva perspectiva
              <span className="block font-normal italic text-gold-300">para tu sonrisa.</span>
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="lg:justify-self-end">
            <p className="max-w-sm text-sm leading-relaxed text-white/72 sm:text-base">
              Precisión clínica, tecnología y calidez humana en un espacio diseñado para hacerte sentir en confianza.
            </p>
            <Link href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")} target="_blank" className="group mt-6 inline-flex items-center gap-4 bg-cream-50 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-300">
              Agenda tu valoración
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-7 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/55">
          <span>{SITE.city}</span>
          <Link href="#nosotros" className="hidden items-center gap-2 transition-colors hover:text-white sm:flex">Descubre <ArrowDown className="h-3.5 w-3.5 animate-bounce" /></Link>
        </div>
      </div>
    </section>
  );
}
