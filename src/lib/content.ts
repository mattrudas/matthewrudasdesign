/**
 * Central content source for the portfolio.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const site = {
  name: "Matthew Rudas",
  role: "Lead Designer",
  company: "Checkmate",
  email: "hello@matthewrudas.design",
  resumeUrl: "#",
  /** Avatar image placed in /public. */
  avatar: "/avatar.gif",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * The intro block. The heading name is rendered in the accent color.
 * Paragraphs support `**bold**` and `[label](url)` link syntax inline.
 */
export const intro = {
  headingLead: "Hello! I am ",
  /** Rendered in the accent (green) color. */
  headingName: "Matthew Rudas,",
  headingRest: " a lead designer at Checkmate and a nice guy.",
  paragraphs: [
    "I took a leave of absence at [UCLA Law School](https://law.ucla.edu/) 5 years ago and started an apprenticeship with an agency that helps early stage designers and start ups called [Upperstudy](https://upperstudy.com/).",
    "I was paired with a team of 3 cofounders to lead design for a company called **Checkmate**. We now have over 2 millions users, reach hundreds of thousands people a day, have a growing team of 30, and are recently profitable.",
    "I have been learning quickly, failing often, and building new things every single day. Over the years, Checkmate has grown and myself alongside it. I love the challenge of starting from scratch and seeing products transform.",
  ],
} as const;

export type Project = {
  slug: string;
  title: string;
  tags: string;
  period: string;
  description: string;
  /** Exported mockup image placed in /public/work. */
  image: string;
};

export const projects: Project[] = [
  {
    slug: "app",
    title: "Checkmate App",
    tags: "product design, brand design, user research",
    period: "2022 - 2026",
    description:
      "0 → 2M+ downloads from my initial wireframes to our current mobile experience. Through many transformations the app centers on accruing rewards, referrals, discounts, wish listing and order tracking. 4.7/5 stars in the App Store.",
    image: "/work/checkmate-app.png",
  },
  {
    slug: "extension",
    title: "Checkmate Extension",
    tags: "product design, brand design, user research",
    period: "2022 - 2026",
    description:
      "Our hero product with 250k+ MAUs and millions in $ saved.The extension covers a consumer’s e-commerce journey serving as a cohesive experience for discounts, wish listing, and personalized discount offers at partner sites.",
    image: "/work/checkmate-extension.png",
  },
  {
    slug: "lifecycle",
    title: "Checkmate Lifecycle",
    tags: "referral loops, marketing outreach, user nurturing",
    period: "2022 - 2026",
    description:
      "Designed end-to-end user lifecycle flow for outreach across multiple surfaces. Created flows to power growth between our B2B product into our consumer ecosystem.",
    image: "/work/checkmate-lifecycle.png",
  },
  {
    slug: "brands",
    title: "Checkmate for Brands",
    tags: "brand onboarding, dashboard design, market research, user research, landing pages, vibe coding",
    period: "2022 - 2026",
    description:
      "Our partner product allows Shopify brands to work with our ID Network to retarget users from their site they would not have recognized. They can reach consumers on our channels or their own, leveraging our robust understanding of anonymous site visitors.",
    image: "/work/checkmate-for-brands.png",
  },
  {
    slug: "brand",
    title: "Checkmate Brand",
    tags: "brand design, graphic design, design systems, deck design",
    period: "2022 - 2026",
    description:
      "Evolved a robust design system across two separate products. Created consistent style guidelines to be used across all product design, brand design, and sales collateral. Designed decks used to raise from Google Ventures, Manits, and more.",
    image: "/work/checkmate-brand.png",
  },
  {
    slug: "web",
    title: "Checkmate Web",
    tags: "brand design, graphic design, design systems, deck design",
    period: "2022 - 2026",
    description:
      "Designed a web app and Chrome extension to mirror the hero mobile experience. Maintains and publishes changes to web surfaces ranging from marketing sites to SEO pages.",
    image: "/work/checkmate-web.png",
  },
];
