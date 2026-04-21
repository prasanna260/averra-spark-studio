import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Audit, listen, dig. We get inside your category before we touch a pixel.",
    bg: "text-ink",
    bgStyle: { backgroundColor: "#1FB8DD" },
    icon: "🔍",
    accent: "text-cream",
    accentStyle: { backgroundColor: "#CF0A2C" },
    pow: "ZAP!",
  },
  {
    n: "02",
    title: "Create",
    desc: "Strategy meets craft. Brand, story, content, code, built in tandem.",
    bg: "text-cream",
    bgStyle: { backgroundColor: "#F5002A" },
    icon: "✏️",
    accent: "text-ink",
    accentStyle: { backgroundColor: "#ECF20B" },
    pow: "BAM!",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Coordinated rollout across paid, organic, and earned. Built for momentum.",
    bg: "text-ink",
    bgStyle: { backgroundColor: "#ECF20B" },
    icon: "🚀",
    accent: "text-cream",
    accentStyle: { backgroundColor: "#009247" },
    pow: "BOOM!",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Test, learn, double down. Continuous optimization for compounding returns.",
    bg: "text-cream",
    bgStyle: { backgroundColor: "#009247" },
    icon: "📈",
    accent: "text-ink",
    accentStyle: { backgroundColor: "#1FB8DD" },
    pow: "POW!",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-y-2 border-ink overflow-hidden"
      style={{ backgroundColor: "#EFE8D6" }}
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
        className="hidden md:block absolute -top-16 -left-10 h-56 w-56 rounded-full blur-2xl animate-blob"
        style={{ backgroundColor: "rgba(164, 54, 41, 0.3)" }}
      />
      <div
        aria-hidden
        className="hidden md:block absolute -bottom-20 -right-10 h-72 w-72 rounded-full blur-3xl animate-blob"
        style={{ backgroundColor: "rgba(215, 106, 75, 0.4)", animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <p
              className="text-xs uppercase tracking-[0.3em] font-black mb-4"
              style={{ color: "#CF0A2C" }}
            >
              ✦ Our process ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
              Four moves.
              <br />
              <span
                className="text-cream px-4 inline-block border-2 border-ink -rotate-1 shadow-pop mt-3"
                style={{ backgroundColor: "#F5002A" }}
              >
                Infinite outcomes.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg font-bold text-ink/70 max-w-xl mx-auto">
              A repeatable system, not a vibe. From the first audit to the
              tenth optimization, here&apos;s how we ship.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div
                  className={`card-pop rounded-3xl p-7 h-full ${s.bg} relative ${
                    i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-10"
                  }`}
                  style={s.bgStyle}
                >
                  {/* numbered badge */}
                  <div
                    className={`absolute -top-6 -left-3 h-16 w-16 rounded-full border-2 border-ink shadow-pop flex items-center justify-center font-display text-2xl ${s.accent} rotate-[-6deg]`}
                    style={s.accentStyle}
                  >
                    {s.n}
                  </div>

                  {/* comic POW sticker */}
                  <div
                    aria-hidden
                    className="absolute -top-4 -right-3 font-comic text-lg px-3 py-1 bg-cream text-ink border-2 border-ink rounded-md shadow-pop rotate-[8deg]"
                  >
                    {s.pow}
                  </div>

                  <div className="text-5xl mb-5 mt-3">{s.icon}</div>
                  <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>

                  {/* halftone strip */}
                  <div
                    aria-hidden
                    className="mt-6 h-2 rounded-full opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(currentColor 1.2px, transparent 1.2px)",
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
