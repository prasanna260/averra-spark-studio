import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { BigWord } from "./scroll/BigWord";
import { PinnedSection, usePinProgress } from "./scroll/Pinned";
import { enter } from "./scroll/seg";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social-2.png";
import content from "@/assets/work-content-2.png";
import strategy from "@/assets/work-web-2.png";
import production from "@/assets/work-production-2.png";

const projects = [
  {
    img: social,
    tag: "Social",
    title: "Social Media Marketing",
    metric: "Reels, posts & paid social",
    pill: "bg-emerald text-cream",
    to: "/social-media-marketing" as const,
  },
  {
    img: production,
    tag: "Production",
    title: "Production Ad Shoot",
    metric: "Studio-grade ad films",
    pill: "bg-crimson text-cream",
    to: "/production-ad-shoot" as const,
  },
  {
    img: content,
    tag: "Creative",
    title: "Content Creation",
    metric: "UGC, reels & motion",
    pill: "bg-yellow text-ink",
    to: "/content-creation" as const,
  },
  {
    img: branding,
    tag: "Identity",
    title: "Branding",
    metric: "Logos, systems & packaging",
    pill: "bg-crimson text-cream",
    to: "/branding" as const,
  },
  {
    img: strategy,
    tag: "360°",
    title: "Averra 360°",
    metric: "Web & Growth",
    pill: "bg-cyan text-ink",
    to: "/averra-360" as const,
  },
];

/**
 * Scene 3 — Selected work. Pinned: scrolling down slides the card reel
 * sideways, one campaign at a time, with a counter and progress line.
 */
export function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);
  const [active, setActive] = useState(0);

  // Measure how far the reel has to travel; that sets the section's length.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setOverflow(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  usePinProgress(sectionRef, (p) => {
    const i = Math.min(projects.length - 1, Math.round(p * (projects.length - 1)));
    setActive((cur) => (cur === i ? cur : i));
  });

  // the reel moves between 8% and 92% of the pin, so it rests at both ends
  const move = `clamp(0, calc((var(--sp, 0) - 0.08) / 0.84), 1)`;

  return (
    <PinnedSection
      id="work"
      sectionRef={sectionRef}
      svh={130}
      className="border-b-2 border-ink bg-ink text-cream"
      stageClassName="flex flex-col justify-center"
      style={
        {
          height: `calc(130svh + ${overflow}px)`,
          "--ov": overflow,
        } as CSSProperties
      }
    >
      <BigWord className="top-20 md:top-24" stroke="var(--cream)" opacity={0.1} direction={-1}>
        SELECTED WORK
      </BigWord>
      <div className="relative mx-auto mb-6 w-full max-w-7xl px-4 pt-16 sm:px-8 md:mb-10 md:pt-20 lg:pl-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="scene-anim" style={enter(0, 0.08, 40)}>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-yellow md:mb-4">
              ✦ Selected work ✦
            </p>
            <h2 className="max-w-3xl font-display text-[clamp(2rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-balance">
              Campaigns that <span className="text-yellow">moved markets.</span>
            </h2>
          </div>
          <div
            className="scene-anim flex items-center gap-4 md:flex-col md:items-end"
            style={enter(0.02, 0.1, 24)}
          >
            <Link
              to="/work"
              className="btn-pop bg-yellow px-5 py-2.5 text-sm text-ink"
              style={{ boxShadow: "5px 5px 0 0 var(--crimson)" }}
            >
              Watch our videos ▶
            </Link>
            <p className="font-mono text-sm font-bold text-cream/70">
              <span className="text-yellow">{String(active + 1).padStart(2, "0")}</span> /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>

      <div className="scene-track-wrap relative" style={{ scrollbarWidth: "none" }}>
        <div
          ref={trackRef}
          className="scene-anim flex w-max gap-4 px-4 sm:gap-6 sm:px-8 lg:pl-16"
          style={{ transform: `translate3d(calc(${move} * var(--ov, 0) * -1px), 0, 0)` }}
        >
          {projects.map((p, i) => (
            <Link
              key={p.title}
              to={p.to}
              className="card-pop group relative block w-[62vw] max-w-[420px] cursor-pointer overflow-hidden rounded-3xl bg-cream transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow sm:w-[34vw] md:w-[380px] xl:w-[420px]"
              aria-label={`Open ${p.title} service page`}
              style={{ rotate: `${i % 2 ? 1 : -1}deg` }}
            >
              <article>
                <div className="relative aspect-[4/5] max-h-[52svh] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full border-2 border-ink px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider sm:left-4 sm:top-4 sm:px-3 sm:text-xs ${p.pill}`}
                  >
                    {p.tag}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full border-2 border-ink bg-yellow px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                    Explore →
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-cream p-3 text-ink sm:p-5">
                  <div className="min-w-0">
                    <h3 className="mb-1 font-display text-lg sm:text-2xl">{p.title}</h3>
                    <p className="text-xs font-bold text-ink/70 sm:text-sm">{p.metric}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-black text-cream transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-crimson sm:h-10 sm:w-10">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
          <div className="w-4 shrink-0 sm:w-8" />
        </div>
      </div>

      {/* reel progress */}
      <div className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-8 md:mt-8 lg:pl-16">
        <div className="h-1 w-full overflow-hidden rounded-full bg-cream/15">
          <div
            className="scene-anim h-full origin-left rounded-full bg-yellow"
            style={{ transform: `scaleX(${move})` }}
          />
        </div>
      </div>
    </PinnedSection>
  );
}
