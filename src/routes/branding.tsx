import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-branding.jpg";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Branding — AverraCreations" },
      { name: "description", content: "Logos, identity systems and packaging for brands people can't ignore." },
      { property: "og:title", content: "Branding — AverraCreations" },
      { property: "og:description", content: "Identity systems, logos and packaging design." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Identity"
      title="Brands people"
      highlight="remember."
      intro="Strategy-led identity systems — from naming and logos to packaging and brand guidelines that scale across every touchpoint."
      image={img}
      pillClass="bg-crimson text-cream"
      bullets={[
        { title: "Brand strategy", body: "Positioning, voice and narrative." },
        { title: "Logo & identity", body: "Marks, wordmarks, monograms, motion." },
        { title: "Visual system", body: "Typography, colour, grids, iconography." },
        { title: "Packaging", body: "D2C-ready packaging that sells off the shelf." },
        { title: "Brand guidelines", body: "Books your team can actually use." },
        { title: "Rebrands", body: "Refresh or rebuild — without losing equity." },
      ]}
      deliverables={[
        "Brand strategy document",
        "Primary & secondary logos",
        "Typography, colour & icon system",
        "Packaging dielines & mockups",
        "Brand guidelines PDF",
      ]}
    />
  ),
});
