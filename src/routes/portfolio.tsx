import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio · AverraCreations" },
      {
        name: "description",
        content:
          "Selected work from AverraCreations · branding, social, production, content, strategy, ads, web & influencer campaigns.",
      },
      { property: "og:title", content: "Portfolio · AverraCreations" },
      {
        property: "og:description",
        content:
          "Explore the full portfolio of campaigns built to stop the scroll and move markets.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="relative bg-ink text-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 border-b-2 border-cream/20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow font-black mb-4">
              ✦ The full portfolio ✦
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance max-w-4xl">
              Work that <span className="text-yellow">stopped the scroll.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg text-cream/80 font-medium">
              A selection of campaigns, identities and content systems we&apos;ve built for brands,
              creators and category leaders. Tap any card for the full case study.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" className="btn-pop bg-yellow text-ink text-sm">
                ← Back home
              </Link>
              <a href="mailto:averracreations@gmail.com" className="btn-pop bg-cream text-ink text-sm">
                Start a project
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-3xl overflow-hidden bg-cream text-ink card-pop h-full"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span
                        className={`absolute top-4 left-4 ${p.pill} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink`}
                      >
                        {p.tag}
                      </span>
                    </div>
                    <div className="p-5 border-t-2 border-ink flex-1 flex flex-col">
                      <h2 className="font-display text-2xl mb-1">{p.title}</h2>
                      <p className="text-sm text-ink/70 font-bold mb-3">{p.metric}</p>
                      <p className="text-sm text-ink/80 leading-relaxed mb-4">{p.desc}</p>
                      <span className="mt-auto text-xs uppercase tracking-widest font-black text-crimson group-hover:underline">
                        Read case study →
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
