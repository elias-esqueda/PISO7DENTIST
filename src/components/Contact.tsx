import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import { FloorTag } from "./FloorTag";
import { Reveal } from "./Reveal";
import { SITE, waLink } from "@/lib/constants";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: waLink("Hola, quiero agendar una cita en Piso7 Dental."),
  },
  {
    icon: Phone,
    label: "Llámanos",
    value: SITE.phoneDisplay,
    href: `tel:+${SITE.phoneWa}`,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Dr. Carlos Inzunza",
    href: SITE.facebookUrl,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@drjesuscambuston",
    href: SITE.instagramUrl,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="grain relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <FloorTag code="P7·06" label="Contacto" tone="onDark" className="mb-6" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-cream-50 sm:text-5xl">
                Agenda tu lugar
                <span className="text-gold-400 italic"> en el piso 7.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-400">
                Escríbenos por WhatsApp y con gusto te ayudamos a encontrar el
                horario ideal para tu consulta en {SITE.city}.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-ink-700 bg-ink-700 sm:grid-cols-2">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.label} delay={0.15 + i * 0.05}>
                  <Link
                    href={c.href}
                    target="_blank"
                    className="group flex items-center gap-4 bg-ink-950 p-6 transition-colors hover:bg-ink-900"
                  >
                    <c.icon className="h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
                    <span className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">
                        {c.label}
                      </span>
                      <span className="font-display text-lg text-cream-50 transition-colors group-hover:text-gold-300">
                        {c.value}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2px] border border-ink-700">
              <iframe
                title="Ubicación de Piso7 Dental en Hermosillo, Sonora"
                src={SITE.mapsEmbedUrl}
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.9] transition-[filter] duration-500 hover:grayscale-0 hover:invert-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-6">
                <Link
                  href={SITE.mapsUrl}
                  target="_blank"
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-950"
                >
                  <MapPin className="h-4 w-4" />
                  Cómo llegar
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
