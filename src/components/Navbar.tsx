"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ToothMark } from "./ToothMark";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS, SITE, waLink } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border-subtle bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" style={{ height: "4.5rem" }}>
        <Link href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 text-accent transition-transform duration-500 group-hover:rotate-[8deg]">
            <ToothMark className="h-4.5 w-4.5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              piso7
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
              Dental
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")}
            target="_blank"
            className="rounded-full bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-950 transition-transform duration-300 hover:scale-105"
          >
            Agenda tu cita
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border-subtle bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border-subtle py-4 font-display text-2xl italic text-foreground"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-accent">
                      P7·0{NAV_LINKS.indexOf(link) + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href={waLink("Hola, quiero agendar una cita en Piso7 Dental.")}
                target="_blank"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-accent px-5 py-3.5 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-950"
              >
                Agenda tu cita · {SITE.phoneDisplay}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
