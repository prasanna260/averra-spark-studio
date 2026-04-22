import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { projects } from "@/data/portfolio";

const featured = projects.slice(0, 6);

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
            <Link to="/portfolio" className="btn-pop bg-yellow text-ink text-sm">
              See full portfolio →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="overflow-x-auto pb-8" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-6 px-5 sm:px-8 w-max">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block w-[78vw] sm:w-[420px] rounded-3xl overflow-hidden bg-cream text-ink card-pop"
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
                  </div>
                  <div className="p-5 bg-cream text-ink border-t-2 border-ink">
                    <h3 className="font-display text-2xl mb-1">{p.title}</h3>
                    <p className="text-sm text-ink/70 font-bold">{p.metric}</p>
                    <span className="block mt-3 text-xs uppercase tracking-widest font-black text-crimson group-hover:underline">
                      Read case study →
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
