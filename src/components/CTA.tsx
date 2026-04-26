import { Reveal } from "./Reveal";
import mascotSuperboy from "@/assets/mascot-superboy-point.png";
import mascotBull from "@/assets/mascot-bull-point.png";
import bull from "@/assets/bull.png";
import eagle from "@/assets/eagle.png";
const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=averracreations@gmail.com";

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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-center lg:text-left">
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
              <p className="mt-8 max-w-2xl text-lg md:text-xl opacity-90 font-medium lg:mx-0 mx-auto">
                Tell us about the brand, the dream, and the deadline. Tap through and Gmail opens
                directly with Averra&apos;s email prefilled.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href="https://calendly.com/averracreations/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border-2 border-ink bg-yellow p-5 text-ink shadow-pop"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] font-black opacity-70">Call</p>
                  <p className="mt-3 font-display text-2xl leading-none">Book a slot</p>
                </a>
                <a
                  href="https://wa.me/message/JA3H2OYCSBSSL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border-2 border-ink bg-emerald p-5 text-cream shadow-pop"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] font-black opacity-70">Chat</p>
                  <p className="mt-3 font-display text-2xl leading-none">WhatsApp</p>
                </a>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border-2 border-ink bg-cream p-5 text-ink shadow-pop"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] font-black opacity-70">Email</p>
                  <p className="mt-3 font-display text-2xl leading-none">Direct inbox</p>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div className="rounded-[2rem] border-2 border-ink bg-cream text-ink shadow-[10px_10px_0_0_var(--ink)] overflow-hidden">
              <div className="border-b-2 border-ink bg-yellow px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.28em] font-black opacity-70">Email contact</p>
                <h3 className="mt-2 font-display text-3xl leading-none">Open Gmail compose</h3>
              </div>

              <div className="p-6 md:p-7">
                <div className="rounded-[1.5rem] border-2 border-ink bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] font-black text-ink/55">
                    Send mail to
                  </p>
                  <p className="mt-3 font-display text-3xl leading-none break-all">
                    averracreations@gmail.com
                  </p>
                  <p className="mt-5 text-base font-medium text-ink/70 leading-relaxed">
                    Share your brief, timelines, and goals, and the Averra team will take it from there.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] font-black text-ink/55">
                    Use your Gmail account to send the brief
                  </p>
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pop bg-yellow text-ink text-base"
                  >
                    Open Gmail
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
