import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import social from "@/assets/work-social.jpg";

export const Route = createFileRoute("/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — AverraCreations" },
      { name: "description", content: "Reels, posts & paid social engineered to stop the scroll and convert." },
      { property: "og:title", content: "Social Media Marketing — AverraCreations" },
      { property: "og:description", content: "Reels, posts & paid social engineered to stop the scroll." },
    ],
  }),
  component: SocialMediaMarketing,
});

function SocialMediaMarketing() {
  return (
    <ServicePageLayout
      tag="Social"
      title="Social Media Marketing"
      subtitle="Reels, posts, and paid social engineered to stop the scroll and grow the brand. We run feeds that feel native, not noisy."
      heroImg={social}
      pillClass="bg-emerald text-cream"
      bgClass="bg-emerald text-cream"
      bullets={[
        { title: "Content Calendars", body: "Monthly plans across Instagram, LinkedIn, YouTube and TikTok — built around themes that move audiences." },
        { title: "Reels & Shorts", body: "Hook-led short-form video shot, edited and shipped weekly with retention-first structure." },
        { title: "Paid Social", body: "Meta, Google and YouTube ads — creative testing frameworks that scale winners fast." },
        { title: "Community Ops", body: "DMs, comments, polls and creator collabs — turning followers into loyal buyers." },
      ]}
    />
  );
}
