"use client";

import { motion } from "framer-motion";
import TelescopeIcon from "./TelescopeIcon";

interface SectionTitleProps {
  title?: string;
  className?: string;
}

export default function SectionTitle({
  title = "Sneak peak of my works",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-0 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
    >
      <TelescopeIcon />
      <motion.h2
        className="text-center italic max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px] text-[28px] max-xl:text-[22px] max-md:text-[20px]"
        style={{
          fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "-0.04em",
          lineHeight: "1.4em",
          color: "rgb(0, 22, 102)",
        }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
