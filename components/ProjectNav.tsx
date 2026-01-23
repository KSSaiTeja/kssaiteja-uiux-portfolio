"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface ProjectNavProps {
  nextProject?: {
    title: string;
    slug: string;
  };
}

export default function ProjectNav({ nextProject }: ProjectNavProps) {
  useEffect(() => {
    // Inject CSS for responsive styling to match Framer exactly
    const style = document.createElement("style");
    style.textContent = `
      /* Project Nav Section - Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .project-nav-section {
          width: 1048px !important;
          max-width: 1920px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0px !important;
        }
        .project-nav-link {
          font-size: 36px !important;
          line-height: 1.3em !important;
          letter-spacing: -0.02em !important;
          font-weight: 500 !important;
        }
        .project-nav-link-inner {
          color: rgb(255, 89, 0) !important;
          text-decoration: none !important;
          transition: color 0.3s ease, text-decoration 0.3s ease !important;
        }
        .project-nav-link-inner:hover {
          color: rgb(42, 49, 50) !important;
          text-decoration: underline !important;
        }
      }

      /* Project Nav Section - Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .project-nav-section {
          width: 730px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0px !important;
        }
        .project-nav-link {
          font-size: 36px !important;
          line-height: 1.3em !important;
          letter-spacing: -0.02em !important;
          font-weight: 500 !important;
        }
        .project-nav-link-inner {
          color: rgb(255, 89, 0) !important;
          text-decoration: none !important;
          transition: color 0.3s ease, text-decoration 0.3s ease !important;
        }
        .project-nav-link-inner:hover {
          color: rgb(42, 49, 50) !important;
          text-decoration: underline !important;
        }
      }

      /* Project Nav Section - Phone: < 810px */
      @media (max-width: 809px) {
        .project-nav-section {
          width: 358px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: flex-start !important;
          gap: 24px !important;
        }
        .project-nav-link {
          font-size: 24px !important;
          line-height: 1em !important;
          letter-spacing: -0.02em !important;
          font-weight: 500 !important;
        }
        .project-nav-link-inner {
          color: rgb(255, 89, 0) !important;
          text-decoration: none !important;
          transition: color 0.3s ease, text-decoration 0.3s ease !important;
        }
        .project-nav-link-inner:hover {
          color: rgb(42, 49, 50) !important;
          text-decoration: underline !important;
        }
        .project-nav-next {
          order: 0 !important;
        }
        .project-nav-back {
          order: 1 !important;
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
      className="project-nav-section relative w-full mx-auto flex flex-row items-center justify-between px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Next Project Link */}
      {nextProject && (
        <motion.h5
          className="project-nav-next project-nav-link font-dm-sans font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "rgb(255, 89, 0)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            margin: 0,
            padding: 0,
          }}
        >
          <Link
            href={`/works/${nextProject.slug}`}
            className="project-nav-link-inner"
          >
            {nextProject.title} →
          </Link>
        </motion.h5>
      )}

      {/* Back to All Works Link */}
      <motion.h5
        className="project-nav-back project-nav-link font-dm-sans font-medium"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          color: "rgb(255, 89, 0)",
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <Link
          href="/works"
          className="project-nav-link-inner"
        >
          ← Back to All Works
        </Link>
      </motion.h5>
    </motion.section>
  );
}
