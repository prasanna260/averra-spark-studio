import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

type ServicePageLayoutProps = {
  tag: string;
  title: string;
  subtitle: string;
  heroImg: string;
  pillClass: string;
  bgClass?: string;
  bullets: { title: string; body: string }[];
  children?: ReactNode;
};

export function ServicePageLayout({
  tag,
  title,
  subtitle,
  heroImg,
  pillClass,
  bgClass = "bg-cream",
  bullets,
  children,
}: ServicePageLayoutProps) {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />

      <section className={`relative ${bgClass} text-ink pt-32 pb-20 md:pt-40 md:pb-28 border-b-2 border-ink overflow-hidden`}>
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <Reveal>
                <Link
                  to="/"
                  className="inline-block mb-6 text-xs uppercase tracking-[0.3em] font-black hover:text-crimson transition-colors"
                >
                  ← Back to home
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <span className={`inline-block ${pillClass} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink mb-5`}>
                  {tag}
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance max-w-4xl mb-6">
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-lg md:text-xl max-w-2xl font-medium text-ink/80">{subtitle}</p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="rounded-[2rem] overflow-hidden border-2 border-ink card-pop bg-cream">
                <div className="relative">
                  <img
                    src={heroImg}
                    alt={title}
                    className="w-full h-[300px] md:h-[380px] object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className={`rounded-full border-2 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider ${pillClass}`}>
                      {tag}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-yellow px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink">
                      Campaign Brief
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="border-t-2 border-ink bg-cream p-6 md:border-r-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">
                      Message
                    </p>
                    <p className="mt-3 text-sm leading-relaxed font-medium text-ink/80">
                      {subtitle}
                    </p>
                  </div>
                  <div className={`border-t-2 border-ink p-6 ${pillClass}`}>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-75">
                      Info
                    </p>
                    <p className="mt-3 text-sm leading-relaxed font-medium">
                      Focused delivery across strategy, creative execution, and roll-out support.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="bg-cyan border-2 border-ink rounded-3xl p-7 card-pop h-full">
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{b.title}</h3>
                  <p className="text-ink/80 font-medium leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {children}
        </div>
      </section>

      <section className="bg-ink text-cream py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
              ✦ Ready to start? ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-8 text-balance">
              Let's build something <span className="text-yellow">unmissable.</span>
            </h2>
            <a href="https://calendly.com/averracreations/30min" target="_blank" rel="noopener noreferrer" className="btn-pop bg-yellow text-ink text-base">
              Book a slot
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
