import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-production.jpg";

export const Route = createFileRoute("/production-ad-shoot")({
  head: () => ({
    meta: [
      { title: "Production Ad Shoot — AverraCreations" },
      { name: "description", content: "Studio-grade ad films, brand films and product shoots — concept to delivery." },
      { property: "og:title", content: "Production Ad Shoot — AverraCreations" },
      { property: "og:description", content: "Cinematic ad production for brands & D2C." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Production"
      title="Studio-grade"
      highlight="ad films."
      intro="From concept to colour grade. We produce cinema-quality TVCs, brand films and product shoots that are built to perform on every screen."
      image={img}
      pillClass="bg-crimson text-cream"
      bullets={[
        { title: "Concept & script", body: "Insight-driven scripts that earn attention." },
        { title: "Pre-production", body: "Casting, locations, storyboards, schedules." },
        { title: "Direction & DOP", body: "Cinematic crews and proven directors." },
        { title: "Post production", body: "Edit, sound, VFX, colour, masters." },
        { title: "Multi-format", body: "TVC, OTT, YouTube, vertical & 6-second cuts." },
        { title: "Brand films", body: "Founder, manifesto and culture films." },
      ]}
      deliverables={[
        "Pre-production deck & shoot plan",
        "1–3 day shoot with full crew",
        "Hero film + 6–10 platform cuts",
        "Sound design & colour grade",
        "Raw footage handover",
      ]}
    />
  ),
});
