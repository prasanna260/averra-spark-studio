import { Reveal } from "./Reveal";

const stats = [
  { v: "1.5M", k: "Impressions delivered", bg: "bg-crimson text-cream" },
  { v: "₹1.2M", k: "Revenue influenced", bg: "bg-yellow text-ink" },
  { v: "12+", k: "Brands partnered", bg: "bg-emerald text-cream" },
  { v: "92%", k: "Client retention", bg: "bg-cream text-ink" },
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
