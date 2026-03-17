"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface BehindTheCanvasImageProps {
  src: string;
  alt?: string;
  caption: string;
  width: number;
  height: number;
  rotate?: number;
  className?: string;
  hoverRotate?: number;
}

export default function BehindTheCanvasImage({
  src,
  alt = "",
  caption,
  width,
  height,
  rotate = 0,
  hoverRotate,
  className,
}: BehindTheCanvasImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-full h-full ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformOrigin: "center center",
      }}
    >
      {/* Caption - Starts behind image at bottom center, moves to top on hover */}
      <motion.div
        className="absolute overflow-visible pointer-events-none"
        style={{
          left: "50%",
          bottom: "0px",
          transform: "translateX(-50%)",
          width: "99px",
          height: "35px",
          zIndex: isHovered ? 20 : 0,
        }}
        initial={false}
        animate={{
          rotate: isHovered ? 0 : -16,
          scale: isHovered ? 1 : 0.1,
          y: isHovered ? "calc(-100% - 35px)" : "0px",
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.45,
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Caption Container */}
        <div
          className="absolute left-1/2 top-0 rounded-[40px]"
          style={{
            backgroundColor: "#1a2d3a",
            transform: "translateX(-50%)",
            padding: "4px",
            width: "99px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className="font-dm-sans text-sm font-medium leading-[1.5em] whitespace-pre text-center"
            style={{
              color: "rgb(248, 246, 243)",
              fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0px",
              transform: "scale(0.8)",
            }}
          >
            {caption}
          </p>
        </div>

        {/* Arrow Icon */}
        <div
          className="absolute rounded-full"
          style={{
            backgroundColor: "#006793",
            width: "16px",
            height: "16px",
            left: "45px",
            top: "17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: "rgb(248, 246, 243)",
            }}
          >
            <path
              d="M 0 0 L 14 0"
              stroke="rgb(248, 246, 243)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(5.5 12.596)"
            />
            <path
              d="M 0 0 L 7 7 L 0 14"
              stroke="rgb(248, 246, 243)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(12.5 5.596)"
            />
          </svg>
        </div>
      </motion.div>

      {/* Image - Above caption when not hovered, below caption when hovered */}
      <motion.div 
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          zIndex: isHovered ? 10 : 1,
        }}
        transition={{
          duration: 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-2xl"
          sizes={`${width}px`}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
