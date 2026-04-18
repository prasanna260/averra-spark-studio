import { Reveal } from "./Reveal";

export function StoryIntro() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-8">
            The new rules of brand
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            Brands today don&apos;t need <span className="line-through decoration-crimson decoration-[3px]">marketing</span>.
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            They need <span className="gradient-brand-text italic">attention.</span>
          </h2>
        </Reveal>
        <Reveal delay={550}>
          <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
            We design, film, post, and optimize — all under one roof. Less agency theater,
            more measurable magic.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
