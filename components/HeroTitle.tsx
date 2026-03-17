"use client";

import { motion } from "framer-motion";

interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className }: HeroTitleProps) {
  return (
    <motion.h1
      className={`text-center italic text-[80px] max-xl:text-[64px] max-md:text-[42px] max-xl:tracking-[-2px] max-md:tracking-[-1px] ${className || ""}`}
      style={{
        fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
        color: "var(--color-primary, #006793)",
        fontWeight: 400,
        lineHeight: "1.2em",
      }}
      initial={{ opacity: 0.001, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        bounce: 0,
      }}
    >
      Senior UI/UX Designer
    </motion.h1>
  );
}
