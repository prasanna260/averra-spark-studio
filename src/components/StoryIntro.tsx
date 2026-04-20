import { Reveal } from "./Reveal";

export function StoryIntro() {
  return (
    <section className="relative py-24 md:py-36 bg-peach border-y-2 border-ink overflow-hidden">
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-20" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-8">
            ✦ The new rules of brand ✦
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            Brands today don&apos;t need{" "}
            <span className="line-through decoration-crimson decoration-[6px]">marketing</span>.
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1] tracking-tight text-ink text-balance">
            They need{" "}
            <span className="bg-yellow px-4 py-1 inline-block border-2 border-ink shadow-pop -rotate-2">
              attention.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={550}>
          <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-ink/80 font-medium">
            We design, shoot, edit, and optimise. <span className="font-black text-ink">NO MIDDLE MEN, JUST RESULT.</span>
          </p>
        </Reveal>
        <Reveal delay={700}>
          <p className="mt-6 font-comic text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] text-crimson -rotate-2 inline-block tracking-wider">
            We do it all. And we make it count!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
