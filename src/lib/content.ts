/**
 * Central content source for the portfolio.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const site = {
  name: "Matthew Rudas",
  role: "Lead Designer",
  company: "Checkmate",
  email: "hello@matthewrudas.design",
  /** Link used on the highlighted name in the intro. */
  nameLink: "https://www.linkedin.com/",
  resumeUrl: "#",
  /** Optional avatar image placed in /public. Leave empty to show a gradient placeholder. */
  avatar: "",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * The intro paragraphs. Use `**text**` to bold portions inline.
 */
export const intro = {
  headingLead: "Hello! I am ",
  headingAfterName: ", a lead designer at ",
  headingCompanyBold: "Checkmate",
  headingEnd: " and a nice guy.",
  paragraphs: [
    "I took a leave of absence at **UCLA Law School** 5 years ago and started an apprenticeship with an agency that helps early stage designers and start ups called **Uppestudy**.",
    "I was paired with a team of 3 cofounders to lead design for a company called **Checkmate**. We now have over 2 millions users, reach hundreds of thousands people a day, have a growing team of 30, and are recently profitable.",
    "I have been learning quickly, failing often, and building new things every single day. Over the years, Checkmate has grown and myself alongside it. I love the challenge of starting from scratch and seeing products transform.",
  ],
} as const;

export type ProjectKind =
  | "phones"
  | "extension"
  | "grid"
  | "browser"
  | "brand"
  | "shop";

export type Project = {
  slug: string;
  title: string;
  tags: string;
  period: string;
  description: string;
  kind: ProjectKind;
  /** Optional real image placed in /public that overrides the built-in mock. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "app",
    title: "Checkmate App",
    tags: "product design, brand design, user research",
    period: "2022 — 2026",
    description:
      "0 → 2M+ downloads from my initial wireframes to our current mobile experience. Through many transformations the app centers on accruing rewards, referrals, discounts, wish listing and order tracking. 4.7/5 stars in the App Store.",
    kind: "phones",
  },
  {
    slug: "extension",
    title: "Checkmate Extension",
    tags: "product design, brand design, user research",
    period: "2022 — 2026",
    description:
      "Our beta product with 250k+ MAUs and millions in $ saved. The extension covers a consumer's e-commerce journey serving as a cohesive experience for discounts, wish listing, and personalized discount offers at partner sites.",
    kind: "extension",
  },
  {
    slug: "lifecycle",
    title: "Checkmate Lifecycle",
    tags: "product design, brand design, user nurturing",
    period: "2022 — 2026",
    description:
      "Designed end-to-end user lifecycle flow for outreach across multiple surfaces. Created flows to power growth between our B2B product into our consumer ecosystem.",
    kind: "grid",
  },
  {
    slug: "brands",
    title: "Checkmate for Brands",
    tags: "brand onboarding, dashboard design, market research, user research, landing pages, site coding",
    period: "2022 — 2026",
    description:
      "Our partner product allows Shopify brands to work with our AI Network to retarget users from their site they would not have recognized. They can reach consumers on our channels or their own, leveraging our robust understanding of anonymous site visitors.",
    kind: "browser",
  },
  {
    slug: "brand",
    title: "Checkmate Brand",
    tags: "brand design, graphic design, design systems, deck design",
    period: "2022 — 2026",
    description:
      "Evolved a robust design system across two separate products. Created consistent style guidelines to be used across all product design, brand design, and sales collateral. Designed decks used to raise from Google Ventures, Menlo, and more.",
    kind: "brand",
  },
  {
    slug: "shop",
    title: "Checkmate Shop",
    tags: "product design, brand design, user research",
    period: "2022 — 2026",
    description:
      "A curated shopping surface pairing personalized offers with editorial product discovery — turning everyday browsing into rewarding purchases across our partner network.",
    kind: "shop",
  },
];
