import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "Audit, listen, dig. We get inside your category before we touch a pixel.", color: "crimson" },
  { n: "02", title: "Create", desc: "Strategy meets craft. Brand, story, content, code — built in tandem.", color: "gold" },
  { n: "03", title: "Launch", desc: "Coordinated rollout across paid, organic, and earned. Made for momentum.", color: "emerald" },
  { n: "04", title: "Scale", desc: "Test, learn, double down. Continuous optimization for compounding returns.", color: "crimson" },
];

const dotColor: Record<string, string> = {
  crimson: "bg-crimson",
  gold: "bg-gold",
  emerald: "bg-emerald",
};

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-4">
              Our process
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance">
              Four moves. Infinite outcomes.
            </h2>
          </div>
        </Reveal>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* connecting line */}
          <div aria-hidden className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-crimson via-gold to-emerald opacity-40" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className={`relative z-10 mx-auto h-16 w-16 rounded-full ${dotColor[s.color]} grid place-items-center font-display text-xl font-bold text-cream shadow-soft`}>
                  {s.n}
                </div>
                <div className="mt-6 rounded-2xl bg-card p-6 border border-ink/5 hover-lift">
                  <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
