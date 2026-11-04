import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";

/**
 * A section that pins a full-screen stage while you scroll through it, the
 * same pattern as the Process story. The ScrollDirector writes the stage's
 * progress (0→1) into `--sp`; children animate from that in CSS.
 *
 * With reduced motion the section un-pins and renders as a normal block
 * (see `.pin-section` rules in styles.css).
 */
export function PinnedSection({
  id,
  svh,
  className = "",
  stageClassName = "",
  style,
  sectionRef,
  children,
  label,
}: {
  id?: string;
  /** Total scroll length of the section in svh (100 = no extra scroll). */
  svh: number;
  className?: string;
  stageClassName?: string;
  style?: CSSProperties;
  sectionRef?: RefObject<HTMLElement | null>;
  children: ReactNode;
  label?: string;
}) {
  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label={label}
      data-scroll-scene="pin"
      suppressHydrationWarning
      className={`pin-section relative ${className}`}
      style={{ height: `${svh}svh`, "--sp": 0, ...style } as CSSProperties}
    >
      <div className={`pin-stage sticky top-0 h-[100svh] overflow-hidden ${stageClassName}`}>
        {children}
      </div>
    </section>
  );
}

/** Calls `onProgress(p)` on every scroll frame with a pinned section's 0→1 progress. */
export function usePinProgress(
  ref: RefObject<HTMLElement | null>,
  onProgress: (p: number) => void,
) {
  const cb = useRef(onProgress);
  cb.current = onProgress;
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = -r.top / Math.max(1, r.height - window.innerHeight);
      cb.current(Math.min(1, Math.max(0, p)));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}
