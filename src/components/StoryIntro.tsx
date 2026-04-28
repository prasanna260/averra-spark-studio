import { Reveal } from "./Reveal";

export function StoryIntro() {
  return (
    <section className="relative overflow-hidden border-y-2 border-ink bg-peach py-20 md:py-36">
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-20" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-8">
            ✦ The new rules of brand ✦
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display text-[clamp(2.1rem,10vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            Brands today don&apos;t need{" "}
            <span className="line-through decoration-crimson decoration-[6px]">marketing</span>.
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,10vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            They need{" "}
            <span className="inline-block -rotate-2 border-2 border-ink bg-yellow px-3 py-1 shadow-pop sm:px-4">
              attention.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={550}>
          <p className="mx-auto mt-8 max-w-2xl text-base font-medium text-ink/80 sm:mt-10 md:text-xl">
            We design, shoot, edit, and optimise.{" "}
            <span className="font-black text-ink">NO MIDDLE MEN, JUST RESULT.</span>
          </p>
        </Reveal>
        <Reveal delay={700}>
          <p className="mt-6 inline-block -rotate-2 font-comic text-[clamp(2.1rem,10vw,4.5rem)] leading-[1] tracking-wider text-crimson">
            We do it all. And we make it count!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
