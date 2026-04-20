import { Reveal } from "./Reveal";

const stats = [
  { v: "0", k: "Impressions delivered", bg: "bg-crimson text-cream" },
  { v: "0", k: "Revenue influenced", bg: "bg-yellow text-ink" },
  { v: "0", k: "Brands partnered", bg: "bg-emerald text-cream" },
  { v: "0", k: "Client retention", bg: "bg-cream text-ink" },
];

export function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className={`card-pop rounded-3xl p-6 text-center ${s.bg}`}>
                <div className="font-display text-4xl md:text-5xl">{s.v}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest font-bold opacity-80">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
            ✦ Receipts ✦
          </p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight text-balance max-w-3xl mb-14">
            Founders & operators on working with us.
          </h2>
        </Reveal>

        {/* Work in progress notice board */}
        <Reveal delay={120}>
          <div className="relative mx-auto max-w-3xl">
            {/* tape strips */}
            <span aria-hidden className="absolute -top-4 left-10 w-24 h-6 bg-yellow/80 border-2 border-ink rotate-[-6deg] shadow-pop" />
            <span aria-hidden className="absolute -top-4 right-10 w-24 h-6 bg-yellow/80 border-2 border-ink rotate-[5deg] shadow-pop" />

            <div className="card-pop rounded-3xl bg-[repeating-linear-gradient(45deg,oklch(0.85_0.18_85)_0_24px,oklch(0.2_0_0)_24px_48px)] p-2">
              <div className="rounded-2xl bg-cream border-2 border-ink p-10 md:p-14 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson text-cream border-2 border-ink text-xs font-black uppercase tracking-widest mb-6 shadow-pop">
                  <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
                  Notice
                </div>
                <h3 className="font-display text-5xl md:text-7xl leading-[0.9] mb-4">
                  Work in <span className="text-crimson">Progress</span>
                </h3>
                <p className="text-base md:text-lg font-bold text-ink/70 max-w-md mx-auto">
                  🚧 Receipts loading. Founder testimonials coming soon · the studio is busy shipping.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 text-2xl">
                  <span>🔨</span><span>⚠️</span><span>🛠️</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
