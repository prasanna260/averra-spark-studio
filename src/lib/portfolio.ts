/**
 * Portfolio videos shown on the /work page.
 *
 * Every entry points at its file in the Averra "Portfolio" Google Drive folder
 * (`driveId`). That is enough for a click-to-play Drive embed, as long as the
 * file is shared as "Anyone with the link can view".
 *
 * For the full experience (muted autoplay while scrolling, mute + volume
 * control), add a `src` with a direct, web-optimised video URL from a video
 * host or CDN (e.g. Cloudflare Stream / R2, Bunny, Cloudinary, Vercel Blob).
 * Long-form pieces can instead set `youtubeId` for an unlisted YouTube video.
 * Optional `poster` overrides the auto-generated Drive thumbnail.
 */

export type PortfolioVideo = {
  title: string;
  description: string;
  driveId: string;
  src?: string;
  poster?: string;
  youtubeId?: string;
};

export type ShortCategory = "Ads" | "Personal Branding" | "Collabs" | "Events" | "Royal Crown";

export type ShortVideo = PortfolioVideo & { category: ShortCategory };

export const shortCategories: ShortCategory[] = [
  "Ads",
  "Personal Branding",
  "Collabs",
  "Events",
  "Royal Crown",
];

export const shortForm: ShortVideo[] = [
  // Advertisements
  {
    category: "Ads",
    title: "Biotastic · Ice Bath",
    description:
      "A punchy performance ad that sells the cold plunge in seconds: hook first, benefits on screen, call to action that lands.",
    driveId: "1m5GP2if5YYkuOWasDAOiCzWnVGVxZCn1",
  },
  {
    category: "Ads",
    title: "Biotastic · Red Light Therapy",
    description:
      "Glowing product visuals, tight pacing and clean captions that turn a wellness treatment into a scroll-stopper.",
    driveId: "1Um7AOP_DUHxlMvuK5unrIoiJvy7d8pGX",
  },
  {
    category: "Ads",
    title: "Biotastic · Sauna",
    description:
      "Warm, cinematic grading and steam-soaked b-roll built to make viewers feel the heat and book a session.",
    driveId: "1pFT_zqocEPtQODUTSUScg5XcgsnQbmIJ",
  },
  {
    category: "Ads",
    title: "Averra Showreel",
    description:
      "A fast-cut reel of our favourite frames, transitions and edits, all in under a minute.",
    driveId: "1lEUoZdvIufPi9KEu0SdVDD3kobcbvtxf",
  },

  // Personal branding
  {
    category: "Personal Branding",
    title: "Daily Recovery Routine",
    description:
      "Podcast clips cut into a tight short with bold captions, b-roll and retention-first pacing.",
    driveId: "1FBz0PKXQLQR_V6BdHiob7hJc89Ihc-Az",
  },
  {
    category: "Personal Branding",
    title: "Ice Baths Explained",
    description:
      "Expert talking-head content turned into an easy-to-share explainer with motion text and punch-ins.",
    driveId: "1GfUJsTRdxQq_4l675VPNacwxSDIKyQeB",
  },
  {
    category: "Personal Branding",
    title: "Heat Therapy & Hormones",
    description:
      "Science-backed talking points edited for the feed: hook in the first second, payoff by the last.",
    driveId: "1rwaIVhjd04axEZWQnfWnztMpF65o9iiR",
  },
  {
    category: "Personal Branding",
    title: "The Science of Recovery",
    description:
      "A clean podcast cut that positions the host as the go-to voice on recovery and performance.",
    driveId: "1qQis3VUpHRMNLdGQR6Vv0UXieVcKiHxz",
  },
  {
    category: "Personal Branding",
    title: "Red Light Therapy Podcast",
    description:
      "Long conversations distilled into a single sharp idea, with captions styled to the brand.",
    driveId: "1QeuclWHKvOyOdNpx_Slqtlqxu9vxlmUK",
  },
  {
    category: "Personal Branding",
    title: "Prosthetic Story",
    description:
      "A human-first story reel that builds trust and lets the work and the people speak for themselves.",
    driveId: "1xnZAePbZCt0ZlCx0OcgH_-QDf_pO9M9n",
  },
  {
    category: "Personal Branding",
    title: "Prosthetic Story · Part 2",
    description:
      "The follow-up chapter: emotional beats, smooth transitions and a clear next step for viewers.",
    driveId: "1tYB2kbPhkKnPG2N8XjbHb87nKZHoW33O",
  },
  {
    category: "Personal Branding",
    title: "Rashmika Reel",
    description:
      "Trend-aware editing with rhythm-matched cuts that rides the moment and pulls in reach.",
    driveId: "1IBZfi_tQUlB1KCUlvL98PVf5-nQGmP61",
  },
  {
    category: "Personal Branding",
    title: "Protein Facts",
    description:
      "Nutrition tips packaged as a quick, saveable reel with on-screen graphics that do the teaching.",
    driveId: "1VuqfzzgrSatEMD5iP7dfeXsD-aBOvhud",
  },
  {
    category: "Personal Branding",
    title: "Creator Reel 01",
    description:
      "Snappy personal-brand short with dynamic cuts, captions and a strong opening hook.",
    driveId: "1lq0XDvi3o2W6bcueS6JIuWKIRfdYlo5z",
  },
  {
    category: "Personal Branding",
    title: "Creator Reel 02",
    description:
      "A second cut in the series, keeping the look consistent so the feed feels like a brand.",
    driveId: "1e_abT0ihMjLsZ-kfQnqBEq8ElOaE5QwI",
  },

  // Collabs
  {
    category: "Collabs",
    title: "MotoSports Collab",
    description:
      "High-octane riding footage cut to the beat, made for two audiences and built to be shared.",
    driveId: "1Hl-nouf-eYdW1EZY_st9uz_laypvMyIH",
  },
  {
    category: "Collabs",
    title: "MotoSports Collab · Part 2",
    description: "More speed, more sound design, and transitions that keep the throttle open.",
    driveId: "10_G388jw4B6EFWUyqrveySwOzyNY8RBg",
  },
  {
    category: "Collabs",
    title: "YouMee Collab",
    description:
      "A brand-to-creator collab reel that feels native to the feed and on-brand for both.",
    driveId: "12dE4pARnGMUnvuOF3Dk1ajJnuWgBYxid",
  },
  {
    category: "Collabs",
    title: "Machu Tattoos Collab",
    description:
      "Ink, needles and close-ups: a moody, textured edit that shows off the craft in the studio.",
    driveId: "16RUJwFrbIqTsp7MKuFfN7r_snZzAnr-8",
  },

  // Events
  {
    category: "Events",
    title: "Royal Crown Marathon",
    description:
      "Race-day energy captured and cut into a reel that makes you want to sign up next year.",
    driveId: "1fN4KaOj_vDQ6-_ii-b1iDTYQlbO52Nwj",
  },
  {
    category: "Events",
    title: "Royal Crown Marathon · Part 2",
    description: "Finish-line emotion, crowd moments and sponsor shots woven into one story.",
    driveId: "1ezOGDPY4AoCwauZ9q0wa5afAqb_Qlp4k",
  },
  {
    category: "Events",
    title: "Once Upon a Love in Madras · Screening",
    description:
      "Premiere-night coverage with red-carpet moments, reactions and a cinematic finish.",
    driveId: "13QOrngidqfjKvwg73cVJwRxIAfoHxT0Z",
  },
  {
    category: "Events",
    title: "OUALIM Screening Edit",
    description: "A fast recap of the screening that turns one night into weeks of social content.",
    driveId: "1VSIFX3y-GnhzFPMIsE739E4CtouFtonx",
  },
  {
    category: "Events",
    title: "OUALIM Screening · Part 2",
    description: "Audience reactions and behind-the-scenes moments, cut for maximum hype.",
    driveId: "1p-IIoBtwwFa8d1_94H8uuC5-bPr0KOSG",
  },
  {
    category: "Events",
    title: "OUALIM Showcase",
    description:
      "A showcase edit spotlighting the film's cast and crew with polished, celebratory pacing.",
    driveId: "1nRAseV-k9PEAsuTAxl0blnKOMWaV_8KT",
  },
  {
    category: "Events",
    title: "Event Shorts",
    description: "Quick-hit event highlights designed to post the same day while the buzz is live.",
    driveId: "1493vLAvlVg7hI6hS2FfRxnVua0TMI5xo",
  },

  // Royal Crown
  {
    category: "Royal Crown",
    title: "Royal Crown · Kitchen & Bedroom",
    description:
      "A smooth property walkthrough with gimbal moves, warm grading and details that sell the space.",
    driveId: "1kYs8C1RllABaHIPFt52YoIvMbjfjMlLC",
  },
  {
    category: "Royal Crown",
    title: "Royal Crown · Client Testimonial",
    description: "Happy-client storytelling that builds trust faster than any brochure can.",
    driveId: "10LhwIRs0htRf9ckEf1YDZIKuT5AUlT47",
  },
  {
    category: "Royal Crown",
    title: "Royal Crown · Testimonial (Branded)",
    description:
      "The same testimonial with the brand's logo burned in, ready for paid and organic use.",
    driveId: "1wcY6pvUeHuzzrULf6-TZN-0a66a0EmQV",
  },
];

export const longForm: PortfolioVideo[] = [
  {
    title: "Biotastic · Long Form for YouTube",
    description:
      "A full YouTube feature with chapters, b-roll, lower thirds and pacing that holds viewers to the end.",
    driveId: "1pniVAZyR7K25FMC-3ybvRPGjPCYo8fZ0",
  },
  {
    title: "Sauna · Long Form for YouTube",
    description:
      "A deep dive into sauna benefits, combining expert talk, product visuals and on-screen data.",
    driveId: "1LBGn5wMxiFXJHaX8xEP5ZZyreyOsGAX1",
  },
  {
    title: "Biotastic Podcast",
    description:
      "A multi-camera podcast edit with clean audio, smart camera switching and branded graphics.",
    driveId: "1IBMLDOacuAX24DdSTy9W1e3_kN6YVYh8",
  },
  {
    title: "Feature Edit",
    description:
      "A long-form story edit with cinematic grading, sound design and a narrative arc that keeps people watching.",
    driveId: "1c6sUE6HNs_T1IeQBQbvpsABkrcf_hncf",
  },
];

export const driveThumbnail = (id: string, width = 800) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
