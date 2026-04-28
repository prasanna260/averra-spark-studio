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
    <section className="relative overflow-hidden border-y-2 border-ink bg-yellow py-4 text-ink sm:py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-4 flex items-center font-display text-2xl sm:mx-6 sm:text-3xl md:text-5xl"
          >
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
