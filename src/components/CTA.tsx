import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-crimson/40 blur-3xl animate-blob" />
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-gold/40 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-emerald/40 blur-3xl animate-blob" style={{ animationDelay: "-10s" }} />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-crimson font-semibold mb-6">
            Let&apos;s build
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display text-[clamp(2.6rem,9vw,7.5rem)] leading-[0.95] font-semibold tracking-[-0.02em] text-balance">
            Let&apos;s build something{" "}
            <span className="italic gradient-brand-text">viral.</span>
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-ink-soft">
            Tell us about the brand, the dream, the deadline. We&apos;ll come back in 24 hours
            with a plan worth your time.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@averracreations.com"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 text-base font-semibold text-cream shadow-soft hover:bg-crimson transition-all hover:-translate-y-0.5"
            >
              Book a call
              <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-foreground transition-transform group-hover:rotate-45">
                →
              </span>
            </a>
            <a
              href="mailto:hello@averracreations.com"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-5 text-base font-semibold hover:bg-foreground hover:text-cream hover:border-foreground transition-all"
            >
              hello@averracreations.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
