"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SERVICES, waLink } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicios" className="bg-ink-950 py-24 text-cream-50 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.3em] text-gold-400"><span>02</span><span className="h-px w-12 bg-current"/><span>Tratamientos</span></div>
              <h2 className="mt-8 max-w-md font-display text-[clamp(3.4rem,5vw,5.8rem)] leading-[.9] tracking-[-.04em]">Todo lo que tu sonrisa <span className="italic text-gold-300">necesita.</span></h2>
              <p className="mt-8 max-w-sm text-sm leading-7 text-stone-400">Un plan coordinado por especialistas, desde el diagnóstico hasta el último detalle.</p>
              <Link href={waLink("Hola, quiero información sobre los tratamientos de Piso7 Dental.")} target="_blank" className="group mt-9 inline-flex items-center gap-3 border-b border-gold-400 pb-2 font-mono text-[9px] uppercase tracking-[.22em] text-gold-300">Cuéntanos tu caso <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
            </div>
          </Reveal>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ show: { transition: { staggerChildren: .07 } } }} className="border-t border-white/20">
            {SERVICES.map((service) => (
              <motion.article key={service.code} variants={{ hidden: { opacity: 0, x: 25 }, show: { opacity: 1, x: 0 } }} transition={{ duration: .6 }} className="group grid gap-4 border-b border-white/20 py-7 transition-colors hover:bg-white/[.035] sm:grid-cols-[55px_1fr_1fr] sm:items-center sm:px-4 sm:py-8">
                <span className="font-mono text-[9px] tracking-[.25em] text-gold-400">{service.code}</span>
                <h3 className="font-display text-3xl leading-none sm:text-4xl">{service.title}</h3>
                <div className="flex items-center gap-5 sm:justify-between">
                  <p className="max-w-sm text-sm leading-6 text-stone-400">{service.description}</p>
                  <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-gold-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
