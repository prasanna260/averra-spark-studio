import { Reveal } from "./Reveal";

const stats = [
  { v: "1.2B+", k: "Impressions delivered", bg: "bg-crimson text-cream" },
  { v: "$48M", k: "Revenue influenced", bg: "bg-yellow text-ink" },
  { v: "180+", k: "Brands partnered", bg: "bg-emerald text-cream" },
  { v: "97%", k: "Client retention", bg: "bg-cream text-ink" },
];

const testimonials = [
  {
    quote: "Averra didn't just rebrand us — they rebuilt how we sell. Our cohort retention doubled in a quarter.",
    name: "Priya Sharma",
    role: "Founder, Lumen Skincare",
    bg: "bg-yellow",
  },
  {
    quote: "The closest thing to having an in-house creative team — except they think 10 steps ahead of us.",
    name: "Marcus Chen",
    role: "CMO, Ridgeway Outdoor",
    bg: "bg-cream",
  },
  {
    quote: "Three viral campaigns in six months. Our paid CAC dropped 41%. Worth every rupee, twice over.",
    name: "Anita Rao",
    role: "Growth Lead, Soma Foods",
    bg: "bg-peach",
  },
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

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className={`card-pop rounded-3xl p-8 h-full flex flex-col ${t.bg}`}>
                <div className="font-display text-6xl text-crimson mb-4 leading-none">&ldquo;</div>
                <blockquote className="text-lg leading-snug mb-6 flex-1 font-medium">{t.quote}</blockquote>
                <figcaption>
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-sm opacity-70 font-medium">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
