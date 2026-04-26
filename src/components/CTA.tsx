import { Reveal } from "./Reveal";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-crimson text-cream overflow-hidden border-y-2 border-ink">
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-15" />
      <img
        src={mascotSuperboy}
        alt=""
        aria-hidden
        loading="lazy"
        className="hidden md:block absolute left-2 lg:left-10 top-1/2 -translate-y-1/2 w-[260px] lg:w-[320px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
      />
      <img
        src={mascotBull}
        alt=""
        aria-hidden
        loading="lazy"
        className="hidden md:block absolute right-2 lg:right-10 top-1/2 -translate-y-1/2 w-[260px] lg:w-[320px] animate-float-y pointer-events-none drop-shadow-[6px_6px_0_var(--ink)]"
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
            <a
              href="https://calendly.com/averracreations/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop bg-yellow text-ink text-base"
            >
              Book a slot
            </a>
            <a
              href="https://wa.me/message/JA3H2OYCSBSSL1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="btn-pop bg-emerald text-cream text-base !px-4"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:averracreations@gmail.com" className="btn-pop bg-cream text-ink text-base">
              averracreations@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
