"use client";

import { motion } from "framer-motion";
import { ALL_WORKS } from "@/data/works";
import WorkBentoSection from "./WorkBentoSection";
import CTAButton from "./CTAButton";

const HOMEPAGE_PROJECT_COUNT = 3;

interface DesignInActionProps {
  /** On homepage: show 3 bento sections + "View all works" */
  homepage?: boolean;
}

export default function DesignInAction({ homepage = false }: DesignInActionProps) {
  const works = ALL_WORKS.slice(0, HOMEPAGE_PROJECT_COUNT);

  return (
    <section className="relative w-full max-w-[1048px] mx-auto flex flex-col items-center gap-10 px-4 py-20 max-xl:max-w-[730px] max-md:max-w-[358px]">
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
            color: "var(--color-primary, #006793)",
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
          }}
        >
          {homepage ? "Selected work" : "Design in action"}
        </h2>
        <p
          className="font-dm-sans text-base leading-[1.3em] text-center max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px]"
          style={{
            color: "var(--color-muted, #5a6b73)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          }}
        >
          {homepage
            ? "Problem, solution, and impact — proof I can ship."
            : "Crafting functional, stunning products with founders."}
        </p>
      </motion.div>

      {/* One bento grid per project (3 on homepage) */}
      <div className="w-full flex flex-col gap-4">
        {works.map((work, index) => (
          <WorkBentoSection
            key={work.id}
            id={work.slug}
            title={work.title}
            category={work.category}
            summary={work.summary}
            bentoImages={work.bentoImages}
            href={`/works/${work.slug}`}
            hasCaseStudy={work.hasCaseStudy}
            layout={work.layout}
            chips={work.chips}
            index={index}
          />
        ))}
      </div>

      {ALL_WORKS.length > HOMEPAGE_PROJECT_COUNT && (
        <motion.div
          className="flex items-center justify-center w-full mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CTAButton label="View all works" href="/works" showIcon={false} className="pointer-events-auto" />
        </motion.div>
      )}
    </section>
  );
}
