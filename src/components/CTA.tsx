import { Reveal } from "./Reveal";
import { BigWord } from "./scroll/BigWord";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";
const ctaCardHover =
  "transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow";

export function CTA() {
  return (
    <section
      id="contact"
      data-scroll-scene
      suppressHydrationWarning
      className="relative overflow-hidden border-y-2 border-ink bg-crimson py-20 text-cream md:py-32 xl:py-40"
    >
      <BigWord className="bottom-4" stroke="var(--cream)" opacity={0.12}>
        LET&apos;S TALK
      </BigWord>
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 xl:grid-cols-[180px_minmax(0,1fr)_180px] xl:gap-8 2xl:grid-cols-[220px_minmax(0,1fr)_220px] 2xl:gap-12">
          <div className="hidden justify-center xl:flex">
            <img
              src={mascotSuperboy}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="pointer-events-none w-full max-w-[220px] animate-float-y drop-shadow-[6px_6px_0_var(--ink)] 2xl:max-w-[260px]"
            />
          </div>

          <div className="mx-auto w-full max-w-4xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-6">
                ✦ Let&apos;s build ✦
              </p>
            </Reveal>
            <Reveal delay={150} variant="mask">
              <h2 className="mx-auto max-w-[12ch] font-display text-[clamp(2.25rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-balance">
                <span className="whitespace-nowrap">Let&apos;s build</span>
                <br />
                <span className="whitespace-nowrap">something</span>
                <br />
                <span className="whitespace-nowrap text-yellow">#JustViral</span>
              </h2>
            </Reveal>
            <Reveal delay={350}>
              <p className="mx-auto mt-6 max-w-2xl text-base font-medium opacity-90 sm:mt-8 md:text-xl">
                Tell us about the brand, the dream, and the deadline. Tap through and Gmail opens
                directly with Averra&apos;s email prefilled.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:mt-10 sm:grid-cols-2">
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

          <div className="hidden justify-center xl:flex">
            <img
              src={mascotBull}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="pointer-events-none w-full max-w-[220px] animate-float-y drop-shadow-[6px_6px_0_var(--ink)] 2xl:max-w-[260px]"
              style={{ animationDelay: "-2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
