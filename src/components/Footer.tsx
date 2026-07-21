import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink-950 px-5 pb-8 pt-16 text-cream-50 sm:px-8 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 lg:flex-row lg:items-end">
          <div><Image src="/logo-lockup.svg" alt="Piso7 Dental" width={130} height={115} className="h-auto w-[116px] brightness-0 invert"/><p className="mt-6 max-w-sm text-sm leading-6 text-stone-400">Odontología estética integral desde una nueva perspectiva.</p></div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-5">{NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="font-mono text-[9px] uppercase tracking-[.2em] text-stone-400 transition-colors hover:text-gold-300">{link.label}</Link>)}</nav>
          <Link href="#top" aria-label="Volver al inicio" className="flex h-12 w-12 items-center justify-center border border-white/25 hover:border-gold-300 hover:text-gold-300"><ArrowUp className="h-4 w-4"/></Link>
        </div>
        <div className="flex flex-col gap-3 pt-7 font-mono text-[8px] uppercase tracking-[.2em] text-stone-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Piso7 Dental</span><span>{SITE.city} · {SITE.phoneDisplay}</span></div>
      </div>
    </footer>
  );
}
