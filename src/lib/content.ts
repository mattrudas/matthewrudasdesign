/**
 * Central content source for the portfolio.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const site = {
  name: "Matthew Rudas",
  role: "Lead Designer",
  company: "Checkmate",
  email: "hello@matthewrudas.design",
  resumeUrl:
    "https://drive.google.com/file/d/1gxDJHkMbp282CLSQnCH3MgXS76dxBG3m/view?usp=sharing",
  /** Avatar GIF used in the top nav (home link). */
  avatar: "/avatar.gif",
  /** Portrait on the About letter card. */
  aboutPortrait: "/about-portrait.png",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1gxDJHkMbp282CLSQnCH3MgXS76dxBG3m/view?usp=sharing",
  },
] as const;

/**
 * About page letter. Paragraphs support `**bold**` and `[label](url)`.
 * Set `lined: true` for the notebook-ruled paragraph treatment.
 */
export const about = {
  role: "Designer",
  date: "July 13 2026",
  signOff: "Matthew",
  paragraphs: [
    { text: "Hello," },
    {
      text: "Thank you for taking the time to checkout my portfolio and for deciding to click the about page, I really do appreciate it. Just a few things about me:",
    },
    {
      lined: true,
      text: "Professionally, I have spent much of my early career figuring out how to make new things. Since I can remember I think this has been something I loved to do and knew I would do, regardless of how that would come to be. I love seeing a process through to its end. I love the idea of creation and knowing that something I have put into the world did not once exist. I think that passion is the only way you can operate in an early stage startup and maintain any desire to keep executing.",
    },
    {
      text: "I was, as many seemingly are, a convert to product design because it gave me the excitement and anticipation that I could create something from nothing. I had enrolled in UCLA Law as a KJD (Kindergarten-to-Juris Doctor) and immediately realized I needed time to understand what it meant to be an adult. Bright eyed and unready for a law school classroom still battling COVID, I was happy to take a leave of absence and planned on returning the coming fall.",
    },
    {
      text: "In my time off, I wanted to upskill and decided to lean on my talented friends from undergrad and a newly created UX Design Course from Google to see what I could do with design. Somehow, after completing the course, I had 3 projects I had brought to life and landed a placement with Upperstudy, working as a product designer with early stage start ups.",
    },
    {
      text: "Naturally, I expected things to eventually fall through, as most startups do. I had anticipated a trial run in tech, a return to school, and then a placement into Los Angeles big law. Against the odds, the startup I was helping build continued (and continues) to find success. I became so enthralled with the continuous process of creation, iteration, that I knew I was officially a product design convert.",
    },
    {
      text: "I am immensely grateful that design found me and gave me reason to stay. As a designer I feel empowered in everything I see around me. I feel as though I have found a secret club where things are more beautiful, doorways make more sense, function is essential, and my closest peers appreciate the aesthetics that make life interesting.",
    },
    {
      text: "Outside of design I love a lot of things, mainly: music, guitar, cats, sports, world events, writing, reading, yoga, movies and nature. I find the most pleasure in days that I have seen friends and enjoyed the sun. There's few things that provide me satisfaction more than being outside, using my body, and fighting exhaustion on a drive home.",
    },
    {
      text: "I love people, talking to them, and trying to understand them. Thank you for taking the time to visit my site and please reach out for discussion topics that sound interesting to you.",
    },
  ],
} as const;

/**
 * The intro block. The heading name is rendered in the accent color.
 * Paragraphs support `**bold**` and `[label](url)` link syntax inline.
 * Labels matching `hoverCards` keys get a preview card on hover.
 */
export const intro = {
  headingLead: "Hello! I am ",
  /** Rendered in the accent (green) color. */
  headingName: "Matthew Rudas,",
  headingRest: " a lead designer at Checkmate and a nice guy.",
  paragraphs: [
    "I took a leave of absence at [UCLA Law School](https://law.ucla.edu/) 5 years ago and started an apprenticeship with an agency that helps early stage designers and start ups called [Upperstudy](https://upperstudy.com/).",
    "I was paired with a team of 3 cofounders to lead design for a company called [Checkmate](https://joincheckmate.com/). We now have over 2 millions users, reach hundreds of thousands people a day, have a growing team of 30, and are recently profitable.",
    "I have been learning quickly, failing often, and building new things every single day. Over the years, Checkmate has grown and myself alongside it. I love the challenge of starting from scratch and seeing products transform.",
  ],
} as const;

export type HoverCard = {
  image: string;
  caption: string;
  badge: string;
  /** How the top image should be cropped. */
  imageFit?: "cover" | "contain";
  /** Optional live website embed shown instead of (or over) the static image. */
  embedUrl?: string;
};

/** Hover preview cards for key terms in the intro. */
export const hoverCards: Record<string, HoverCard> = {
  "UCLA Law School": {
    image: "/hover/ucla-photo.jpg",
    caption:
      "Photo of me on the first day of law school, most likely heading into contracts.",
    badge: "/hover/ucla-seal.png",
    imageFit: "cover",
  },
  Upperstudy: {
    image: "/hover/upperstudy-photo.png",
    caption:
      "Where I started my design career, building 0 to 1 at early stage startups.",
    badge: "/hover/upperstudy-seal.png",
    imageFit: "cover",
    embedUrl: "https://upperstudy.com/",
  },
  Checkmate: {
    image: "/hover/checkmate-photo.svg",
    caption:
      "Going #1 in the app store twice, raising 3 rounds of funding, and building a design team.",
    badge: "/hover/checkmate-logo.svg",
    imageFit: "cover",
  },
};

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
