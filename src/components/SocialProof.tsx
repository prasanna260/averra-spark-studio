import { Reveal } from "./Reveal";

const stats = [
  { v: "0", k: "Impressions delivered", bg: "bg-crimson text-cream" },
  { v: "0", k: "Revenue influenced", bg: "bg-yellow text-ink" },
  { v: "0", k: "Brands partnered", bg: "bg-emerald text-cream" },
  { v: "0", k: "Client retention", bg: "bg-cream text-ink" },
];

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-cyan py-20 md:py-32">
      {/* Decorative comic blobs */}
      <div
        aria-hidden
        className="absolute -left-16 -top-16 hidden h-72 w-72 animate-blob rounded-full border-2 border-ink bg-yellow opacity-90 shadow-pop sm:block"
      />
      <div
        aria-hidden
        className="absolute -right-20 top-1/3 hidden h-80 w-80 animate-blob rounded-full border-2 border-ink bg-crimson opacity-90 shadow-pop sm:block"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 hidden h-56 w-56 animate-blob rounded-full border-2 border-ink bg-yellow opacity-80 shadow-pop sm:block"
        style={{ animationDelay: "-12s" }}
      />
      {/* Halftone dots overlay */}
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:mb-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className={`card-pop rounded-3xl p-5 text-center sm:p-6 ${s.bg}`}>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl">{s.v}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-80 sm:text-[11px]">
                  {s.k}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
            ✦ Receipts ✦
          </p>
          <h2 className="mb-12 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-5xl md:mb-14 md:text-6xl">
            Founders & operators on working with us.
          </h2>
        </Reveal>

        {/* Work in progress notice board */}
        <Reveal delay={120}>
          <div className="relative mx-auto max-w-3xl">
            {/* tape strips */}
            <span
              aria-hidden
              className="absolute -top-4 left-6 h-5 w-20 rotate-[-6deg] border-2 border-ink bg-cream/90 shadow-pop sm:left-10 sm:h-6 sm:w-24"
            />
            <span
              aria-hidden
              className="absolute -top-4 right-6 h-5 w-20 rotate-[5deg] border-2 border-ink bg-cream/90 shadow-pop sm:right-10 sm:h-6 sm:w-24"
            />

            <div className="card-pop brick-wallpaper relative overflow-hidden rounded-3xl p-2">
              <div className="rounded-2xl border-2 border-ink bg-cream p-6 text-center sm:p-10 md:p-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson text-cream border-2 border-ink text-xs font-black uppercase tracking-widest mb-6 shadow-pop">
                  <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
                  Notice
                </div>
                <h3 className="mb-4 font-display text-4xl leading-[0.9] sm:text-5xl md:text-7xl">
                  Work in <span className="text-crimson">Progress</span>
                </h3>
                <p className="text-base md:text-lg font-bold text-ink/70 max-w-md mx-auto">
                  🚧 Receipts loading. Founder testimonials coming soon · the studio is busy
                  shipping.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 text-2xl">
                  <span>🔨</span>
                  <span>⚠️</span>
                  <span>🛠️</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
