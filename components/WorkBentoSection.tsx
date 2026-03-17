"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export interface BentoImage {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export interface WorkBentoSectionProps {
  id: string;
  title: string;
  category?: string;
  summary: string;
  bentoImages: BentoImage[];
  href?: string;
  hasCaseStudy?: boolean;
  index?: number;
  layout?: "A" | "B" | "C" | "D" | "E" | "F";
  /** 3–4 chip/badge labels below the title */
  chips?: string[];
}

const COVER_SRC =
  "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856";

type Cell = { colSpan: number; rowSpan: number; imageIndex: number };

const LAYOUTS: Record<string, { gridClass: string; rowsClass: string; cells: Cell[] }> = {
  A: {
    gridClass: "grid-cols-3",
    rowsClass: "grid-rows-[200px_200px_180px] md:grid-rows-[220px_220px_200px]",
    cells: [
      { colSpan: 1, rowSpan: 1, imageIndex: 0 },
      { colSpan: 1, rowSpan: 1, imageIndex: 1 },
      { colSpan: 1, rowSpan: 2, imageIndex: 2 },
      { colSpan: 1, rowSpan: 1, imageIndex: 3 },
      { colSpan: 1, rowSpan: 1, imageIndex: 4 },
      { colSpan: 2, rowSpan: 1, imageIndex: 5 },
    ],
  },
  B: {
    gridClass: "grid-cols-2",
    rowsClass: "grid-rows-[200px_200px_180px_160px] md:grid-rows-[220px_200px_200px_180px]",
    cells: [
      { colSpan: 1, rowSpan: 2, imageIndex: 0 },
      { colSpan: 1, rowSpan: 1, imageIndex: 1 },
      { colSpan: 1, rowSpan: 1, imageIndex: 2 },
      { colSpan: 1, rowSpan: 1, imageIndex: 3 },
      { colSpan: 1, rowSpan: 1, imageIndex: 4 },
      { colSpan: 2, rowSpan: 1, imageIndex: 5 },
    ],
  },
  C: {
    gridClass: "grid-cols-3",
    rowsClass: "grid-rows-[180px_200px_200px] md:grid-rows-[200px_220px_220px]",
    cells: [
      { colSpan: 3, rowSpan: 1, imageIndex: 0 },
      { colSpan: 1, rowSpan: 1, imageIndex: 1 },
      { colSpan: 1, rowSpan: 1, imageIndex: 2 },
      { colSpan: 1, rowSpan: 2, imageIndex: 3 },
      { colSpan: 2, rowSpan: 1, imageIndex: 4 },
      { colSpan: 1, rowSpan: 1, imageIndex: 5 },
    ],
  },
  D: {
    gridClass: "grid-cols-3",
    rowsClass: "grid-rows-[200px_200px_180px] md:grid-rows-[220px_220px_200px]",
    cells: [
      { colSpan: 2, rowSpan: 1, imageIndex: 0 },
      { colSpan: 1, rowSpan: 1, imageIndex: 1 },
      { colSpan: 1, rowSpan: 2, imageIndex: 2 },
      { colSpan: 1, rowSpan: 1, imageIndex: 3 },
      { colSpan: 1, rowSpan: 1, imageIndex: 4 },
      { colSpan: 2, rowSpan: 1, imageIndex: 5 },
    ],
  },
  E: {
    gridClass: "grid-cols-4",
    rowsClass: "grid-rows-[200px_200px_180px] md:grid-rows-[220px_220px_200px]",
    cells: [
      { colSpan: 1, rowSpan: 1, imageIndex: 0 },
      { colSpan: 1, rowSpan: 1, imageIndex: 1 },
      { colSpan: 2, rowSpan: 2, imageIndex: 2 },
      { colSpan: 1, rowSpan: 1, imageIndex: 3 },
      { colSpan: 1, rowSpan: 1, imageIndex: 4 },
      { colSpan: 4, rowSpan: 1, imageIndex: 5 },
    ],
  },
};

/** Layout F: Figma bento — 5 cards, absolute positioning, design 1050×638.
 *  Card 1: 368×293 (4 images). Card 2: 368×333 (1). Card 3: 343×638 (1). Card 4: 307×386 (1). Card 5: 307×222 (1, clipped). */
const FIGMA_BENTO_CARDS: {
  left: number; top: number; width: number; height: number;
  overflow?: "hidden";
  slots: { left: number; top: number; width: number; height: number; imageIndex: number }[];
}[] = [
  {
    left: 0, top: 0, width: 368, height: 293, overflow: "hidden",
    slots: [
      { left: 16, top: 16, width: 168, height: 197, imageIndex: 0 },
      { left: 16, top: 225, width: 168, height: 136, imageIndex: 1 },
      { left: 192, top: 16, width: 160, height: 102, imageIndex: 2 },
      { left: 192, top: 130, width: 160, height: 147, imageIndex: 3 },
    ],
  },
  {
    left: 0, top: 305, width: 368, height: 333,
    slots: [{ left: 46, top: 15, width: 275, height: 304, imageIndex: 4 }],
  },
  {
    left: 384, top: 0, width: 343, height: 638,
    slots: [{ left: 17, top: 16, width: 308, height: 606, imageIndex: 5 }],
  },
  {
    left: 743, top: 11, width: 307, height: 386,
    slots: [{ left: 16, top: 16, width: 275, height: 354, imageIndex: 6 }],
  },
  {
    left: 743, top: 416, width: 307, height: 222, overflow: "hidden",
    slots: [{ left: 16, top: -148, width: 275, height: 354, imageIndex: 7 }],
  },
];
const FIGMA_DESIGN_WIDTH = 1050;
const FIGMA_DESIGN_HEIGHT = 638;

const LAYOUT_KEYS = ["A", "B", "C", "D", "E", "F"] as const;

export default function WorkBentoSection({
  id,
  title,
  category,
  summary,
  bentoImages,
  href = "#",
  hasCaseStudy = false,
  index = 0,
  layout,
  chips = [],
}: WorkBentoSectionProps) {
  const layoutKey = layout ?? LAYOUT_KEYS[index % LAYOUT_KEYS.length];
  const config = LAYOUTS[layoutKey] ?? LAYOUTS.A;
  const isLayoutF = layoutKey === "F";

  const imagesCount = isLayoutF ? 8 : 6;
  const images = bentoImages.length >= imagesCount ? bentoImages : [
    ...bentoImages,
    ...Array.from({ length: imagesCount - bentoImages.length }, () => bentoImages[0] || { src: COVER_SRC, alt: title, width: 2464, height: 1856 }),
  ];

  return (
    <motion.section
      id={id}
      className="w-full max-w-[1048px] mx-auto flex flex-col gap-8 py-16 max-md:py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {isLayoutF ? (
        /* Layout F: Figma bento — 5 cards, absolute positions, #FAFCFD cards, #D9D9D9 image containers */
        <div className="w-full overflow-hidden rounded-[12px]" style={{ background: "#FAFCFD" }}>
          <div
            className="relative w-full"
            style={{ paddingBottom: `${(FIGMA_DESIGN_HEIGHT / FIGMA_DESIGN_WIDTH) * 100}%` }}
          >
            <div className="absolute inset-0" style={{ width: "100%", height: "100%" }}>
              {FIGMA_BENTO_CARDS.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="absolute overflow-hidden"
                  style={{
                    left: `${(card.left / FIGMA_DESIGN_WIDTH) * 100}%`,
                    top: `${(card.top / FIGMA_DESIGN_HEIGHT) * 100}%`,
                    width: `${(card.width / FIGMA_DESIGN_WIDTH) * 100}%`,
                    height: `${(card.height / FIGMA_DESIGN_HEIGHT) * 100}%`,
                    overflow: card.overflow ?? "visible",
                  }}
                >
                  {/* White card container */}
                  <div
                    className="absolute inset-0 rounded-[12px]"
                    style={{ background: "#FAFCFD", border: "1px solid #EBEBEB" }}
                  />
                  {/* Grey image slots — premium subtle hover */}
                  {card.slots.map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      className="group absolute rounded-[12px] overflow-hidden"
                      style={{
                        left: `${(slot.left / card.width) * 100}%`,
                        top: `${(slot.top / card.height) * 100}%`,
                        width: `${(slot.width / card.width) * 100}%`,
                        height: `${(slot.height / card.height) * 100}%`,
                        background: "#D9D9D9",
                      }}
                    >
                      <div className="absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]">
                        <Image
                          src={images[slot.imageIndex]?.src ?? COVER_SRC}
                          alt={images[slot.imageIndex]?.alt ?? title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 368px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Bento grid: each cell is a box; inside each box, a container wraps the image */
        <div className={`grid ${config.gridClass} ${config.rowsClass} gap-3 md:gap-4 w-full`}>
          {config.cells.map((cell, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#dce4ec] bg-white shadow-sm min-h-[120px] p-2 md:p-3 flex items-stretch justify-stretch"
              style={{
                gridColumn: `span ${cell.colSpan}`,
                gridRow: `span ${cell.rowSpan}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div className="group relative w-full h-full min-h-0 rounded-xl overflow-hidden bg-[#f0f6fa] shrink-0">
                <div className="absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]">
                  <Image
                    src={images[cell.imageIndex]?.src ?? COVER_SRC}
                    alt={images[cell.imageIndex]?.alt ?? title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Title + link */}
      <div className="flex flex-col gap-3 px-1">
        <div className="flex items-center gap-2">
          {href && href !== "#" ? (
            <Link href={href} className="hover:opacity-85 transition-opacity">
              <h2
                className="text-2xl md:text-3xl font-medium leading-tight"
                style={{
                  fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
                  fontStyle: "italic",
                  color: "var(--foreground, #233245)",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h2>
            </Link>
          ) : (
            <h2
              className="text-2xl md:text-3xl font-medium leading-tight"
              style={{
                fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
                fontStyle: "italic",
                color: "var(--foreground, #233245)",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>
          )}
          {href && href !== "#" && (
            <Link href={href} className="inline-flex shrink-0 text-[#006793] hover:opacity-80" aria-label={`View ${title}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          )}
        </div>
        {/* Chips / badges below title */}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {chips.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#dce4ec] bg-[#f0f6fa]"
                style={{
                  color: "var(--foreground, #233245)",
                  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p
        className="max-w-[720px] text-[15px] md:text-base leading-[1.65] px-1"
        style={{
          color: "var(--foreground, #233245)",
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
        }}
      >
        {summary}
      </p>

      {hasCaseStudy && href && href !== "#" && (
        <div className="pt-2 px-1">
          <CTAButton href={href} label="View detailed case study" showIcon />
        </div>
      )}
    </motion.section>
  );
}
