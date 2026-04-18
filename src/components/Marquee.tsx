const items = [
  "Branding ✦",
  "Ad Campaigns ✦",
  "Content Production ✦",
  "Performance Marketing ✦",
  "Web & Funnels ✦",
  "Influencer Growth ✦",
  "Reels & Shoots ✦",
  "Strategy ✦",
];

export function Marquee() {
  return (
    <section className="relative py-6 border-y-2 border-ink bg-yellow text-ink overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl mx-6 flex items-center">
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
