import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import content from "@/assets/work-content.jpg";
import production from "@/assets/work-production.jpg";
import averra360 from "@/assets/work-360.jpg";

const projects = [
  { img: social, tag: "Social", title: "Social Media Marketing", metric: "Reels, posts & paid social", pill: "bg-emerald text-cream", to: "/social-media-marketing" as const },
  { img: production, tag: "Production", title: "Production Ad Shoot", metric: "Studio-grade ad films", pill: "bg-crimson text-cream", to: "/production-ad-shoot" as const },
  { img: content, tag: "Creative", title: "Content Creation", metric: "UGC, reels & motion", pill: "bg-yellow text-ink", to: "/content-creation" as const },
  { img: branding, tag: "Identity", title: "Branding", metric: "Logos, systems & packaging", pill: "bg-crimson text-cream", to: "/branding" as const },
  { img: averra360, tag: "Web & Growth", title: "Averra 360°", metric: "Websites, SEO, funnels & growth", pill: "bg-cyan text-ink", to: "/averra-360" as const },
];

export function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
                ✦ Selected work ✦
              </p>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-3xl">
                Campaigns that <span className="text-yellow">moved markets.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <a href="#contact" className="btn-pop bg-yellow text-ink text-sm">
              See full portfolio →
            </a>
          </Reveal>
        </div>
      </div>

      <div className="overflow-x-auto pb-8" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-6 px-5 sm:px-8 w-max">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                to={p.to}
                className="group relative block w-[78vw] sm:w-[420px] rounded-3xl overflow-hidden bg-cream card-pop cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_0_4px_var(--yellow),12px_12px_0_0_var(--ink)] focus:outline-none focus-visible:shadow-[0_0_0_4px_var(--yellow),12px_12px_0_0_var(--ink)]"
                aria-label={`Open ${p.title} service page`}
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className={`absolute top-4 left-4 ${p.pill} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink`}>
                      {p.tag}
                    </span>
                    <span className="absolute top-4 right-4 bg-ink text-cream w-10 h-10 rounded-full border-2 border-cream grid place-items-center font-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </div>
                  <div className="p-5 bg-cream text-ink border-t-2 border-ink flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl mb-1">{p.title}</h3>
                      <p className="text-sm text-ink/70 font-bold">{p.metric}</p>
                    </div>
                    <span className="font-display text-2xl text-crimson transition-transform duration-300 group-hover:translate-x-1">
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
