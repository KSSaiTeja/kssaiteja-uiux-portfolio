"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
    >
      <Link
        href={href}
        className="flex flex-row items-center justify-center cursor-pointer h-[22px] px-10 relative no-underline"
      >
        <motion.p
          className="whitespace-pre relative text-base font-normal leading-[1.3em] transition-colors duration-400"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            letterSpacing: "-0.1px",
            color: isHovered ? "#006793" : "var(--color-muted, #5a6b73)",
          }}
        >
          {children}
        </motion.p>
      </Link>
    </motion.div>
  );
}
