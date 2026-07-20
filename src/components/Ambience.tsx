import { FloorTag } from "./FloorTag";
import { ToothMark } from "./ToothMark";
import { Reveal } from "./Reveal";

function SlatPanel({
  caption,
  dense = false,
}: {
  caption: string;
  dense?: boolean;
}) {
  return (
    <div className="relative h-full min-h-40 overflow-hidden rounded-[2px] border border-ink-700">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #2a2018 0 ${dense ? 6 : 10}px, #1c1610 ${dense ? 6 : 10}px ${dense ? 12 : 20}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
      <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/70">
        {caption}
      </div>
    </div>
  );
}

export function Ambience() {
  return (
    <section id="clinica" className="grain relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <FloorTag code="P7·04" label="La clínica" tone="onDark" className="mx-auto mb-6 justify-center" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-cream-50 sm:text-5xl">
              Un espacio con la calidez de un
              <span className="text-gold-400 italic"> hogar de piso alto.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-ink-700 lg:aspect-auto lg:h-full">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #2a2018 0 14px, #1c1610 14px 28px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/10 via-ink-950/40 to-ink-950/90" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <ToothMark
                  animate
                  className="h-24 w-24 text-gold-300 drop-shadow-[0_0_35px_rgba(216,182,121,0.55)] sm:h-32 sm:w-32"
                />
                <p className="font-display text-3xl tracking-[0.15em] text-cream-50 sm:text-4xl">
                  PISO7 <span className="text-gold-400">DENTAL</span>
                </p>
              </div>
              <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/60">
                Recepción · Piso7 Dental
              </div>
            </div>
          </Reveal>

          <div className="grid grid-rows-2 gap-4">
            <Reveal delay={0.1} className="h-full">
              <SlatPanel caption="Consultorio · Diseño de sonrisa" dense />
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <SlatPanel caption="Sala de espera · Piso7 Dental" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
