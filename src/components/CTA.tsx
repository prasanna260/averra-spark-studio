import { Reveal } from "./Reveal";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";
const ctaCardHover =
  "transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y-2 border-ink bg-crimson py-20 text-cream md:py-32 xl:py-40"
    >
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-15" />
      <img
        src={mascotSuperboy}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-2 top-1/2 hidden w-[220px] -translate-y-1/2 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] 2xl:block"
      />
      <img
        src={mascotBull}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute right-2 top-1/2 hidden w-[220px] -translate-y-1/2 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] 2xl:block"
        style={{ animationDelay: "-2s" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-10">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-6">
                ✦ Let&apos;s build ✦
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-[clamp(2.25rem,11vw,7.5rem)] leading-[0.9] tracking-tight text-balance">
                Let&apos;s build something
                <br />
                <span className="break-words text-yellow">#JustViral</span>
              </h2>
            </Reveal>
            <Reveal delay={350}>
              <p className="mx-auto mt-6 max-w-2xl text-base font-medium opacity-90 sm:mt-8 md:text-xl lg:mx-0">
                Tell us about the brand, the dream, and the deadline. Tap through and Gmail opens
                directly with Averra&apos;s email prefilled.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
                <a
                  href="https://calendly.com/averracreations/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-3xl border-2 border-ink bg-yellow p-5 text-ink shadow-pop ${ctaCardHover}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
                    Call
                  </p>
                  <p className="mt-3 font-display text-xl leading-none sm:text-2xl">Book a slot</p>
                </a>
                <a
                  href="https://wa.me/message/JA3H2OYCSBSSL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-3xl border-2 border-ink bg-emerald p-5 text-cream shadow-pop ${ctaCardHover}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
                    Chat
                  </p>
                  <p className="mt-3 font-display text-xl leading-none sm:text-2xl">WhatsApp</p>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
