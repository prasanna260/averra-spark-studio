import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";
import { ServiceContactForm } from "./ServiceContactForm";
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
  )}`;

  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />

      {/* HERO — magazine cover layout */}
      <section
        className={`relative ${bgClass} text-ink pt-28 pb-16 md:pt-36 md:pb-24 border-b-2 border-ink overflow-hidden`}
      >
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-yellow border-2 border-ink opacity-90 hidden md:block"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 font-display text-[10rem] md:text-[16rem] leading-none text-ink/[0.06] select-none pointer-events-none translate-x-6 translate-y-6"
        >
          {tag}
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/"
              className="inline-block mb-8 text-xs uppercase tracking-[0.3em] font-black hover:text-crimson transition-colors"
            >
              ← Back to home
            </Link>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <span
                  className={`inline-block ${pillClass} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink mb-5 -rotate-2`}
                >
                  ✦ {tag} ✦
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance mb-6 leading-[0.92]">
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-lg md:text-xl max-w-2xl font-medium text-ink/80">
                  {subtitle}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="btn-pop bg-ink text-cream text-sm">
                    Start a project →
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

              {/* Stat strip */}
              <Reveal delay={320}>
                <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                  {[
                    { k: "01", v: "Discovery" },
                    { k: "02", v: "Build" },
                    { k: "03", v: "Launch" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border-2 border-ink bg-cream/80 backdrop-blur px-4 py-3"
                    >
                      <p className="font-display text-2xl leading-none">{s.k}</p>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-ink/70 mt-1">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={240}>
                <div className="relative">
                  <div className="rounded-[2rem] overflow-hidden border-2 border-ink card-pop bg-cream rotate-[1deg]">
                    <img
                      src={heroImg}
                      alt={title}
                      className="w-full h-[280px] md:h-[420px] object-cover"
                    />
                  </div>
                  {/* Sticker badge */}
                  <div
                    aria-hidden
                    className="absolute -top-5 -right-3 md:-right-6 w-24 h-24 rounded-full bg-crimson text-cream border-2 border-ink card-pop flex items-center justify-center -rotate-12"
                  >
                    <span className="font-display text-sm leading-tight text-center px-2">
                      NEW
                      <br />
                      DROP
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES — sticker grid */}
      <section className="bg-cream text-ink py-20 md:py-28 border-b-2 border-ink relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
                  ✦ What you get ✦
                </p>
                <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance max-w-3xl">
                  Built bold. Shipped <span className="text-crimson">fast.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base text-ink/70 font-medium max-w-xs">
                Every engagement, end-to-end — strategy to launch.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, i) => {
              const tones = ["bg-cyan", "bg-yellow", "bg-peach", "bg-emerald text-cream"];
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

      {/* CONTACT FORM */}
      <section id="contact" className="bg-peach text-ink py-20 md:py-28 border-b-2 border-ink relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-cyan border-2 border-ink opacity-90 hidden md:block"
        />
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-yellow border-2 border-ink opacity-90 hidden md:block"
        />

        {/* Mascots — left & right */}
        <img
          src={mascotBull}
          alt=""
          aria-hidden
          loading="lazy"
          className="hidden xl:block absolute left-2 2xl:left-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
        />
        <img
          src={mascotSuperboy}
          alt=""
          aria-hidden
          loading="lazy"
          className="hidden xl:block absolute right-2 2xl:right-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)] -scale-x-100"
          style={{ animationDelay: "-2s" }}
        />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-3">
                ✦ Let's talk ✦
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
                Tell us about your <span className="text-crimson">{tag.toLowerCase()}</span> project.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ServiceContactForm serviceTitle={title} pillClass={pillClass} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
              ✦ Prefer a quick call? ✦
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
