import Image from "next/image";
import { Reveal } from "./Reveal";

const photos = [
  { src: "/images/clinica/recepcion.jpg", alt: "Recepción de Piso7 Dental", label: "Recepción", pos: "57% 25%" },
  { src: "/images/clinica/diente-neon.jpg", alt: "Símbolo dental iluminado", label: "Identidad", pos: "50% 50%" },
  { src: "/images/clinica/letrero.jpg", alt: "Letrero de Piso7 Dental", label: "Piso 7", pos: "50% 50%" },
];

export function Ambience() {
  return (
    <section id="clinica" className="theme-panel theme-panel-c relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
          <Reveal><div><div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.3em] text-accent"><span>04</span><span className="h-px w-12 bg-current"/><span>El espacio</span></div><p className="mt-8 max-w-sm text-sm leading-7 text-muted-foreground">Luz, calma y precisión. Cada rincón fue pensado para cambiar la manera en que se vive una consulta dental.</p></div></Reveal>
          <Reveal delay={.05}><h2 className="font-display text-[clamp(3.4rem,6.5vw,7rem)] leading-[.86] tracking-[-.045em]">Un consultorio a la <span className="italic text-accent">altura de tu confianza.</span></h2></Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[300px_300px]">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * .08} className={index === 0 ? "sm:col-span-2 lg:col-span-8 lg:row-span-2" : "lg:col-span-4"}>
              <figure className="group relative h-[360px] overflow-hidden bg-ink-900 sm:h-[430px] lg:h-full">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" style={{ objectPosition: photo.pos }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[.25em] text-white/75">0{index + 1} · {photo.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
