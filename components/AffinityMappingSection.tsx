"use client";

import { motion } from "framer-motion";

export interface AffinityCard {
  id: string;
  text: string;
}

export interface AffinitySection {
  id: string;
  title: string;
  subtitle?: string;
  color: "red" | "green" | "blue" | "yellow" | "purple" | "orange" | "brown";
  cards: AffinityCard[];
  /** If true, render as single center HMW card (e.g. section 7) */
  centerHmw?: boolean;
}

/* Sticky-note style: soft shadow to bottom-right (light from top-left), no harsh border */
const SECTION_COLORS: Record<
  AffinitySection["color"],
  { bg: string; shadow: string }
> = {
  red: {
    bg: "#fde8e8",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  green: {
    bg: "#e5f5ec",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  blue: {
    bg: "#b8d9f0",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  yellow: {
    bg: "#fffb9a",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  purple: {
    bg: "#f0e9ff",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  orange: {
    bg: "#e3f1f8",
    shadow: "3px 3px 10px rgba(0,0,0,0.1), 6px 6px 18px rgba(0,0,0,0.06)",
  },
  brown: {
    bg: "#fff9c4",
    shadow: "4px 4px 14px rgba(0,0,0,0.12), 8px 8px 22px rgba(0,0,0,0.07)",
  },
};

/* Slightly irregular “torn” edge via asymmetric elliptical radius (unique per card) */
const STICKY_RADIUS = [
  "18px 5px 16px 6px / 5px 18px 6px 16px",
  "6px 16px 5px 18px / 16px 6px 18px 5px",
  "14px 8px 18px 4px / 8px 14px 4px 18px",
  "5px 18px 18px 5px / 18px 5px 5px 18px",
  "16px 6px 6px 16px / 6px 16px 16px 6px",
  "8px 14px 4px 18px / 14px 8px 18px 4px",
];

const SAVART_AFFINITY_SECTIONS: AffinitySection[] = [
  {
    id: "pain-points",
    title: "User pain points",
    subtitle: "Friction and trust issues observed in Gen3.",
    color: "red",
    cards: [
      { id: "p1", text: "App loads slowly and occasionally crashes, reducing trust." },
      { id: "p2", text: "Navigation feels cluttered and unintuitive." },
      { id: "p3", text: "Portfolio performance is difficult to understand." },
      { id: "p4", text: "Advice recommendations feel repetitive and generic." },
      { id: "p5", text: "Nothing meaningful to do before subscription." },
      { id: "p6", text: "Risk profiling (EFG) feels mentally exhausting." },
      { id: "p7", text: "Onboarding takes too long and feels manual." },
    ],
  },
  {
    id: "needs",
    title: "User needs & motivations",
    subtitle: "What users want before committing.",
    color: "green",
    cards: [
      { id: "n1", text: "I want to see value before paying for subscription." },
      { id: "n2", text: "Help me understand my investment health clearly." },
      { id: "n3", text: "Give me structured guidance, not overwhelming data." },
      { id: "n4", text: "Make financial insights simple for non-experts." },
      { id: "n5", text: "Allow me to explore and learn before committing." },
      { id: "n6", text: "Provide confidence in investment decisions." },
    ],
  },
  {
    id: "behavioral",
    title: "Behavioral insights",
    subtitle: "Patterns from feedback and usage.",
    color: "blue",
    cards: [
      { id: "b1", text: "Users associate crashes with financial insecurity." },
      { id: "b2", text: "Overly technical reports intimidate beginners." },
      { id: "b3", text: "Free-text financial inputs increase cognitive load." },
      { id: "b4", text: "Locked features can drive curiosity — if value is demonstrated first." },
      { id: "b5", text: "Users trust structured summaries more than long reports." },
    ],
  },
  {
    id: "constraints",
    title: "Business constraints",
    subtitle: "System and regulatory boundaries.",
    color: "yellow",
    cards: [
      { id: "c1", text: "Subscription-based revenue model." },
      { id: "c2", text: "SEBI regulatory compliance requirements." },
      { id: "c3", text: "Broker API limitations and session timeouts." },
      { id: "c4", text: "Manual onboarding increases operational cost." },
      { id: "c5", text: "Need for product-led sales instead of manual persuasion." },
    ],
  },
  {
    id: "gaps",
    title: "Experience gaps in Gen3",
    subtitle: "Where the product fell short.",
    color: "purple",
    cards: [
      { id: "g1", text: "Advisor-centric design, not user-centric." },
      { id: "g2", text: "No structured free value ecosystem." },
      { id: "g3", text: "Weak hierarchy in portfolio analytics." },
      { id: "g4", text: "Advice output lacks readability." },
      { id: "g5", text: "No clear lifecycle progression." },
    ],
  },
  {
    id: "opportunities",
    title: "Design opportunities",
    subtitle: "Directions for Gen4.",
    color: "orange",
    cards: [
      { id: "o1", text: "Introduce free diagnostic tools before subscription." },
      { id: "o2", text: "Simplify advice output into structured breakdowns." },
      { id: "o3", text: "Replace free-form EFG inputs with selectable options." },
      { id: "o4", text: "Turn portfolio into a “health dashboard.”" },
      { id: "o5", text: "Create progressive unlocking via pricing." },
      { id: "o6", text: "Build a lifecycle-driven architecture." },
    ],
  },
  {
    id: "hmw",
    title: "Core design question",
    subtitle: "The central How Might We for Gen4.",
    color: "brown",
    centerHmw: true,
    cards: [
      {
        id: "hmw1",
        text: "How might we design a product-led investment advisory experience that builds trust before asking for commitment?",
      },
    ],
  },
];

function StickyCard({
  text,
  color,
  index,
  centerHmw,
}: {
  text: string;
  color: AffinitySection["color"];
  index: number;
  centerHmw?: boolean;
}) {
  const style = SECTION_COLORS[color];
  const radius = STICKY_RADIUS[index % STICKY_RADIUS.length];
  const rotation = (index % 3) === 0 ? -0.4 : (index % 3) === 1 ? 0.2 : 0.35;
  return (
    <motion.div
      className={`relative p-4 md:p-5 flex items-center justify-center text-left overflow-hidden shrink-0 ${
        centerHmw
          ? "aspect-square w-full max-w-[280px] md:max-w-[320px] mx-auto"
          : "aspect-square w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[170px] md:h-[170px]"
      }`}
      style={{
        backgroundColor: style.bg,
        borderRadius: radius,
        boxShadow: style.shadow,
        transform: `rotate(${rotation}deg)`,
        fontFamily: 'var(--font-patrick-hand), "Patrick Hand", cursive',
        fontSize: centerHmw ? "clamp(1rem, 2.5vw, 1.2rem)" : "clamp(0.9rem, 2vw, 1.05rem)",
        fontWeight: 500,
        lineHeight: 1.35,
        color: "#0a0a0a",
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <p className={`relative leading-snug ${centerHmw ? "font-semibold" : ""}`}>{text}</p>
    </motion.div>
  );
}

interface AffinityMappingSectionProps {
  sections?: AffinitySection[];
  className?: string;
}

const DOTTED_GRID_STYLE = {
  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)",
  backgroundSize: "20px 20px",
};

export default function AffinityMappingSection({
  sections = SAVART_AFFINITY_SECTIONS,
  className = "",
}: AffinityMappingSectionProps) {
  return (
    <div className={`w-full flex flex-col gap-12 md:gap-16 ${className}`}>
      {sections.map((block, blockIndex) => {
        const isHmw = block.centerHmw && block.cards.length === 1;
        return (
          <motion.article
            key={block.id}
            className="w-full rounded-3xl overflow-hidden bg-white min-h-[200px]"
            style={{
              ...DOTTED_GRID_STYLE,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: blockIndex * 0.03 }}
          >
            <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8">
              <header className="flex flex-col gap-1 text-left">
                <h3
                  className="text-xl md:text-2xl font-bold text-[#233245]"
                  style={{
                    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                    letterSpacing: "-0.02em",
                  }}
                >
                  {block.title}
                </h3>
                {block.subtitle && (
                  <p
                    className="text-sm md:text-base text-[#5a6b73] max-w-[640px] font-normal"
                    style={{
                      fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                      lineHeight: 1.5,
                    }}
                  >
                    {block.subtitle}
                  </p>
                )}
              </header>

              {isHmw ? (
                <div className="w-full flex justify-center">
                  <StickyCard
                    text={block.cards[0].text}
                    color={block.color}
                    index={0}
                    centerHmw
                  />
                </div>
              ) : (
                <div className="flex flex-wrap gap-4 md:gap-5">
                  {block.cards.map((card, i) => (
                    <StickyCard
                      key={card.id}
                      text={card.text}
                      color={block.color}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
