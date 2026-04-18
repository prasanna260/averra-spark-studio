import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

const ROTATING = ["Ignore.", "Forget.", "Scroll past.", "Resist."];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-16 noise">
      {/* gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-crimson/30 blur-3xl animate-blob" />
        <div className="absolute right-[-100px] top-40 h-[460px] w-[460px] rounded-full bg-emerald/25 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute left-1/3 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/40 blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ink-soft mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              Now booking Q1 partnerships
            </div>

            <h1 className="font-display text-[clamp(2.6rem,7.5vw,6.2rem)] leading-[0.95] tracking-[-0.02em] font-semibold text-balance">
              We build brands<br />
              people <span className="italic gradient-brand-text">can&apos;t</span>{" "}
              <span className="relative inline-block min-w-[6ch]">
                <span key={idx} className="inline-block animate-[reveal-up_0.6s_ease-out]">
                  {ROTATING[idx]}
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed">
              Averra is a full-stack creative studio for the brands rewriting the rules.
              Branding, ads, content, growth — engineered for attention, built for scale.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-crimson px-7 py-4 text-base font-semibold text-cream shadow-glow-red hover:shadow-[0_30px_80px_-20px_color-mix(in_oklab,var(--crimson)_70%,transparent)] transition-all hover:-translate-y-0.5"
              >
                Work with us
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-crimson transition-transform group-hover:rotate-45">
                  →
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 text-base font-semibold hover:bg-foreground hover:text-cream hover:border-foreground transition-all"
              >
                View our work
              </a>
            </div>

            {/* mini stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "240M+", k: "views generated" },
                { v: "180+", k: "brands launched" },
                { v: "12x", k: "avg. ROAS" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl font-bold gold-shimmer">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-soft">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft">
              <img
                src={heroImg}
                alt="Floating creative compositions in red, green, and gold"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* floating cards */}
            <div className="absolute -left-6 top-10 glass rounded-2xl p-4 shadow-soft animate-float-y hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald/20 grid place-items-center text-emerald font-bold">↑</div>
                <div>
                  <div className="text-xs text-ink-soft">Engagement</div>
                  <div className="font-bold">+412%</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-soft animate-float-y hidden sm:block" style={{ animationDelay: "-2s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/30 grid place-items-center">★</div>
                <div>
                  <div className="text-xs text-ink-soft">Campaign</div>
                  <div className="font-bold">Viral.</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-8 rounded-full bg-foreground text-cream px-5 py-2 text-xs font-mono tracking-widest hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              EST. CREATIVITY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
