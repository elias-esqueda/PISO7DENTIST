import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DOCTORS } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Doctors() {
  return (
    <section id="equipo" className="theme-panel theme-panel-b relative overflow-hidden bg-surface-muted py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.3em] text-accent"><span>03</span><span className="h-px w-12 bg-current"/><span>Especialistas</span></div>
          <div className="mt-8 flex flex-col justify-between gap-6 border-b border-border-subtle pb-10 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl font-display text-[clamp(3.4rem,6.4vw,7rem)] leading-[.87] tracking-[-.045em]">Experiencia que se ve. <span className="italic text-accent">Cuidado que se siente.</span></h2>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">Dos perspectivas, un mismo estándar clínico y una atención realmente personal.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {DOCTORS.map((doctor, index) => (
            <Reveal key={doctor.slug} delay={index * .1}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                  <Image src={doctor.photo!} alt={doctor.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" style={{ objectPosition: doctor.slug === "inzunza" ? "50% 30%" : "56% 30%" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8">
                    <div><p className="font-display text-3xl sm:text-4xl">{doctor.name}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[.22em] text-gold-300">{doctor.role}</p></div>
                    <span className="font-mono text-[9px] tracking-[.2em] text-white/60">0{index + 1}</span>
                  </div>
                </div>
                <div className="grid gap-6 border-b border-border-subtle py-7 sm:grid-cols-[1fr_auto]">
                  <div><p className="max-w-lg text-sm leading-7 text-muted-foreground">{doctor.bio}</p><p className="mt-4 font-display text-2xl italic text-accent">“{doctor.quote}”</p></div>
                  <div className="flex items-end gap-4">{doctor.social.map((social) => <Link key={social.href} href={social.href} target="_blank" className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] hover:text-accent">{social.label}<ArrowUpRight className="h-4 w-4"/></Link>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
