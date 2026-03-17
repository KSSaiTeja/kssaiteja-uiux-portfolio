"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Variant = "full" | "large" | "two-col" | "flow";

interface CaseStudyMediaBlockProps {
  variant?: Variant;
  caption?: string;
  /** Image src - if provided, shows image; otherwise placeholder for you to add asset */
  src?: string;
  alt?: string;
  placeholderLabel?: string;
  /** For two-col: second image */
  src2?: string;
  alt2?: string;
  placeholderLabel2?: string;
  className?: string;
}

export default function CaseStudyMediaBlock({
  variant = "full",
  caption,
  src,
  alt = "",
  placeholderLabel = "Add image, map, or flow",
  src2,
  alt2 = "",
  placeholderLabel2 = "Add image",
  className = "",
}: CaseStudyMediaBlockProps) {
  const isPlaceholder = !src;
  const isTwoCol = variant === "two-col";

  const blockContent = (
    <>
      <div
        className={
          isTwoCol
            ? "grid grid-cols-1 md:grid-cols-2 gap-5"
            : `relative w-full overflow-hidden rounded-2xl bg-[#f0f6fa] ${
                variant === "full" ? "aspect-[16/9] min-h-[280px]" : ""
              } ${variant === "large" ? "aspect-[4/3] min-h-[320px]" : ""} ${
                variant === "flow" ? "aspect-[2/1] min-h-[240px]" : ""
              }`
        }
      >
        {isTwoCol ? (
          <>
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#f0f6fa] aspect-[4/3] min-h-[200px]">
              <MediaSlot src={src} alt={alt} placeholderLabel={placeholderLabel} />
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#f0f6fa] aspect-[4/3] min-h-[200px]">
              <MediaSlot src={src2} alt={alt2} placeholderLabel={placeholderLabel2} />
            </div>
          </>
        ) : (
          <MediaSlot
            src={src}
            alt={alt}
            placeholderLabel={placeholderLabel}
            fullHeight
          />
        )}
      </div>
      {caption && (
        <p
          className="mt-4 text-sm text-left"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "var(--color-muted, #5a6b73)",
            lineHeight: "1.5",
          }}
        >
          {caption}
        </p>
      )}
    </>
  );

  return (
    <motion.figure
      className={`case-study-media w-full rounded-2xl overflow-hidden shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {blockContent}
    </motion.figure>
  );
}

function MediaSlot({
  src,
  alt,
  placeholderLabel,
  fullHeight,
}: {
  src?: string;
  alt: string;
  placeholderLabel: string;
  fullHeight?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative w-full h-full min-h-[200px] ${fullHeight ? "min-h-[280px]" : ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 809px) 100vw, 1048px"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-[#dce4ec] rounded-2xl text-center p-8 w-full h-full min-h-[160px] bg-[#f0f6fa] ${
        fullHeight ? "min-h-[280px]" : ""
      }`}
      style={{
        fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
        fontSize: "13px",
        color: "var(--color-muted, #5a6b73)",
        letterSpacing: "0.02em",
      }}
    >
      {placeholderLabel}
    </div>
  );
}
