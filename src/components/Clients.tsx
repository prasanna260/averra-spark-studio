import { Reveal } from "./Reveal";

const groups = [
  { title: "Creators", desc: "From 10K to 10M — we engineer growth loops, not luck.", icon: "✺", color: "crimson" },
  { title: "Startups", desc: "Launch with a brand that punches above its seed round.", icon: "◆", color: "gold" },
  { title: "D2C Brands", desc: "From hero product to category leader. We scale stories.", icon: "❖", color: "emerald" },
  { title: "Enterprises", desc: "Refresh, relaunch, reinvigorate. Without the agency lag.", icon: "✦", color: "crimson" },
];

const colorMap: Record<string, string> = {
  crimson: "bg-crimson/10 text-crimson",
  gold: "bg-gold/20 text-gold-deep",
  emerald: "bg-emerald/10 text-emerald",
};

export function Clients() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-4">
              Who we work with
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance max-w-3xl mx-auto">
              From bedroom creators to boardroom brands.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group rounded-3xl bg-card p-8 hover-lift border border-ink/5 h-full">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${colorMap[g.color]} text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {g.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{g.title}</h3>
                <p className="text-ink-soft leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
