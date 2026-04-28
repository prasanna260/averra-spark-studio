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
      {/* Comic-style cloud stickers around the superboy */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src={cloud}
          alt=""
          className="absolute top-[6%] left-[3%] w-36 xl:w-44 drop-shadow-[4px_4px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "0s" }}
        />
        <img
          src={cloud}
          alt=""
          className="absolute top-[18%] left-[14%] w-24 xl:w-32 drop-shadow-[3px_3px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "0.8s" }}
        />
        <img
          src={cloud}
          alt=""
          className="absolute top-[34%] left-[8%] w-28 xl:w-34 drop-shadow-[4px_4px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "1.6s" }}
        />
        <img
          src={cloud}
          alt=""
          className="absolute top-[52%] left-[16%] w-26 xl:w-32 drop-shadow-[4px_4px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "0.4s" }}
        />
        <img
          src={cloud}
          alt=""
          className="absolute bottom-[17%] left-[4%] w-38 xl:w-46 drop-shadow-[5px_5px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "1.2s" }}
        />
        <img
          src={cloud}
          alt=""
          className="absolute bottom-[8%] left-[14%] w-24 xl:w-30 drop-shadow-[3px_3px_0_var(--ink)] animate-float-y"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Flying superboy mascot */}
      <img
        src={superboy}
        alt="Averra superhero boy flying through clouds"
        className="absolute left-4 top-1/2 z-10 hidden w-48 -translate-y-1/2 animate-float-y drop-shadow-[6px_6px_0_var(--ink)] xl:left-12 xl:block xl:w-72"
        style={{ ["--r" as never]: "-4deg" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-ink font-black mb-4">
              ✦ Who we work with ✦
            </p>
            <h2 className="mx-auto max-w-3xl font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl md:text-7xl">
              From bedroom creators to <span className="text-yellow">boardroom brands.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
