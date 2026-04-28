import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import production from "@/assets/work-production.jpg";

export const Route = createFileRoute("/production-ad-shoot")({
  head: () => ({
    meta: [
      { title: "Production Ad Shoot — AverraCreations" },
      {
        name: "description",
        content:
          "Studio-grade ad films, brand stories and product films from concept to final cut.",
      },
      { property: "og:title", content: "Production Ad Shoot — AverraCreations" },
      { property: "og:description", content: "Studio-grade ad films from concept to final cut." },
    ],
  }),
  component: ProductionAdShoot,
});

function ProductionAdShoot() {
  return (
    <ServicePageLayout
      tag="Production"
      title="Production Ad Shoot"
      subtitle="Studio-grade ad films, brand stories and product films — fully produced in-house from script to final cut."
      heroImg={production}
      pillClass="bg-crimson text-cream"
      bgClass="bg-crimson text-cream"
      bullets={[
        {
          title: "Pre-Production",
          body: "Concept, scripting, storyboards, casting and location scouting — every shot mapped before day one.",
        },
        {
          title: "On-Set Direction",
          body: "Cinema-grade lighting, sound and direction. Lean crews, premium output.",
        },
        {
          title: "Post & Edit",
          body: "Color, sound design, motion graphics and VFX delivered in every aspect ratio you need.",
        },
        {
          title: "Distribution Cuts",
          body: "TVCs, YouTube longs, 30s spots, 6s bumpers and reel cutdowns — one shoot, every channel.",
        },
      ]}
    />
  );
}
