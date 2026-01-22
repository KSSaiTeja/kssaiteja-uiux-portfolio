"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface CTAButtonProps {
  href?: string;
  label?: string;
  showIcon?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function CTAButton({
  href = "#",
  label = "Get Started",
  showIcon = true,
  className,
  onClick,
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.001, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 1.4,
        type: "spring",
        bounce: 0,
      }}
    >
      <Link
        href={href}
        className="flex flex-row items-center justify-center gap-2 cursor-pointer h-12 px-6 rounded-full no-underline relative"
        style={{
          backgroundColor: isPressed
            ? "rgb(42, 49, 50)"
            : isHovered
            ? "rgb(95, 101, 102)"
            : "rgb(255, 89, 0)",
          transition: "background-color 0.4s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick}
      >
        <motion.span
          className="relative whitespace-pre"
          style={{
            fontFamily: 'var(--font-inter), "Inter", sans-serif',
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0px",
            lineHeight: "1.5em",
            color: "rgb(248, 246, 243)",
            opacity: isPressed ? 0.7 : 1,
          }}
          whileTap={{ scale: 0.98 }}
        >
          {label}
        </motion.span>
        {showIcon && (
          <motion.svg
            width="22"
            height="22"
            viewBox="0 0 25 25"
            fill="none"
            style={{
              opacity: isPressed ? 0.7 : 1,
            }}
          >
            <path
              d="M 11.458 2.083 L 0 13.541"
              stroke="rgb(248, 246, 243)"
              strokeWidth="2.08"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 20.833 2.083 L 13.542 22.916 L 9.375 13.541 L 0 9.375 Z"
              stroke="rgb(248, 246, 243)"
              strokeWidth="2.08"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </Link>
    </motion.div>
  );
}
