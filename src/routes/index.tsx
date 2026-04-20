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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AverraCreations · We Build Brands People Can't Ignore" },
      {
        name: "description",
        content:
          "Premium creative agency for brands, creators & D2C. Branding, ads, content production, web & performance marketing · all under one roof.",
      },
      { property: "og:title", content: "AverraCreations · We Build Brands People Can't Ignore" },
      {
        property: "og:description",
        content:
          "Full-stack creative studio. Branding, campaigns, content, growth · engineered for attention.",
      },
    ],
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
