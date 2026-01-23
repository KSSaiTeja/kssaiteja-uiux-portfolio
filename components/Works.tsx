"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import WorkCard from "./WorkCard";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  cover: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  slug?: string;
}

// Static work data - replace with CMS data later
const allWorks: WorkItem[] = [
  {
    id: "1",
    title: "Savart Investment Platform",
    category: "Fintech",
    summary: "Led end-to-end UI/UX design for B2C investment advisory mobile application serving retail investors, featuring portfolio tracking, goal-based investing, and personalized onboarding.",
    cover: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "Savart Investment Platform",
      width: 2464,
      height: 1856,
    },
    slug: "savart-investment-platform",
  },
  {
    id: "2",
    title: "Stock Research Platform",
    category: "Fintech",
    summary: "Designed entire web app for a fintech stock research platform with 5+ core modules: custom screeners, query builder, multi-watchlist management, and financial data visualisation.",
    cover: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "Stock Research Platform",
      width: 2464,
      height: 1856,
    },
    slug: "stock-research-platform",
  },
  {
    id: "3",
    title: "Marketing Pages Suite",
    category: "Marketing",
    summary: "Designed and delivered 12+ high-conversion marketing pages including homepage, pricing, PMS, enterprise, and campaign landing pages, achieving sign-off within review cycle.",
    cover: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "Marketing Pages",
      width: 2464,
      height: 1856,
    },
    slug: "marketing-pages-suite",
  },
  {
    id: "4",
    title: "AI Sports Analytics App",
    category: "Mobile",
    summary: "Designed AI-powered sports analytics mobile application supporting 10+ athletic performance tests with real-time video analysis, pose estimation feedback, and centralized reporting dashboard.",
    cover: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "AI Sports Analytics App",
      width: 2464,
      height: 1856,
    },
    slug: "ai-sports-analytics",
  },
  {
    id: "5",
    title: "Enterprise CRM Platform",
    category: "Enterprise",
    summary: "Designed enterprise CRM platform with 6 integrated modules: permissions manager, prospect/investor tracking, task management, portfolio review automation, and multi-channel communication.",
    cover: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "Enterprise CRM Platform",
      width: 2464,
      height: 1856,
    },
    slug: "enterprise-crm-platform",
  },
];

export default function Works() {
  useEffect(() => {
    // Inject CSS for responsive styling to match Framer exactly
    const style = document.createElement("style");
    style.textContent = `
      /* Works Section - Desktop: >= 1200px */
      @media (min-width: 1200px) {
        .works-section {
          width: 1048px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 40px !important;
        }
        .works-content {
          width: 100% !important;
          max-width: 720px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .works-grid {
          width: 100% !important;
          max-width: 1200px !important;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: wrap !important;
          align-items: flex-start !important;
          justify-content: center !important;
          gap: 100px 24px !important;
        }
      }

      /* Works Section - Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .works-section {
          width: 730px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 40px !important;
        }
        .works-content {
          width: 100% !important;
          max-width: 500px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .works-content h1 {
          font-size: 64px !important;
        }
        .works-content p {
          font-size: 16px !important;
          line-height: 1.3em !important;
        }
        .works-grid {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 100px 24px !important;
        }
      }

      /* Works Section - Phone: < 810px */
      @media (max-width: 809px) {
        .works-section {
          width: 358px !important;
          padding: 0px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 40px !important;
        }
        .works-content {
          width: 100% !important;
          max-width: 500px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
        }
        .works-content h1 {
          font-size: 42px !important;
        }
        .works-content p {
          font-size: 16px !important;
          line-height: 1.2em !important;
        }
        .works-grid {
          width: 100% !important;
          max-width: 500px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 64px 16px !important;
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
      className="works-section relative w-full mx-auto flex flex-col items-center gap-10 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Title and Description */}
      <motion.div
        className="works-content flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="font-libre-baskerville italic text-center leading-[1.2em] tracking-[-2px] max-xl:tracking-[-2px] max-md:tracking-[-1px]"
          style={{
            color: "rgb(0, 22, 102)",
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            fontSize: "80px",
          }}
        >
          Works
        </h1>
        <p
          className="font-dm-sans text-center max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px]"
          style={{
            color: "rgb(95, 101, 102)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "-0.2px",
            lineHeight: "1.3em",
          }}
        >
          From concept to launch — projects that helped startups grow, scale, and succeed.
        </p>
      </motion.div>

      {/* Works Grid */}
      <div className="works-grid w-full">
        {allWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="w-full max-w-[504px] max-xl:w-full max-md:w-full h-full"
          >
            <WorkCard
              title={work.title}
              category={work.category}
              summary={work.summary}
              cover={work.cover}
              href={work.slug ? `/works/${work.slug}` : "#"}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
