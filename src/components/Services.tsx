import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { BigWord } from "./scroll/BigWord";
import { PinnedSection, usePinProgress } from "./scroll/Pinned";
import { enter } from "./scroll/seg";

const services = [
  {
    n: "01",
    eyebrow: "Build your brand with",
    title: "Branding & Identity",
    desc: "Brands that don't just look good · they stick. Designed to scale, built to be remembered.",
    items: ["Branding", "Content strategy"],
    bg: "bg-peach",
    pill: "bg-crimson text-cream",
    to: "/branding" as const,
  },
  {
    n: "02",
    eyebrow: "Stop the scroll with",
    title: "Ad Campaigns",
    desc: "Performance-first campaigns that turn attention into clicks, and clicks into customers.",
    items: ["Instagram ads", "YouTube ads", "Google ads"],
    bg: "bg-yellow",
    pill: "bg-ink text-cream",
    to: "/production-ad-shoot" as const,
  },
  {
    n: "03",
    eyebrow: "Grow loud with",
    title: "Social Media",
    desc: "Content that compounds. Systems that turn followers → fans → buyers.",
    items: ["Social media management"],
    bg: "bg-emerald text-cream",
    pill: "bg-yellow text-ink",
    to: "/social-media-marketing" as const,
  },
  {
    n: "04",
    eyebrow: "Press record with",
    title: "Content Production",
    desc: "High-impact visuals built for speed, scale, and storytelling.",
    items: ["Ad shoots", "Photoshoots", "Content creation"],
    bg: "bg-crimson text-cream",
    pill: "bg-yellow text-ink",
    to: "/content-creation" as const,
  },
];

const N = services.length;
/** Deck position: 0 → first card, N-1 → last card (reached at 80% scroll). */
const F = `min(${N - 1}, var(--sp, 0) * ${((N - 1) / 0.8).toFixed(4)})`;

/**
 * Scene 2 — Services as a card deck. Pinned: each scroll step deals the next
 * service card on top while the earlier ones tuck in behind.
 */
export function Services() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  usePinProgress(ref, (p) => {
    const i = Math.min(N - 1, Math.round((p * (N - 1)) / 0.8));
    setActive((cur) => (cur === i ? cur : i));
  });

  return (
    <PinnedSection
      id="services"
      sectionRef={ref}
      svh={100 + N * 75}
      className="border-b-2 border-ink bg-cream"
    >
      <BigWord className="top-20 md:top-24">SERVICES</BigWord>
      <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-5 px-4 pb-6 pt-24 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:grid-rows-1 md:items-center md:gap-12 md:pb-10 md:pt-24 lg:pl-16">
        {/* copy + chapter list */}
        <div>
          <p
            className="scene-anim mb-3 text-xs font-black uppercase tracking-[0.3em] text-crimson md:mb-4"
            style={enter(0, 0.06, 16)}
          >
            ✦ What we do ✦
          </p>
          <h2
            className="scene-anim font-display text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-balance"
            style={enter(0, 0.08, 40)}
          >
            One studio. <br />
            <span className="mt-1 inline-block -rotate-1 border-2 border-ink bg-yellow px-2 sm:px-3">
              Every play.
            </span>
          </h2>
          <p
            className="scene-anim mt-5 hidden max-w-md text-base font-medium text-ink/80 sm:text-lg md:block"
            style={enter(0.02, 0.1, 24)}
          >
            From the first sketch to the scaled campaign, we own the whole pipeline · so you stay
            focused on building the business.
          </p>

          <ol className="mt-8 hidden space-y-1 md:block">
            {services.map((s, i) => (
              <li key={s.n}>
                <Link
                  to={s.to}
                  className={`group flex items-baseline gap-4 py-1.5 transition-colors duration-300 ${
                    i === active ? "text-ink" : "text-ink/35 hover:text-ink/70"
                  }`}
                >
                  <span className="w-6 font-mono text-xs">{s.n}</span>
                  <span
                    className={`font-display text-xl transition-transform duration-300 lg:text-2xl ${
                      i === active ? "translate-x-1" : ""
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`h-0.5 flex-1 origin-left bg-crimson transition-transform duration-500 ${
                      i === active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-4 font-mono text-xs font-bold text-ink/60 md:hidden">
            <span className="text-crimson">{services[active].n}</span> /{" "}
            {String(N).padStart(2, "0")}
          </p>
        </div>

        {/* the deck */}
        <div className="scene-deck relative grid min-h-0 items-center md:items-center">
          {services.map((s, i) => {
            const incoming = `clamp(0, calc(${i} - ${F}), 1)`;
            const past = `clamp(0, calc(${F} - ${i}), 3)`;
            return (
              <Link
                key={s.n}
                to={s.to}
                tabIndex={i === active ? 0 : -1}
                aria-hidden={i !== active}
                className={`scene-anim card-pop block self-center rounded-3xl p-6 transition-shadow duration-200 hover:shadow-[10px_10px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-crimson sm:p-8 md:p-10 ${s.bg}`}
                style={{
                  zIndex: i + 1,
                  transform: `translate3d(0, calc(${incoming} * 100svh - ${past} * 18px), 0) scale(calc(1 - ${past} * 0.05)) rotate(calc(${incoming} * 8deg))`,
                }}
                aria-label={`Explore ${s.title}`}
              >
                <div className="mb-6 flex items-start justify-between md:mb-8">
                  <span className="font-display text-sm tracking-widest opacity-60">{s.n}</span>
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full border-2 border-ink font-display text-xl ${s.pill}`}
                  >
                    ✦
                  </span>
                </div>
                <p className="mb-2 text-sm font-bold opacity-70">{s.eyebrow}</p>
                <h3 className="mb-4 font-display text-3xl leading-none sm:text-4xl md:text-5xl">
                  {s.title}
                </h3>
                <p className="mb-6 max-w-md text-base opacity-90">{s.desc}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                  View service <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </PinnedSection>
  );
}
