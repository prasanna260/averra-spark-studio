import { Reveal } from "./Reveal";
import superboy from "@/assets/superboy-flying.png";
import cloud from "@/assets/cloud-sticker.png";

const groups = [
  {
    title: "Creators",
    desc: "From 10K to 10M · we engineer growth loops, not luck.",
    icon: "♠",
    bg: "bg-crimson text-cream",
  },
  {
    title: "Startups",
    desc: "Launch with a brand that punches above its seed round.",
    icon: "♣",
    bg: "bg-yellow text-ink",
  },
  {
    title: "Visionaries",
    desc: "You bring the vision · we turn it into something people can't ignore.",
    icon: "♦",
    bg: "bg-emerald text-cream",
  },
  {
    title: "Businesses",
    desc: "From growth sprints to full systems · we help you move faster.",
    icon: "♥",
    bg: "bg-cream text-ink",
  },
];

export function Clients() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-cyan py-20 md:py-32">
      {/* Comic-style cloud stickers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute top-[8%] left-[2%] w-24 animate-float-y drop-shadow-[4px_4px_0_var(--ink)] lg:w-32 xl:w-40"
          style={{ animationDelay: "0s" }}
        />
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute top-[24%] left-[11%] w-20 animate-float-y drop-shadow-[3px_3px_0_var(--ink)] lg:w-24 xl:w-28"
          style={{ animationDelay: "0.8s" }}
        />
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute bottom-[18%] left-[4%] w-24 animate-float-y drop-shadow-[5px_5px_0_var(--ink)] lg:w-32 xl:w-40"
          style={{ animationDelay: "1.6s" }}
        />
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute top-[9%] right-[2%] w-24 animate-float-y drop-shadow-[4px_4px_0_var(--ink)] lg:w-32 xl:w-40"
          style={{ animationDelay: "0.4s" }}
        />
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute top-[28%] right-[11%] w-20 animate-float-y drop-shadow-[3px_3px_0_var(--ink)] lg:w-24 xl:w-28"
          style={{ animationDelay: "1.2s" }}
        />
        <img
          src={cloud}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute bottom-[15%] right-[4%] w-24 animate-float-y drop-shadow-[5px_5px_0_var(--ink)] lg:w-32 xl:w-40"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Flying superboy mascot */}
      <img
        src={superboy}
        alt="Averra superhero boy flying through clouds"
        loading="lazy"
        decoding="async"
        className="absolute left-4 top-1/2 z-10 hidden w-48 -translate-y-1/2 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] xl:left-12 xl:block xl:w-72"
        style={{ ["--r" as never]: "-4deg" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-4xl px-2 text-center md:mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-ink font-black mb-4">
              ✦ Who we work with ✦
            </p>
            <h2 className="mx-auto max-w-3xl font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl md:text-6xl xl:text-7xl">
              From bedroom creators to <span className="text-yellow">boardroom brands.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-5 px-2 md:grid-cols-2 xl:max-w-none xl:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className={`card-pop h-full rounded-3xl p-6 sm:p-8 ${g.bg}`}>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/10 border-2 border-current text-2xl mb-6">
                  {g.icon}
                </div>
                <h3 className="mb-3 font-display text-2xl sm:text-3xl">{g.title}</h3>
                <p className="opacity-90 leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
