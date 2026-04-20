import { useEffect, useState } from "react";
import boyMascot from "@/assets/boy-mascot.png";
import tvMascot from "@/assets/tv-mascot.png";

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
      {/* Floating mascots */}
      <img
        src={boyMascot}
        alt="Averra mascot superhero boy"
        className="hidden md:block absolute left-2 lg:left-6 top-32 lg:top-40 w-40 lg:w-56 xl:w-64 z-10 animate-float-y drop-shadow-[6px_6px_0_var(--ink)]"
        style={{ ["--r" as never]: "-6deg" }}
      />
      <img
        src={tvMascot}
        alt="Averra retro TV mascot"
        className="hidden md:block absolute right-2 lg:right-6 top-32 lg:top-44 w-52 lg:w-72 xl:w-80 z-10 animate-float-y drop-shadow-[6px_6px_0_var(--ink)]"
        style={{ ["--r" as never]: "5deg", animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-4 py-1.5 text-xs font-bold text-ink mb-8 shadow-pop">
          <span className="h-2 w-2 rounded-full bg-emerald" />
          WELCOME · VANAKKAM 🙏
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

        <p className="mt-8 mx-auto max-w-xl text-lg md:text-xl text-cream font-bold">
          A full-stack creative studio for brands that refuse to blend in.
          Branding, ads, content, growth. Done loud, done right.
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
            { v: "0", k: "views generated", c: "bg-crimson text-cream" },
            { v: "0", k: "brands launched", c: "bg-yellow text-ink" },
            { v: "0", k: "avg. ROAS", c: "bg-emerald text-cream" },
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
