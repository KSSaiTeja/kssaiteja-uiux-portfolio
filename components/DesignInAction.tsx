"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WorkCard from "./WorkCard";
import CTAButton from "./CTAButton";

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

const INITIAL_COUNT = 2;
const LOAD_MORE_COUNT = 3;

export default function DesignInAction() {
  const [displayedCount, setDisplayedCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  const displayedWorks = allWorks.slice(0, displayedCount);
  const hasMoreToLoad = displayedCount < allWorks.length;
  const showViewAllButton = displayedCount >= INITIAL_COUNT + LOAD_MORE_COUNT;

  const handleLoadMore = async () => {
    if (isLoading || !hasMoreToLoad) return;
    
    setIsLoading(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDisplayedCount((prev) => Math.min(prev + LOAD_MORE_COUNT, allWorks.length));
    setIsLoading(false);
  };

  return (
    <section className="relative w-full max-w-[1048px] mx-auto flex flex-col items-center gap-10 px-4 py-20 max-xl:max-w-[730px] max-md:max-w-[358px]">
      {/* Section Title */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-libre-baskerville italic text-center text-[64px] leading-[1.2em] tracking-[-2px] max-xl:text-[40px] max-md:text-[32px]"
          style={{
            color: "rgb(0, 22, 102)",
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
          }}
        >
          Design in action
        </h2>
        <p
          className="font-dm-sans text-base leading-[1.3em] text-center max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px] max-xl:leading-[1.3em] max-md:leading-[1.4em]"
          style={{
            color: "rgb(95, 101, 102)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          }}
        >
          Crafting functional, stunning products with founders.
        </p>
      </motion.div>

      {/* Works Grid */}
      <div className="w-full max-w-[1440px]">
        {/* First Row - 2 cards centered */}
        <div className="w-full flex justify-center max-xl:flex-col max-xl:items-center max-xl:gap-16 max-md:flex-col max-md:items-center max-md:gap-[64px_16px]">
          <div className="flex flex-row justify-center items-start gap-6 max-xl:flex-col max-xl:items-center max-md:flex-col max-md:items-center">
            {displayedWorks.slice(0, INITIAL_COUNT).map((work, index) => (
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
        </div>
        
        {/* Second Row - 3 cards (after load more) */}
        {displayedWorks.length > INITIAL_COUNT && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-[100px] gap-x-6 justify-items-center mt-[100px] max-xl:flex max-xl:flex-col max-xl:items-center max-xl:gap-16 max-md:flex max-md:flex-col max-md:items-center max-md:gap-[64px_16px]">
            {displayedWorks.slice(INITIAL_COUNT).map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.4,
                  delay: (INITIAL_COUNT + index) * 0.1,
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
        )}
      </div>

      {/* Load More / View All Button */}
      {(hasMoreToLoad || showViewAllButton) && (
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {showViewAllButton ? (
            <CTAButton
              label="View All Works"
              href="/works"
              showIcon={false}
              className="pointer-events-auto"
            />
          ) : (
            <CTAButton
              label={isLoading ? "Loading..." : "Load More"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLoadMore();
              }}
              showIcon={false}
              className="pointer-events-auto"
            />
          )}
        </motion.div>
      )}
    </section>
  );
}
