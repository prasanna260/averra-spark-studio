import { useEffect, useState } from "react";
import handPoint from "@/assets/hand-point.png";
import handCatch from "@/assets/hand-catch.png";

const ROTATING = ["#JustViral", "#JustAverra", "#JustBuilt", "#JustScale"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-32 pb-20 bg-cyan"
    >
      {/* side rails */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-10 bg-yellow border-r-2 border-ink z-10 items-center justify-center">
        <span className="font-display text-sm tracking-[0.3em] text-ink rotate-180" style={{ writingMode: "vertical-rl" }}>
          GET AVERRA!
        </span>
      </div>
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-10 bg-yellow border-l-2 border-ink z-10 items-center justify-center">
        <span className="font-display text-sm tracking-[0.3em] text-ink" style={{ writingMode: "vertical-rl" }}>
          GOT AVERRA!
        </span>
      </div>

      {/* halftone hands */}
      <img
        src={handPoint}
        alt=""
        aria-hidden
        className="absolute left-2 lg:left-16 top-[30%] w-[280px] md:w-[380px] lg:w-[460px] -rotate-[18deg] animate-wiggle drop-shadow-[6px_6px_0_var(--ink)] pointer-events-none"
      />
      <img
        src={handCatch}
        alt=""
        aria-hidden
        className="absolute right-2 lg:right-16 top-[55%] w-[280px] md:w-[380px] lg:w-[460px] rotate-[12deg] animate-wiggle drop-shadow-[6px_6px_0_var(--ink)] pointer-events-none"
        style={{ animationDelay: "-2s" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-4 py-1.5 text-xs font-bold text-ink mb-8 shadow-pop">
          <span className="h-2 w-2 rounded-full bg-emerald" />
          NOW BOOKING Q1 — SAY HI 👋
        </div>

        <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-[-0.03em] text-cream text-balance">
          Get Seen.
          <br />
          Get Loud.
          <br />
          <span key={idx} className="inline-block text-yellow animate-[reveal-up_0.6s_ease-out]">
            {ROTATING[idx]}
          </span>
        </h1>

        <p className="mt-8 mx-auto max-w-xl text-lg md:text-xl text-cream/90 font-medium">
          A full-stack creative studio for brands that refuse to blend in.
          Branding, ads, content, growth — done loud, done right.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-pop bg-yellow text-ink text-base">
            Let's Chat!
            <span className="text-xl">→</span>
          </a>
          <a href="#work" className="btn-pop bg-cream text-ink text-base">
            See Our Work
          </a>
        </div>
      </div>

      {/* bottom mini stats strip */}
      <div className="relative mt-20 mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: "240M+", k: "views generated", c: "bg-crimson text-cream" },
            { v: "180+", k: "brands launched", c: "bg-yellow text-ink" },
            { v: "12×", k: "avg. ROAS", c: "bg-emerald text-cream" },
          ].map((s) => (
            <div
              key={s.k}
              className={`card-pop rounded-2xl p-5 text-center ${s.c}`}
            >
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest font-bold opacity-90">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
