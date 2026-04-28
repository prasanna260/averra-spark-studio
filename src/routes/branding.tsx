import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import branding from "@/assets/work-branding.jpg";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Branding — AverraCreations" },
      {
        name: "description",
        content: "Logos, identity systems, packaging and brand guidelines that look unmistakable.",
      },
      { property: "og:title", content: "Branding — AverraCreations" },
      {
        property: "og:description",
        content: "Identity systems and packaging that look unmistakable.",
      },
    ],
  }),
  component: Branding,
});

function Branding() {
  return (
    <ServicePageLayout
      tag="Identity"
      title="Branding"
      subtitle="Logos, identity systems, packaging and guidelines that make your brand feel inevitable — not invented."
      heroImg={branding}
      pillClass="bg-crimson text-cream"
      bgClass="bg-peach text-ink"
      bullets={[
        {
          title: "Brand Strategy",
          body: "Positioning, naming, tone of voice and the story that holds it all together.",
        },
        {
          title: "Identity Systems",
          body: "Logos, type, color, motion principles and a kit your team can actually use.",
        },
        {
          title: "Packaging",
          body: "Shelf-ready, e-com-ready, unbox-ready packaging design with print-grade files.",
        },
        {
          title: "Brand Guidelines",
          body: "A living playbook so every touchpoint stays on-brand — for years, not weeks.",
        },
      ]}
    />
  );
}
