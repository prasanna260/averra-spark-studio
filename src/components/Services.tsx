import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Branding & Identity",
    desc: "Logos, systems, packaging. Identities engineered to outlive trends.",
    color: "crimson",
    items: ["Logo & visual identity", "Packaging design", "Brand guidelines", "Naming"],
  },
  {
    n: "02",
    title: "Ad Campaigns",
    desc: "Big ideas that move people. From concept to film set to feed.",
    color: "gold",
    items: ["Creative direction", "Storyboarding", "Production", "Launch strategy"],
  },
  {
    n: "03",
    title: "Social Media Growth",
    desc: "Content that compounds. Strategies that scale follower → fan → buyer.",
    color: "emerald",
    items: ["Content calendars", "Community", "Paid social", "Analytics"],
  },
  {
    n: "04",
    title: "Content Production",
    desc: "Reels, ads, photoshoots. Studio-grade output without the studio overhead.",
    color: "crimson",
    items: ["Reel & UGC", "Photo shoots", "Video editing", "Motion design"],
  },
  {
    n: "05",
    title: "Web & Funnels",
    desc: "Sites and storefronts that convert. Designed for thumbs, built for scale.",
    color: "gold",
    items: ["Landing pages", "Shopify & D2C", "Funnels", "CRO"],
  },
  {
    n: "06",
    title: "Performance Marketing",
    desc: "Spend less, sell more. Meta, Google, TikTok — managed by humans, optimized by data.",
    color: "emerald",
    items: ["Meta & Google ads", "Creative testing", "Attribution", "Scale"],
  },
];

const colorMap: Record<string, string> = {
  crimson: "bg-crimson text-cream",
  gold: "bg-gold text-ink",
  emerald: "bg-emerald text-cream",
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-4">
                What we do
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance max-w-2xl">
                One studio. Every play in the brand book.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-md text-ink-soft text-lg">
              From the first sketch to the scaled campaign, we own the whole pipeline —
              so you stay focused on building the business.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="group relative h-full rounded-3xl bg-card p-8 hover-lift border border-ink/5 overflow-hidden">
                <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700 ${
                  s.color === "crimson" ? "bg-crimson" : s.color === "gold" ? "bg-gold" : "bg-emerald"
                }`} />
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-ink-soft tracking-widest">{s.n}</span>
                  <span className={`grid h-12 w-12 place-items-center rounded-full ${colorMap[s.color]} font-display text-xl group-hover:rotate-12 transition-transform duration-500`}>
                    ✦
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-ink-soft leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-foreground" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
