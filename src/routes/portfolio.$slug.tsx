import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getProjectBySlug, projects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return {
        meta: [{ title: "Project · AverraCreations" }],
      };
    }
    return {
      meta: [
        { title: `${project.title} · AverraCreations` },
        { name: "description", content: project.desc },
        { property: "og:title", content: `${project.title} · AverraCreations` },
        { property: "og:description", content: project.desc },
        { property: "og:image", content: project.img },
        { name: "twitter:image", content: project.img },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-ink text-cream grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-4">Project not found</h1>
        <Link to="/portfolio" className="btn-pop bg-yellow text-ink text-sm">
          Back to portfolio
        </Link>
      </div>
    </main>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="relative bg-ink text-cream min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 border-b-2 border-cream/20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-yellow font-black mb-6 hover:underline"
            >
              ← Back to portfolio
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <span
              className={`inline-block ${project.pill} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink mb-5`}
            >
              {project.tag}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-2xl text-lg text-cream/80 font-medium">{project.metric}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border-2 border-cream/20 card-pop">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
                width={1600}
                height={1000}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-4">The brief</h2>
                <p className="text-cream/85 leading-relaxed text-lg">{project.intro}</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-4">What we delivered</h2>
                <ul className="space-y-3">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-cream/85 leading-relaxed">
                      <span className="text-yellow font-black mt-1">✦</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-4">Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-cream/85 leading-relaxed">
                      <span className="text-emerald font-black mt-1">→</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            {project.testimonial && (
              <Reveal delay={100}>
                <div className="rounded-3xl border-2 border-cream/20 p-6 bg-cream/5 card-pop">
                  <p className="font-display text-xl leading-snug text-cream">
                    “{project.testimonial.quote}”
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest text-yellow font-black">
                    — {project.testimonial.author}
                  </p>
                </div>
              </Reveal>
            )}

            <Reveal delay={160}>
              <div className="rounded-3xl border-2 border-cream/20 p-6 bg-crimson text-cream card-pop">
                <h3 className="font-display text-2xl mb-2">Want this for your brand?</h3>
                <p className="text-cream/85 mb-5 text-sm">
                  Let&apos;s scope a {project.tag.toLowerCase()} engagement built around your goals.
                </p>
                <a
                  href="https://calendly.com/averracreations/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop bg-yellow text-ink text-sm w-full justify-center"
                >
                  Book a slot
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t-2 border-cream/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-5xl">More work</h2>
            <Link to="/portfolio" className="btn-pop bg-yellow text-ink text-sm">
              See full portfolio →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-3xl overflow-hidden bg-cream text-ink card-pop"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className={`absolute top-4 left-4 ${p.pill} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 border-ink`}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 border-t-2 border-ink">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="text-sm text-ink/70 font-bold">{p.metric}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
