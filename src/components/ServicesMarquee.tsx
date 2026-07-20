import { SERVICES } from "@/lib/constants";

export function ServicesMarquee() {
  const items = [...SERVICES, ...SERVICES];

  return (
    <div className="relative overflow-hidden border-y border-border-subtle bg-ink-950 py-5">
      <div className="flex w-max animate-marquee gap-10">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center gap-10">
            {items.map((s, i) => (
              <span
                key={`${rep}-${s.code}-${i}`}
                className="flex items-center gap-3 font-display text-xl italic text-cream-100/80"
              >
                {s.title}
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
