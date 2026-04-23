import { Reveal } from "./Reveal";
import superboy from "@/assets/superboy-flying.png";

const groups = [
  { title: "Creators", desc: "From 10K to 10M · we engineer growth loops, not luck.", icon: "♠", bg: "bg-crimson text-cream" },
  { title: "Startups", desc: "Launch with a brand that punches above its seed round.", icon: "♣", bg: "bg-yellow text-ink" },
  { title: "Visionaries", desc: "You bring the vision · we turn it into something people can't ignore.", icon: "♦", bg: "bg-emerald text-cream" },
  { title: "Businesses", desc: "From growth sprints to full systems · we help you move faster.", icon: "♥", bg: "bg-cream text-ink" },
];

export function Clients() {
  return (
    <section className="relative py-24 md:py-32 bg-cyan border-b-2 border-ink overflow-hidden">
      {/* Soft organic clouds - blurred, non-sticker */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-[6%] w-72 h-40 bg-cream/70 rounded-full blur-2xl" />
        <div className="absolute top-24 left-[2%] w-96 h-48 bg-white/60 rounded-full blur-3xl" />
        <div className="absolute top-[38%] left-[14%] w-80 h-44 bg-cream/60 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-[4%] w-[28rem] h-52 bg-white/55 rounded-full blur-3xl" />
        <div className="absolute top-[20%] left-[22%] w-56 h-32 bg-white/50 rounded-full blur-2xl" />
        <div className="absolute bottom-[28%] left-[20%] w-64 h-36 bg-cream/55 rounded-full blur-3xl" />
      </div>

      {/* Flying superboy mascot */}
      <img
        src={superboy}
        alt="Averra superhero boy flying through clouds"
        className="hidden lg:block absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 w-56 xl:w-72 z-10 animate-float-y drop-shadow-[6px_6px_0_var(--ink)]"
        style={{ ["--r" as never]: "-4deg" }}
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
