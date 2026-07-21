import { FloorTag } from "./FloorTag";
import { Reveal } from "./Reveal";
import { WelcomeVideo } from "./WelcomeVideo";

export function VideoShowcase() {
  return (
    <section id="bienvenida" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div>
          <Reveal>
            <FloorTag code="P7" label="Bienvenida" className="mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Conoce el piso
              <span className="text-accent italic"> antes de subir.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Un mensaje breve de los doctores Inzunza y Cambustón: quiénes
              somos, cómo trabajamos y por qué en Piso7 la primera cita ya se
              siente distinta.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-current/40" />
              Dr. Carlos Inzunza &middot; Dr. Jesús Cambustón
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <WelcomeVideo />
        </Reveal>
      </div>
    </section>
  );
}
