"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration guard
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={cn(
        "relative flex h-8 w-15 shrink-0 items-center rounded-full border border-border-subtle bg-surface-muted px-1 transition-colors",
        className,
      )}
      style={{ width: "3.75rem" }}
    >
      <span className="sr-only">Cambiar tema</span>
      <Sun className="absolute left-1.5 h-3.5 w-3.5 text-gold-600 opacity-70" strokeWidth={1.75} />
      <Moon className="absolute right-1.5 h-3.5 w-3.5 text-gold-400 opacity-70" strokeWidth={1.75} />
      <motion.span
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-ink-950 shadow-sm"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" strokeWidth={2} /> : <Sun className="h-3.5 w-3.5" strokeWidth={2} />}
      </motion.span>
    </button>
  );
}
