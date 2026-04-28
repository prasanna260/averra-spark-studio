import { useEffect, useState } from "react";
import boyMascot from "@/assets/boy-mascot.png";
import tvMascot from "@/assets/tv-mascot.png";

const ROTATING = [
  "#Juststopthescroll",
  "#JustSeen",
  "#JustEverywhere",
  "#JustRelevant",
  "#JustOwnit",
  "#JustAverra",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-cyan px-0 pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-20"
    >
      {/* Floating mascots */}
      <img
        src={boyMascot}
        alt="Averra mascot superhero boy"
        className="absolute left-6 top-32 z-10 hidden w-32 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] lg:block xl:left-16 xl:top-40 xl:w-56 2xl:left-32 2xl:w-64"
        style={{ ["--r" as never]: "-6deg" }}
      />
      <img
        src={tvMascot}
        alt="Averra retro TV mascot"
        className="absolute right-2 top-36 z-10 hidden w-44 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] lg:block xl:right-6 xl:top-44 xl:w-72 2xl:w-80"
        style={{ ["--r" as never]: "5deg", animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-8">
        <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border-2 border-ink bg-cream px-3 py-1.5 text-[11px] font-bold text-ink shadow-pop sm:mb-8 sm:px-4 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald" />
          <span className="truncate">WELCOME · VANAKKAM 🙏</span>
        </div>

        <h1 className="font-display text-[clamp(2.45rem,13vw,8rem)] leading-[0.9] tracking-tight text-cream text-balance">
          Enter Feed.
          <br />
          Never Leave.
          <br />
          <span
            key={idx}
            className="inline-block max-w-full break-words text-yellow animate-[reveal-up_0.6s_ease-out]"
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
            Let's Chat!
            <span className="text-xl">→</span>
          </a>
          <a href="#work" className="btn-pop bg-cream text-ink text-base">
            See Our Work
          </a>
        </div>
      </div>

      {/* bottom mini stats strip */}
      <div className="relative mx-auto mt-14 max-w-5xl px-4 sm:mt-20 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { v: "0", k: "views generated", c: "bg-crimson text-cream" },
            { v: "0", k: "brands launched", c: "bg-yellow text-ink" },
            { v: "0", k: "avg. ROAS", c: "bg-emerald text-cream" },
          ].map((s) => (
            <div key={s.k} className={`card-pop rounded-2xl p-4 text-center sm:p-5 ${s.c}`}>
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest opacity-90 sm:text-[11px]">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
