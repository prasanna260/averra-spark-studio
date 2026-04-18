import { Reveal } from "./Reveal";
import handPoint from "@/assets/hand-point.png";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-crimson text-cream overflow-hidden border-y-2 border-ink">
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-15" />
      <img
        src={handPoint}
        alt=""
        aria-hidden
        loading="lazy"
        className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 w-[320px] -rotate-12 animate-wiggle pointer-events-none"
      />
      <img
        src={handPoint}
        alt=""
        aria-hidden
        loading="lazy"
        className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 w-[320px] scale-x-[-1] rotate-12 animate-wiggle pointer-events-none"
        style={{ animationDelay: "-2s" }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-6">
            ✦ Let&apos;s build ✦
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display text-[clamp(2.6rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.03em] text-balance">
            Let&apos;s build something
            <br />
            <span className="text-yellow">#JustViral</span>
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl opacity-90 font-medium">
            Tell us about the brand, the dream, the deadline. We&apos;ll come back in 24 hours
            with a plan worth your time.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@averracreations.com" className="btn-pop bg-yellow text-ink text-base">
              Book a call
              <span className="text-xl">→</span>
            </a>
            <a href="mailto:hello@averracreations.com" className="btn-pop bg-cream text-ink text-base">
              hello@averracreations.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
