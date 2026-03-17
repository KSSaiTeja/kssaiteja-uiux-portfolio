"use client";

import { motion } from "framer-motion";

export interface BentoCard {
  title: string;
  description: string;
  /** Optional: custom illustration node. If not provided, a default abstract shape is used. */
  illustration?: React.ReactNode;
}

interface BentoFeatureSectionProps {
  title: string;
  cards: BentoCard[];
  className?: string;
}

function DefaultIllustration({ variant }: { variant: 1 | 2 | 3 | 4 | 5 }) {
  const shared = "rounded-xl";
  if (variant === 1) {
    return (
      <div className={`flex gap-2 items-end h-full min-h-[100px] ${shared}`}>
        <div className="w-12 h-14 rounded-lg bg-[#e3f3fa]" />
        <div className="w-14 h-16 rounded-lg bg-[#006793]/20" />
        <div className="w-10 h-12 rounded-lg bg-[#dde3e8]" />
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className={`flex items-center justify-center gap-3 h-full min-h-[100px] ${shared}`}>
        <div className="w-10 h-10 rounded-full bg-[#e3f3fa]" />
        <span className="text-[#dde3e8] font-medium">—</span>
        <div className="w-10 h-10 rounded-full bg-[#006793]/15" />
        <span className="text-[#dde3e8] font-medium">—</span>
        <div className="w-10 h-10 rounded-full bg-[#e3f3fa]" />
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className={`flex flex-col gap-2 h-full min-h-[100px] ${shared}`}>
        <div className="h-2 w-full rounded-full bg-[#e3f3fa]" />
        <div className="h-2 w-[80%] rounded-full bg-[#006793]/15" />
        <div className="flex gap-2 mt-2">
          <div className="w-8 h-8 rounded-lg bg-[#006793]/10" />
          <div className="w-8 h-8 rounded-lg bg-[#dde3e8]" />
        </div>
      </div>
    );
  }
  if (variant === 4) {
    return (
      <div className={`grid grid-cols-3 gap-1.5 h-full min-h-[100px] ${shared}`}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`rounded-md ${i === 3 ? "bg-[#006793]/20" : "bg-[#e3f3fa]"}`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={`flex items-end gap-2 h-full min-h-[100px] ${shared}`}>
      <div className="w-full h-12 rounded-lg bg-[#e3f3fa]" />
      <div className="w-10 h-10 rounded-full bg-[#006793]/15 shrink-0" />
    </div>
  );
}

export default function BentoFeatureSection({
  title,
  cards,
  className = "",
}: BentoFeatureSectionProps) {
  return (
    <section
      className={`w-full max-w-[1048px] py-16 md:py-20 ${className}`}
      style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-left text-[#233245] mb-12 md:mb-14 leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {cards.map((card, i) => {
          const isLastRow = cards.length === 5 && i >= 3;
          const colPlace = isLastRow && i === 3 ? "lg:col-start-1" : isLastRow && i === 4 ? "lg:col-start-3" : "";
          return (
          <motion.article
            key={card.title}
            className={`rounded-2xl border border-[#dce4ec] bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col ${colPlace}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="text-lg font-semibold text-[#233245] mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-[#5a6b73] leading-relaxed mb-5 flex-1">
              {card.description}
            </p>
            <div className="mt-auto min-h-[100px] flex items-end">
              {card.illustration ?? (
                <DefaultIllustration variant={(i % 5) === 0 ? 1 : ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
              )}
            </div>
          </motion.article>
          );
        })}
      </div>
    </section>
  );
}
