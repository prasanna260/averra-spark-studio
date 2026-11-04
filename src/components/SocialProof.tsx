import { useRef } from "react";
import { BigWord } from "./scroll/BigWord";
import { PinnedSection, usePinProgress } from "./scroll/Pinned";
import { enter, seg } from "./scroll/seg";

const stats = [
  { v: "1.5M", k: "Impressions delivered", bg: "bg-crimson text-cream" },
  { v: "₹1.2M", k: "Revenue influenced", bg: "bg-yellow text-ink" },
  { v: "12+", k: "Brands partnered", bg: "bg-emerald text-cream" },
  { v: "92%", k: "Client retention", bg: "bg-cream text-ink" },
];

/** Split "₹1.2M" into prefix "₹", number 1.2 (1 decimal) and suffix "M". */
function parse(v: string) {
  const m = v.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m) return null;
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { pre: m[1], num: parseFloat(m[2]), decimals, post: m[3] };
}

const start = (i: number) => 0.12 + i * 0.13;
const SPAN = 0.22;

/**
 * Scene 6 — results. Pinned: each stat card drops in and its number counts
 * up as you scroll. The real values are server-rendered, so they are never
 * wrong without JavaScript.
 */
export function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  usePinProgress(ref, (p) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stats.forEach((s, i) => {
      const el = numRefs.current[i];
      const parsed = parse(s.v);
      if (!el || !parsed) return;
      const t = Math.min(1, Math.max(0, (p - start(i)) / SPAN));
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${parsed.pre}${(parsed.num * eased).toFixed(parsed.decimals)}${parsed.post}`;
    });
  });

  return (
    <PinnedSection
      id="results"
      sectionRef={ref}
      svh={190}
      className="bg-cyan"
      stageClassName="flex items-center"
    >
      <BigWord opacity={0.12} direction={-1}>
        RESULTS
      </BigWord>
      {/* Decorative comic blobs, parallaxing */}
      <div
        aria-hidden
        className="scene-anim absolute -left-16 -top-16 hidden h-72 w-72 sm:block"
        style={{ transform: "translate3d(0, calc(var(--sp, 0) * 120px), 0)" }}
      >
        <div className="h-full w-full animate-blob rounded-full border-2 border-ink bg-yellow opacity-90 shadow-pop" />
      </div>
      <div
        aria-hidden
        className="scene-anim absolute -right-20 top-1/3 hidden h-80 w-80 sm:block"
        style={{ transform: "translate3d(0, calc(var(--sp, 0) * -160px), 0)" }}
      >
        <div
          className="h-full w-full animate-blob rounded-full border-2 border-ink bg-crimson opacity-90 shadow-pop"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-16 sm:px-8 lg:pl-16">
        <div className="scene-anim mb-8 text-center md:mb-14" style={enter(0, 0.1, 40)}>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-ink md:mb-4">
            ✦ Results ✦
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-cream text-balance">
            Receipts, <span className="text-yellow">not promises.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => {
            const t = seg(start(i), start(i) + 0.1);
            return (
              <div
                key={s.k}
                className={`scene-anim card-pop rounded-2xl p-4 text-center sm:rounded-3xl sm:p-6 ${s.bg}`}
                style={{
                  opacity: t,
                  transform: `translate3d(0, calc((1 - ${t}) * -140px), 0) scale(calc(0.7 + ${t} * 0.3)) rotate(calc((1 - ${t}) * ${i % 2 ? 10 : -10}deg))`,
                }}
              >
                <div className="font-display text-3xl tabular-nums sm:text-4xl md:text-6xl">
                  <span
                    ref={(el) => {
                      numRefs.current[i] = el;
                    }}
                    suppressHydrationWarning
                  >
                    {s.v}
                  </span>
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-80 sm:text-[11px]">
                  {s.k}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PinnedSection>
  );
}
