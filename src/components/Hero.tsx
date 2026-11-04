import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import boyMascot from "@/assets/boy-mascot.png";
import tvMascot from "@/assets/tv-mascot.png";
import { PinnedSection } from "./scroll/Pinned";
import { enter, leave, seg } from "./scroll/seg";

const ROTATING = [
  "#Juststopthescroll",
  "#JustSeen",
  "#JustEverywhere",
  "#JustRelevant",
  "#JustOwnit",
  "#JustAverra",
];

const STATS = [
  { v: "500K+", k: "impressions generated", c: "bg-crimson text-cream", r: -3 },
  { v: "80+", k: "projects done", c: "bg-yellow text-ink", r: 2 },
  { v: "10+", k: "brands", c: "bg-emerald text-cream", r: -2 },
];

/**
 * Scene 1 — the opener. Pinned: the headline holds, then the mascots fly off
 * and the headline lifts away as the scoreboard drops in.
 */
export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  const fly = seg(0.15, 0.6);

  return (
    <PinnedSection id="top" svh={190} className="bg-cyan" stageClassName="flex items-center">
      {/* Floating mascots, flying off as you scroll */}
      <div
        className="scene-anim absolute left-6 top-32 z-10 hidden lg:block xl:left-16 xl:top-40 2xl:left-32"
        style={{
          transform: `translate3d(calc(${fly} * -40vw), calc(${fly} * -30vh), 0) rotate(calc(${fly} * -25deg))`,
        }}
      >
        <img
          src={boyMascot}
          alt="Averra mascot superhero boy"
          className="w-32 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] xl:w-56 2xl:w-64"
          style={{ ["--r" as never]: "-6deg" }}
        />
      </div>
      <div
        className="scene-anim absolute right-2 top-36 z-10 hidden lg:block xl:right-6 xl:top-44"
        style={{
          transform: `translate3d(calc(${fly} * 40vw), calc(${fly} * -25vh), 0) rotate(calc(${fly} * 25deg))`,
        }}
      >
        <img
          src={tvMascot}
          alt="Averra retro TV mascot"
          className="w-44 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] xl:w-72 2xl:w-80"
          style={{ ["--r" as never]: "5deg", animationDelay: "1.2s" }}
        />
      </div>

      <div className="scene-stack relative w-full pt-16 sm:pt-20">
        {/* Beat 1: the headline */}
        <div
          className="scene-anim relative mx-auto max-w-6xl px-4 text-center sm:px-8"
          style={leave(0.35, 0.6, 120)}
        >
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border-2 border-ink bg-cream px-3 py-1.5 text-[11px] font-bold text-ink shadow-pop sm:mb-8 sm:px-4 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <span className="truncate">WELCOME · VANAKKAM 🙏</span>
          </div>

          <h1 className="mx-auto max-w-[14ch] font-display text-[clamp(2rem,11vw,7.5rem)] leading-[0.9] tracking-tight text-cream text-balance">
            Enter Feed.
            <br />
            Never Leave.
            <br />
            <span
              key={idx}
              className="inline-block max-w-full break-words text-[clamp(1.4rem,8vw,4.75rem)] tracking-normal text-yellow animate-[reveal-up_0.6s_ease-out] sm:whitespace-nowrap"
            >
              {ROTATING[idx]}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base font-bold text-cream sm:mt-8 md:text-xl">
            A full-stack creative studio for brands that refuse to blend in. Branding, ads, content,
            growth. Done loud, done right.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center sm:mt-10 sm:gap-4">
            <a href="#contact" className="btn-pop bg-yellow text-ink text-base">
              Let&apos;s Chat!
              <span className="text-xl">→</span>
            </a>
            <Link to="/work" className="btn-pop bg-cream text-ink text-base">
              See Our Work
            </Link>
          </div>
        </div>

        {/* Beat 2: the scoreboard */}
        <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center px-4 sm:px-8">
          <p
            className="scene-anim mb-3 text-center text-xs font-black uppercase tracking-[0.3em] text-ink sm:mb-5"
            style={enter(0.5, 0.62, 30)}
          >
            ✦ The scoreboard so far ✦
          </p>
          <h2
            className="scene-anim mb-6 text-center font-display text-[clamp(2rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-cream text-balance sm:mb-10"
            style={enter(0.52, 0.66, 40)}
          >
            Loud work. <span className="text-yellow">Real numbers.</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            {STATS.map((s, i) => {
              const a = 0.58 + i * 0.07;
              return (
                <div
                  key={s.k}
                  className={`scene-anim card-pop rounded-2xl p-4 text-center sm:p-6 ${s.c}`}
                  style={enter(
                    a,
                    a + 0.14,
                    90,
                    `rotate(calc((1 - ${seg(a, a + 0.14)}) * ${s.r * 4}deg))`,
                  )}
                >
                  <div className="font-display text-3xl md:text-5xl">{s.v}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest opacity-90 sm:text-[11px]">
                    {s.k}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden
        className="scene-anim absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        style={{ opacity: `calc(1 - ${seg(0, 0.12)})` }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-ink/70">
          Scroll
        </span>
        <span className="relative h-10 w-0.5 overflow-hidden bg-ink/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.6s_ease-in-out_infinite] bg-ink" />
        </span>
      </div>
    </PinnedSection>
  );
}
