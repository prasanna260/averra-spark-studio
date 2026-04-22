import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-social.jpg";

export const Route = createFileRoute("/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — AverraCreations" },
      { name: "description", content: "Reels, posts and paid social engineered to stop the scroll and convert." },
      { property: "og:title", content: "Social Media Marketing — AverraCreations" },
      { property: "og:description", content: "Performance-led social content & paid campaigns." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Social"
      title="Social media that"
      highlight="moves markets."
      intro="Daily reels, scroll-stopping posts and paid social campaigns built to grow followers, fans and revenue — not vanity numbers."
      image={img}
      pillClass="bg-emerald text-cream"
      bullets={[
        { title: "Reels & shorts", body: "Hook-first vertical video edited for retention and saves." },
        { title: "Always-on calendars", body: "Weekly content plans across IG, YouTube, LinkedIn." },
        { title: "Paid social", body: "Meta & YouTube ads with creative testing and scaling." },
        { title: "Community", body: "DMs, comments, collabs — turning audiences into buyers." },
        { title: "Analytics", body: "Monthly reports tied to revenue and reach." },
        { title: "Creator network", body: "Pair organic with influencer drops." },
      ]}
      deliverables={[
        "12–20 pieces of content per month",
        "Hook scripts, captions & hashtag stacks",
        "Paid social ad creatives + media buying",
        "Monthly performance review",
        "Dedicated content lead",
      ]}
    />
  ),
});
