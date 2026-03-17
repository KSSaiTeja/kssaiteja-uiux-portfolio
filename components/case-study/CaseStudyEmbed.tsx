"use client";

import { motion } from "framer-motion";

/** Embed Figma (or other) prototype so work feels alive, not static (Saptarshi feedback). */
interface CaseStudyEmbedProps {
  /** Figma embed URL (e.g. from Share → Embed). Or any iframe-friendly URL. */
  url: string;
  title?: string;
  className?: string;
}

export default function CaseStudyEmbed({ url, title = "Try the prototype", className = "" }: CaseStudyEmbedProps) {
  // Use URL as-is; for Figma use Share → Get embed code and paste the iframe src here

  return (
    <motion.figure
      className={`case-study-embed w-full rounded-2xl overflow-hidden border border-[#dce4ec] bg-[#f0f6fa] ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
    >
      <p
        className="text-xs font-medium uppercase tracking-wider px-6 pt-5 pb-2"
        style={{ color: "var(--color-primary, #006793)", fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
      >
        {title}
      </p>
      <div className="aspect-video w-full min-h-[280px] relative">
        <iframe
          src={url}
          title={title}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      </div>
    </motion.figure>
  );
}
