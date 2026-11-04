import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "clients", label: "Clients" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
  { id: "contact", label: "Contact" },
];

/**
 * Numbered chapter rail for the home page (large screens only).
 * Steps aside while the Process story is pinned, since it has its own rail.
 */
export function SiteRail() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const line = vh * 0.45;
      let idx = 0;
      const tops: number[] = [];
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        tops[i] = r.top;
        if (r.top <= line) idx = i;
      });
      setActive(idx);

      const process = document.getElementById("process")?.getBoundingClientRect();
      const inProcess = !!process && process.top <= 1 && process.bottom >= vh - 1;
      const footer = document.querySelector("footer")?.getBoundingClientRect();
      const inFooter = !!footer && footer.top < vh * 0.5;
      setHidden(inProcess || inFooter);

      // fill: progress between the current and next section start
      const cur = tops[idx] ?? 0;
      const next = tops[idx + 1];
      const local = next !== undefined ? (line - cur) / Math.max(1, next - cur) : 1;
      const p = (idx + Math.min(1, Math.max(0, local))) / (SECTIONS.length - 1);
      fillRef.current?.style.setProperty("transform", `scaleY(${Math.min(1, p)})`);
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
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={`fixed left-1 top-1/2 z-40 -translate-y-1/2 transition-[opacity,transform] duration-500 sm:left-3 xl:left-5 ${
        hidden ? "pointer-events-none -translate-x-4 opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <ol className="relative flex flex-col gap-2.5 sm:gap-3.5">
        <span
          aria-hidden
          className="absolute bottom-1 left-[5px] top-1 w-0.5 bg-ink/20 sm:left-[6px]"
        />
        <span
          ref={fillRef}
          aria-hidden
          className="absolute left-[5px] top-1 h-[calc(100%-0.5rem)] sm:left-[6px] w-0.5 origin-top bg-crimson"
          style={{ transform: "scaleY(0)" }}
        />
        {SECTIONS.map((s, i) => (
          <li key={s.id} className="relative">
            <a
              href={`#${s.id}`}
              aria-current={i === active ? "location" : undefined}
              aria-label={`${String(i + 1).padStart(2, "0")} ${s.label}`}
              className="group relative flex h-3 w-3 items-center sm:h-3.5 sm:w-3.5 justify-center"
            >
              <span
                className={`relative z-10 block rounded-full border-2 border-ink transition-all duration-300 ${
                  i === active
                    ? "h-3 w-3 bg-crimson sm:h-3.5 sm:w-3.5"
                    : i < active
                      ? "h-2 w-2 bg-ink sm:h-2.5 sm:w-2.5"
                      : "h-2 w-2 bg-cream group-hover:bg-yellow sm:h-2.5 sm:w-2.5"
                }`}
              />
              <span
                className={`absolute left-6 hidden items-center sm:flex gap-1.5 whitespace-nowrap rounded-full border-2 border-ink bg-cream px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-ink shadow-[2px_2px_0_0_var(--ink)] transition-all duration-300 ${
                  i === active
                    ? "opacity-0 group-hover:translate-x-0 group-hover:opacity-100 2xl:translate-x-0 2xl:opacity-100"
                    : "pointer-events-none -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                <span className="font-mono text-crimson">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
