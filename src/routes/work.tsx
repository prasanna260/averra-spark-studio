import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { buildSeo } from "@/lib/seo";
import { longForm, shortCategories, shortForm, type ShortCategory } from "@/lib/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    ...buildSeo({
      title: "Our Work | Short Form Reels, Ads & Long Form Video | AverraCreations",
      description:
        "Watch AverraCreations' portfolio: short-form reels, performance ads, event coverage, collabs and long-form YouTube edits for brands and creators.",
      path: "/work",
    }),
  }),
  component: Work,
});

const PAGE_SIZE = 9;
type Filter = "All" | ShortCategory;

function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shorts = useMemo(
    () => (filter === "All" ? shortForm : shortForm.filter((v) => v.category === filter)),
    [filter],
  );
  const filters: Filter[] = ["All", ...shortCategories];

  return (
    <main className="relative">
      <CursorGlow />
      <Navbar solid />

      {/* SHORT FORM */}
      <section
        id="short-form"
        className="relative overflow-hidden border-b-2 border-ink bg-ink pb-20 pt-32 text-cream md:pb-28 md:pt-40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dotted-bg opacity-[0.07] invert"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <Link
              to="/"
              className="mb-8 inline-block text-xs font-black uppercase tracking-[0.3em] text-cream/70 transition-colors hover:text-yellow"
            >
              ← Back to home
            </Link>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-yellow">
              ✦ Our work ✦
            </p>
            <h1 className="font-display text-5xl tracking-tight text-balance sm:text-6xl md:text-8xl">
              Short form <span className="text-yellow">mastery.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium text-cream/70 md:text-lg">
              Reels, ads and shorts built to stop the scroll. Hit play on anything below.
            </p>
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter short form videos"
            className="mt-10 flex flex-wrap gap-2 sm:gap-3"
          >
            {filters.map((f) => {
              const active = f === filter;
              const count =
                f === "All" ? shortForm.length : shortForm.filter((v) => v.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(f);
                    setVisible(PAGE_SIZE);
                  }}
                  className={`rounded-full border-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition-all sm:text-sm ${
                    active
                      ? "border-ink bg-yellow text-ink shadow-[4px_4px_0_0_var(--crimson)]"
                      : "border-cream/30 text-cream hover:border-yellow hover:text-yellow"
                  }`}
                >
                  {f} <span className="opacity-60">· {count}</span>
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-12 grid max-w-sm gap-x-10 gap-y-16 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {shorts.slice(0, visible).map((video) => (
              <VideoCard
                key={video.driveId}
                video={video}
                orientation="vertical"
                tag={filter === "All" ? video.category : undefined}
              />
            ))}
          </div>

          {visible < shorts.length && (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-pop bg-yellow text-ink"
                style={{ boxShadow: "6px 6px 0 0 var(--crimson)" }}
              >
                Show more reels ({shorts.length - visible} left)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LONG FORM */}
      <section
        id="long-form"
        className="relative overflow-hidden border-b-2 border-ink bg-ink-soft py-20 text-cream md:py-28"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-yellow">
              ✦ YouTube & podcasts ✦
            </p>
            <h2 className="font-display text-5xl tracking-tight text-balance sm:text-6xl md:text-8xl">
              Long form <span className="text-yellow">excellence.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-16 md:mt-16 md:grid-cols-2">
            {longForm.map((video) => (
              <VideoCard key={video.driveId} video={video} orientation="wide" />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
