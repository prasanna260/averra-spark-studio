import { useEffect } from "react";

/**
 * One scroll loop for the whole site.
 *
 * Every element marked `data-scroll-scene` gets a `--sp` custom property:
 * - default: 0 when its top enters the bottom of the viewport, 1 when its
 *   bottom leaves the top (0.5 ≈ centred on screen).
 * - `data-scroll-scene="pin"`: 0 when its top reaches the top of the viewport,
 *   1 when its bottom reaches the bottom (for sticky, pinned stages).
 *
 * The document also gets `--page-p` (0→1 over the page) for the progress bar.
 * Components read these in CSS, so scrolling never re-renders React.
 */
export function ScrollDirector() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      root.style.setProperty("--page-p", (max > 0 ? window.scrollY / max : 0).toFixed(4));

      document.querySelectorAll<HTMLElement>("[data-scroll-scene]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return; // far off screen, skip
        let p: number;
        if (el.dataset.scrollScene === "pin") {
          p = -r.top / Math.max(1, r.height - vh);
        } else {
          p = (vh - r.top) / (vh + r.height);
        }
        el.style.setProperty("--sp", Math.min(1, Math.max(0, p)).toFixed(4));
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Route changes and late-loading images move things around.
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-crimson"
      style={{ transform: "scaleX(var(--page-p, 0))" }}
    />
  );
}
