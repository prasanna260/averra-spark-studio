import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Audit, listen, dig. We get inside your category before we touch a pixel.",
    bg: "bg-crimson text-cream",
    icon: "🔍",
    accent: "bg-yellow text-ink",
  },
  {
    n: "02",
    title: "Create",
    desc: "Strategy meets craft. Brand, story, content, code, built in tandem.",
    bg: "bg-yellow text-ink",
    icon: "✏️",
    accent: "bg-crimson text-cream",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Coordinated rollout across paid, organic, and earned. Built for momentum.",
    bg: "bg-emerald text-cream",
    icon: "🚀",
    accent: "bg-yellow text-ink",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Test, learn, double down. Continuous optimization for compounding returns.",
    bg: "bg-cream text-ink",
    icon: "📈",
    accent: "bg-emerald text-cream",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-peach border-b-2 border-ink overflow-hidden"
    >
      {/* decorative dotted background */}
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
      {/* floating decor blobs */}
      <div
        aria-hidden
        className="hidden md:block absolute -top-16 -left-10 h-56 w-56 rounded-full bg-crimson/30 blur-2xl animate-blob"
      />
      <div
        aria-hidden
        className="hidden md:block absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-yellow/40 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
              ✦ Our process ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
              Four moves.
              <br />
              <span className="bg-yellow px-3 inline-block border-2 border-ink -rotate-1 shadow-pop mt-3">
                Infinite outcomes.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg font-bold text-ink/70 max-w-xl mx-auto">
              A repeatable system, not a vibe. From the first audit to the
              tenth optimization, here&apos;s how we ship.
            </p>
          </div>
        </Reveal>

        {/* Connector line on desktop */}
        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-ink rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--ink) 0 12px, transparent 12px 22px)",
              backgroundColor: "transparent",
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div
                  className={`card-pop rounded-3xl p-7 h-full ${s.bg} relative ${
                    i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-8"
                  }`}
                >
                  {/* numbered badge */}
                  <div
                    className={`absolute -top-5 -left-3 h-14 w-14 rounded-full border-2 border-ink shadow-pop flex items-center justify-center font-display text-xl ${s.accent}`}
                  >
                    {s.n}
                  </div>

                  <div className="text-5xl mb-5 mt-2">{s.icon}</div>
                  <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>

                  {/* tiny corner stamp */}
                  <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black opacity-80">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    Step {s.n}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
