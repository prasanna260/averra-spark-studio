import { BigWord } from "./scroll/BigWord";
import { PinnedSection } from "./scroll/Pinned";
import { enter, seg } from "./scroll/seg";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";

const ctaCardHover =
  "transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow";

const LINES = [
  { t: "Let's build", c: "" },
  { t: "something", c: "" },
  { t: "#JustViral", c: "text-yellow" },
];

/**
 * Final scene — contact. Pinned: the headline slams in line by line, both
 * mascots slide in to point at it, then the booking buttons arrive.
 */
export function CTA() {
  const mascots = seg(0.3, 0.55);
  return (
    <PinnedSection
      id="contact"
      svh={170}
      className="border-y-2 border-ink bg-crimson text-cream"
      stageClassName="flex items-center"
    >
      <BigWord className="bottom-4" stroke="var(--cream)" opacity={0.12}>
        LET&apos;S TALK
      </BigWord>
      <div aria-hidden className="absolute inset-0 dotted-bg opacity-15" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-14 sm:px-8 lg:pl-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 xl:grid-cols-[180px_minmax(0,1fr)_180px] xl:gap-8 2xl:grid-cols-[220px_minmax(0,1fr)_220px] 2xl:gap-12">
          <div className="hidden justify-center xl:flex">
            <div
              className="scene-anim w-full max-w-[220px] 2xl:max-w-[260px]"
              style={{
                opacity: mascots,
                transform: `translate3d(calc((1 - ${mascots}) * -40vw), 0, 0) rotate(calc((1 - ${mascots}) * -30deg))`,
              }}
            >
              <img
                src={mascotSuperboy}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="pointer-events-none w-full animate-float-y drop-shadow-[6px_6px_0_var(--ink)]"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl text-center">
            <p
              className="scene-anim mb-4 text-xs font-black uppercase tracking-[0.3em] text-yellow sm:mb-6"
              style={enter(0, 0.06, 16)}
            >
              ✦ Let&apos;s build ✦
            </p>
            <h2 className="mx-auto max-w-[12ch] font-display text-[clamp(2.25rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-balance">
              {LINES.map((l, i) => {
                const a = 0.02 + i * 0.1;
                const t = seg(a, a + 0.1);
                return (
                  <span key={l.t}>
                    <span
                      className={`scene-anim inline-block whitespace-nowrap ${l.c}`}
                      style={{
                        opacity: t,
                        transform: `scale(calc(1.6 - ${t} * 0.6)) rotate(calc((1 - ${t}) * ${i % 2 ? 6 : -6}deg))`,
                      }}
                    >
                      {l.t}
                    </span>
                    {i < LINES.length - 1 && <br />}
                  </span>
                );
              })}
            </h2>
            <p
              className="scene-anim mx-auto mt-6 max-w-2xl text-base font-medium opacity-90 sm:mt-8 md:text-xl"
              style={enter(0.45, 0.58, 30)}
            >
              Tell us about the brand, the dream, and the deadline. Tap through and Gmail opens
              directly with Averra&apos;s email prefilled.
            </p>
            <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              <a
                href="https://calendly.com/averracreations/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`scene-anim rounded-3xl border-2 border-ink bg-yellow p-4 text-ink shadow-pop sm:p-5 ${ctaCardHover}`}
                style={enter(0.55, 0.68, 50)}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
                  Call
                </p>
                <p className="mt-2 font-display text-xl leading-none sm:mt-3 sm:text-2xl">
                  Book a slot
                </p>
              </a>
              <a
                href="https://wa.me/message/JA3H2OYCSBSSL1"
                target="_blank"
                rel="noopener noreferrer"
                className={`scene-anim rounded-3xl border-2 border-ink bg-emerald p-4 text-cream shadow-pop sm:p-5 ${ctaCardHover}`}
                style={enter(0.6, 0.73, 50)}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
                  Chat
                </p>
                <p className="mt-2 font-display text-xl leading-none sm:mt-3 sm:text-2xl">
                  WhatsApp
                </p>
              </a>
            </div>
          </div>

          <div className="hidden justify-center xl:flex">
            <div
              className="scene-anim w-full max-w-[220px] 2xl:max-w-[260px]"
              style={{
                opacity: mascots,
                transform: `translate3d(calc((1 - ${mascots}) * 40vw), 0, 0) rotate(calc((1 - ${mascots}) * 30deg))`,
              }}
            >
              <img
                src={mascotBull}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="pointer-events-none w-full animate-float-y drop-shadow-[6px_6px_0_var(--ink)]"
                style={{ animationDelay: "-2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </PinnedSection>
  );
}
