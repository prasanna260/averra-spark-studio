import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "Audit, listen, dig. We get inside your category before we touch a pixel.", bg: "bg-crimson text-cream" },
  { n: "02", title: "Create", desc: "Strategy meets craft. Brand, story, content, code — built in tandem.", bg: "bg-yellow text-ink" },
  { n: "03", title: "Launch", desc: "Coordinated rollout across paid, organic, and earned. Built for momentum.", bg: "bg-emerald text-cream" },
  { n: "04", title: "Scale", desc: "Test, learn, double down. Continuous optimization for compounding returns.", bg: "bg-cream text-ink" },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-peach border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
              ✦ Our process ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
              Four moves. <br />
              <span className="bg-yellow px-3 inline-block border-2 border-ink -rotate-1">Infinite outcomes.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className={`card-pop rounded-3xl p-7 h-full ${s.bg}`}>
                <div className="font-display text-6xl mb-6 opacity-80">{s.n}</div>
                <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
