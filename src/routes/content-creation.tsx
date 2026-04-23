import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import content from "@/assets/work-content.jpg";

export const Route = createFileRoute("/content-creation")({
  head: () => ({
    meta: [
      { title: "Content Creation — AverraCreations" },
      { name: "description", content: "UGC, reels and motion content — always-on creative built to perform across feeds." },
      { property: "og:title", content: "Content Creation — AverraCreations" },
      { property: "og:description", content: "UGC, reels and motion content built to perform." },
    ],
  }),
  component: ContentCreation,
});

function ContentCreation() {
  return (
    <ServicePageLayout
      tag="Creative"
      title="Content Creation"
      subtitle="UGC, reels, motion graphics and always-on creative — built to test fast, ship faster, and perform across every feed."
      heroImg={content}
      pillClass="bg-yellow text-ink"
      bgClass="bg-yellow text-ink"
      bullets={[
        { title: "UGC at Scale", body: "A vetted creator network producing native, authentic content tuned to your brand voice." },
        { title: "Reels & Shorts", body: "Hooks, b-roll, captions and motion — engineered for retention and replays." },
        { title: "Motion Graphics", body: "Kinetic typography, explainers and animated identity systems that punch through." },
        { title: "Always-On Studio", body: "Monthly creative drops so your channels never go quiet." },
      ]}
    />
  );
}
