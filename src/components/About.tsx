import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="nosotros" className="theme-panel theme-panel-a relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      <div className="absolute -right-1/4 top-0 h-full w-3/4 mineral-lines opacity-35" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 xl:gap-24">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                <span>01</span><span className="h-px w-12 bg-current"/><span>Nuestra filosofía</span>
              </div>

              <figure className="group relative mt-9 aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-ink-900 sm:mt-11">
                <Image
                  src="/images/clinica/inzunza-paciente.webp"
                  alt="Dr. Carlos Inzunza con un paciente en Piso7 Dental"
                  fill
                  sizes="(min-width: 1024px) 36vw, 92vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  style={{ objectPosition: "50% 38%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-cream-50 sm:p-6">
                  <span className="max-w-[15rem] font-display text-2xl leading-none sm:text-3xl">Cuidado que se comparte.</span>
                  <span className="shrink-0 font-mono text-[8px] uppercase tracking-[.2em] text-gold-300">Piso 7</span>
                </figcaption>
              </figure>

              <p className="mt-6 max-w-[420px] text-sm leading-7 text-muted-foreground sm:mt-7">
                Piso7 nació para elevar la experiencia dental: decisiones claras, tratamientos precisos y una relación cercana con cada paciente.
              </p>
            </div>
          </Reveal>

          <div className="lg:pt-12">
            <Reveal>
              <h2 className="max-w-5xl font-display text-[clamp(3.4rem,6.8vw,7.2rem)] leading-[.88] tracking-[-.045em] text-foreground">
                Diseñamos confianza.
                <span className="block italic text-accent">Restauramos sonrisas.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-12 grid gap-7 border-t border-border-subtle pt-8 sm:mt-14 sm:grid-cols-3">
                {[
                  ["01", "Diagnóstico", "Entender antes de intervenir."],
                  ["02", "Planeación", "Anticipar cada detalle."],
                  ["03", "Resultado", "Natural, funcional y propio."],
                ].map(([code, title, text]) => (
                  <div key={code} className="border-l border-border-subtle pl-5">
                    <span className="font-mono text-[9px] tracking-[.25em] text-accent">{code}</span>
                    <h3 className="mt-5 font-display text-3xl text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid items-end gap-6 lg:mt-28 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal>
            <div className="relative min-h-[480px] overflow-hidden sm:min-h-[650px]">
              <Image src="/images/clinica/recepcion.jpg" alt="Interior de Piso7 Dental" fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" style={{ objectPosition: "58% 28%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/5 to-transparent" />
              <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[.28em] text-white/75">El espacio · Hermosillo</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-ink-950 p-8 text-cream-50 sm:p-10 lg:-ml-16 lg:mb-12">
              <p className="font-display text-3xl leading-tight sm:text-4xl">“La tecnología se nota. La confianza se siente.”</p>
              <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5 font-mono text-[9px] uppercase tracking-[.2em] text-stone-400">
                <span>Piso7 Dental</span><span>29° N · Piso 7</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
