"use client";

import { motion } from "framer-motion";

/** Miller's Law: chunk info into cards. Gestalt: Proximity, Similarity, Common Region. */
interface Card {
  label: string;
  value: string;
}

interface CaseStudyCardGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export default function CaseStudyCardGrid({
  cards,
  columns = 3,
  className = "",
}: CaseStudyCardGridProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : columns === 4
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";

  return (
    <motion.div
      className={`grid ${gridClass} gap-4 w-full max-w-[1048px] mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, staggerChildren: 0.05 }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          className="rounded-2xl bg-white border border-[#dce4ec] p-5 shadow-sm hover:shadow-md transition-shadow min-h-[88px] flex flex-col justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          }}
        >
          <span
            className="text-xs font-medium uppercase tracking-wider block mb-1"
            style={{ color: "#006793" }}
          >
            {card.label}
          </span>
          <span className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
            {card.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
