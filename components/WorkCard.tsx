"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface WorkCardProps {
  title: string;
  category?: string;
  summary: string;
  cover: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  href?: string;
  onClick?: () => void;
  onHover?: () => void;
}

export default function WorkCard({
  title,
  category,
  summary,
  cover,
  href = "#",
  onClick,
  onHover,
}: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <motion.div
      className="group cursor-pointer relative w-full h-full max-w-[504px] min-w-[240px] rounded-2xl overflow-hidden bg-[#e8eef4] border border-[#dce4ec] p-5 max-xl:max-w-[500px] max-xl:p-4 max-md:w-full max-md:p-4 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      whileHover={{ y: -4 }}
    >
      <Link href={href} className="flex flex-col gap-10 max-xl:gap-6 max-md:gap-6 h-full">
        {/* Cover Image Container */}
        <motion.div
          className="relative w-full rounded-lg overflow-hidden bg-gray-200"
          style={{
            height: "283px",
          }}
          variants={{
            hover: {
              opacity: 1,
            },
            pressed: {
              opacity: 0.8,
            },
          }}
          animate={isPressed ? "pressed" : "hover"}
        >
          <motion.div
            className="relative w-full h-full"
            variants={{
              hover: {
                scale: 1.1,
              },
              pressed: {
                scale: 1.05,
              },
            }}
            animate={isHovered ? (isPressed ? "pressed" : "hover") : { scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              src={cover.src}
              alt={cover.alt || title}
              width={cover.width}
              height={cover.height}
              className="w-full h-full object-cover"
              sizes="491px"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-10 max-xl:gap-6 max-md:gap-6 flex-grow">
          {/* Project Info */}
          <div className="flex flex-col gap-4 flex-grow">
            {/* Project Title */}
            <h5
              className="w-full text-left font-dm-sans font-medium text-[36px] leading-[1.3em] tracking-[-0.02em] max-xl:text-[36px] max-md:text-[24px] max-md:leading-[1em]"
              style={{
                color: "var(--foreground, #233245)",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}
            >
              {title}
            </h5>

            {/* Project Summary */}
            <p
              className="w-full text-left font-dm-sans text-base leading-[1.3em] tracking-[-0.1px] line-clamp-4 max-xl:leading-[1.3em] max-md:leading-[1.4em] flex-grow"
              style={{
                color: "var(--color-muted, #5a6b73)",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                minHeight: "5.2em",
              }}
            >
              {summary}
            </p>
          </div>

          {/* Category & Icon */}
          <div className="flex flex-row items-center justify-between w-full mt-auto">
            {/* Category Badge */}
            {category && (
              <p
                className="font-dm-sans text-base font-medium leading-[1.5em] whitespace-pre"
                style={{
                  color: "#FAFCFD",
                  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                }}
              >
                <mark
                  className="px-[14px] py-[5px] rounded-[20px]"
                  style={{
                    backgroundColor: "var(--color-primary, #006793)",
                    color: "#FAFCFD",
                    padding: "5px 14px 6px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {category}
                </mark>
              </p>
            )}

            {/* Arrow Icon */}
            <motion.div
              className="w-10 h-10 flex items-center justify-center rounded-full"
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                },
                pressed: {
                  opacity: 0.7,
                  scale: 0.95,
                },
                default: {
                  opacity: 0,
                  scale: 0.8,
                  x: -5,
                },
              }}
              animate={isHovered ? (isPressed ? "pressed" : "hover") : "default"}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
              }}
              style={{
                backgroundColor: "var(--color-primary, #006793)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                style={{
                  color: "#FAFCFD",
                }}
              >
                <path
                  d="M 0 0 L 14 0"
                  stroke="#FAFCFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(5.5 12.596)"
                />
                <path
                  d="M 0 0 L 7 7 L 0 14"
                  stroke="#FAFCFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(12.5 5.596)"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
