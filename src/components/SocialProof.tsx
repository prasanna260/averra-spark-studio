import { Reveal } from "./Reveal";

const stats = [
  { v: "1.2B+", k: "Impressions delivered", color: "crimson" },
  { v: "$48M", k: "Revenue influenced", color: "gold" },
  { v: "180+", k: "Brands partnered", color: "emerald" },
  { v: "97%", k: "Client retention", color: "crimson" },
];

const testimonials = [
  {
    quote: "Averra didn't just rebrand us — they rebuilt how we sell. Our cohort retention doubled in a quarter.",
    name: "Priya Sharma",
    role: "Founder, Lumen Skincare",
  },
  {
    quote: "The closest thing to having an in-house creative team — except they think 10 steps ahead of us.",
    name: "Marcus Chen",
    role: "CMO, Ridgeway Outdoor",
  },
  {
    quote: "Three viral campaigns in six months. Our paid CAC dropped 41%. Worth every rupee, twice over.",
    name: "Anita Rao",
    role: "Growth Lead, Soma Foods",
  },
];

const colorMap: Record<string, string> = {
  crimson: "text-crimson",
  gold: "text-gold-deep",
  emerald: "text-emerald",
};

export function SocialProof() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 border-y border-ink/10 py-12">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className="text-center md:text-left">
                <div className={`font-display text-5xl md:text-6xl font-semibold ${colorMap[s.color]}`}>{s.v}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-ink-soft">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* testimonials */}
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-4">
            Receipts
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-balance max-w-3xl mb-14">
            Founders & operators on working with us.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="h-full rounded-3xl bg-card p-8 border border-ink/5 hover-lift flex flex-col">
                <div className="text-4xl font-display text-gold mb-4 leading-none">&ldquo;</div>
                <blockquote className="text-lg leading-relaxed mb-6 flex-1">{t.quote}</blockquote>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-ink-soft">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
