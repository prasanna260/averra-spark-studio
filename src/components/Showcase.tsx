import { Reveal } from "./Reveal";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import content from "@/assets/work-content.jpg";
import web from "@/assets/work-web.jpg";
import ads from "@/assets/work-ads.jpg";
import influencer from "@/assets/work-influencer.jpg";

const projects = [
  { img: branding, tag: "Branding", title: "Maison Velvet", metric: "+340% retail uplift", color: "bg-crimson" },
  { img: social, tag: "Social", title: "Aura Beauty Reels", metric: "82M organic views", color: "bg-emerald" },
  { img: ads, tag: "Performance", title: "Northstar D2C", metric: "9.4× ROAS", color: "bg-gold" },
  { img: content, tag: "Production", title: "Kinetic Studios", metric: "12 spots in 30 days", color: "bg-crimson" },
  { img: web, tag: "Web", title: "Fable Commerce", metric: "+58% conversion", color: "bg-emerald" },
  { img: influencer, tag: "Influencer", title: "Halo Creator Network", metric: "240+ creators", color: "bg-gold" },
];

export function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-foreground text-cream overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-crimson blur-3xl animate-blob" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-emerald blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">
                Selected work
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance max-w-3xl">
                Campaigns that moved markets.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold hover:bg-cream hover:text-foreground transition-all">
              See full portfolio →
            </a>
          </Reveal>
        </div>
      </div>

      {/* horizontal scroll */}
      <div className="overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-6 px-5 sm:px-8 w-max">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group relative w-[78vw] sm:w-[420px] rounded-3xl overflow-hidden bg-card cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <span className={`absolute top-5 left-5 ${p.color} text-cream text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
                  <h3 className="font-display text-2xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-cream/70">{p.metric}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="w-8 shrink-0" />
        </div>
      </div>
    </section>
  );
}
