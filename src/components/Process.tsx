import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Audit, listen, dig. We get inside your category before we touch a pixel.",
    bg: "bg-cyan text-ink",
    icon: "🔍",
    accent: "bg-crimson text-cream",
    pow: "ZAP!",
  },
  {
    n: "02",
    title: "Create",
    desc: "Strategy meets craft. Brand, story, content, code, built in tandem.",
    bg: "bg-crimson text-cream",
    icon: "✏️",
    accent: "bg-yellow text-ink",
    pow: "BAM!",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Coordinated rollout across paid, organic, and earned. Built for momentum.",
    bg: "bg-yellow text-ink",
    icon: "🚀",
    accent: "bg-emerald text-cream",
    pow: "BOOM!",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Test, learn, double down. Continuous optimization for compounding returns.",
    bg: "bg-emerald text-cream",
    icon: "📈",
    accent: "bg-cyan text-ink",
    pow: "POW!",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y-2 border-ink bg-cream py-20 md:py-32"
    >
      {/* halftone backdrop */}
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-25 pointer-events-none" />
      {/* comic burst rays */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 50% 50%, var(--ink) 0deg 4deg, transparent 4deg 14deg)",
        }}
      />
      {/* floating decor blobs */}
      <div
        aria-hidden
        className="hidden md:block absolute -top-16 -left-10 h-56 w-56 rounded-full bg-crimson/30 blur-2xl animate-blob"
      />
      <div
        aria-hidden
        className="hidden md:block absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-cyan/40 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
              ✦ Our process ✦
            </p>
            <h2 className="font-display text-4xl tracking-tight text-balance sm:text-5xl md:text-7xl">
              Four moves.
              <br />
              <span className="mt-3 inline-block -rotate-1 border-2 border-ink bg-crimson px-3 text-cream shadow-pop sm:px-4">
                Infinite outcomes.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg font-bold text-ink/70 max-w-xl mx-auto">
              A repeatable system, not a vibe. From the first audit to the tenth optimization,
              here&apos;s how we ship.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* dashed connector */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-20 left-[8%] right-[8%] h-1 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--ink) 0 14px, transparent 14px 26px)",
            }}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div
                  className={`card-pop relative h-full rounded-3xl p-6 pt-8 sm:p-7 ${s.bg} ${
                    i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-10"
                  }`}
                >
                  {/* numbered badge */}
                  <div
                    className={`absolute -left-2 -top-5 flex h-14 w-14 rotate-[-6deg] items-center justify-center rounded-full border-2 border-ink font-display text-xl shadow-pop sm:-left-3 sm:-top-6 sm:h-16 sm:w-16 sm:text-2xl ${s.accent}`}
                  >
                    {s.n}
                  </div>

                  {/* comic POW sticker */}
                  <div
                    aria-hidden
                    className="absolute -right-2 -top-3 rotate-[8deg] rounded-md border-2 border-ink bg-cream px-2.5 py-1 font-comic text-base text-ink shadow-pop sm:-right-3 sm:-top-4 sm:px-3 sm:text-lg"
                  >
                    {s.pow}
                  </div>

                  <div className="mb-5 mt-3 text-4xl sm:text-5xl">{s.icon}</div>
                  <h3 className="mb-3 font-display text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>

                  {/* halftone strip */}
                  <div
                    aria-hidden
                    className="mt-6 h-2 rounded-full opacity-30"
                    style={{
                      backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.2px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black opacity-80">
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
