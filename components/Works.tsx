"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { ALL_WORKS } from "@/data/works";
import WorkBentoSection from "./WorkBentoSection";

export default function Works() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .works-section { width: 100%; max-width: 1048px; margin-left: auto; margin-right: auto; }
      .works-content h1 { font-size: 80px; }
      @media (max-width: 1199px) { .works-content h1 { font-size: 64px !important; } }
      @media (max-width: 809px) { .works-content h1 { font-size: 42px !important; } }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <motion.section
      className="works-section flex flex-col items-center gap-4 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="works-content flex flex-col items-center gap-4 w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="font-libre-baskerville italic leading-[1.2em] tracking-[-2px]"
          style={{
            color: "var(--color-primary, #006793)",
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
          }}
        >
          Work showcase
        </h1>
        <p
          className="font-dm-sans max-w-[720px] text-xl max-md:text-base"
          style={{
            color: "var(--color-muted, #5a6b73)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            letterSpacing: "-0.2px",
            lineHeight: "1.3em",
          }}
        >
          My craft, condensed into the products I am proud of.
        </p>
      </motion.div>

      {/* One bento grid section per project */}
      <div className="w-full flex flex-col">
        {ALL_WORKS.map((work, index) => (
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
    </motion.section>
  );
}
