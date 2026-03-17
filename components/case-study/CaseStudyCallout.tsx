"use client";

import { motion } from "framer-motion";

/** Von Restorff Effect: distinct block for key quote or insight. Law of Common Region. */
interface CaseStudyCalloutProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark";
  className?: string;
}

export default function CaseStudyCallout({
  children,
  variant = "default",
  className = "",
}: CaseStudyCalloutProps) {
  const variants = {
    default:
      "bg-[#f0f6fa] border-l-4 border-[#006793] text-[#233245] rounded-r-xl",
    accent:
      "bg-[#004d6b] text-white rounded-2xl shadow-lg",
    dark:
      "bg-[#1a2d3a] text-white rounded-2xl shadow-xl",
  };

  return (
    <motion.blockquote
      className={`case-study-callout w-full max-w-[720px] py-6 px-6 md:py-8 md:px-8 text-left ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{
        fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
        fontSize: "1rem",
        lineHeight: "1.65",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </motion.blockquote>
  );
}
