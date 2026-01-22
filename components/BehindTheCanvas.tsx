"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import ComputerIcon from "./ComputerIcon";
import CTAButton from "./CTAButton";
import BehindTheCanvasImage from "./BehindTheCanvasImage";

interface GalleryImage {
  src: string;
  alt?: string;
  caption: string;
  width: number;
  height: number;
  rotate: number;
  hoverRotate: number; // Specific hover rotation
  // Desktop positions
  desktop: {
    left: number | string;
    top: number | string;
  };
  // Tablet positions
  tablet: {
    left: number | string;
    top: number | string;
    width: number;
    height: number;
  };
  // Phone positions
  phone: {
    left: number | string;
    top: number | string;
    width: number;
    height: number;
  };
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://framerusercontent.com/images/peS3xlMBI5nrAInAViMhLPV75E.jpg?width=1800&height=1423",
    caption: "A cat person",
    width: 189,
    height: 242,
    rotate: -3,
    hoverRotate: 2,
    desktop: {
      left: 671,
      top: "calc(48.55072463768118% - 242px / 2)",
    },
    tablet: {
      left: 469,
      top: "calc(45.52845528455286% - 215px / 2)",
      width: 167,
      height: 215,
    },
    phone: {
      left: 231,
      top: "calc(52.17391304347828% - 106px / 2)",
      width: 83,
      height: 106,
    },
  },
  {
    src: "https://framerusercontent.com/images/GTwC3pibWEsTjab4hIEkLaVFfQ.jpg?width=1800&height=1552",
    caption: "Enjoy hiking",
    width: 189,
    height: 242,
    rotate: 4,
    hoverRotate: -2,
    desktop: {
      left: 116,
      top: "calc(48.913043478260896% - 242px / 2)",
    },
    tablet: {
      left: 33,
      top: "calc(48.37398373983742% - 215px / 2)",
      width: 167,
      height: 215,
    },
    phone: {
      left: 16,
      top: "calc(48.69565217391307% - 107px / 2)",
      width: 83,
      height: 107,
    },
  },
  {
    src: "https://framerusercontent.com/images/SHIa3uWu2UD2oI3xk2CjDiAHAc.png?scale-down-to=512",
    caption: "Hi, it's me :)",
    width: 187,
    height: 240,
    rotate: -2,
    hoverRotate: 1,
    desktop: {
      left: "calc(50.103305785123986% - 187px / 2)",
      top: "calc(51.086956521739154% - 240px / 2)",
    },
    tablet: {
      left: "calc(50.8982035928144% - 166px / 2)",
      top: "calc(49.18699186991872% - 213px / 2)",
      width: 166,
      height: 213,
    },
    phone: {
      left: "calc(50.30674846625769% - 82px / 2)",
      top: "calc(53.04347826086959% - 105px / 2)",
      width: 82,
      height: 105,
    },
  },
];

export default function BehindTheCanvas() {
  useEffect(() => {
    // Inject responsive styles matching Framer exactly
    const styleId = "behind-the-canvas-responsive-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* Base styles - Desktop */
      .btc-section {
        width: 1048px;
        padding: 80px 40px;
        gap: 40px;
        height: min-content;
      }
      .btc-gallery-container {
        height: 276px;
        width: 968px;
      }
      .btc-content {
        gap: 40px;
        width: 100%;
      }
      .btc-title-container {
        gap: 16px;
        width: 100%;
      }
      .btc-title-wrapper {
        gap: 0px;
        width: 100%;
      }
      
      /* Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .btc-section {
          width: 730px !important;
          padding: 64px 40px !important;
          gap: 48px !important;
          height: min-content !important;
        }
        .btc-computer-icon {
          width: 125px !important;
          height: 125px !important;
        }
        .btc-title {
          max-width: 500px !important;
        }
        .btc-subtitle, .btc-description {
          max-width: 420px !important;
        }
        .btc-bg-pattern {
          order: 0 !important;
        }
        .btc-content {
          order: 1 !important;
          gap: 40px !important;
        }
        .btc-gallery-wrapper {
          order: 2 !important;
        }
        .btc-gallery-container {
          height: 246px !important;
          width: 668px !important;
          margin: 0 auto !important;
        }
        ${galleryImages.map((img, i) => {
          let rules = `.btc-gallery-image-${i} {`;
          rules += `left: ${typeof img.tablet.left === "number" ? `${img.tablet.left}px` : img.tablet.left} !important;`;
          rules += `top: ${typeof img.tablet.top === "number" ? `${img.tablet.top}px` : img.tablet.top} !important;`;
          rules += `width: ${img.tablet.width}px !important;`;
          rules += `height: ${img.tablet.height}px !important;`;
          rules += "}";
          return rules;
        }).join("\n        ")}
      }
      
      /* Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .btc-section {
          width: 1048px !important;
          padding: 80px 40px !important;
          gap: 40px !important;
        }
        .btc-gallery-container {
          height: 276px !important;
          width: 968px !important;
          margin: 0 auto !important;
        }
        ${galleryImages.map((img, i) => {
          let rules = `.btc-gallery-image-${i} {`;
          rules += `width: ${img.width}px !important;`;
          rules += `height: ${img.height}px !important;`;
          rules += "}";
          return rules;
        }).join("\n        ")}
      }
      
      /* Phone: < 810px */
      @media (max-width: 809px) {
        .btc-section {
          width: 358px !important;
          max-width: 100% !important;
          padding: 48px 16px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 40px !important;
          height: min-content !important;
        }
        .btc-computer-icon {
          width: 125px !important;
          height: 125px !important;
        }
        .btc-title {
          max-width: 500px !important;
        }
        .btc-subtitle, .btc-description {
          max-width: 420px !important;
        }
        .btc-bg-pattern {
          order: 0 !important;
        }
        .btc-content {
          order: 1 !important;
          gap: 40px !important;
        }
        .btc-gallery-wrapper {
          order: 2 !important;
          gap: 0px !important;
          padding: 6px 0px !important;
        }
        .btc-gallery-container {
          height: 115px !important;
          width: 326px !important;
          margin: 0 auto !important;
        }
        ${galleryImages.map((img, i) => {
          let rules = `.btc-gallery-image-${i} {`;
          rules += `left: ${typeof img.phone.left === "number" ? `${img.phone.left}px` : img.phone.left} !important;`;
          rules += `top: ${typeof img.phone.top === "number" ? `${img.phone.top}px` : img.phone.top} !important;`;
          rules += `width: ${img.phone.width}px !important;`;
          rules += `height: ${img.phone.height}px !important;`;
          rules += "}";
          return rules;
        }).join("\n        ")}
      }
      
      /* Extra small phones */
      @media (max-width: 357px) {
        .btc-section {
          width: 100% !important;
          padding: 48px 16px !important;
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
    <section
      className="btc-section relative mx-auto flex flex-col items-center justify-center rounded-[32px] max-md:rounded-[20px]"
      style={{
        backgroundColor: "rgb(42, 49, 50)",
      }}
    >
      {/* Background Pattern */}
      <div className="btc-bg-pattern absolute bottom-0 left-0 right-0 h-[531px] overflow-hidden z-0 pointer-events-none">
        <div className="absolute bottom-[-271px] left-[-653px] right-[-653px] top-0 opacity-20 pointer-events-none">
          <Image
            src="https://framerusercontent.com/images/5bSgVOjwR5iEdfk692ONl843us.svg?width=2046&height=729"
            alt=""
            width={2046}
            height={729}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center center",
            }}
            unoptimized
            priority={false}
          />
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="btc-content relative z-10 flex flex-col items-center justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title & Subtitle Container */}
        <div className="btc-title-container flex flex-col items-center justify-center w-full">
          {/* Title Section */}
          <div className="btc-title-wrapper flex flex-col items-center justify-center w-full">
            <ComputerIcon className="btc-computer-icon mb-0 w-[100px]" />
            <h2
              className="btc-title font-libre-baskerville italic text-center text-[64px] leading-[1.2em] tracking-[-2px] max-xl:text-[40px] max-md:text-[32px] mt-0 max-w-[720px]"
              style={{
                color: "rgb(202, 220, 252)",
                fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
              }}
            >
              Behind the canvas
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className="btc-subtitle font-dm-sans text-[20px] leading-[1.3em] text-center max-w-[500px] max-xl:text-base max-xl:leading-[1.3em] max-md:text-base max-md:leading-[1.2em]"
            style={{
              color: "rgb(202, 220, 252)",
              fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            }}
          >
            Finally, meet the designer passionate about helping startups succeed
            – a quick peek into my world
          </p>
        </div>

        {/* Description */}
        <p
          className="btc-description font-dm-sans text-base leading-[1.3em] text-center max-w-[500px] max-xl:max-w-[420px] max-xl:leading-[1.3em] max-md:leading-[1.4em]"
          style={{
            color: "rgb(235, 234, 230)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            letterSpacing: "-0.1px",
          }}
        >
          I help startups turn big ideas into designs that actually work.
          Whether you need an MVP that converts or a pitch deck that closes
          funding, I focus on results over pretty pixels.
          <br />
          When I'm not designing, you'll find me stargazing or hunting for the
          perfect coffee. I believe great design should solve real problems
          fast—no endless revisions, no designer ego, just stuff that works.
        </p>

        {/* CTA Button */}
        <CTAButton
          href="https://framer.link/CwLLucQ?utm_source=product-demo&utm_medium=button&utm_campaign=btc-section"
          label="Remix for Free!"
          showIcon={false}
        />
      </motion.div>

      {/* Gallery Section */}
      <div className="btc-gallery-wrapper flex flex-col items-center justify-center w-full overflow-visible">
        <div className="btc-gallery-container relative overflow-visible">
          {galleryImages.map((img, index) => {
            // Build style object for desktop
            const desktopStyle: React.CSSProperties = {
              position: "absolute",
              left: typeof img.desktop.left === "number" ? `${img.desktop.left}px` : img.desktop.left,
              top: typeof img.desktop.top === "number" ? `${img.desktop.top}px` : img.desktop.top,
            };

            // Hover animation based on image index - smooth spring transition
            const hoverAnimation = index === 0 
              ? { 
                  scale: 1.14, 
                  rotate: 2, 
                  transition: { 
                    type: "spring" as const, 
                    bounce: 0, 
                    duration: 0.45,
                    stiffness: 300,
                    damping: 25,
                  } 
                }
              : index === 1
              ? { 
                  scale: 1.14, 
                  rotate: -2, 
                  transition: { 
                    type: "spring" as const, 
                    bounce: 0, 
                    duration: 0.45,
                    stiffness: 300,
                    damping: 25,
                  } 
                }
              : { 
                  scale: 1.14, 
                  rotate: 1, 
                  transition: { 
                    type: "spring" as const, 
                    bounce: 0, 
                    duration: 0.45,
                    stiffness: 300,
                    damping: 25,
                  } 
                };

            // Initial animation based on image index
            const initialAnimation = index === 0
              ? { opacity: 0, x: -150 }
              : index === 1
              ? { opacity: 0, x: 150 }
              : { opacity: 0, x: 0 };

            return (
              <motion.div
                key={index}
                className={`btc-gallery-image-${index} absolute`}
                style={{
                  ...desktopStyle,
                  rotate: `${img.rotate}deg`,
                  willChange: "transform",
                  transformOrigin: "center center",
                }}
                initial={initialAnimation}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  delay: index === 0 ? 0 : index === 1 ? 0.2 : 0,
                  duration: 0.8,
                }}
                whileHover={hoverAnimation}
              >
                <BehindTheCanvasImage
                  src={img.src}
                  alt={img.alt || img.caption}
                  caption={img.caption}
                  width={img.width}
                  height={img.height}
                  rotate={0}
                  hoverRotate={0}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
