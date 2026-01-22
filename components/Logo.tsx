"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({ href = "/", className }: LogoProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
    >
      <Link
        href={href}
        className="flex flex-col items-center justify-center cursor-pointer h-20 px-6 relative no-underline"
      >
        <div className="flex flex-col items-center whitespace-pre">
          <p
            className="text-2xl leading-[110%] text-center text-[rgb(255,89,0)]"
            style={{
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            Artemis{" "}
            <span className="italic">&</span>
          </p>
          <p
            className="text-2xl leading-[110%] text-center italic text-[rgb(255,89,0)]"
            style={{
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            {"   Artemis"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
