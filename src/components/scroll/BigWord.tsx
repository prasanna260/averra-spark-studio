import type { CSSProperties, ReactNode } from "react";

/**
 * Giant outlined word that drifts sideways as its section scrolls past.
 * Place it as the first child of a `relative overflow-hidden` section that has
 * `data-scroll-scene`. Purely decorative.
 */
export function BigWord({
  children,
  className = "top-1/2 -translate-y-1/2",
  stroke = "var(--ink)",
  opacity = 0.08,
  direction = 1,
}: {
  children: ReactNode;
  className?: string;
  stroke?: string;
  opacity?: number;
  /** 1 drifts left as you scroll down, -1 drifts right. */
  direction?: 1 | -1;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -z-10 select-none overflow-hidden ${className}`}
    >
      <div
        className="big-word whitespace-nowrap font-display text-[24vw] leading-[0.9] tracking-tight text-transparent md:text-[15vw]"
        style={
          {
            WebkitTextStroke: `2px ${stroke}`,
            opacity,
            "--dir": direction,
          } as CSSProperties
        }
      >
        {children} · {children} · {children}
      </div>
    </div>
  );
}
