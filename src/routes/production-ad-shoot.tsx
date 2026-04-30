import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { buildSeo } from "@/lib/seo";
import production from "@/assets/work-production.jpg";

export const Route = createFileRoute("/production-ad-shoot")({
  head: () => ({
    ...buildSeo({
      title: "Production Ad Shoot Studio | Brand Films & Product Videos",
      description:
        "Plan and produce ad shoots with AverraCreations, from concepts, scripts and storyboards to filming, editing, VFX and channel-ready video cuts.",
      path: "/production-ad-shoot",
    }),
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
