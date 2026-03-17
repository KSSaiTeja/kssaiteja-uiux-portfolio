"use client";

import { motion } from "framer-motion";

interface CaseStudySectionProps {
  sectionNumber?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Max width for body: default 720px. "full" = 1048px for wider content. */
  width?: "default" | "full";
}

export default function CaseStudySection({
  sectionNumber,
  title,
  children,
  className = "",
  width = "default",
}: CaseStudySectionProps) {
  const contentMaxW = width === "full" ? "max-w-[1048px]" : "max-w-[720px]";
  return (
    <motion.section
      className={`case-study-section w-full ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col gap-6 w-full ${contentMaxW}`}>
        <header className="flex flex-col gap-2">
          {sectionNumber && (
            <span
              className="text-xs font-medium tracking-[0.12em] uppercase"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                color: "#006793",
              }}
            >
              {sectionNumber}
            </span>
          )}
          <h2
            className="text-2xl md:text-3xl font-medium leading-tight"
            style={{
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
              color: "var(--foreground, #233245)",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        </header>
        <div
          className="case-study-body flex flex-col gap-5 text-left text-[16px] md:text-[17px] leading-[1.65]"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "var(--foreground, #233245)",
            letterSpacing: "-0.01em",
          }}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
}
