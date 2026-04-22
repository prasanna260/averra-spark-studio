import { Reveal } from "./Reveal";

const groups = [
  { title: "Creators", desc: "From 10K to 10M · we engineer growth loops, not luck.", icon: "♠", bg: "bg-crimson text-cream" },
  { title: "Startups", desc: "Launch with a brand that punches above its seed round.", icon: "♣", bg: "bg-yellow text-ink" },
  { title: "Visionaries", desc: "You bring the vision · we turn it into something people can't ignore.", icon: "♦", bg: "bg-emerald text-cream" },
  { title: "Businesses", desc: "From growth sprints to full systems · we help you move faster.", icon: "♥", bg: "bg-cream text-ink" },
];

function Cloud({
  className,
  size = 140,
  delay = "0s",
}: {
  className?: string;
  size?: number;
  delay?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 110"
      width={size}
      height={(size * 110) / 200}
      className={className}
      style={{ animationDelay: delay }}
    >
      <g
        fill="#FAF6EC"
        stroke="#0E0E10"
        strokeWidth={4}
        strokeLinejoin="round"
      >
        <path d="M40 80 Q20 80 20 62 Q20 46 38 44 Q42 26 64 26 Q78 12 96 22 Q112 8 130 22 Q150 18 156 38 Q180 40 180 60 Q180 80 158 80 Z" />
      </g>
    </svg>
  );
}

export function Clients() {
  return (
    <section className="relative py-24 md:py-32 bg-cyan border-b-2 border-ink overflow-hidden">
      {/* Cartoon clouds */}
      <Cloud
        className="absolute top-10 left-[4%] opacity-95 animate-float-slow drop-shadow-[4px_4px_0_#0E0E10]"
        size={140}
      />
      <Cloud
        className="absolute top-24 right-[6%] opacity-95 animate-float-slow drop-shadow-[4px_4px_0_#0E0E10]"
        size={180}
        delay="1.2s"
      />
      <Cloud
        className="absolute top-1/2 left-[2%] opacity-90 animate-float-slow drop-shadow-[3px_3px_0_#0E0E10] hidden md:block"
        size={110}
        delay="2.4s"
      />
      <Cloud
        className="absolute bottom-12 right-[10%] opacity-95 animate-float-slow drop-shadow-[4px_4px_0_#0E0E10] hidden md:block"
        size={160}
        delay="0.6s"
      />
      <Cloud
        className="absolute bottom-20 left-[14%] opacity-90 animate-float-slow drop-shadow-[3px_3px_0_#0E0E10] hidden lg:block"
        size={120}
        delay="1.8s"
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
