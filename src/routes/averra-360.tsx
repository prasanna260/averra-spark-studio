import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-360.jpg";

export const Route = createFileRoute("/averra-360")({
  head: () => ({
    meta: [
      { title: "Averra 360° — Web & Growth — AverraCreations" },
      { name: "description", content: "Websites, SEO, funnels and performance marketing — complete digital growth under one roof." },
      { property: "og:title", content: "Averra 360° — Web & Growth" },
      { property: "og:description", content: "Web design, SEO, funnels and growth strategy." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Web & Growth"
      title="Averra"
      highlight="360°."
      intro="Complete digital solutions — website design, SEO, performance marketing, funnels and growth strategy — engineered to compound."
      image={img}
      pillClass="bg-cyan text-ink"
      bullets={[
        { title: "Website design & dev", body: "Fast, conversion-led sites built on modern stacks." },
        { title: "SEO", body: "Technical, on-page and content SEO that ranks." },
        { title: "Performance marketing", body: "Google, Meta & YouTube ads tied to ROAS." },
        { title: "Funnel optimisation", body: "Landing pages, A/B tests, CRO sprints." },
        { title: "Growth strategy", body: "Roadmaps, dashboards and weekly experiments." },
        { title: "Analytics", body: "GA4, server-side tracking and attribution." },
      ]}
      deliverables={[
        "Website design & build (or revamp)",
        "SEO audit + 90-day execution plan",
        "Paid media management across channels",
        "Conversion funnel & landing pages",
        "Monthly growth dashboard & review",
      ]}
    />
  ),
});
