"use client";

import { motion } from "framer-motion";

/** Two-column: visual left, text right (or reverse). Law of Proximity, Common Region. */
interface CaseStudyTwoColumnProps {
  visual: React.ReactNode;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function CaseStudyTwoColumn({
  visual,
  title,
  children,
  reverse = false,
  className = "",
}: CaseStudyTwoColumnProps) {
  return (
    <motion.section
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-[1048px] mx-auto items-start ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        {visual}
      </div>
      <div className={`flex flex-col gap-4 ${reverse ? "lg:order-1" : ""}`}>
        <h3
          className="text-xl md:text-2xl font-medium"
          style={{
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            fontStyle: "italic",
            color: "var(--foreground, #233245)",
          }}
        >
          {title}
        </h3>
        <div
          className="text-[15px] leading-[1.65] space-y-3"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "var(--foreground, #233245)",
          }}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
}
