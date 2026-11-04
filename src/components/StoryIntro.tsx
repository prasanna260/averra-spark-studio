import type { CSSProperties, ReactNode } from "react";
import { BigWord } from "./scroll/BigWord";
import { enter, seg } from "./scroll/seg";

/**
 * "The new rules of brand" — a short pinned scene. The statement fills in
 * word by word as you scroll, "marketing" gets struck out, and "attention."
 * lands as a sticker. With reduced motion everything shows at once.
 */

/** Words light up from 15% to full ink between a and b, one after another. */
function Fill({ words, a, b }: { words: ReactNode[]; a: number; b: number }) {
  const step = (b - a) / words.length;
  return (
    <>
      {words.map((w, i) => (
        <span
          key={i}
          className="transition-none"
          style={{ opacity: `calc(0.15 + ${seg(a + i * step, a + (i + 1) * step)} * 0.85)` }}
        >
          {w}{" "}
        </span>
      ))}
    </>
  );
}

export function StoryIntro() {
  return (
    <section
      data-scroll-scene="pin"
      suppressHydrationWarning
      className="story-intro relative border-y-2 border-ink bg-peach"
      style={{ height: "230svh" } as CSSProperties}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 dotted-bg opacity-20" />
        <BigWord className="bottom-[6%]" opacity={0.07}>
          ATTENTION
        </BigWord>

        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-8">
          <p
            className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-crimson"
            style={enter(0, 0.08, 16)}
          >
            ✦ The new rules of brand ✦
          </p>
          <h2 className="font-display text-[clamp(2.1rem,10vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            <Fill words={["Brands", "today", "don't", "need"]} a={0.04} b={0.26} />
            <span
              className="relative inline-block"
              style={{ opacity: `calc(0.15 + ${seg(0.26, 0.32)} * 0.85)` }}
            >
              marketing
              <span
                aria-hidden
                className="absolute left-[-2%] right-[-2%] top-[55%] h-[6px] origin-left bg-crimson"
                style={{ transform: `scaleX(${seg(0.32, 0.42)})` }}
              />
            </span>
            .
          </h2>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,10vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            <Fill words={["They", "need"]} a={0.42} b={0.52} />
            <span
              className="inline-block border-2 border-ink bg-yellow px-3 py-1 shadow-pop sm:px-4"
              style={{
                opacity: seg(0.52, 0.58),
                transform: `rotate(calc(-2deg - (1 - ${seg(0.52, 0.62)}) * 10deg)) scale(calc(0.6 + ${seg(0.52, 0.62)} * 0.4))`,
              }}
            >
              attention.
            </span>
          </h2>
          <p
            className="mx-auto mt-8 max-w-2xl text-base font-medium text-ink/80 sm:mt-10 md:text-xl"
            style={enter(0.64, 0.74, 24)}
          >
            We design, shoot, edit, and optimise.{" "}
            <span className="font-black text-ink">NO MIDDLE MEN, JUST RESULT.</span>
          </p>
          <p
            className="mt-6 inline-block font-comic text-[clamp(2.1rem,10vw,4.5rem)] leading-[1] tracking-wider text-crimson"
            style={enter(0.74, 0.86, 30, "rotate(-2deg)")}
          >
            We do it all. And we make it count!
          </p>
        </div>
      </div>
    </section>
  );
}
