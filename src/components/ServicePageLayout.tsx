import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

const CONTACT_EMAIL = "Averracreations@gmail.com";

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
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Project enquiry · ${title}`,
  )}&body=${encodeURIComponent(
    `Hi Averra team,%0D%0A%0D%0AI'd love to talk about ${title}.%0D%0A%0D%0AAbout us:%0D%0AGoals:%0D%0ATimeline:%0D%0A%0D%0AThanks!`,
  )}`;

  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />

      {/* HERO */}
      <section
        className={`relative ${bgClass} text-ink pt-32 pb-20 md:pt-40 md:pb-28 border-b-2 border-ink overflow-hidden`}
      >
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        {/* Comic accents */}
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-yellow border-2 border-ink rotate-12 opacity-90 hidden md:block"
        />
        <div
          aria-hidden
          className="absolute bottom-6 left-6 text-[8rem] leading-none font-display text-ink/5 select-none hidden md:block"
        >
          {tag}
        </div>

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
                <span
                  className={`inline-block ${pillClass} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink mb-5 -rotate-2`}
                >
                  ✦ {tag} ✦
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance max-w-4xl mb-6 leading-[0.95]">
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-lg md:text-xl max-w-2xl font-medium text-ink/80">{subtitle}</p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={mailtoHref} className="btn-pop bg-ink text-cream text-sm">
                    Email the team →
                  </a>
                  <a
                    href="https://calendly.com/averracreations/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pop bg-yellow text-ink text-sm"
                  >
                    Book a slot
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Image-style info card */}
            <Reveal delay={240}>
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-ink card-pop bg-cream rotate-[0.6deg]">
                <div className="relative">
                  <img
                    src={heroImg}
                    alt={title}
                    className="w-full h-[300px] md:h-[420px] object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span
                      className={`rounded-full border-2 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider ${pillClass}`}
                    >
                      {tag}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-yellow px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink">
                      Campaign Brief
                    </span>
                  </div>
                  {/* Speech bubble */}
                  <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-xs">
                    <div className="relative bg-cream border-2 border-ink rounded-2xl p-4 card-pop">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">
                        Drop us a line
                      </p>
                      <a
                        href={mailtoHref}
                        className="mt-1 block font-display text-lg md:text-xl text-ink hover:text-crimson transition-colors break-all"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <span
                        aria-hidden
                        className="absolute -bottom-3 left-8 w-5 h-5 bg-cream border-b-2 border-r-2 border-ink rotate-45"
                      />
                    </div>
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

      {/* WHAT YOU GET */}
      <section className="bg-cream text-ink py-20 md:py-28 border-b-2 border-ink relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
              ✦ What you get ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-12 text-balance max-w-3xl">
              Built bold. Shipped <span className="text-crimson">fast.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, i) => {
              const tones = [
                "bg-cyan",
                "bg-yellow",
                "bg-peach",
                "bg-emerald text-cream",
              ];
              const tone = tones[i % tones.length];
              const rotate = i % 2 === 0 ? "-rotate-1" : "rotate-1";
              return (
                <Reveal key={b.title} delay={i * 80}>
                  <div
                    className={`${tone} border-2 border-ink rounded-3xl p-7 card-pop h-full ${rotate} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-ink bg-cream text-ink font-black mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl mb-3">{b.title}</h3>
                    <p className="font-medium leading-relaxed opacity-90">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {children}
        </div>
      </section>

      {/* CONTACT / INFO POSTER CARD */}
      <section className="bg-cream text-ink py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <a
              href={mailtoHref}
              className="group block relative rounded-[2rem] overflow-hidden border-2 border-ink card-pop bg-ink text-cream transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                {/* Image side with overlay */}
                <div className="relative min-h-[260px] md:min-h-[360px]">
                  <img
                    src={heroImg}
                    alt={`${title} contact`}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/40 to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span
                      className={`rounded-full border-2 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider ${pillClass}`}
                    >
                      {tag}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-yellow text-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                      Let's talk
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-3xl md:text-5xl leading-none">
                      Got an idea?
                    </p>
                    <p className="font-display text-3xl md:text-5xl leading-none text-yellow">
                      Send it our way.
                    </p>
                  </div>
                </div>

                {/* Info side */}
                <div className="relative p-7 md:p-10 flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-3">
                      ✦ Direct line ✦
                    </p>
                    <p className="font-display text-2xl md:text-3xl leading-tight mb-2">
                      Drop us a message about <span className="text-yellow">{title}.</span>
                    </p>
                    <p className="text-sm md:text-base text-cream/70 font-medium">
                      Tell us your goal, audience and timeline. We reply within one
                      working day with a clear next step.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cream text-ink border-2 border-ink p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">
                      Email
                    </p>
                    <p className="mt-1 font-display text-xl md:text-2xl break-all">
                      {CONTACT_EMAIL}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                      Compose now
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ink text-cream transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
              ✦ Ready to start? ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-8 text-balance">
              Let's build something <span className="text-yellow">unmissable.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://calendly.com/averracreations/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop bg-yellow text-ink text-base"
              >
                Book a slot
              </a>
              <a href={mailtoHref} className="btn-pop bg-cream text-ink text-base">
                Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
