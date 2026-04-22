import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import content from "@/assets/work-content.jpg";
import strategy from "@/assets/work-strategy.jpg";
import production from "@/assets/work-production.jpg";
import ads from "@/assets/work-ads.jpg";
import influencer from "@/assets/work-influencer.jpg";
import web from "@/assets/work-web.jpg";
import triptych from "@/assets/work-triptych.jpg";

export type Project = {
  slug: string;
  img: string;
  tag: string;
  title: string;
  metric: string;
  pill: string;
  desc: string;
  intro: string;
  deliverables: string[];
  outcomes: string[];
  testimonial?: { quote: string; author: string };
};

export const projects: Project[] = [
  {
    slug: "social-media-marketing",
    img: social,
    tag: "Social",
    title: "Social Media Marketing",
    metric: "Reels, posts & paid social",
    pill: "bg-emerald text-cream",
    desc: "End-to-end social management — content calendars, paid amplification and community building for D2C brands.",
    intro:
      "We run social like a newsroom and a performance lab in one. Strategy, calendar, creative, publishing and paid amplification — built to compound week over week.",
    deliverables: [
      "Monthly content calendar across Instagram, YouTube Shorts & LinkedIn",
      "12–20 reels and 8–12 static posts per month",
      "Paid social setup, creative testing & weekly optimization",
      "Community management and DM playbooks",
    ],
    outcomes: [
      "3–5× increase in saves and shares within 60 days",
      "Lower CPM through native, scroll-stopping creative",
      "Steady follower growth tied to revenue, not vanity",
    ],
    testimonial: {
      quote: "They turned our feed into our number one sales channel.",
      author: "D2C founder, beauty",
    },
  },
  {
    slug: "production-ad-shoot",
    img: production,
    tag: "Production",
    title: "Production Ad Shoot",
    metric: "Studio-grade ad films",
    pill: "bg-crimson text-cream",
    desc: "Concept to camera. Studio shoots, location days, edits and grading delivered for broadcast and digital.",
    intro:
      "Full-service production for ad films, brand stories and product launches. We handle concept, casting, crew, shoot and post — so you walk away with a hero film and a library of cutdowns.",
    deliverables: [
      "Creative direction, scripting and storyboarding",
      "Crew, casting, locations and art direction",
      "1 hero film + 6–10 cutdowns for paid and organic",
      "Color, sound design and platform-specific masters",
    ],
    outcomes: [
      "Premium brand films that out-perform UGC on consideration",
      "A reusable asset library that fuels months of ads",
      "Clear, on-brand storytelling at scale",
    ],
  },
  {
    slug: "content-creation",
    img: content,
    tag: "Creative",
    title: "Content Creation",
    metric: "UGC, reels & motion",
    pill: "bg-yellow text-ink",
    desc: "Always-on content engines for brands that need to show up daily — UGC, motion graphics and short-form reels.",
    intro:
      "An always-on content engine. We mix studio shoots, creator UGC and motion graphics so your brand never goes a day without showing up — and never sounds the same twice.",
    deliverables: [
      "Monthly batch shoots (in-studio or on-location)",
      "Creator UGC sourcing, briefs and reviews",
      "Motion graphics, lower-thirds and reel templates",
      "Caption frameworks and hook libraries",
    ],
    outcomes: [
      "Daily publishing without burning out the team",
      "Higher hook rate and watch time on short-form",
      "A consistent brand voice across every format",
    ],
  },
  {
    slug: "branding",
    img: branding,
    tag: "Identity",
    title: "Branding",
    metric: "Logos, systems & packaging",
    pill: "bg-crimson text-cream",
    desc: "Naming, identity systems, packaging and brand guidelines designed to outlast trends.",
    intro:
      "Identity systems built to outlast trends. We start with positioning and end with a complete kit your team can actually use — logo, type, color, packaging and guidelines.",
    deliverables: [
      "Brand strategy, positioning and naming",
      "Logo system, typography and color palette",
      "Packaging, stationery and merch design",
      "Brand guidelines and asset libraries",
    ],
    outcomes: [
      "A recognizable identity that scales across every touchpoint",
      "Faster design decisions for your in-house team",
      "Premium shelf and screen presence",
    ],
  },
  {
    slug: "content-strategy",
    img: strategy,
    tag: "Strategy",
    title: "Content Strategy",
    metric: "Calendars built to convert",
    pill: "bg-emerald text-cream",
    desc: "Research-led content strategy mapped to funnel stages — built to convert, not just collect likes.",
    intro:
      "Strategy that ties every post to a business outcome. We audit, research, map your funnel, and ship a 90-day content roadmap your team can execute on Monday.",
    deliverables: [
      "Audience, competitor and platform audit",
      "Content pillars mapped to funnel stages",
      "90-day editorial calendar with KPIs",
      "Measurement framework and monthly review",
    ],
    outcomes: [
      "Content that drives leads and sales, not just impressions",
      "Clear ownership and rituals across the team",
      "A repeatable system instead of weekly chaos",
    ],
  },
  {
    slug: "paid-media-campaigns",
    img: ads,
    tag: "Performance",
    title: "Paid Media Campaigns",
    metric: "Meta, Google & YouTube",
    pill: "bg-yellow text-ink",
    desc: "Performance media planning and creative testing across Meta, Google and YouTube for measurable ROAS.",
    intro:
      "Performance media that respects the brand. Account structure, creative testing, audience expansion and weekly optimization across Meta, Google and YouTube.",
    deliverables: [
      "Account audit and structured campaign builds",
      "Creative testing matrix (3–5 angles weekly)",
      "Audience research, exclusions and lookalikes",
      "Weekly reporting with clear next actions",
    ],
    outcomes: [
      "Improved ROAS within the first 60 days",
      "Lower CAC through disciplined creative testing",
      "Scalable spend without losing efficiency",
    ],
  },
  {
    slug: "influencer-marketing",
    img: influencer,
    tag: "Influencer",
    title: "Influencer Marketing",
    metric: "Creator-led campaigns",
    pill: "bg-crimson text-cream",
    desc: "Hand-picked creator partnerships, contracts, briefs and reporting — turning audiences into customers.",
    intro:
      "Creator partnerships that actually move product. We handpick creators that match your brand, run the briefs, manage contracts and report on what actually drove revenue.",
    deliverables: [
      "Creator shortlisting and outreach",
      "Briefs, contracts and rights management",
      "Whitelisting and paid amplification",
      "Performance reporting per creator",
    ],
    outcomes: [
      "Authentic content that converts",
      "Built-in social proof across your category",
      "A recurring roster of brand-aligned creators",
    ],
  },
  {
    slug: "averra-360-web-growth",
    img: web,
    tag: "Web & Growth",
    title: "Averra 360° Web & Growth",
    metric: "Websites engineered to convert",
    pill: "bg-cyan text-ink",
    desc: "Full-stack website design and growth engineering — strategy, UX, build, SEO and ongoing optimization in one stack.",
    intro:
      "A 360° web and growth program. We design and build the site, wire it to analytics and CRM, and then optimize it monthly — so the website becomes your best-performing salesperson.",
    deliverables: [
      "Discovery, sitemap, wireframes and UX strategy",
      "Custom design and development (Shopify, Webflow, Wix or custom)",
      "On-page SEO, schema, performance and Core Web Vitals",
      "Analytics, CRM and pixel setup",
      "Monthly CRO experiments and reporting",
    ],
    outcomes: [
      "Faster, cleaner sites that rank and convert",
      "Clear funnel visibility from click to customer",
      "Compounding growth through monthly experiments",
    ],
    testimonial: {
      quote: "Our new site doubled qualified leads in the first quarter.",
      author: "Founder, B2B SaaS",
    },
  },
  {
    slug: "integrated-campaigns",
    img: triptych,
    tag: "Campaigns",
    title: "Integrated Campaigns",
    metric: "360° launches",
    pill: "bg-yellow text-ink",
    desc: "Coordinated launches across paid, organic, PR and on-ground — built for momentum and category share.",
    intro:
      "Big moments, coordinated end-to-end. We orchestrate paid, organic, PR, influencer and on-ground so every channel hits at the same time and amplifies the next.",
    deliverables: [
      "Campaign concept, narrative and key art",
      "Channel plan across paid, organic, PR and influencer",
      "Production of films, stills and motion assets",
      "Launch day war-room and post-launch report",
    ],
    outcomes: [
      "Category-defining launch moments",
      "Spike in brand search and direct traffic",
      "A reusable playbook for the next launch",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
