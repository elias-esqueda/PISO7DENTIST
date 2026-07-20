import Image from "next/image";
import { ToothMark } from "./ToothMark";
import { cn } from "@/lib/cn";

type PortraitFrameProps = {
  name: string;
  photo?: string;
  className?: string;
};

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Portrait slot for doctor photography. Renders the real photo when `photo`
 * points at a file in /public; otherwise falls back to a monogram plate that
 * still reads as an intentional, on-brand piece of the layout.
 */
export function PortraitFrame({ name, photo, className }: PortraitFrameProps) {
  return (
    <div
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-[2px] border border-border-subtle bg-ink-950",
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover grayscale-[15%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent 0 22px, rgba(194,154,92,0.07) 22px 24px)",
            }}
          />
          <ToothMark className="relative h-14 w-14 text-gold-500/70" />
          <span className="relative font-display text-6xl italic text-gold-400/90">
            {initials(name)}
          </span>
          <span className="relative font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Fotografía próximamente
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-3 border border-gold-400/0 transition-colors duration-500 group-hover:border-gold-400/40" />
    </div>
  );
}
