import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

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

export function Services() {
  return (
    <section id="services" className="relative bg-cream py-20 border-b-2 border-ink md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
                ✦ What we do ✦
              </p>
              <h2 className="font-display max-w-2xl text-4xl tracking-tight text-balance sm:text-5xl md:text-7xl">
                One studio. <br />
                <span className="inline-block -rotate-1 border-2 border-ink bg-yellow px-2 sm:px-3">
                  Every play.
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-md text-base font-medium text-ink/80 sm:text-lg">
              From the first sketch to the scaled campaign, we own the whole pipeline · so you stay
              focused on building the business.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <Link
                to={s.to}
                className={`card-pop block h-full rounded-3xl p-6 transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-crimson sm:p-8 md:p-10 ${s.bg}`}
                aria-label={`Explore ${s.title}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-sm tracking-widest opacity-60">{s.n}</span>
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full border-2 border-ink font-display text-xl ${s.pill}`}
                  >
                    ✦
                  </span>
                </div>
                <p className="text-sm font-bold mb-2 opacity-70">{s.eyebrow}</p>
                <h3 className="mb-4 font-display text-3xl leading-none sm:text-4xl md:text-5xl">
                  {s.title}
                </h3>
                <p className="text-base mb-6 max-w-md opacity-90">{s.desc}</p>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
