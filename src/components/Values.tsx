import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VALUES, SITE } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Values() {
  return (
    <section className="grain relative overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32 lg:py-40">
      <div className="absolute inset-0 mineral-lines opacity-50" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal><p className="text-center font-mono text-[9px] uppercase tracking-[.32em] text-gold-400">Nuestra forma de cuidar</p></Reveal>
        <Reveal delay={.05}><h2 className="mx-auto mt-8 max-w-6xl text-center font-display text-[clamp(3.5rem,7.4vw,8rem)] leading-[.84] tracking-[-.05em]">Lo extraordinario está <span className="italic text-gold-300">en los detalles.</span></h2></Reveal>
        <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <Reveal key={value.code} delay={index * .07}>
              <div className="min-h-52 border-b border-white/20 p-6 sm:border-r lg:min-h-64 lg:p-8">
                <span className="font-mono text-[9px] tracking-[.22em] text-gold-400">{value.code}</span>
                <h3 className="mt-14 font-display text-3xl">{value.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-stone-400">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="mt-12 flex justify-center"><Link href={SITE.mapsUrl} target="_blank" className="group flex items-center gap-3 border-b border-gold-400 pb-2 font-mono text-[9px] uppercase tracking-[.22em] text-gold-300">Conoce las experiencias de nuestros pacientes <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link></div></Reveal>
      </div>
    </section>
  );
}
