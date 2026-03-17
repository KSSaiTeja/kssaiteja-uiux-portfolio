"use client";

import { motion } from "framer-motion";

/** Pareto / Von Restorff: key outcomes as memorable metric-style cards. Dark section = Aesthetic-Usability, focus. */
interface Metric {
  value: string;
  label: string;
}

interface CaseStudyMetricsGridProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
  className?: string;
}

export default function CaseStudyMetricsGrid({
  title = "Outcomes & impact",
  subtitle,
  metrics,
  className = "",
}: CaseStudyMetricsGridProps) {
  return (
    <motion.section
      className={`w-full rounded-3xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="py-14 px-6 md:py-16 md:px-10 rounded-3xl"
        style={{ backgroundColor: "#1a2d3a" }}
      >
        <div className="max-w-[1048px] w-full">
          {subtitle && (
            <p
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              {subtitle}
            </p>
          )}
          <h3
            className="text-2xl md:text-3xl font-medium mb-10 md:mb-12 text-white"
            style={{
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="rounded-2xl p-6 flex flex-col justify-center min-h-[120px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span
                  className="text-2xl md:text-3xl font-semibold text-white block mb-2"
                  style={{
                    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="text-sm leading-snug"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                  }}
                >
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
