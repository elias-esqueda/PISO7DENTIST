type ToothMarkProps = {
  className?: string;
  animate?: boolean;
};

/** Vectorized from the real Piso7 Dental logo mark and the clinic's neon signage. */
export function ToothMark({ className, animate = false }: ToothMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 52C20 52 19 47 20 43C21 39 17 34 15 28C13 22 15 16 21 15C25 13.5 29 16 32 20C35 16 39 13.5 43 15C49 16 51 22 49 28C47 34 43 39 44 43C45 47 44 52 40 52C37 52 36.5 48 36 44C35.5 41 34 39 32 39C30 39 28.5 41 28 44C27.5 48 27 52 24 52Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={
          animate
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "draw 2.2s cubic-bezier(.4,0,.2,1) 0.2s forwards",
              }
            : undefined
        }
      />
    </svg>
  );
}
