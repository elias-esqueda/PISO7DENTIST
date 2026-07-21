import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contacto" className="theme-panel theme-panel-d relative overflow-hidden bg-surface-muted py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <Reveal><div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.3em] text-accent"><span>05</span><span className="h-px w-12 bg-current"/><span>Contacto</span></div></Reveal>
            <Reveal delay={.05}><h2 className="mt-8 max-w-[650px] text-balance font-display text-[clamp(3.15rem,5.3vw,5.9rem)] leading-[.9] tracking-[-.04em]">Tu lugar en el <span className="italic text-accent">piso 7</span> está listo.</h2></Reveal>
            <Reveal delay={.1}><p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">Escríbenos y te ayudaremos a elegir el horario y especialista ideal para tu primera valoración.</p></Reveal>
            <Reveal delay={.15}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")} target="_blank" className="group flex items-center justify-between gap-7 bg-ink-950 px-5 py-4 font-mono text-[9px] uppercase tracking-[.18em] text-cream-50 sm:px-6 sm:text-[10px]">Agendar por WhatsApp <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
                <a href={`tel:+${SITE.phoneWa}`} className="flex items-center gap-3 border border-border-subtle px-5 py-4 font-mono text-[9px] uppercase tracking-[.16em] sm:px-6 sm:text-[10px]"><Phone className="h-4 w-4"/>{SITE.phoneDisplay}</a>
              </div>
            </Reveal>
            <Reveal delay={.18}>
              <Link href={SITE.mapsUrl} target="_blank" className="mt-10 flex max-w-lg items-start gap-4 border-t border-border-subtle pt-5 text-sm leading-6 text-muted-foreground transition-colors hover:text-accent">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0"/>
                <span><strong className="block font-medium text-foreground">Piso7 Dental</strong>{SITE.address}</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={.1}>
            <div className="relative min-h-[420px] overflow-hidden border border-border-subtle sm:min-h-[520px] lg:min-h-[620px]">
              <iframe title="Ubicación real de Piso7 Dental en Hermosillo" src={SITE.mapsEmbedUrl} loading="lazy" className="absolute inset-0 h-full w-full grayscale contrast-[.9] transition-[filter] duration-500 hover:grayscale-0 hover:contrast-100" referrerPolicy="no-referrer-when-downgrade" />
              <div className="pointer-events-none absolute inset-0 border-[8px] border-background/15 sm:border-[12px]" />
              <div className="absolute bottom-4 left-4 right-4 bg-cream-50/95 px-4 py-3 text-ink-950 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:px-5 sm:py-4">
                <p className="font-mono text-[8px] uppercase tracking-[.2em] text-gold-700">Ubicación exacta · Piso 7</p>
                <p className="mt-1 text-xs leading-5 text-ink-800">Blvd. Francisco Eusebio Kino 315 · Lomas Pitic</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
