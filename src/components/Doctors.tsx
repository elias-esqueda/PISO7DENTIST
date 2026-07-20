import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FloorTag } from "./FloorTag";
import { PortraitFrame } from "./PortraitFrame";
import { Reveal } from "./Reveal";
import { DOCTORS } from "@/lib/constants";

export function Doctors() {
  return (
    <section id="equipo" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <FloorTag code="P7·03" label="Equipo" className="mx-auto mb-6 justify-center" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Las manos detrás de
              <span className="text-accent italic"> cada sonrisa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {DOCTORS.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 0.12}>
              <article className="group grid grid-cols-1 gap-8 sm:grid-cols-[220px_1fr] sm:gap-8">
                <PortraitFrame name={doc.name} photo={doc.photo} className="sm:aspect-[4/5]" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {doc.brand}
                  </span>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
                    {doc.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {doc.role}
                  </p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {doc.bio}
                  </p>
                  <p className="mt-5 font-display text-xl italic text-accent">
                    &ldquo;{doc.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex gap-4">
                    {doc.social.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                      >
                        {s.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
