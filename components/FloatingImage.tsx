"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FloatingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  initialRotation?: number;
  animateRotation?: number;
  position: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  className?: string;
  enableDrag?: boolean;
  parallaxSpeed?: number;
}

export default function FloatingImage({
  src,
  alt,
  width,
  height,
  initialRotation = 0,
  animateRotation = 0,
  position,
  className,
  enableDrag = true,
  parallaxSpeed = 0,
}: FloatingImageProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...position,
        zIndex: 1,
      }}
      initial={{
        opacity: 0.001,
        scale: 0.5,
        rotate: initialRotation,
        x: position.left ? 251 : position.right ? -200 : 0,
        y: position.top ? 110 : position.bottom ? -100 : 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: animateRotation,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1.4,
        delay: 0.8,
      }}
      drag={enableDrag}
      dragMomentum={false}
      dragSnapToOrigin={true}
      whileTap={{
        rotate: animateRotation - 8,
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${width}px`}
        />
      </div>
    </motion.div>
  );
}
