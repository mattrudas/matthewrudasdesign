/**
 * Central content source for the portfolio.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const site = {
  name: "Matthew Rudas",
  role: "Product & Brand Designer",
  location: "Toronto, Canada",
  email: "hello@matthewrudas.design",
  tagline:
    "I design clear, human products and brands that help teams ship work they're proud of.",
  availability: "Available for select freelance projects",
  resumeUrl: "#",
  socials: [
    { label: "Email", href: "mailto:hello@matthewrudas.design" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Read.cv", href: "https://read.cv/" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  href: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "northwind",
    title: "Northwind",
    category: "Product Design · 0→1",
    year: "2025",
    summary:
      "Reimagined the onboarding and dashboard for a B2B logistics platform, cutting time-to-first-value from days to minutes.",
    tags: ["Product", "Design System", "Research"],
    href: "#",
    accent: "linear-gradient(135deg, #d8562b 0%, #f2a03d 100%)",
  },
  {
    slug: "lumen",
    title: "Lumen Health",
    category: "Brand & Web",
    year: "2024",
    summary:
      "A calming identity and marketing site for a preventative-care startup, balancing clinical trust with warmth.",
    tags: ["Branding", "Web", "Motion"],
    href: "#",
    accent: "linear-gradient(135deg, #2f6d63 0%, #7bc1ac 100%)",
  },
  {
    slug: "cadence",
    title: "Cadence",
    category: "Mobile App",
    year: "2024",
    summary:
      "An interval-training companion with a focus-first interface and haptic-driven workouts people actually finish.",
    tags: ["iOS", "Prototyping", "UX"],
    href: "#",
    accent: "linear-gradient(135deg, #3a3f8f 0%, #8a7cf0 100%)",
  },
  {
    slug: "atlas",
    title: "Atlas Studio",
    category: "Design System",
    year: "2023",
    summary:
      "Built a token-driven component library adopted by four product teams, unifying a fragmented experience.",
    tags: ["Systems", "Tokens", "Docs"],
    href: "#",
    accent: "linear-gradient(135deg, #b4472b 0%, #e0894b 100%)",
  },
];

export const services = [
  {
    title: "Product Design",
    description:
      "From messy problem to shippable interface — flows, wireframes, high-fidelity UI, and prototypes that de-risk decisions.",
  },
  {
    title: "Design Systems",
    description:
      "Scalable, token-driven component libraries and documentation that keep design and engineering in sync.",
  },
  {
    title: "Brand & Identity",
    description:
      "Logos, type, color, and voice — cohesive systems that make a product feel intentional from the first pixel.",
  },
  {
    title: "Prototyping & Motion",
    description:
      "Interactive prototypes and micro-interactions that communicate intent and bring static screens to life.",
  },
];

export const stats = [
  { value: "9+", label: "Years designing" },
  { value: "40+", label: "Products shipped" },
  { value: "12", label: "Industries" },
];

export const clients = [
  "Northwind",
  "Lumen",
  "Cadence",
  "Atlas",
  "Meridian",
  "Fieldwork",
  "Kindred",
  "Overpass",
];

export const timeline = [
  {
    period: "2022 — Now",
    role: "Independent Design Partner",
    org: "Freelance",
    detail:
      "Partnering with founders and product teams on end-to-end design, from first concept to launch.",
  },
  {
    period: "2019 — 2022",
    role: "Senior Product Designer",
    org: "Meridian",
    detail:
      "Led design for the core analytics suite and established the company's first shared design system.",
  },
  {
    period: "2016 — 2019",
    role: "Product Designer",
    org: "Fieldwork Labs",
    detail:
      "Shipped mobile and web experiences across fintech and healthcare for early-stage startups.",
  },
];
