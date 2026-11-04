import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import tvMascot from "@/assets/tv-mascot.png";
import handPoint from "@/assets/hand-point.png";
import superboyFlying from "@/assets/superboy-flying.png";
import cloudSticker from "@/assets/cloud-sticker.png";
import bullPoint from "@/assets/mascot-bull-point.png";

/**
 * Process — a scroll-driven story.
 *
 * The section is several screens tall; a sticky stage stays pinned while the
 * visitor scrolls through five scenes (intro + four moves). Scroll position is
 * written to CSS custom properties (--p for the whole story, --sp for the
 * scene's own progress), so the objects animate on the compositor without
 * re-rendering React every frame.
 */

type Scene = {
  n: string;
  rail: string;
  move?: string;
  title: ReactNode;
  beats: string[];
  color: string;
  pow?: string;
};

const SCENES: Scene[] = [
  {
    n: "01",
    rail: "Averra",
    title: (
      <>
        Four moves.
        <br />
        <span className="mt-2 inline-block -rotate-1 border-2 border-ink bg-crimson px-3 text-cream shadow-pop sm:px-4">
          Infinite outcomes.
        </span>
      </>
    ),
    beats: ["A repeatable system, not a vibe.", "Scroll, and watch how we ship."],
    color: "var(--yellow)",
  },
  {
    n: "02",
    rail: "Discover",
    move: "Move 01",
    title: "First, we dig.",
    beats: [
      "We audit your brand, top to bottom.",
      "We listen to the people who buy from you.",
      "We map your category before we touch a pixel.",
    ],
    color: "var(--cyan)",
    pow: "ZAP!",
  },
  {
    n: "03",
    rail: "Create",
    move: "Move 02",
    title: "Then, we make it.",
    beats: [
      "Strategy meets craft.",
      "Brand, story, content, code.",
      "Built in tandem, not in silos.",
    ],
    color: "var(--crimson)",
    pow: "BAM!",
  },
  {
    n: "04",
    rail: "Launch",
    move: "Move 03",
    title: "Then, we launch.",
    beats: [
      "Paid, organic and earned, all at once.",
      "One coordinated rollout.",
      "Built for momentum.",
    ],
    color: "var(--yellow)",
    pow: "BOOM!",
  },
  {
    n: "05",
    rail: "Scale",
    move: "Move 04",
    title: "Then, we scale.",
    beats: ["Test. Learn. Double down.", "Continuous optimization for compounding returns."],
    color: "var(--emerald)",
    pow: "POW!",
  },
];

const N = SCENES.length;
/** Scroll distance per scene, in svh. */
const SCENE_SVH = 90;

/** 0→1 as the scene's progress (--sp) moves from a to b, clamped. */
const seg = (a: number, b: number) => `clamp(0, calc((var(--sp) - ${a}) / ${b - a}), 1)`;
/** Opacity + rise for an element that enters between a and b. */
const enter = (a: number, b: number, dist = 40, extra = ""): CSSProperties => ({
  opacity: seg(a, b),
  transform: `translate3d(0, calc((1 - ${seg(a, b)}) * ${dist}px), 0) ${extra}`,
});
/** Pop-in scale for stickers. */
const pop = (a: number, b: number, rot = 0): CSSProperties => ({
  opacity: seg(a, b),
  transform: `rotate(${rot}deg) scale(calc(0.4 + ${seg(a, b)} * 0.6))`,
});

/* ------------------------------------------------------------ the section */

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      const f = p * N;
      const idx = Math.min(N - 1, Math.floor(f));
      stage.style.setProperty("--p", p.toFixed(4));
      sceneRefs.current.forEach((el, i) => {
        // The last scene finishes its animation a little early so it can rest.
        const local = i === N - 1 ? (f - i) / 0.8 : f - i;
        el?.style.setProperty("--sp", Math.min(1, Math.max(0, local)).toFixed(4));
      });
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jumpTo = (i: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const total = section.offsetHeight - window.innerHeight;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: top + (total * (i + 0.35)) / N, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-label="Our process"
      className="relative border-y-2 border-ink bg-cream"
      style={{ height: `calc(${N * SCENE_SVH}svh + 100svh)` }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] overflow-hidden"
        style={{ "--p": 0 } as CSSProperties}
      >
        {/* halftone + grid paper */}
        <div aria-hidden className="absolute inset-0 dotted-bg opacity-25 pointer-events-none" />

        {/* giant brand wordmark drifting with scroll */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] leading-none tracking-tight text-transparent opacity-[0.09] md:text-[16vw]"
          style={{
            WebkitTextStroke: "2px var(--ink)",
            transform: "translate3d(calc(var(--p) * -55%), -50%, 0)",
          }}
        >
          AVERRA CREATIONS · AVERRA CREATIONS
        </div>

        {/* colour burst behind the art, changes with each move */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-30vmax] top-1/2 h-[90vmax] w-[90vmax] -translate-y-1/2 rounded-full opacity-20 transition-colors duration-700 md:right-[-22vmax] md:opacity-25"
          style={{
            backgroundColor: SCENES[active].color,
            maskImage:
              "repeating-conic-gradient(from 0deg at 50% 50%, #000 0deg 6deg, transparent 6deg 14deg)",
            WebkitMaskImage:
              "repeating-conic-gradient(from 0deg at 50% 50%, #000 0deg 6deg, transparent 6deg 14deg)",
          }}
        />

        {/* top label */}
        <div className="absolute inset-x-0 top-24 z-20 flex items-center gap-3 px-6 sm:top-24 sm:px-24 md:top-28">
          <span className="h-0.5 w-8 bg-crimson" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson sm:text-xs">
            Averra Creations · How we work
          </span>
        </div>

        {/* progress rail */}
        <nav
          aria-label="Process steps"
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 sm:left-6"
        >
          <div className="relative flex flex-col gap-5 sm:gap-7">
            <span aria-hidden className="absolute left-[3px] top-1 bottom-1 w-0.5 bg-ink/15" />
            <span
              aria-hidden
              className="absolute left-[3px] top-1 w-0.5 origin-top bg-crimson"
              style={{ height: "calc(100% - 8px)", transform: "scaleY(var(--p))" }}
            />
            {SCENES.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => jumpTo(i)}
                aria-current={i === active ? "step" : undefined}
                className="group relative flex items-center gap-2 pl-0 text-left"
              >
                <span
                  className={`relative z-10 h-2 w-2 rounded-full border border-ink transition-all duration-300 ${
                    i === active ? "scale-150 bg-crimson" : i < active ? "bg-ink" : "bg-cream"
                  }`}
                />
                <span
                  className={`hidden font-mono text-[10px] tracking-widest transition-colors sm:inline ${
                    i === active ? "font-bold text-ink" : "text-ink/40 group-hover:text-ink"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`hidden text-[10px] font-black uppercase tracking-widest transition-all duration-300 lg:inline ${
                    i === active
                      ? "translate-x-0 text-crimson opacity-100"
                      : "-translate-x-1 opacity-0"
                  }`}
                >
                  {s.rail}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* scenes */}
        {SCENES.map((s, i) => (
          <div
            key={s.n}
            ref={(el) => {
              sceneRefs.current[i] = el;
            }}
            aria-hidden={i !== active}
            className={`absolute inset-0 z-10 transition-[opacity,visibility] duration-500 motion-reduce:transition-none ${
              i === active ? "visible opacity-100" : "invisible opacity-0"
            }`}
            style={{ "--sp": 0 } as CSSProperties}
          >
            <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-2 px-6 pb-20 pt-36 sm:pl-24 sm:pr-8 md:grid-cols-[1.05fr_1fr] md:grid-rows-1 md:items-center md:gap-8 md:pb-10 md:pt-24">
              <SceneCopy scene={s} index={i} onJump={jumpTo} />
              <div className="relative h-full min-h-0 md:h-[70svh]">
                <SceneArt index={i} pow={s.pow} />
              </div>
            </div>
          </div>
        ))}

        {/* scroll cue, only on the intro */}
        <div
          aria-hidden
          className={`absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-500 sm:flex ${
            active === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-ink/60">
            Scroll
          </span>
          <span className="relative h-10 w-0.5 overflow-hidden bg-ink/15">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.6s_ease-in-out_infinite] bg-ink" />
          </span>
        </div>

        <style>{`
          @keyframes scroll-cue { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }
          @keyframes process-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
          @keyframes process-spin { to { rotate: 360deg; } }
          @media (prefers-reduced-motion: reduce) {
            #process * { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- copy */

function SceneCopy({
  scene,
  index,
  onJump,
}: {
  scene: Scene;
  index: number;
  onJump: (i: number) => void;
}) {
  const isIntro = index === 0;
  const isLast = index === N - 1;
  const Heading = isIntro ? "h2" : "h3";
  return (
    <div className="relative z-10 max-w-xl">
      {scene.move && (
        <div className="mb-3 flex items-center gap-3" style={enter(0, 0.12, 20)}>
          <span className="rounded-full border-2 border-ink bg-ink px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest text-cream">
            {scene.move}
          </span>
          <span className="font-display text-sm uppercase tracking-wide text-ink/60">
            {scene.rail}
          </span>
        </div>
      )}
      <Heading
        className={`font-display tracking-tight text-balance text-ink ${
          isIntro
            ? "text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
            : "text-4xl leading-none sm:text-6xl lg:text-7xl"
        }`}
        style={enter(0, 0.15, 50)}
      >
        {scene.title}
      </Heading>
      <div className="mt-4 space-y-1.5 sm:mt-6 sm:space-y-2">
        {scene.beats.map((b, j) => {
          const a = 0.12 + j * 0.16;
          return (
            <p
              key={b}
              className={`text-base font-bold leading-snug sm:text-xl ${j === 0 && isIntro ? "text-ink/70" : "text-ink/80"}`}
              style={enter(a, a + 0.14, 24)}
            >
              {b}
            </p>
          );
        })}
      </div>
      {isLast && (
        <div className="mt-6 flex flex-wrap items-center gap-3" style={enter(0.55, 0.75, 24)}>
          <a
            href="#contact"
            className="btn-pop bg-yellow px-5 py-2.5 text-sm text-ink sm:text-base"
          >
            Let&apos;s build yours →
          </a>
          <button
            type="button"
            onClick={() => onJump(0)}
            className="text-xs font-black uppercase tracking-widest text-ink/60 underline-offset-4 hover:text-ink hover:underline"
          >
            Replay ↺
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- art */

function Sticker({
  text,
  style,
  className = "",
}: {
  text: string;
  style: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-md border-2 border-ink bg-cream px-3 py-1 font-comic text-xl text-ink shadow-pop sm:text-3xl ${className}`}
      style={style}
    >
      {text}
    </div>
  );
}

function SceneArt({ index, pow }: { index: number; pow?: string }) {
  switch (index) {
    case 0:
      return <IntroArt />;
    case 1:
      return <DiscoverArt pow={pow!} />;
    case 2:
      return <CreateArt pow={pow!} />;
    case 3:
      return <LaunchArt pow={pow!} />;
    default:
      return <ScaleArt pow={pow!} />;
  }
}

function IntroArt() {
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center">
      {/* spinning burst */}
      <div
        className="absolute aspect-square w-[min(80%,26rem)] rounded-full border-2 border-ink bg-yellow animate-[process-spin_40s_linear_infinite]"
        style={{
          maskImage: "repeating-conic-gradient(#000 0deg 10deg, transparent 10deg 20deg)",
          WebkitMaskImage: "repeating-conic-gradient(#000 0deg 10deg, transparent 10deg 20deg)",
          ...pop(0, 0.2),
        }}
      />
      <img
        src={tvMascot}
        alt=""
        loading="lazy"
        className="relative w-[min(70%,22rem)] drop-shadow-[6px_6px_0_var(--ink)]"
        style={{
          ...enter(0, 0.25, 60),
          animation: "process-float 4s ease-in-out infinite",
        }}
      />
      <Sticker text="ZAP!" className="left-[6%] top-[10%]" style={pop(0.1, 0.25, -10)} />
      <Sticker text="BAM!" className="right-[6%] top-[16%] bg-yellow" style={pop(0.2, 0.35, 8)} />
      <Sticker text="BOOM!" className="bottom-[14%] left-[10%] bg-cyan" style={pop(0.3, 0.45, 6)} />
      <Sticker
        text="POW!"
        className="bottom-[8%] right-[10%] bg-crimson text-cream"
        style={pop(0.4, 0.55, -6)}
      />
    </div>
  );
}

function DiscoverArt({ pow }: { pow: string }) {
  const notes = [
    { t: "Gap found!", c: "bg-yellow", pos: "left-[4%] top-[6%]", a: 0.3, r: -6 },
    { t: "Your buyers live on Reels", c: "bg-cream", pos: "right-[2%] top-[34%]", a: 0.45, r: 5 },
    { t: "Rivals all look the same", c: "bg-peach", pos: "left-[10%] bottom-[8%]", a: 0.6, r: -3 },
  ];
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center">
      {/* brand board */}
      <div
        className="card-pop relative w-[min(88%,28rem)] rounded-3xl bg-cyan p-4 sm:p-6"
        style={enter(0, 0.2, 60, "rotate(-2deg)")}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm text-ink sm:text-base">Brand audit</span>
          <span className="font-mono text-[10px] text-ink/70">category scan</span>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: 6 }).map((_, k) => (
            <div
              key={k}
              className={`aspect-square rounded-xl border-2 border-ink ${k === 4 ? "bg-crimson" : "bg-cream"}`}
            />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {[90, 65, 78].map((w, k) => (
            <div key={k} className="h-2 rounded-full bg-ink/20">
              <div
                className="h-full rounded-full bg-ink"
                style={{
                  width: `${w}%`,
                  transform: `scaleX(${seg(0.15 + k * 0.1, 0.45 + k * 0.1)})`,
                  transformOrigin: "left",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* magnifier sweeping across */}
      <svg
        viewBox="0 0 120 120"
        className="absolute left-0 top-[18%] w-24 sm:w-36"
        style={{
          transform: `translate3d(calc(${seg(0.05, 0.85)} * min(60vw, 26rem)), calc(${seg(0.05, 0.85)} * 6rem), 0) rotate(-12deg)`,
        }}
      >
        <circle
          cx="48"
          cy="48"
          r="34"
          fill="color-mix(in oklab, var(--cream) 55%, transparent)"
          stroke="var(--ink)"
          strokeWidth="8"
        />
        <path
          d="M30 38 q8 -12 22 -10"
          stroke="white"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <rect
          x="74"
          y="70"
          width="16"
          height="44"
          rx="6"
          transform="rotate(-45 82 92)"
          fill="var(--crimson)"
          stroke="var(--ink)"
          strokeWidth="5"
        />
      </svg>

      {notes.map((n) => (
        <div
          key={n.t}
          className={`absolute max-w-[11rem] rounded-lg border-2 border-ink px-3 py-2 font-script text-base leading-tight text-ink shadow-pop sm:text-xl ${n.c} ${n.pos}`}
          style={pop(n.a, n.a + 0.12, n.r)}
        >
          {n.t}
        </div>
      ))}

      <img
        src={handPoint}
        alt=""
        loading="lazy"
        className="absolute -right-4 bottom-[2%] hidden w-40 rotate-[160deg] md:block"
        style={{ ...enter(0.5, 0.7, 40), mixBlendMode: "multiply" }}
      />
      <Sticker text={pow} className="right-[8%] top-[2%]" style={pop(0.15, 0.3, 10)} />
    </div>
  );
}

function CreateArt({ pow }: { pow: string }) {
  const len = 900;
  const draw = seg(0.05, 0.75);
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center">
      <div
        className="card-pop relative aspect-[4/3] w-[min(92%,30rem)] overflow-hidden rounded-2xl bg-cream"
        style={enter(0, 0.2, 60, "rotate(1.5deg)")}
      >
        {/* notebook lines + spine */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0 27px, color-mix(in oklab, var(--cyan) 45%, transparent) 27px 28px)",
          }}
        />
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-ink/20" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
          {/* star-burst logo being drawn */}
          <path
            d="M200 40 L226 112 L302 104 L242 152 L274 222 L200 182 L126 222 L158 152 L98 104 L174 112 Z"
            fill="none"
            stroke="var(--crimson)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeDasharray={len}
            style={{ strokeDashoffset: `calc((1 - ${draw}) * ${len})` }}
          />
          <path
            d="M120 262 q40 -24 80 0 t80 0"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="260"
            style={{ strokeDashoffset: `calc((1 - ${seg(0.55, 0.8)}) * 260)` }}
          />
        </svg>
        <span
          className="absolute bottom-[4%] right-[6%] font-script text-xl text-ink sm:text-3xl"
          style={enter(0.7, 0.85, 12)}
        >
          your brand, drawn.
        </span>
      </div>

      {/* pencil travelling over the page */}
      <div
        className="absolute left-[18%] top-[16%] text-5xl sm:text-7xl"
        style={{
          transform: `translate3d(calc(${draw} * min(40vw, 16rem)), calc(${draw} * 10rem), 0) rotate(-20deg)`,
        }}
      >
        ✏️
      </div>

      {/* swatches */}
      <div className="absolute bottom-[3%] left-1/2 flex -translate-x-1/2 gap-2 sm:gap-3">
        {["bg-cyan", "bg-crimson", "bg-yellow", "bg-emerald", "bg-ink"].map((c, k) => (
          <span
            key={c}
            className={`h-8 w-8 rounded-full border-2 border-ink shadow-[3px_3px_0_0_var(--ink)] sm:h-11 sm:w-11 ${c}`}
            style={pop(0.3 + k * 0.07, 0.42 + k * 0.07)}
          />
        ))}
      </div>
      <Sticker text={pow} className="left-[4%] top-[4%] bg-yellow" style={pop(0.15, 0.3, -8)} />
    </div>
  );
}

function LaunchArt({ pow }: { pow: string }) {
  const rise = seg(0.05, 0.8);
  const chips = [
    { t: "Paid", c: "bg-crimson text-cream", x: -1, a: 0.25 },
    { t: "Organic", c: "bg-emerald text-cream", x: 0, a: 0.35 },
    { t: "Earned", c: "bg-cyan text-ink", x: 1, a: 0.45 },
  ];
  return (
    <div aria-hidden className="absolute inset-0 overflow-visible">
      {/* launch pad clouds */}
      {[
        "left-[2%] bottom-[-4%] w-40 sm:w-56",
        "left-[30%] bottom-[-8%] w-48 sm:w-64",
        "right-[0%] bottom-[-4%] w-40 sm:w-56",
      ].map((cls, k) => (
        <img
          key={cls}
          src={cloudSticker}
          alt=""
          loading="lazy"
          className={`absolute ${cls}`}
          style={{
            opacity: `calc(0.4 + ${seg(0, 0.3)} * 0.6)`,
            transform: `scale(calc(0.6 + ${seg(0.05 + k * 0.05, 0.6)} * 0.6))`,
          }}
        />
      ))}

      {/* hero takes off */}
      <img
        src={superboyFlying}
        alt=""
        loading="lazy"
        className="absolute left-1/2 top-1/2 w-[min(55%,17rem)] drop-shadow-[6px_6px_0_var(--ink)]"
        style={{
          transform: `translate3d(calc(-50% + ${rise} * 3rem), calc(-20% + (1 - ${rise}) * 45svh - ${rise} * 8svh), 0) rotate(calc(${rise} * 8deg))`,
        }}
      />

      {/* channel chips fan out */}
      {chips.map((ch) => (
        <span
          key={ch.t}
          className={`absolute left-1/2 top-[30%] rounded-full border-2 border-ink px-4 py-1.5 font-display text-sm shadow-pop sm:text-lg ${ch.c}`}
          style={{
            opacity: seg(ch.a, ch.a + 0.12),
            transform: `translate3d(calc(-50% + ${ch.x} * ${seg(ch.a, ch.a + 0.25)} * min(32vw, 13rem)), calc(${seg(ch.a, ch.a + 0.25)} * -${ch.x === 0 ? 7 : 3}rem), 0) rotate(${ch.x * 8}deg)`,
          }}
        >
          {ch.t}
        </span>
      ))}

      {/* 3 2 1 */}
      <div className="absolute left-[6%] top-[6%] flex gap-2">
        {["3", "2", "1"].map((d, k) => (
          <span
            key={d}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-ink sm:h-11 sm:w-11"
            style={pop(k * 0.06, k * 0.06 + 0.08)}
          >
            {d}
          </span>
        ))}
      </div>
      <Sticker
        text={pow}
        className="right-[4%] top-[8%] bg-crimson text-cream"
        style={pop(0.4, 0.55, 8)}
      />
    </div>
  );
}

function ScaleArt({ pow }: { pow: string }) {
  const bars = [22, 34, 30, 52, 68, 88];
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center">
      <div
        className="card-pop relative w-[min(92%,30rem)] rounded-3xl bg-cream p-4 sm:p-6"
        style={enter(0, 0.2, 60, "rotate(-1deg)")}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm text-ink sm:text-base">Growth</span>
          <span className="rounded-full border-2 border-ink bg-emerald px-2 py-0.5 font-mono text-[10px] font-bold text-cream">
            optimizing
          </span>
        </div>
        <div className="relative flex h-40 items-end gap-2 border-b-2 border-l-2 border-ink pl-2 sm:h-56 sm:gap-3">
          {bars.map((h, k) => (
            <div
              key={k}
              className={`flex-1 origin-bottom rounded-t-md border-2 border-ink ${k === bars.length - 1 ? "bg-crimson" : "bg-emerald"}`}
              style={{
                height: `${h}%`,
                transform: `scaleY(${seg(0.05 + k * 0.08, 0.25 + k * 0.08)})`,
              }}
            />
          ))}
          <svg
            viewBox="0 0 300 200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d="M10 170 C 60 150, 90 160, 130 120 S 210 80, 290 14"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="4"
              strokeDasharray="420"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ strokeDashoffset: `calc((1 - ${seg(0.2, 0.7)}) * 420)` }}
            />
          </svg>
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-ink/60">
          <span>test</span>
          <span>learn</span>
          <span>double down</span>
        </div>
      </div>
      <img
        src={bullPoint}
        alt=""
        loading="lazy"
        className="absolute -right-6 -bottom-4 hidden w-32 lg:block xl:-right-16 xl:w-40"
        style={enter(0.35, 0.55, 50)}
      />
      <Sticker text={pow} className="right-[4%] top-[2%] bg-yellow" style={pop(0.5, 0.65, 10)} />
    </div>
  );
}
