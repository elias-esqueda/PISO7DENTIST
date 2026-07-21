import Image from "next/image";
import { FloorTag } from "./FloorTag";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/constants";

export function About() {
  return (
    <section id="nosotros" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2px] border border-border-subtle bg-ink-950">
            <Image
              src="/images/clinica/recepcion.jpg"
              alt="Interior de Piso7 Dental en Hermosillo"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              style={{ objectPosition: "78% 30%" }}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-10 pb-10 text-center">
              <p className="font-display text-3xl italic leading-tight text-cream-50">
                &ldquo;Un espacio pensado para que confíes en tu sonrisa&rdquo;
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
                Piso7 Dental · {SITE.city}
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <FloorTag code="P7·01" label="Nosotros" className="mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Odontología estética integral,
              <span className="text-accent italic"> para toda la familia.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Piso7 Dental nació para elevar el estándar de la odontología en
              Hermosillo: un equipo, un mismo cuidado y un solo espacio donde
              la función y la estética se diseñan juntas. Desde rehabilitación
              oral hasta diseño de sonrisa, cada tratamiento se firma con
              precisión clínica y sentido artístico.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-3">
              {[
                { value: "2", label: "Especialistas al frente" },
                { value: "6+", label: "Áreas de tratamiento" },
                { value: "100%", label: "Estética integral" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-accent">{stat.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
