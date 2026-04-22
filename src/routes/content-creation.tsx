import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-content.jpg";

export const Route = createFileRoute("/content-creation")({
  head: () => ({
    meta: [
      { title: "Content Creation — AverraCreations" },
      { name: "description", content: "UGC, reels, motion and photography produced at speed and scale." },
      { property: "og:title", content: "Content Creation — AverraCreations" },
      { property: "og:description", content: "UGC, reels & motion graphics built for the feed." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Creative"
      title="Content that"
      highlight="never sleeps."
      intro="A constant pipeline of UGC, reels, motion and photography — designed to keep your brand showing up everywhere your audience is."
      image={img}
      pillClass="bg-yellow text-ink"
      bullets={[
        { title: "UGC", body: "Native creator content for ads & organic." },
        { title: "Reels & shorts", body: "Edit-first vertical video at scale." },
        { title: "Motion graphics", body: "Animated explainers, lower-thirds, intros." },
        { title: "Photography", body: "Product, lifestyle & founder shoots." },
        { title: "Podcast clips", body: "Long-form chopped into reach machines." },
        { title: "Bulk packages", body: "30+ assets a month, consistent voice." },
      ]}
      deliverables={[
        "Monthly content shoot day",
        "20–40 short-form videos",
        "Photography library (product & lifestyle)",
        "Motion templates for repeat use",
        "Cloud library handover",
      ]}
    />
  ),
});
