const items = [
  "Branding",
  "Ad Campaigns",
  "Content Production",
  "Performance Marketing",
  "Web & Funnels",
  "Influencer Growth",
  "Reels & Shoots",
  "Strategy",
];

export function Marquee() {
  return (
    <section className="relative py-10 border-y border-ink/10 bg-foreground text-cream overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl font-semibold mx-8 flex items-center gap-8">
            {it}
            <span className="inline-block h-3 w-3 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}
