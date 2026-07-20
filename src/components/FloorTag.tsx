import { cn } from "@/lib/cn";

type FloorTagProps = {
  code: string;
  label: string;
  className?: string;
  tone?: "onDark" | "onLight";
};

/** Recurring "building directory" eyebrow — the Piso7 (floor 7) motif used across sections. */
export function FloorTag({ code, label, className, tone = "onLight" }: FloorTagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em]",
        tone === "onDark" ? "text-gold-400" : "text-accent",
        className,
      )}
    >
      <span className="flex h-5 items-center rounded-sm border border-current/40 px-1.5">
        {code}
      </span>
      <span className="h-px w-8 bg-current/40" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
