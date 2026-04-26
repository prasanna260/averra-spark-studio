import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";
import { ServiceContactForm } from "./ServiceContactForm";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";
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
  const statCards = [
    { label: "Service", value: tag },
    { label: "Delivery", value: "End-to-end" },
    { label: "Output", value: "Campaign-ready" },
  ];

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

        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg at 50% 50%, var(--ink) 0deg 5deg, transparent 5deg 16deg)",
          }}
        />
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
              <Reveal delay={220}>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {statCards.map((item) => (
                    <div key={item.label} className="rounded-3xl border-2 border-ink bg-cream/95 p-4 shadow-pop">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">
                        {item.label}
                      </p>
                      <p className="mt-3 font-display text-2xl leading-none">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={240}>
                <div className="rounded-[2rem] overflow-hidden border-2 border-ink bg-cream shadow-[10px_10px_0_0_var(--ink)]">
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

                  <div className="grid grid-cols-1 border-t-2 border-ink bg-ink text-cream md:grid-cols-3">
                    <div className="border-b-2 border-cream/20 p-4 md:border-b-0 md:border-r-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow/80">
                        Strategy
                      </p>
                      <p className="mt-2 text-sm font-medium text-cream/75">
                        Clear offer framing before execution starts.
                      </p>
                    </div>
                    <div className="border-b-2 border-cream/20 p-4 md:border-b-0 md:border-r-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow/80">
                        Creative
                      </p>
                      <p className="mt-2 text-sm font-medium text-cream/75">
                        Attention-first visuals built for real channels.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow/80">
                        Rollout
                      </p>
                      <p className="mt-2 text-sm font-medium text-cream/75">
                        Multi-format delivery ready to ship and scale.
                      </p>
                    </div>
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
        </div>
      </section>

      <section className="bg-cream text-ink py-20 md:py-28 border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
                ✦ What this service includes ✦
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
                Built like a
                <span className="ml-2 inline-block rotate-[-2deg] border-2 border-ink bg-yellow px-3 py-1 align-middle">
                  campaign system
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base md:text-lg font-medium text-ink/70 leading-relaxed">
              Each route now reads less like a placeholder and more like a designed service deck with structure, pace, and visual hierarchy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-pop">
                  <div
                    className={`border-b-2 border-ink px-6 py-4 ${
                      i % 4 === 0
                        ? "bg-cyan"
                        : i % 4 === 1
                          ? "bg-yellow"
                          : i % 4 === 2
                            ? "bg-peach"
                            : "bg-emerald text-cream"
                    }`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
                      Module {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl leading-none">{b.title}</h3>
                  </div>
                  <div className="p-7">
                    <p className="text-ink/80 font-medium leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border-2 border-ink bg-ink p-8 text-cream shadow-pop">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
                  ✦ Route structure ✦
                </p>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                  Brief. Build. Launch. Refine.
                </h3>
                <p className="mt-4 max-w-2xl text-base md:text-lg font-medium text-cream/75 leading-relaxed">
                  A stronger service page gives the work more credibility: visual brief up top, modular capability cards in the middle, and a cleaner transition into conversion.
                </p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink bg-yellow p-8 text-ink shadow-pop">
                <p className="text-xs uppercase tracking-[0.3em] font-black mb-4">
                  Best used for
                </p>
                <ul className="space-y-3 text-base font-bold leading-relaxed">
                  <li>Launch campaigns</li>
                  <li>Service retainers</li>
                  <li>Creative production pitches</li>
                  <li>Growth-led brand pages</li>
                </ul>
              </div>
            </div>
          </Reveal>
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
          src={mascotSuperboy}
          alt=""
          aria-hidden
          loading="lazy"
          className="hidden xl:block absolute left-2 2xl:left-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
        />
        <img
          src={mascotBull}
          alt=""
          aria-hidden
          loading="lazy"
          className="hidden xl:block absolute right-2 2xl:right-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
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
