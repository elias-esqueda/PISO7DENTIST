import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { FloorTag } from "./FloorTag";
import { Reveal } from "./Reveal";
import { VALUES, SITE } from "@/lib/constants";

export function Values() {
  return (
    <section className="relative bg-surface-muted/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <FloorTag code="P7·05" label="Por qué Piso7" className="mb-6" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Razones para elegir
                <span className="text-accent italic"> Piso7.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                href={SITE.mapsUrl}
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 rounded-[2px] border border-border-subtle bg-surface px-6 py-5 transition-colors hover:border-accent"
              >
                <Star className="h-4 w-4 text-accent" />
                <span className="flex flex-col">
                  <span className="font-display text-base text-foreground">
                    Lee nuestras opiniones en Google
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Piso7 Dental · {SITE.city}
                  </span>
                </span>
                <ArrowUpRight className="ml-4 h-4 w-4 text-muted-foreground" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-border-subtle bg-border-subtle sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.code} delay={i * 0.08}>
                <div className="bg-surface p-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {v.code}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
