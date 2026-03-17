"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

export default function AnimatedText({
  text = "I'm is K S Sai Teja",
  className,
}: AnimatedTextProps) {
  const characters = text.split("");

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "normal",
            color: "var(--foreground, #233245)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
