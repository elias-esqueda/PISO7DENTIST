type ToothMarkProps = {
  className?: string;
  animate?: boolean;
};

/** Line-art tooth outline echoing the Piso7 Dental logo and the clinic's neon signage. */
export function ToothMark({ className, animate = false }: ToothMarkProps) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 4C24 4 20 9 14 9C7.5 9 3 15 3 24c0 7 2.5 12 4.5 19C9.7 51 11 58 14.5 65c1.8 3.6 4 4.5 5.8 1.7 2-3 3.3-10 5-15.7 1-3.4 2.4-5.4 6.7-5.4s5.7 2 6.7 5.4c1.7 5.7 3 12.7 5 15.7 1.8 2.8 4 1.9 5.8-1.7 3.5-7 4.8-14 6-22 2-7 4.5-12 4.5-19 0-9-4.5-15-11-15-6 0-10-5-18-5Z"
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
