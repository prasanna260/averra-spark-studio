import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import content from "@/assets/work-content.jpg";
import strategy from "@/assets/work-web-building.jpg";
import production from "@/assets/work-production.jpg";

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

export function Showcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let lastTime = 0;
    const pixelsPerSecond = 32;

    const tick = (time: number) => {
      if (lastTime === 0) {
        lastTime = time;
      }

      const elapsed = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;
        scroller.scrollLeft += (pixelsPerSecond * elapsed) / 1000;

        if (maxScroll > 0 && scroller.scrollLeft >= maxScroll - 1) {
          scroller.scrollLeft = 0;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-b-2 border-ink bg-ink py-20 text-cream md:py-32"
    >
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-8 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
                ✦ Selected work ✦
              </p>
              <h2 className="font-display max-w-3xl text-4xl tracking-tight text-balance sm:text-5xl md:text-7xl">
                Campaigns that <span className="text-yellow">moved markets.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm md:text-base text-cream/70 font-medium max-w-xs">
              Tap any card to dive into the service →
            </p>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="overflow-x-auto pb-8"
        style={{ scrollbarWidth: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex w-max gap-4 px-4 sm:gap-6 sm:px-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                to={p.to}
                className="card-pop group relative block w-[84vw] cursor-pointer overflow-hidden rounded-3xl bg-cream transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow sm:w-[420px]"
                aria-label={`Open ${p.title} service page`}
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden">
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
                  <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-cream p-4 text-ink sm:p-5">
                    <div className="min-w-0">
                      <h3 className="mb-1 font-display text-xl sm:text-2xl">{p.title}</h3>
                      <p className="text-sm text-ink/70 font-bold">{p.metric}</p>
                    </div>
                    <span className="shrink-0 w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center font-black transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-crimson">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
          <div className="w-8 shrink-0" />
        </div>
      </div>
    </section>
  );
}
