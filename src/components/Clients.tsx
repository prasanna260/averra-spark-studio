import { BigWord } from "./scroll/BigWord";
import { PinnedSection } from "./scroll/Pinned";
import { enter, seg } from "./scroll/seg";
import superboy from "@/assets/superboy-flying.png";
import cloud from "@/assets/cloud-sticker.png";

const groups = [
  {
    title: "Creators",
    desc: "From 10K to 10M · we engineer growth loops, not luck.",
    icon: "♠",
    bg: "bg-crimson text-cream",
  },
  {
    title: "Startups",
    desc: "Launch with a brand that punches above its seed round.",
    icon: "♣",
    bg: "bg-yellow text-ink",
  },
  {
    title: "Visionaries",
    desc: "You bring the vision · we turn it into something people can't ignore.",
    icon: "♦",
    bg: "bg-emerald text-cream",
  },
  {
    title: "Businesses",
    desc: "From growth sprints to full systems · we help you move faster.",
    icon: "♥",
    bg: "bg-cream text-ink",
  },
];

const CLOUDS = [
  "top-[10%] left-[2%] w-24 lg:w-32 xl:w-40",
  "top-[26%] left-[11%] w-20 lg:w-24 xl:w-28",
  "bottom-[16%] left-[4%] w-24 lg:w-32 xl:w-40",
  "top-[11%] right-[2%] w-24 lg:w-32 xl:w-40",
  "top-[30%] right-[11%] w-20 lg:w-24 xl:w-28",
  "bottom-[13%] right-[4%] w-24 lg:w-32 xl:w-40",
];

/**
 * Scene 4 — who we work with. Pinned: the superhero flies across the sky
 * while each audience card is dealt onto the table, one per scroll step.
 */
export function Clients() {
  const fly = seg(0.02, 0.95);
  return (
    <PinnedSection
      id="clients"
      svh={210}
      className="border-b-2 border-ink bg-cyan"
      stageClassName="flex items-center"
    >
      <BigWord className="top-20 md:top-24" opacity={0.12}>
        CLIENTS
      </BigWord>

      {/* clouds drift up at different speeds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {CLOUDS.map((c, i) => (
          <div
            key={c}
            className={`scene-anim absolute ${c}`}
            style={{ transform: `translate3d(0, calc(var(--sp, 0) * ${-60 - (i % 3) * 50}px), 0)` }}
          >
            <img
              src={cloud}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full animate-float-y drop-shadow-[4px_4px_0_var(--ink)]"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </div>
        ))}
      </div>

      {/* the superhero crosses the sky */}
      <div
        aria-hidden
        className="scene-anim pointer-events-none absolute left-0 top-[58%] z-0 w-28 sm:w-40 xl:w-60"
        style={{
          transform: `translate3d(calc(-110% + ${fly} * (100vw + 120%)), calc(${fly} * -38vh), 0) rotate(calc(-8deg + ${fly} * 10deg))`,
        }}
      >
        <img
          src={superboy}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full drop-shadow-[6px_6px_0_var(--ink)]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 sm:px-8 md:pt-20 lg:pl-16">
        <div
          className="scene-anim mx-auto mb-6 max-w-4xl px-2 text-center md:mb-12"
          style={enter(0, 0.1, 40)}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-ink md:mb-4">
            ✦ Who we work with ✦
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(1.9rem,6.5vw,4.5rem)] leading-[0.95] tracking-tight text-cream text-balance">
            From bedroom creators to <span className="text-yellow">boardroom brands.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 xl:max-w-none xl:grid-cols-4">
          {groups.map((g, i) => {
            const a = 0.14 + i * 0.14;
            const t = seg(a, a + 0.14);
            const side = i % 2 ? 1 : -1;
            return (
              <div
                key={g.title}
                className={`scene-anim card-pop h-full rounded-2xl p-4 sm:rounded-3xl sm:p-8 ${g.bg}`}
                style={{
                  opacity: t,
                  transform: `translate3d(calc((1 - ${t}) * ${side * 80}px), calc((1 - ${t}) * 120px), 0) rotate(calc((1 - ${t}) * ${side * 12}deg))`,
                }}
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl border-2 border-current bg-ink/10 text-lg sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                  {g.icon}
                </div>
                <h3 className="mb-1.5 font-display text-lg sm:mb-3 sm:text-3xl">{g.title}</h3>
                <p className="text-xs leading-relaxed opacity-90 sm:text-base">{g.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PinnedSection>
  );
}
