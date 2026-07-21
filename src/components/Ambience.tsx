import Image from "next/image";
import { FloorTag } from "./FloorTag";
import { Reveal } from "./Reveal";

function ClinicPhoto({
  src,
  alt,
  caption,
  objectPosition,
}: {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}) {
  return (
    <div className="group relative h-full min-h-40 overflow-hidden rounded-[2px] border border-ink-700 bg-ink-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 480px, 90vw"
        style={objectPosition ? { objectPosition } : undefined}
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
      <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/80">
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
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
              <ClinicPhoto
                src="/images/clinica/recepcion.jpg"
                alt="Pasillo y letrero de Piso7 Dental en Hermosillo"
                caption="Nuestro piso · Piso7 Dental"
                objectPosition="60% 20%"
              />
            </div>
          </Reveal>

          <div className="grid grid-rows-2 gap-4">
            <Reveal delay={0.1} className="h-full">
              <ClinicPhoto
                src="/images/clinica/diente-neon.jpg"
                alt="Letrero de neón con el logo de Piso7 Dental"
                caption="Detalle · letrero de neón"
              />
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <ClinicPhoto
                src="/images/clinica/letrero.jpg"
                alt="Letrero tridimensional de Piso7 Dental"
                caption="Nuestro letrero · Piso7 Dental"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
