const ITEMS = [
  "Odontología estética",
  "Diseño de sonrisa",
  "Precisión clínica",
  "Hermosillo",
  "Piso 7",
];

export function BrandMarquee() {
  const content = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-shell overflow-hidden border-y border-border-subtle bg-background py-4 text-foreground sm:py-5" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {content.map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center">
            <span className="px-6 font-mono text-[9px] uppercase tracking-[.3em] sm:px-10 sm:text-[10px]">{item}</span>
            <span className="marquee-orbit relative h-5 w-5 rounded-full border border-accent/60">
              <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
