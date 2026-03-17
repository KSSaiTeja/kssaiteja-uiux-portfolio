export const WORK_SLUGS: { slug: string; title: string }[] = [
  { slug: "savart-investment-platform", title: "Savart Investment Platform" },
  { slug: "stock-research-platform", title: "Stock Research Platform" },
  { slug: "marketing-pages-suite", title: "Marketing Pages Suite" },
  { slug: "ai-sports-analytics", title: "AI Sports Analytics App" },
  { slug: "enterprise-crm-platform", title: "Enterprise CRM Platform" },
];

export interface BentoImage {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export type BentoLayoutVariant = "A" | "B" | "C" | "D" | "E" | "F";

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  cover: BentoImage;
  slug: string;
  bentoImages: BentoImage[];
  hasCaseStudy: boolean;
  layout: BentoLayoutVariant;
  /** 3–4 chip/badge labels below the title (e.g. Fintech, Sole ownership, Case study) */
  chips: string[];
}

const COVER = {
  src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
  width: 2464,
  height: 1856,
};

function makeBento(cover: BentoImage, count = 6): BentoImage[] {
  return Array.from({ length: count }, () => ({ ...cover }));
}

export const ALL_WORKS: WorkItem[] = [
  {
    id: "1",
    title: "Savart Investment Platform",
    category: "Fintech",
    summary: "Sole designer on a full redesign of a SEBI-registered advisory app. Gen4 shipped with clearer portfolio health, simpler risk profiling, and a product-led flow—so users see value before subscribing. The new experience reduced confusion around tracking and recommendations and aligned the product with a structured onboarding motion instead of manual hand-holding.",
    cover: { ...COVER, alt: "Savart Investment Platform" },
    slug: "savart-investment-platform",
    bentoImages: makeBento({ ...COVER, alt: "Savart" }, 8),
    hasCaseStudy: true,
    layout: "F",
    chips: ["Fintech", "Sole ownership", "End-to-end redesign", "Case study"],
  },
  {
    id: "2",
    title: "Stock Research Platform",
    category: "Fintech",
    summary: "Designed the full web app for a fintech research product: 5+ core modules including custom screeners, query builder, and multi-watchlist management. Delivered end-to-end flows and financial data visualisation so power users could slice data without leaving the product. Built and handed off a reusable component set to keep future iterations consistent.",
    cover: { ...COVER, alt: "Stock Research Platform" },
    slug: "stock-research-platform",
    bentoImages: makeBento({ ...COVER, alt: "Stock Research" }),
    hasCaseStudy: false,
    layout: "B",
    chips: ["Fintech", "Web app", "5+ modules", "Data viz"],
  },
  {
    id: "3",
    title: "Marketing Pages Suite",
    category: "Marketing",
    summary: "Owned design for 12+ marketing pages—homepage, pricing, PMS, enterprise, and campaign landings. Focused on clarity and conversion so each page had a single job and a clear path to the next step. All pages were signed off within the agreed review cycle, and the system is now the go-to reference for new campaigns.",
    cover: { ...COVER, alt: "Marketing Pages" },
    slug: "marketing-pages-suite",
    bentoImages: makeBento({ ...COVER, alt: "Marketing Pages" }),
    hasCaseStudy: false,
    layout: "C",
    chips: ["Marketing", "12+ pages", "Conversion", "Design system"],
  },
  {
    id: "4",
    title: "AI Sports Analytics App",
    category: "Mobile",
    summary: "Designed an AI-powered sports analytics mobile app that supports 10+ performance tests with real-time video analysis and pose-estimation feedback. The challenge was keeping the UI simple while exposing enough depth for coaches. Shipped a centralised reporting dashboard so teams could compare athletes and track progress over time.",
    cover: { ...COVER, alt: "AI Sports Analytics" },
    slug: "ai-sports-analytics",
    bentoImages: makeBento({ ...COVER, alt: "AI Sports Analytics" }),
    hasCaseStudy: false,
    layout: "D",
    chips: ["Mobile", "AI", "10+ tests", "Real-time"],
  },
  {
    id: "5",
    title: "Enterprise CRM Platform",
    category: "Enterprise",
    summary: "Designed an enterprise CRM with 6 integrated modules: permissions, prospect and investor tracking, tasks, portfolio review automation, and multi-channel comms. Prioritised clarity for power users who need to move fast, and kept flows consistent so onboarding and day-to-day use stayed predictable. The system is built to scale with more modules without feeling fragmented.",
    cover: { ...COVER, alt: "Enterprise CRM" },
    slug: "enterprise-crm-platform",
    bentoImages: makeBento({ ...COVER, alt: "Enterprise CRM" }),
    hasCaseStudy: false,
    layout: "E",
    chips: ["Enterprise", "6 modules", "CRM", "Scale"],
  },
];

export function getNextProject(slug: string): { title: string; slug: string } | null {
  const i = WORK_SLUGS.findIndex((w) => w.slug === slug);
  if (i < 0 || i >= WORK_SLUGS.length - 1) return null;
  return WORK_SLUGS[i + 1];
}