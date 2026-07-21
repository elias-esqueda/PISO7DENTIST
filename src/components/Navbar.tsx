"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-cream-50 transition-all duration-500 ${scrolled || open ? "bg-ink-950/95 shadow-2xl backdrop-blur-xl" : "bg-gradient-to-b from-black/65 to-transparent"}`}>
      <div className={`hidden border-b border-white/10 px-8 font-mono text-[9px] uppercase tracking-[0.24em] transition-all md:flex ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 items-center justify-between opacity-70"}`}>
        <span>Piso 7 · Hermosillo, Sonora</span>
        <div className="flex items-center gap-7">
          <a href={`tel:+${SITE.phoneWa}`} className="hover:text-gold-300">{SITE.phoneDisplay}</a>
          <Link href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")} target="_blank" className="hover:text-gold-300">Reservar en línea</Link>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-12">
        <Link href="#top" aria-label="Piso7 Dental, inicio" className="relative z-10 block">
          <Image src="/logo-lockup.svg" alt="Piso7 Dental" width={70} height={62} loading="eager" className="h-auto w-[58px] brightness-0 invert sm:w-[64px] xl:w-[68px]" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link font-mono text-[10px] uppercase tracking-[0.19em] text-white/75 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle className="border-white/30 bg-white/10" />
          <Link href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")} target="_blank" className="group inline-flex items-center gap-3 border border-white/35 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-cream-50 hover:text-ink-950">
            Agenda tu cita
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="relative z-10 flex items-center gap-2.5 lg:hidden">
          <ThemeToggle className="border-white/30 bg-white/10" />
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center border border-white/25 sm:h-11 sm:w-11">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-0 flex min-h-dvh flex-col bg-ink-950 px-6 pb-8 pt-32 lg:hidden">
            <div className="absolute inset-0 mineral-lines opacity-20" />
            <nav className="relative flex flex-col border-t border-white/15">
              {NAV_LINKS.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/15 py-5 font-display text-[clamp(2rem,10vw,4rem)] leading-none">
                    {link.label}
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gold-400">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")} target="_blank" onClick={() => setOpen(false)} className="relative mt-auto flex items-center justify-between bg-gold-400 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-950">
              Agenda tu cita <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
