"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface ProjectDetailsProps {
  title: string;
  summary: string;
  category?: string;
  coverImage: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  content?: string | React.ReactNode; // HTML string or React component
}

export default function ProjectDetails({
  title,
  summary,
  category,
  coverImage,
  content,
}: ProjectDetailsProps) {
  useEffect(() => {
    // Inject CSS for responsive styling to match Framer exactly
    const style = document.createElement("style");
    style.textContent = `
      /* Project Details Section - Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .project-details-section {
          width: 1048px !important;
          max-width: 1920px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 100px !important;
        }
        .project-info {
          width: 100% !important;
          max-width: 1048px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 32px !important;
        }
        .project-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .project-title, .project-summary {
          max-width: 720px !important;
        }
        .project-category {
          max-width: 720px !important;
        }
        .project-image {
          aspect-ratio: 1.7466666666666666 / 1 !important;
          height: 600px !important;
        }
        .project-content {
          max-width: 1200px !important;
        }
        .project-title {
          font-size: 64px !important;
        }
        .project-summary {
          font-size: 20px !important;
        }
        .project-content p {
          margin-bottom: 32px !important;
        }
      }

      /* Project Details Section - Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .project-details-section {
          width: 730px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 48px !important;
        }
        .project-info {
          width: 100% !important;
          max-width: 1048px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 32px !important;
        }
        .project-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .project-title, .project-summary, .project-category {
          max-width: 500px !important;
        }
        .project-image {
          aspect-ratio: 1.7466666666666666 / 1 !important;
          height: 418px !important;
        }
        .project-content {
          max-width: 1200px !important;
        }
        .project-title {
          font-size: 40px !important;
        }
        .project-summary {
          font-size: 16px !important;
        }
        .project-content p {
          margin-bottom: 24px !important;
        }
      }

      /* Project Details Section - Phone: < 810px */
      @media (max-width: 809px) {
        .project-details-section {
          width: 358px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 48px !important;
        }
        .project-info {
          width: 100% !important;
          max-width: 1048px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 32px !important;
        }
        .project-heading {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .project-title, .project-summary, .project-category {
          max-width: 500px !important;
        }
        .project-image {
          aspect-ratio: 1.7466666666666666 / 1 !important;
          height: 205px !important;
        }
        .project-content {
          max-width: 1200px !important;
        }
        .project-title {
          font-size: 32px !important;
        }
        .project-summary {
          font-size: 16px !important;
        }
        .project-content p {
          margin-bottom: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.article
      className="project-details-section relative w-full mx-auto flex flex-col items-center gap-20 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Info */}
      <motion.div
        className="project-info flex flex-col items-center gap-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Heading */}
        <div className="project-heading flex flex-col items-center gap-4 w-full">
          {/* Title */}
          <motion.h2
            className="project-title font-libre-baskerville italic text-center w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              letterSpacing: "-2px",
              lineHeight: "1.2em",
              color: "var(--foreground, #233245)",
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            {title}
          </motion.h2>

          {/* Summary */}
          <motion.p
            className="project-summary font-dm-sans text-center w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              letterSpacing: "-0.2px",
              lineHeight: "1.3em",
              color: "var(--color-muted, #5a6b73)",
              fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            }}
          >
            {summary}
          </motion.p>
        </div>

        {/* Category Badge */}
        {category && (
          <motion.div
            className="project-category flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p
              className="font-dm-sans text-base font-medium leading-[1.5em] whitespace-pre"
              style={{
                color: "#FAFCFD",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              <mark
                className="px-[14px] py-[5px] rounded-[20px]"
                style={{
                  backgroundColor: "var(--color-primary, #006793)",
                  color: "#FAFCFD",
                  padding: "5px 14px 6px 14px",
                  borderRadius: "20px",
                }}
              >
                {category}
              </mark>
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Cover Image */}
      <motion.div
        className="project-image relative w-full rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src={coverImage.src}
          alt={coverImage.alt || title}
          width={coverImage.width || 1920}
          height={coverImage.height || 1100}
          className="w-full h-full object-cover"
          sizes="(max-width: 809px) 358px, (max-width: 1199px) 730px, 1048px"
          priority
        />
      </motion.div>

      {/* Content */}
      {content && (
        <motion.div
          className="project-content w-full"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {typeof content === "string" ? (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "1.3em",
                color: "var(--foreground, #233245)",
                letterSpacing: "-0.1px",
              }}
            />
          ) : (
            <div
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "1.3em",
                color: "var(--foreground, #233245)",
                letterSpacing: "-0.1px",
              }}
            >
              {content}
            </div>
          )}
        </motion.div>
      )}
    </motion.article>
  );
}
