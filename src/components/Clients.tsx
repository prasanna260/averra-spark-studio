import { Reveal } from "./Reveal";

const groups = [
  { title: "Creators", desc: "From 10K to 10M · we engineer growth loops, not luck.", icon: "✺", bg: "bg-crimson text-cream" },
  { title: "Startups", desc: "Launch with a brand that punches above its seed round.", icon: "◆", bg: "bg-yellow text-ink" },
  { title: "D2C Brands", desc: "From hero product to category leader. We scale stories.", icon: "❖", bg: "bg-emerald text-cream" },
  { title: "Enterprises", desc: "Refresh, relaunch, reinvigorate. Without the agency lag.", icon: "✦", bg: "bg-cream text-ink" },
];

export function Clients() {
  return (
    <section className="relative py-24 md:py-32 bg-cyan border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-ink font-black mb-4">
              ✦ Who we work with ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-3xl mx-auto text-cream">
              From bedroom creators to <span className="text-yellow">boardroom brands.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className={`card-pop rounded-3xl p-8 h-full ${g.bg}`}>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/10 border-2 border-current text-2xl mb-6">
                  {g.icon}
                </div>
                <h3 className="font-display text-3xl mb-3">{g.title}</h3>
                <p className="opacity-90 leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
