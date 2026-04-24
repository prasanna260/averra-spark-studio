import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import content from "@/assets/work-content.jpg";
import production from "@/assets/work-production.jpg";
import webGrowth from "@/assets/work-web.jpg";

const projects = [
  {
    img: social,
    tag: "Social",
    title: "Social Media Marketing",
    metric: "Reels, posts & paid social",
    message: "Native-first social systems engineered to stop the scroll without feeling forced.",
    info: "Weekly content, channel planning, paid amplification.",
    pill: "bg-emerald text-cream",
    panel: "bg-emerald text-cream",
    to: "/social-media-marketing" as const,
  },
  {
    img: production,
    tag: "Production",
    title: "Production Ad Shoot",
    metric: "Studio-grade ad films",
    message: "Concept, shoot, edit and cutdowns handled in one pipeline for faster launches.",
    info: "Pre-production, on-set direction, edits, multi-format delivery.",
    pill: "bg-crimson text-cream",
    panel: "bg-crimson text-cream",
    to: "/production-ad-shoot" as const,
  },
  {
    img: content,
    tag: "Creative",
    title: "Content Creation",
    metric: "UGC, reels & motion",
    message: "Always-on creative packages built for testing velocity and feed-level relevance.",
    info: "UGC sourcing, reels, motion graphics, monthly content drops.",
    pill: "bg-yellow text-ink",
    panel: "bg-yellow text-ink",
    to: "/content-creation" as const,
  },
  {
    img: branding,
    tag: "Identity",
    title: "Branding",
    metric: "Logos, systems & packaging",
    message: "Identity systems that turn a business into something people remember instantly.",
    info: "Positioning, naming, visual system, packaging direction.",
    pill: "bg-peach text-ink",
    panel: "bg-peach text-ink",
    to: "/branding" as const,
  },
  {
    img: webGrowth,
    tag: "360°",
    title: "Averra 360°",
    metric: "Web & Growth",
    message: "Sites, funnels and growth loops connected into one measurable operating system.",
    info: "Landing pages, CRO, SEO, paid growth, reporting.",
    pill: "bg-cyan text-ink",
    panel: "bg-cyan text-ink",
    to: "/averra-360" as const,
  },
];

export function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden border-b-2 border-ink">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
                ✦ Selected work ✦
              </p>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
                Campaigns that <span className="text-yellow">moved markets.</span>
              </h2>
            </div>
            <p className="max-w-md text-base md:text-lg text-cream/70 font-medium leading-relaxed">
              Strategy, creative, production, and growth systems built to travel from brief to launch.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Link
                to={p.to}
                className="group relative block h-full overflow-hidden rounded-[2rem] border-2 border-ink card-pop focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow"
                aria-label={`Open ${p.title} service page`}
              >
                <article className="flex h-full flex-col bg-cream text-ink">
                  <div className="relative overflow-hidden border-b-2 border-ink">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                      <span className={`rounded-full border-2 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider ${p.pill}`}>
                        {p.tag}
                      </span>
                      <span className="rounded-full border-2 border-ink bg-cream px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
                        Open →
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="border-b-2 border-ink p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-3xl leading-none">{p.title}</h3>
                          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-ink/65">
                            {p.metric}
                          </p>
                        </div>
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-xl font-black text-cream transition-colors duration-300 group-hover:bg-crimson">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="grid flex-1 md:grid-cols-2">
                      <div className={`border-b-2 border-ink p-6 md:border-r-2 ${p.panel}`}>
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-75">
                          Message
                        </p>
                        <p className="mt-3 text-sm leading-relaxed font-medium">
                          {p.message}
                        </p>
                      </div>
                      <div className="border-b-2 border-ink bg-cream p-6 text-ink">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">
                          Info
                        </p>
                        <p className="mt-3 text-sm leading-relaxed font-medium text-ink/80">
                          {p.info}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 p-6 bg-cream">
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-ink/55">
                        View service
                      </p>
                      <span className="rounded-full border-2 border-ink bg-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink">
                        Explore
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
