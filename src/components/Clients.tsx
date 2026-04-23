import { Reveal } from "./Reveal";
import superboy from "@/assets/superboy-flying.png";
import cloud from "@/assets/comic-cloud.png";

const groups = [
  { title: "Creators", desc: "From 10K to 10M · we engineer growth loops, not luck.", icon: "♠", bg: "bg-crimson text-cream" },
  { title: "Startups", desc: "Launch with a brand that punches above its seed round.", icon: "♣", bg: "bg-yellow text-ink" },
  { title: "Visionaries", desc: "You bring the vision · we turn it into something people can't ignore.", icon: "♦", bg: "bg-emerald text-cream" },
  { title: "Businesses", desc: "From growth sprints to full systems · we help you move faster.", icon: "♥", bg: "bg-cream text-ink" },
];

// Soft, painterly clouds (no hard outline / sticker shadow)
const cloudClass = "absolute pointer-events-none select-none opacity-90 animate-float-y";

export function Clients() {
  return (
    <section className="relative py-24 md:py-32 bg-cyan border-b-2 border-ink overflow-hidden">
      {/* Soft cloud cluster — left side, behind the mascot */}
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={260}
        height={260}
        className={`${cloudClass} hidden md:block left-2 lg:left-10 top-12 w-40 lg:w-56`}
        style={{ ["--r" as never]: "-4deg" }}
      />
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={200}
        height={200}
        className={`${cloudClass} hidden md:block left-32 lg:left-56 top-40 w-28 lg:w-40`}
        style={{ ["--r" as never]: "5deg", animationDelay: "0.6s" }}
      />
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={180}
        height={180}
        className={`${cloudClass} hidden md:block left-4 lg:left-20 bottom-24 w-28 lg:w-36`}
        style={{ ["--r" as never]: "-8deg", animationDelay: "1.1s" }}
      />
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={160}
        height={160}
        className={`${cloudClass} hidden lg:block left-72 top-72 w-24`}
        style={{ ["--r" as never]: "3deg", animationDelay: "1.6s" }}
      />

      {/* Right-side decorative clouds */}
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={200}
        height={200}
        className={`${cloudClass} hidden md:block right-8 top-20 w-28 lg:w-36`}
        style={{ ["--r" as never]: "6deg", animationDelay: "0.9s" }}
      />
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={160}
        height={160}
        className={`${cloudClass} hidden lg:block right-1/3 bottom-12 w-20`}
        style={{ ["--r" as never]: "-6deg", animationDelay: "0.3s" }}
      />

      {/* Flying superboy mascot — left side, nestled in the clouds */}
      <img
        src={superboy}
        alt="Averra superboy mascot flying"
        loading="lazy"
        width={360}
        height={520}
        className="hidden md:block absolute -left-4 lg:left-10 top-24 lg:top-28 w-44 lg:w-60 xl:w-72 z-20 animate-float-y pointer-events-none select-none"
        style={{ ["--r" as never]: "-6deg", animationDelay: "0.4s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-ink font-black mb-4">
              ✦ Who we work with ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-3xl mx-auto text-cream">
              From bedroom creators to <span className="text-yellow">boardroom brands.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className={`card-pop rounded-3xl p-8 h-full ${g.bg}`}>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/10 border-2 border-current text-2xl mb-6">
                  {g.icon}
                </div>
                <h3 className="font-display text-3xl mb-3">{g.title}</h3>
                <p className="opacity-90 leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
