"use client";

import { motion } from "framer-motion";

interface HeroTaglineProps {
  className?: string;
}

export default function HeroTagline({ className }: HeroTaglineProps) {
  return (
    <motion.p
      className={`text-center text-[20px] max-xl:text-[16px] max-md:text-[16px] max-xl:leading-[1.3em] max-md:leading-[1.2em] ${className}`}
      style={{
        fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
        color: "rgb(42, 49, 50)",
        fontWeight: 400,
        letterSpacing: "-0.2px",
      }}
      initial={{ opacity: 0.001, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 1.2,
        type: "spring",
        bounce: 0,
      }}
    >
      startups can count on!
    </motion.p>
  );
}
