"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AbilityTag from "./AbilityTag";
import StarIcon from "./StarIcon";

interface AbilityTagData {
  label: string;
  rotate: number;
  // Desktop positions
  desktop: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    transformX?: boolean; // For centering with translateX(-50%)
    transformY?: boolean; // For centering with translateY(-50%)
  };
  // Tablet positions
  tablet?: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    transformX?: boolean;
    transformY?: boolean;
  };
  // Animation
  animation: {
    x: number;
    y: number;
  };
  // Order for mobile (flex column)
  mobileOrder: number;
}

const abilityTags: AbilityTagData[] = [
  {
    label: "Framer Development",
    rotate: -4,
    desktop: { bottom: 8, left: 302 },
    tablet: { bottom: 24, left: 211 },
    animation: { x: 140, y: -150 },
    mobileOrder: 8,
  },
  {
    label: "Branding",
    rotate: 9,
    desktop: { bottom: 155, left: 838 },
    tablet: { bottom: 145, left: 655 },
    animation: { x: -180, y: -70 },
    mobileOrder: 5,
  },
  {
    label: "Visual Design",
    rotate: -15,
    desktop: { bottom: 30, left: 654 },
    tablet: { bottom: 31, left: 493 },
    animation: { x: -100, y: -150 },
    mobileOrder: 6,
  },
  {
    label: "User Interface Design",
    rotate: 7,
    desktop: { top: 257, left: 821 },
    tablet: { top: 202, left: 583 },
    animation: { x: -200, y: 0 },
    mobileOrder: 2,
  },
  {
    label: "Product Design",
    rotate: -10,
    desktop: { top: 14, left: "47%", transformX: true },
    tablet: { top: 24, left: "50%", transformX: true },
    animation: { x: 50, y: 200 },
    mobileOrder: 0,
  },
  {
    label: "User Experience Design",
    rotate: -9,
    desktop: { top: 77, left: 690 },
    tablet: { top: 74, left: 509 },
    animation: { x: -100, y: 200 },
    mobileOrder: 1,
  },
  {
    label: "User Research",
    rotate: -7,
    desktop: { top: "45%", left: 3, transformY: true },
    tablet: { top: 221, left: 25 },
    animation: { x: 200, y: 0 },
    mobileOrder: 4,
  },
  {
    label: "Pitch Deck Design",
    rotate: 3,
    desktop: { bottom: 125, left: 34 },
    tablet: { bottom: 127, left: 26 },
    animation: { x: 180, y: -100 },
    mobileOrder: 7,
  },
  {
    label: "Design Systems",
    rotate: 8,
    desktop: { top: 110, left: 106 },
    tablet: { top: 77, left: 111 },
    animation: { x: 180, y: 150 },
    mobileOrder: 3,
  },
];

export default function Ability() {
  useEffect(() => {
    // Inject responsive styles matching Framer exactly
    const styleId = "ability-responsive-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .ability-section {
          width: 810px !important;
          height: 576px !important;
        }
        .ability-tags-container {
          bottom: 0 !important;
          height: unset !important;
          left: 0 !important;
          right: 0 !important;
          top: 0 !important;
          width: unset !important;
        }
        .ability-content {
          left: 50% !important;
          top: 49% !important;
          width: 100% !important;
        }
        ${abilityTags.map((tag, i) => {
          if (!tag.tablet) return "";
          let rules = `.ability-tag-${i} {`;
          if (tag.tablet.top !== undefined) {
            rules += `top: ${typeof tag.tablet.top === "number" ? `${tag.tablet.top}px` : tag.tablet.top} !important;`;
          }
          if (tag.tablet.bottom !== undefined) {
            rules += `bottom: ${typeof tag.tablet.bottom === "number" ? `${tag.tablet.bottom}px` : tag.tablet.bottom} !important;`;
          }
          if (tag.tablet.left !== undefined) {
            rules += `left: ${typeof tag.tablet.left === "number" ? `${tag.tablet.left}px` : tag.tablet.left} !important;`;
          }
          if (tag.tablet.right !== undefined) {
            rules += `right: ${typeof tag.tablet.right === "number" ? `${tag.tablet.right}px` : tag.tablet.right} !important;`;
          }
          if (tag.tablet.transformX && tag.tablet.transformY) {
            rules += `transform: translateX(-50%) translateY(-50%) !important;`;
          } else if (tag.tablet.transformX) {
            rules += `transform: translateX(-50%) !important;`;
          } else if (tag.tablet.transformY) {
            rules += `transform: translateY(-50%) !important;`;
          } else if (tag.desktop.transformX || tag.desktop.transformY) {
            rules += `transform: none !important;`;
          }
          rules += "}";
          return rules;
        }).join("\n        ")}
      }
      /* Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .ability-section {
          width: 1060px !important;
          height: 687px !important;
        }
      }
      /* Tablet: Content max-width and StarIcon size */
      @media (min-width: 810px) and (max-width: 1199px) {
        .ability-content {
          max-width: 420px !important;
        }
        .ability-star-icon {
          width: 125px !important;
          height: 125px !important;
        }
      }
      /* Phone: StarIcon size */
      @media (max-width: 809px) {
        .ability-star-icon {
          width: 125px !important;
          height: 125px !important;
        }
      }
      /* Phone: < 810px */
      @media (max-width: 809px) {
        .ability-section {
          width: 358px !important;
          max-width: 100% !important;
          min-width: 0 !important;
          height: auto !important;
          min-height: 893px !important;
          max-height: none !important;
          display: flex !important;
          flex-direction: column !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          align-content: center !important;
          justify-content: center !important;
          gap: 40px !important;
          padding: 0 !important;
          overflow: visible !important;
          margin-left: auto !important;
          margin-right: auto !important;
          box-sizing: border-box !important;
        }
        @media (max-width: 357px) {
          .ability-section {
            width: 100% !important;
            padding: 0 16px !important;
          }
        }
        .ability-tags-container {
          position: relative !important;
          left: unset !important;
          top: unset !important;
          transform: none !important;
          width: 100% !important;
          height: min-content !important;
          min-height: auto !important;
          bottom: auto !important;
          right: auto !important;
          display: flex !important;
          flex-direction: column !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          align-content: center !important;
          justify-content: center !important;
          gap: 24px !important;
          order: 1 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        .ability-content {
          position: relative !important;
          left: unset !important;
          top: unset !important;
          transform: none !important;
          order: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          flex: none !important;
          height: min-content !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
          box-sizing: border-box !important;
        }
        .ability-content > div:first-child {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 0 !important;
          box-sizing: border-box !important;
        }
        .ability-tag-0, .ability-tag-1, .ability-tag-2, .ability-tag-3, .ability-tag-4, .ability-tag-5, .ability-tag-6, .ability-tag-7, .ability-tag-8 {
          position: relative !important;
          top: auto !important;
          bottom: auto !important;
          left: auto !important;
          right: auto !important;
          transform: none !important;
          width: auto !important;
          height: auto !important;
          flex: none !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <section className="ability-section relative w-full max-w-[1060px] mx-auto h-[687px] overflow-visible px-4">
      {/* Tags Container - Desktop/Tablet: Absolute positioned container, Mobile: Flex Column */}
      <div
        className="ability-tags-container absolute"
        style={{
          left: "calc(50% - 1034px / 2)",
          top: "calc(50.072780203784596% - 652px / 2)",
          width: "1034px",
          height: "652px",
        }}
      >
        {abilityTags.map((tag, index) => {
          // Build style object for desktop
          const desktopStyle: React.CSSProperties = {
            position: "absolute",
          };
          
          if (tag.desktop.top !== undefined) {
            desktopStyle.top = typeof tag.desktop.top === "number" ? `${tag.desktop.top}px` : tag.desktop.top;
          }
          if (tag.desktop.bottom !== undefined) {
            desktopStyle.bottom = typeof tag.desktop.bottom === "number" ? `${tag.desktop.bottom}px` : tag.desktop.bottom;
          }
          if (tag.desktop.left !== undefined) {
            desktopStyle.left = typeof tag.desktop.left === "number" ? `${tag.desktop.left}px` : tag.desktop.left;
          }
          if (tag.desktop.right !== undefined) {
            desktopStyle.right = typeof tag.desktop.right === "number" ? `${tag.desktop.right}px` : tag.desktop.right;
          }
          
          let transform = "";
          if (tag.desktop.transformX) transform += "translateX(-50%)";
          if (tag.desktop.transformY) transform += (transform ? " " : "") + "translateY(-50%)";
          if (transform) desktopStyle.transform = transform;

          return (
            <motion.div
              key={tag.label}
              className={`ability-tag-${index} absolute`}
              style={{
                ...desktopStyle,
                order: tag.mobileOrder,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <AbilityTag
                label={tag.label}
                rotate={tag.rotate}
                initialAnimation={{
                  opacity: 0,
                  scale: 0.5,
                  x: tag.animation.x,
                  y: tag.animation.y,
                }}
                transition={{
                  bounce: 0,
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Content Section - Centered */}
      <motion.div
        className="ability-content absolute left-1/2 top-[51%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 w-full max-w-[500px] max-md:relative max-md:left-auto max-md:top-auto max-md:translate-x-0 max-md:translate-y-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {/* Star Icon & Title Container */}
        <div className="flex flex-col items-center justify-center gap-0 w-full">
          <StarIcon className="ability-star-icon mb-0" />
          <h2
            className="font-libre-baskerville italic text-center text-[64px] leading-[1.2em] tracking-[-2px] max-xl:text-[40px] max-md:text-[32px] mt-0"
            style={{
              color: "var(--color-primary, #006793)",
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            What I bring to the table
          </h2>
        </div>

        {/* Description */}
        <p
          className="font-dm-sans text-[20px] leading-[1.3em] text-center max-w-full max-xl:text-base max-xl:leading-[1.3em] max-md:text-base max-md:leading-[1.2em]"
          style={{
            color: "var(--foreground, #233245)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          }}
        >
          Digital experiences that engage users and help your startup stand out
          from day one
        </p>
      </motion.div>
    </section>
  );
}
