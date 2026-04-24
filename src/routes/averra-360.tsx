import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import webGrowth from "@/assets/work-web.jpg";

export const Route = createFileRoute("/averra-360")({
  head: () => ({
    meta: [
      { title: "Averra 360° · Web & Growth — AverraCreations" },
      { name: "description", content: "Complete digital solutions: web design, SEO, performance marketing, funnel optimization and growth strategy." },
      { property: "og:title", content: "Averra 360° · Web & Growth" },
      { property: "og:description", content: "Web design, SEO, performance marketing and growth — under one roof." },
    ],
  }),
  component: Averra360,
});

function Averra360() {
  return (
    <ServicePageLayout
      tag="360°"
      title="Averra 360°"
      subtitle="Web & Growth — complete digital solutions. Websites, SEO, performance marketing, funnels and strategy that compounds month over month."
      heroImg={webGrowth}
      pillClass="bg-cyan text-ink"
      bgClass="bg-cyan text-ink"
      bullets={[
        { title: "Website Design & Dev", body: "Conversion-led websites and landing pages — fast, accessible, and built to scale." },
        { title: "SEO & Performance", body: "Technical SEO, content engines and paid campaigns that bring qualified traffic, not vanity clicks." },
        { title: "Funnel Optimization", body: "CRO audits, A/B testing, lifecycle email and retention loops — every step measured." },
        { title: "Growth Strategy", body: "Quarterly roadmaps with clear KPIs. We don't just ship — we steer." },
      ]}
    />
  );
}
