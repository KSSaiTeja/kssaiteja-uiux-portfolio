"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

interface PlaygroundItem {
  id: string;
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  alt?: string;
  videoSrc?: string; // For video items
}

// Placeholder gallery items - replace with your actual data
// These match the exact sizes from Framer component
const galleryItems: PlaygroundItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600",
    width: 333,
    height: 451,
    alt: "Playground item",
  },
  {
    id: "2",
    type: "video",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600", // poster
    videoSrc: "https://framerusercontent.com/assets/uKDJ9GBdkMALmEtQkrvzdXZx2Y.mp4",
    width: 399,
    height: 284,
    alt: "Playground video",
  },
  {
    id: "3",
    type: "video",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600", // poster
    videoSrc: "https://framerusercontent.com/assets/KCZrKeEtCEr5wmyEoIbilpZFYA.mp4",
    width: 259,
    height: 316,
    alt: "Playground video",
  },
  {
    id: "4",
    type: "image",
    src: "https://framerusercontent.com/images/sOV9oVng8G6eTcJz9mcCnJarYGE.jpg?width=1500&height=2100",
    width: 288,
    height: 405,
    alt: "Playground item",
  },
  {
    id: "5",
    type: "video",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600", // poster
    videoSrc: "https://framerusercontent.com/assets/P9y5GffXykvrob1fAxYLBunq4.mp4",
    width: 396,
    height: 217,
    alt: "Playground video",
  },
  {
    id: "6",
    type: "image",
    src: "https://framerusercontent.com/images/oJrMVtzVlf3OpfuM7qW1oEnF0.jpg?width=1500&height=2100",
    width: 188,
    height: 260,
    alt: "Playground item",
  },
  {
    id: "7",
    type: "video",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600", // poster
    videoSrc: "https://framerusercontent.com/assets/tSBfItHTMFDFhMixEPJ4uICmQ.mp4",
    width: 285,
    height: 369,
    alt: "Playground video",
  },
  {
    id: "8",
    type: "image",
    src: "https://framerusercontent.com/images/Jlmy9GssymSXpimzy3lhEtHpHQ.jpg?width=1232&height=928",
    width: 335,
    height: 252,
    alt: "Playground item",
  },
  {
    id: "9",
    type: "image",
    src: "https://framerusercontent.com/images/oFUiDnR7bId95hPEyF8rVPUs4.jpg?width=1080&height=1350",
    width: 334,
    height: 397,
    alt: "Playground item",
  },
  {
    id: "10",
    type: "image",
    src: "https://framerusercontent.com/images/XKUTqz5sQsbbsadODcJrEXJ0Q.jpg?width=1800&height=1280",
    width: 334,
    height: 250,
    alt: "Playground item",
  },
  {
    id: "11",
    type: "image",
    src: "https://framerusercontent.com/images/o0voYCab2y2stJEC08ESTcez8.jpg?width=851&height=315",
    width: 522,
    height: 193,
    alt: "Playground item",
  },
  {
    id: "12",
    type: "image",
    src: "https://framerusercontent.com/images/PyXVyZeZTk1DWyXOZVOsoRpAT5A.jpg?width=1260&height=1800",
    width: 290,
    height: 414,
    alt: "Playground item",
  },
  {
    id: "13",
    type: "image",
    src: "https://framerusercontent.com/images/TNEBwlhYsp4aDvP2EiWJ6AnWDU.jpg?width=1440&height=1440",
    width: 273,
    height: 273,
    alt: "Playground item",
  },
  {
    id: "14",
    type: "image",
    src: "https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=1800&height=1675",
    width: 334,
    height: 227,
    alt: "Playground item",
  },
  {
    id: "15",
    type: "image",
    src: "https://framerusercontent.com/images/Hhqb6e3FMAW5LJAIbJ1sxl6Dnhg.jpg?width=1080&height=1350",
    width: 334,
    height: 429,
    alt: "Playground item",
  },
];

export default function Playground() {
  useEffect(() => {
    // Inject CSS for responsive styling to match Framer exactly
    const style = document.createElement("style");
    style.textContent = `
      /* Playground Section - Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .playground-section {
          width: 1048px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 100px !important;
        }
        .playground-gallery {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 40px !important;
        }
        .playground-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .playground-title, .playground-description {
          max-width: 720px !important;
        }
        .playground-gallery-grid {
          width: 100% !important;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: wrap !important;
          align-items: flex-end !important;
          justify-content: center !important;
          gap: 100px 32px !important;
        }
        .playground-gallery-item {
          border-radius: 8px !important;
        }
        .playground-cta {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
          padding: 16px !important;
        }
        .playground-title {
          font-size: 80px !important;
        }
        .playground-description {
          font-size: 20px !important;
        }
        .playground-cta-title {
          font-size: 28px !important;
          letter-spacing: -0.04em !important;
          line-height: 1.4em !important;
        }
      }

      /* Playground Section - Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .playground-section {
          width: 730px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 100px !important;
        }
        .playground-gallery {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 40px !important;
        }
        .playground-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .playground-title, .playground-description {
          max-width: 500px !important;
        }
        .playground-gallery-grid {
          width: 100% !important;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: wrap !important;
          align-items: flex-end !important;
          justify-content: center !important;
          gap: 100px 32px !important;
        }
        .playground-gallery-item {
          border-radius: 8px !important;
        }
        .playground-cta {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
          padding: 16px !important;
        }
        .playground-title {
          font-size: 64px !important;
        }
        .playground-description {
          font-size: 16px !important;
        }
        .playground-cta-title {
          font-size: 22px !important;
          letter-spacing: -0.04em !important;
          line-height: 1.4em !important;
        }
      }

      /* Playground Section - Phone: < 810px */
      @media (max-width: 809px) {
        .playground-section {
          width: 358px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 100px !important;
        }
        .playground-gallery {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 40px !important;
        }
        .playground-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .playground-title, .playground-description {
          max-width: 500px !important;
        }
        .playground-gallery-grid {
          width: 100% !important;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: wrap !important;
          align-items: flex-end !important;
          justify-content: center !important;
          gap: 100px 32px !important;
        }
        .playground-gallery-item {
          border-radius: 8px !important;
        }
        .playground-cta {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
          padding: 16px !important;
        }
        .playground-title {
          font-size: 42px !important;
        }
        .playground-description {
          font-size: 16px !important;
        }
        .playground-cta-title {
          font-size: 20px !important;
          letter-spacing: -0.04em !important;
          line-height: 1.4em !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.section
      className="playground-section relative w-full mx-auto flex flex-col items-center gap-20 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Gallery Section */}
      <div className="playground-gallery flex flex-col items-center gap-10 w-full">
        {/* Heading */}
        <div className="playground-heading flex flex-col items-center gap-4 w-full">
          <motion.h1
            className="playground-title font-libre-baskerville italic text-center w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              letterSpacing: "-2px",
              lineHeight: "1.2em",
              color: "var(--color-primary, #006793)",
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            Playground
          </motion.h1>
          <motion.p
            className="playground-description font-dm-sans text-center w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              letterSpacing: "-0.2px",
              lineHeight: "1.3em",
              color: "var(--foreground, #233245)",
              fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            }}
          >
            Experimental designs and side projects crafted to push boundaries for emerging ventures.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="playground-gallery-grid w-full">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="playground-gallery-item relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
                delay: index * 0.1,
              }}
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
                flex: "none",
                borderRadius: "8px",
              }}
            >
              {item.type === "video" ? (
                <video
                  src={item.videoSrc}
                  poster={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt || "Playground item"}
                  width={item.width * 2}
                  height={item.height * 2}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="playground-cta flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4
          className="playground-cta-title font-libre-baskerville italic text-center"
          style={{
            letterSpacing: "-0.04em",
            lineHeight: "1.4em",
            color: "var(--color-primary, #006793)",
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
          }}
        >
          Love what you see?
        </h4>
        <CTAButton
          href="#contact"
          label="Let's connect!"
          showIcon={false}
        />
      </motion.div>
    </motion.section>
  );
}
