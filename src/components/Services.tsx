import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    eyebrow: "Design your dreams with",
    title: "Branding & Identity",
    desc: "Logos, systems, packaging. Identities engineered to outlive trends.",
    items: ["Logo & visual identity", "Packaging design", "Brand guidelines", "Naming"],
    bg: "bg-peach",
    pill: "bg-crimson text-cream",
  },
  {
    n: "02",
    eyebrow: "Stop the scroll with",
    title: "Ad Campaigns",
    desc: "Big ideas that move people. From concept to film set to feed.",
    items: ["Creative direction", "Storyboarding", "Production", "Launch strategy"],
    bg: "bg-yellow",
    pill: "bg-ink text-cream",
  },
  {
    n: "03",
    eyebrow: "Grow loud with",
    title: "Social Media",
    desc: "Content that compounds. Strategies that scale follower → fan → buyer.",
    items: ["Content calendars", "Community", "Paid social", "Analytics"],
    bg: "bg-emerald text-cream",
    pill: "bg-yellow text-ink",
  },
  {
    n: "04",
    eyebrow: "Press record with",
    title: "Content Production",
    desc: "Reels, ads, photoshoots. Studio-grade output without the studio overhead.",
    items: ["Reels & UGC", "Photo shoots", "Video editing", "Motion design"],
    bg: "bg-crimson text-cream",
    pill: "bg-yellow text-ink",
  },
  {
    n: "05",
    eyebrow: "Convert harder with",
    title: "Web & Funnels",
    desc: "Sites and storefronts that convert. Designed for thumbs, built for scale.",
    items: ["Landing pages", "Shopify & D2C", "Funnels", "CRO"],
    bg: "bg-cream",
    pill: "bg-emerald text-cream",
  },
  {
    n: "06",
    eyebrow: "Spend smarter with",
    title: "Performance Marketing",
    desc: "Spend less, sell more. Meta, Google, TikTok — managed by humans, optimized by data.",
    items: ["Meta & Google ads", "Creative testing", "Attribution", "Scale"],
    bg: "bg-cyan",
    pill: "bg-crimson text-cream",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
                ✦ What we do ✦
              </p>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-2xl">
                One studio. <br />
                <span className="bg-yellow px-3 inline-block border-2 border-ink -rotate-1">Every play.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-md text-ink/80 text-lg font-medium">
              From the first sketch to the scaled campaign, we own the whole pipeline —
              so you stay focused on building the business.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className={`card-pop rounded-3xl p-8 md:p-10 h-full ${s.bg}`}>
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-sm tracking-widest opacity-60">{s.n}</span>
                  <span className={`grid h-12 w-12 place-items-center rounded-full border-2 border-ink font-display text-xl ${s.pill}`}>
                    ✦
                  </span>
                </div>
                <p className="text-sm font-bold mb-2 opacity-70">{s.eyebrow}</p>
                <h3 className="font-display text-4xl md:text-5xl mb-4 leading-none">{s.title}</h3>
                <p className="text-base mb-6 max-w-md opacity-90">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
