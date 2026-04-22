import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  image: string;
  pillClass: string; // e.g. "bg-emerald text-cream"
  bullets: { title: string; body: string }[];
  deliverables: string[];
  cta?: string;
}

export function ServicePage({
  eyebrow,
  title,
  highlight,
  intro,
  image,
  pillClass,
  bullets,
  deliverables,
  cta = "Start a project",
}: ServicePageProps) {
  return (
    <main className="relative bg-cream text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal>
            <div>
              <Link
                to="/"
                className="inline-block mb-6 text-xs uppercase tracking-[0.3em] font-black text-ink/60 hover:text-crimson transition"
              >
                ← Back to home
              </Link>
              <span className={`inline-block ${pillClass} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink mb-5`}>
                {eyebrow}
              </span>
              <h1 className="font-display text-5xl md:text-7xl tracking-tight text-balance leading-[0.95]">
                {title} {highlight && <span className="text-crimson">{highlight}</span>}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink/75 max-w-xl">{intro}</p>
              <a href="#contact" className="inline-block mt-8 btn-pop bg-yellow text-ink">
                {cta} →
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-2 border-ink shadow-pop">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 md:py-28 bg-ink text-cream border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
              ✦ What you get ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl mb-12">
              Built to <span className="text-yellow">convert.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bullets.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="bg-cream text-ink p-6 rounded-2xl border-2 border-cream card-pop h-full">
                  <h3 className="font-display text-2xl mb-2">{b.title}</h3>
                  <p className="text-ink/75 font-medium">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-[1fr_2fr] gap-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Inside the <span className="text-crimson">package.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 bg-cream border-2 border-ink rounded-xl px-5 py-4 shadow-pop"
                >
                  <span className="font-black text-crimson">✦</span>
                  <span className="font-bold">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
