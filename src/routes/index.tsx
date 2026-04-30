import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StoryIntro } from "@/components/StoryIntro";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Clients } from "@/components/Clients";
import { Process } from "@/components/Process";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildSeo({
      title: "AverraCreations | Branding, Social Media Marketing & Content Studio",
      description:
        "AverraCreations is a full-stack creative agency for branding, social media marketing, ad shoots, content creation, websites, SEO and growth campaigns.",
      path: "/",
    }),
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <StoryIntro />
      <Services />
      <Showcase />
      <Clients />
      <Process />
      <SocialProof />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
