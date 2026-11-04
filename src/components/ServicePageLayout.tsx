import { Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";
import { BigWord } from "./scroll/BigWord";
import { PinnedSection, usePinProgress } from "./scroll/Pinned";
import { SiteRail } from "./scroll/SiteRail";
import { enter, leave, seg } from "./scroll/seg";
import { ServiceContactForm } from "./ServiceContactForm";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";

const CONTACT_EMAIL = "Averracreations@gmail.com";

const RAIL = [
  { id: "overview", label: "Overview" },
  { id: "deliverables", label: "What you get" },
  { id: "contact", label: "Brief us" },
  { id: "call", label: "Quick call" },
];

const TONES = ["bg-cyan", "bg-yellow", "bg-peach", "bg-emerald text-cream"];

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

/**
 * Shared layout for the five service pages. Like the home page, each block is
 * a pinned scroll scene: the hero cover, a deliverables card deck and the
 * closing call. The brief form stays in normal flow so typing is never
 * fighting the scroll.
 */
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

      {/* SCENE 1 — magazine cover. On phones the copy hands over to the cover card;
          on desktop the cover card slides to centre stage. */}
      <PinnedSection
        id="overview"
        svh={175}
        className={`${bgClass} border-b-2 border-ink text-ink`}
        stageClassName="flex items-center"
      >
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="scene-anim absolute -top-16 -left-10 hidden h-72 w-72 rounded-full border-2 border-ink bg-yellow opacity-90 md:block"
          style={{ transform: "translate3d(0, calc(var(--sp, 0) * 180px), 0)" }}
        />
        <div
          aria-hidden
          className="big-word absolute bottom-0 right-0 font-display text-[10rem] md:text-[16rem] leading-none text-ink/[0.06] select-none pointer-events-none translate-x-6 translate-y-6"
        >
          {tag}
        </div>
        <div
          aria-hidden
          className="scene-anim absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg at 50% 50%, var(--ink) 0deg 5deg, transparent 5deg 16deg)",
            transform: "rotate(calc(var(--sp, 0) * 25deg)) scale(1.4)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 sm:px-8 md:pt-24 lg:pl-16">
          <div className="scene-stack lg:!grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:[&>*]:![grid-row:1]">
            {/* copy: on phones it lifts away, on desktop it drifts and dims */}
            <div
              className="scene-anim lg:!col-span-7 lg:!opacity-100 lg:![transform:none]"
              style={leave(0.3, 0.5, 80)}
            >
              <div
                className="scene-anim"
                style={{
                  opacity: `calc(1 - ${seg(0.45, 0.8)})`,
                  transform: `translate3d(calc(${seg(0.45, 0.85)} * -6vw), 0, 0)`,
                }}
              >
                <Link
                  to="/"
                  className="mb-5 inline-block text-xs font-black uppercase tracking-[0.3em] transition-colors hover:text-crimson md:mb-8"
                >
                  ← Back to home
                </Link>
                <span
                  className={`mb-4 ml-0 block w-fit -rotate-2 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider md:mb-5 ${pillClass}`}
                >
                  ✦ {tag} ✦
                </span>
                <h1 className="mb-4 font-display text-[clamp(2.5rem,12vw,8rem)] leading-[0.92] tracking-tight text-balance md:mb-6">
                  {title}
                </h1>
                <p className="max-w-2xl text-base font-medium text-ink/80 sm:text-lg md:text-xl">
                  {subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
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
                  <Link to="/work" className="btn-pop bg-cream text-ink text-sm">
                    See our work ▶
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 md:mt-10">
                  {statCards.map((item, i) => (
                    <div
                      key={item.label}
                      className="scene-anim rounded-2xl border-2 border-ink bg-cream/95 p-3 shadow-pop sm:rounded-3xl sm:p-4"
                      style={{
                        transform: `translate3d(0, calc(${seg(0.05 + i * 0.06, 0.25 + i * 0.06)} * -${10 + i * 6}px), 0) rotate(calc(${seg(0.05 + i * 0.06, 0.25 + i * 0.06)} * ${i % 2 ? 2 : -2}deg))`,
                      }}
                    >
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-ink/55 sm:text-[10px] sm:tracking-[0.28em]">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-base leading-none sm:mt-3 sm:text-2xl">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* cover card: slides in on phones, swings to centre on desktop */}
            <div className="lg:!col-span-5">
              <div
                className="scene-anim lg:hidden"
                style={{
                  opacity: seg(0.42, 0.6),
                  transform: `translate3d(0, calc((1 - ${seg(0.42, 0.65)}) * 60vh), 0) rotate(calc((1 - ${seg(0.42, 0.65)}) * 8deg))`,
                }}
              >
                <CoverCard
                  compact
                  title={title}
                  subtitle={subtitle}
                  heroImg={heroImg}
                  pillClass={pillClass}
                />
              </div>
              <div
                className="scene-anim hidden lg:block"
                style={{
                  transform: `translate3d(calc(${seg(0.3, 0.85)} * -12vw), 0, 0) rotate(calc(1deg - ${seg(0.3, 0.85)} * 1deg)) scale(calc(1 + ${seg(0.3, 0.85)} * 0.06))`,
                }}
              >
                <CoverCard
                  title={title}
                  subtitle={subtitle}
                  heroImg={heroImg}
                  pillClass={pillClass}
                />
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div
          aria-hidden
          className="scene-anim absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          style={{ opacity: `calc(1 - ${seg(0, 0.1)})` }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-ink/70">
            Scroll
          </span>
          <span className="relative h-8 w-0.5 overflow-hidden bg-ink/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.6s_ease-in-out_infinite] bg-ink" />
          </span>
        </div>
      </PinnedSection>

      {/* SCENE 2 — deliverables, dealt one card per scroll step */}
      <Deliverables bullets={bullets} />

      {children}

      {/* CONTACT FORM */}
      <section
        id="contact"
        data-scroll-scene
        suppressHydrationWarning
        className="relative overflow-hidden border-b-2 border-ink bg-peach py-20 text-ink md:py-28"
      >
        <BigWord className="top-6" opacity={0.07}>
          LET&apos;S TALK
        </BigWord>
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
          decoding="async"
          className="hidden xl:block absolute left-2 2xl:left-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
        />
        <img
          src={mascotBull}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="hidden xl:block absolute right-2 2xl:right-10 bottom-10 w-[220px] 2xl:w-[280px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
          style={{ animationDelay: "-2s" }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
          <Reveal variant="mask">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-3">
                ✦ Let's talk ✦
              </p>
              <h2 className="font-display text-4xl tracking-tight text-balance md:text-6xl">
                Tell us about your <span className="text-crimson">{tag.toLowerCase()}</span>{" "}
                project.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ServiceContactForm serviceTitle={title} pillClass={pillClass} />
          </Reveal>
        </div>
      </section>

      {/* SCENE 4 — closing call */}
      <PinnedSection
        id="call"
        svh={150}
        className="border-b-2 border-ink bg-ink text-cream"
        stageClassName="flex items-center"
      >
        <BigWord stroke="var(--cream)" opacity={0.08} direction={-1}>
          UNMISSABLE
        </BigWord>
        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-8">
          <p
            className="scene-anim mb-4 text-xs font-black uppercase tracking-[0.3em] text-yellow"
            style={enter(0, 0.08, 16)}
          >
            ✦ Prefer a quick call? ✦
          </p>
          <h2 className="mb-8 font-display text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
            {["Let's", "build", "something"].map((w, i) => {
              const t = seg(0.04 + i * 0.08, 0.14 + i * 0.08);
              return (
                <span
                  key={w}
                  className="scene-anim mr-[0.25em] inline-block"
                  style={{
                    opacity: t,
                    transform: `translate3d(0, calc((1 - ${t}) * 60px), 0) rotate(calc((1 - ${t}) * ${i % 2 ? 8 : -8}deg))`,
                  }}
                >
                  {w}
                </span>
              );
            })}
            <span
              className="scene-anim inline-block text-yellow"
              style={{
                opacity: seg(0.3, 0.42),
                transform: `scale(calc(1.8 - ${seg(0.3, 0.45)} * 0.8)) rotate(calc((1 - ${seg(0.3, 0.45)}) * -6deg))`,
              }}
            >
              unmissable.
            </span>
          </h2>
          <div
            className="scene-anim flex flex-wrap items-center justify-center gap-3"
            style={enter(0.48, 0.62, 40)}
          >
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
            <Link to="/work" className="btn-pop bg-cyan text-ink text-base">
              See our work ▶
            </Link>
          </div>
        </div>
      </PinnedSection>

      <Footer />
      <StickyCTA />
      <SiteRail sections={RAIL} />
    </main>
  );
}

/** The magazine cover card from the hero. */
function CoverCard({
  compact = false,
  title,
  subtitle,
  heroImg,
  pillClass,
}: {
  compact?: boolean;
  title: string;
  subtitle: string;
  heroImg: string;
  pillClass: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border-2 border-ink bg-cream shadow-pop sm:rounded-[2rem] lg:shadow-[10px_10px_0_0_var(--ink)]">
      <div className="relative">
        <div className="card-pop overflow-hidden rounded-[1.5rem] border-2 border-ink bg-cream sm:rotate-[1deg] sm:rounded-[2rem]">
          <img
            src={heroImg}
            alt={title}
            decoding="async"
            className={`w-full object-cover ${compact ? "h-[38svh]" : "h-[240px] sm:h-[320px] md:h-[42svh]"}`}
          />
        </div>
        {/* Sticker badge */}
        <div
          aria-hidden
          className="card-pop absolute -right-2 -top-4 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border-2 border-ink bg-crimson text-cream sm:h-24 sm:w-24 md:-right-6 md:-top-5"
        >
          <span className="font-display text-sm leading-tight text-center px-2">
            NEW
            <br />
            DROP
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div
          className={`border-t-2 border-ink bg-cream p-5 sm:p-6 md:border-r-2 ${compact ? "hidden" : ""}`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/55">Message</p>
          <p className="mt-3 text-sm leading-relaxed font-medium text-ink/80">{subtitle}</p>
        </div>
        <div className={`border-t-2 border-ink p-5 sm:p-6 ${pillClass}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-75">Info</p>
          <p className="mt-3 text-sm leading-relaxed font-medium">
            Focused delivery across strategy, creative execution, and roll-out support.
          </p>
        </div>
      </div>

      <div
        className={`grid-cols-1 border-t-2 border-ink bg-ink text-cream md:grid-cols-3 ${compact ? "hidden" : "grid"}`}
      >
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
  );
}

/** Deliverables as a pinned card deck with a numbered list, like the home Services scene. */
function Deliverables({ bullets }: { bullets: { title: string; body: string }[] }) {
  const ref = useRef<HTMLElement>(null);
  const n = bullets.length;
  const [active, setActive] = useState(0);
  const F = `min(${n - 1}, var(--sp, 0) * ${((n - 1) / 0.8).toFixed(4)})`;
  usePinProgress(ref, (p) => {
    const i = Math.min(n - 1, Math.round((p * (n - 1)) / 0.8));
    setActive((cur) => (cur === i ? cur : i));
  });

  return (
    <PinnedSection
      id="deliverables"
      sectionRef={ref}
      svh={100 + n * 70}
      className="border-b-2 border-ink bg-cream text-ink"
    >
      <BigWord className="top-20 md:top-24" opacity={0.06}>
        WHAT YOU GET
      </BigWord>
      <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-5 px-4 pb-6 pt-24 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:grid-rows-1 md:items-center md:gap-12 md:pb-10 lg:pl-16">
        <div>
          <p
            className="scene-anim mb-3 text-xs font-black uppercase tracking-[0.3em] text-crimson md:mb-4"
            style={enter(0, 0.06, 16)}
          >
            ✦ What you get ✦
          </p>
          <h2
            className="scene-anim font-display text-[clamp(2rem,7vw,4rem)] leading-[0.95] tracking-tight text-balance"
            style={enter(0, 0.08, 40)}
          >
            Built bold. Shipped <span className="text-crimson">fast.</span>
          </h2>
          <p
            className="scene-anim mt-4 hidden max-w-xs text-sm font-medium text-ink/70 md:block md:text-base"
            style={enter(0.02, 0.1, 24)}
          >
            Every engagement, end-to-end — strategy to launch.
          </p>
          <ol className="mt-8 hidden space-y-1 md:block">
            {bullets.map((b, i) => (
              <li
                key={b.title}
                className={`flex items-baseline gap-4 py-1.5 transition-colors duration-300 ${
                  i === active ? "text-ink" : "text-ink/35"
                }`}
              >
                <span className="w-6 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`font-display text-xl transition-transform duration-300 lg:text-2xl ${
                    i === active ? "translate-x-1" : ""
                  }`}
                >
                  {b.title}
                </span>
                <span
                  className={`h-0.5 flex-1 origin-left bg-crimson transition-transform duration-500 ${
                    i === active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            ))}
          </ol>
          <p className="mt-4 font-mono text-xs font-bold text-ink/60 md:hidden">
            <span className="text-crimson">{String(active + 1).padStart(2, "0")}</span> /{" "}
            {String(n).padStart(2, "0")}
          </p>
        </div>

        <div className="scene-deck relative grid min-h-0 items-center">
          {bullets.map((b, i) => {
            const incoming = `clamp(0, calc(${i} - ${F}), 1)`;
            const past = `clamp(0, calc(${F} - ${i}), 3)`;
            return (
              <div
                key={b.title}
                aria-hidden={i !== active}
                className={`scene-anim card-pop self-center rounded-3xl border-2 border-ink p-6 sm:p-8 md:p-10 ${TONES[i % TONES.length]}`}
                style={{
                  zIndex: i + 1,
                  transform: `translate3d(0, calc(${incoming} * 100svh - ${past} * 18px), 0) scale(calc(1 - ${past} * 0.05)) rotate(calc(${incoming} * 8deg + ${i % 2 ? 1 : -1}deg))`,
                }}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-cream font-black text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-display text-3xl md:text-5xl">{b.title}</h3>
                <p className="max-w-md text-base font-medium leading-relaxed opacity-90 md:text-lg">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </PinnedSection>
  );
}
