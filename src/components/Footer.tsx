import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import { ToothMark } from "./ToothMark";
import { NAV_LINKS, SITE, waLink } from "@/lib/constants";

const SOCIALS = [
  { icon: FacebookIcon, href: SITE.facebookUrl, label: "Facebook" },
  { icon: InstagramIcon, href: SITE.instagramUrl, label: "Instagram" },
  { icon: MessageCircle, href: waLink("Hola, quiero agendar una cita en Piso7 Dental."), label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-700 bg-ink-950 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-ink-700 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50 text-gold-400">
                <ToothMark className="h-4.5 w-4.5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-cream-50">piso7</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-stone-500">
                  Dental
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
              Odontología estética integral en {SITE.city}. Tu sonrisa, en el
              piso más alto.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">
              Navegación
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-300 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">
              Contacto
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-stone-300">
              <li>{SITE.phoneDisplay}</li>
              <li>{SITE.city}</li>
              <li>
                <Link href={SITE.mapsUrl} target="_blank" className="transition-colors hover:text-gold-400">
                  Ver en Google Maps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">
              Síguenos
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-stone-400 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <s.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-600">
            © {new Date().getFullYear()} Piso7 Dental — Todos los derechos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-600">
            Dr. Carlos Inzunza · Dr. Jesús Cambustón
          </p>
        </div>
      </div>
    </footer>
  );
}
