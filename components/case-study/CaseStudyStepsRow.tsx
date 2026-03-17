"use client";

import { motion } from "framer-motion";

/** Zeigarnik / Serial Position: numbered steps. Law of Continuity, Similarity. */
interface Step {
  number: string;
  text: string;
}

interface CaseStudyStepsRowProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function CaseStudyStepsRow({
  steps,
  title,
  subtitle,
  className = "",
}: CaseStudyStepsRowProps) {
  return (
    <motion.div
      className={`w-full max-w-[1048px] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {(title || subtitle) && (
        <div className="text-left mb-8">
          {subtitle && (
            <p
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{
                color: "#006793",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              {subtitle}
            </p>
          )}
          {title && (
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
          )}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="rounded-2xl bg-white border border-[#dce4ec] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[100px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span
              className="text-2xl font-light text-[#c4c4be] block mb-2"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              {step.number}
            </span>
            <p
              className="text-sm leading-snug flex-1"
              style={{
                color: "var(--foreground, #233245)",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
