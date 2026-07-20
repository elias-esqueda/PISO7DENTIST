"use client";

import { motion } from "motion/react";
import { Baby, Layers, Smile, Sparkles, Anchor, ScanFace } from "lucide-react";
import { FloorTag } from "./FloorTag";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { SERVICES, type Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], typeof Sparkles> = {
  layers: Layers,
  sparkles: Sparkles,
  anchor: Anchor,
  aligner: ScanFace,
  baby: Baby,
  smile: Smile,
};

export function Services() {
  return (
    <section id="servicios" className="relative bg-surface-muted/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <FloorTag code="P7·02" label="Servicios" className="mx-auto mb-6 justify-center" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Un tratamiento para cada
              <span className="text-accent italic"> etapa de tu sonrisa.</span>
            </h2>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.code}
                variants={staggerItem}
                className="group relative flex flex-col gap-6 bg-surface p-8 transition-colors duration-500 hover:bg-ink-950"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    {service.code}
                  </span>
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-foreground transition-colors duration-500 group-hover:text-cream-50">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-stone-400">
                  {service.description}
                </p>
                <span className="mt-auto h-px w-10 bg-accent transition-all duration-500 group-hover:w-16" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
