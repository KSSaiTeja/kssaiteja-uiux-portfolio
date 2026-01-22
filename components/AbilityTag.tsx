"use client";

import { motion } from "framer-motion";

interface AbilityTagProps {
  label: string;
  rotate?: number;
  className?: string;
  initialAnimation?: {
    opacity: number;
    scale: number;
    x: number;
    y: number;
  };
  transition?: {
    bounce: number;
    delay: number;
    duration: number;
    type: "spring" | "tween" | "inertia" | "keyframes";
  };
}

export default function AbilityTag({
  label,
  rotate = 0,
  className,
  initialAnimation = { opacity: 0, scale: 0.5, x: 0, y: 0 },
  transition = { bounce: 0, delay: 0.2, duration: 0.8, type: "spring" },
}: AbilityTagProps) {
  return (
    <motion.div
      className={`flex items-center justify-center px-6 py-[14px] rounded-[70px] min-w-fit h-[52px] max-md:px-4 max-md:py-3 max-md:h-auto ${className || ""}`}
      style={{
        backgroundColor: "rgb(202, 220, 252)",
        rotate: `${rotate}deg`,
      }}
      initial={initialAnimation}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={transition}
    >
      <p
        className="font-dm-sans text-base font-medium leading-[1.5em] whitespace-pre text-center max-md:text-sm"
        style={{
          color: "rgb(0, 22, 102)",
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}
