"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactButtonProps {
  label: string;
  linkName: string;
  linkUrl: string;
  variant?: "contact" | "download";
  className?: string;
}

export default function ContactButton({
  label,
  linkName,
  linkUrl,
  variant = "contact",
  className,
}: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isDownload = variant === "download";

  // Background color based on state
  const getBackgroundColor = () => {
    if (isPressed) return "rgb(42, 49, 50)";
    if (isHovered) return "rgb(118, 125, 126)";
    return "rgb(233, 233, 233)";
  };

  // Text color based on state
  const getTextColor = () => {
    if (isHovered || isPressed) return "rgb(248, 246, 243)";
    return "rgb(42, 49, 50)";
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (linkUrl === "javascript:void(0)") {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={linkUrl}
      onClick={handleClick}
      className={`contact-button flex flex-row items-center cursor-pointer h-[65px] px-6 py-5 rounded-2xl no-underline relative overflow-visible ${className || ""}`}
      style={{
        backgroundColor: getBackgroundColor(),
        transition: "background-color 0.4s ease",
        width: "100%",
        maxWidth: "500px",
        gap: "40px",
        justifyContent: isDownload ? "space-between" : "flex-start",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {/* Label */}
      <motion.div
        className="flex-none relative"
        style={{
          maxWidth: isDownload ? "none" : "50%",
          width: "auto",
        }}
        animate={{
          order: isHovered && !isDownload ? 0 : undefined,
        }}
      >
        <p
          className="font-dm-sans text-base leading-[1.3em] whitespace-pre-wrap"
          style={{
            color: getTextColor(),
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: variant === "download" ? "0px" : "-0.1px",
            lineHeight: variant === "download" ? "1.3em" : "1.3em",
          }}
        >
          {label}
        </p>
      </motion.div>

      {/* Value and Arrow Container */}
      {!isDownload && (
        <motion.div
          className="flex-1 flex flex-row items-center justify-end gap-0 relative"
          style={{
            width: "1px",
            minWidth: 0,
          }}
          animate={{
            gap: isHovered || isPressed ? "4px" : "0px",
          }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.4,
          }}
        >
          {/* Value */}
          <motion.div
            className="flex-none relative"
            style={{
              width: "100%",
            }}
            animate={{
              order: isHovered || isPressed ? 0 : undefined,
            }}
          >
            <p
              className="font-dm-sans text-base leading-[1.3em] text-right whitespace-pre-wrap"
              style={{
                color: getTextColor(),
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "1.3em",
              }}
            >
              {linkName}
            </p>
          </motion.div>

          {/* Arrow Icon */}
          <motion.svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="flex-none relative"
            style={{
              width: isHovered || isPressed ? "25px" : "1px",
              height: "25px",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered || isPressed ? 1 : 0,
              order: isHovered || isPressed ? 1 : undefined,
            }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.4,
            }}
          >
            <g transform="translate(5.5 5.596) rotate(-45 7 7)">
              <path
                d="M 0 7 L 12.725 6.932"
                fill="transparent"
                stroke="rgb(248, 246, 243)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 7 0 L 14 7 L 7 14"
                fill="transparent"
                stroke="rgb(248, 246, 243)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}

      {/* Download Icon (only for download variant) */}
      {isDownload && (
        <>
          {/* Default download-cloud icon (grey) - shown when not hovered/pressed */}
          {!isHovered && !isPressed && (
            <motion.div
              className="flex-none relative ml-auto"
              style={{
                width: "24px",
                height: "24px",
                aspectRatio: 1,
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgb(95, 101, 102)",
                  WebkitMask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 0 23.657 L 0 0 L 23.657 0 L 23.657 23.657 Z" fill="transparent" transform="translate(0.348 0.348)"/><path d="M 0 0 L 3.943 3.943 L 7.886 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(8.235 16.758)"/><path d="M 0 0 L 0 8.871" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(12.176 11.829)"/><path d="M 19.605 14.886 C 20.462 14.283 21.104 13.423 21.44 12.431 C 21.775 11.438 21.785 10.364 21.468 9.366 C 21.152 8.367 20.525 7.495 19.68 6.877 C 18.834 6.258 17.814 5.925 16.766 5.926 L 15.524 5.926 C 15.228 4.77 14.673 3.697 13.902 2.787 C 13.13 1.877 12.163 1.154 11.072 0.672 C 9.981 0.19 8.794 -0.038 7.602 0.005 C 6.41 0.048 5.243 0.361 4.19 0.92 C 3.136 1.479 2.223 2.27 1.519 3.233 C 0.815 4.196 0.339 5.306 0.126 6.479 C -0.086 7.653 -0.03 8.86 0.291 10.009 C 0.612 11.157 1.19 12.218 1.98 13.112" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(1.326 2.946)"/></svg>') alpha no-repeat center / auto`,
                  mask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 0 23.657 L 0 0 L 23.657 0 L 23.657 23.657 Z" fill="transparent" transform="translate(0.348 0.348)"/><path d="M 0 0 L 3.943 3.943 L 7.886 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(8.235 16.758)"/><path d="M 0 0 L 0 8.871" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(12.176 11.829)"/><path d="M 19.605 14.886 C 20.462 14.283 21.104 13.423 21.44 12.431 C 21.775 11.438 21.785 10.364 21.468 9.366 C 21.152 8.367 20.525 7.495 19.68 6.877 C 18.834 6.258 17.814 5.925 16.766 5.926 L 15.524 5.926 C 15.228 4.77 14.673 3.697 13.902 2.787 C 13.13 1.877 12.163 1.154 11.072 0.672 C 9.981 0.19 8.794 -0.038 7.602 0.005 C 6.41 0.048 5.243 0.361 4.19 0.92 C 3.136 1.479 2.223 2.27 1.519 3.233 C 0.815 4.196 0.339 5.306 0.126 6.479 C -0.086 7.653 -0.03 8.86 0.291 10.009 C 0.612 11.157 1.19 12.218 1.98 13.112" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.39" stroke="currentColor" transform="translate(1.326 2.946)"/></svg>') alpha no-repeat center / auto`,
                }}
              />
            </motion.div>
          )}

          {/* Hover download-cloud-light icon (off-white) */}
          {isHovered && !isPressed && (
            <motion.div
              className="flex-none relative ml-auto"
              style={{
                width: "24px",
                height: "23px",
                aspectRatio: 1.0416666666666667,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
              }}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "rgb(248, 246, 243)",
                  WebkitMask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g><path d="M 0 24.157 L 0 0 L 24.157 0 L 24.157 24.157 Z" fill="transparent" transform="translate(0 0)"/><path d="M 0 0 L 4.026 4.026 L 8.052 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(8.054 16.757)"/><path d="M 0 0 L 0 9.059" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(12.079 11.723)"/><path d="M 20.019 15.201 C 20.894 14.585 21.55 13.707 21.893 12.693 C 22.235 11.68 22.245 10.584 21.922 9.564 C 21.599 8.544 20.959 7.654 20.096 7.022 C 19.232 6.39 18.19 6.05 17.12 6.051 L 15.852 6.051 C 15.549 4.871 14.983 3.775 14.195 2.846 C 13.408 1.917 12.42 1.179 11.306 0.686 C 10.192 0.194 8.98 -0.039 7.763 0.005 C 6.546 0.049 5.354 0.368 4.278 0.939 C 3.202 1.51 2.27 2.318 1.551 3.301 C 0.833 4.284 0.346 5.418 0.129 6.616 C -0.088 7.815 -0.031 9.047 0.297 10.22 C 0.625 11.393 1.215 12.477 2.022 13.389" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(0.999 2.653)"/></g></svg>') alpha no-repeat center / auto`,
                  mask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g><path d="M 0 24.157 L 0 0 L 24.157 0 L 24.157 24.157 Z" fill="transparent" transform="translate(0 0)"/><path d="M 0 0 L 4.026 4.026 L 8.052 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(8.054 16.757)"/><path d="M 0 0 L 0 9.059" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(12.079 11.723)"/><path d="M 20.019 15.201 C 20.894 14.585 21.55 13.707 21.893 12.693 C 22.235 11.68 22.245 10.584 21.922 9.564 C 21.599 8.544 20.959 7.654 20.096 7.022 C 19.232 6.39 18.19 6.05 17.12 6.051 L 15.852 6.051 C 15.549 4.871 14.983 3.775 14.195 2.846 C 13.408 1.917 12.42 1.179 11.306 0.686 C 10.192 0.194 8.98 -0.039 7.763 0.005 C 6.546 0.049 5.354 0.368 4.278 0.939 C 3.202 1.51 2.27 2.318 1.551 3.301 C 0.833 4.284 0.346 5.418 0.129 6.616 C -0.088 7.815 -0.031 9.047 0.297 10.22 C 0.625 11.393 1.215 12.477 2.022 13.389" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(0.999 2.653)"/></g></svg>') alpha no-repeat center / auto`,
                }}
              />
            </motion.div>
          )}

          {/* Pressed download-cloud-light icon (off-white) */}
          {isPressed && (
            <motion.div
              className="flex-none relative ml-auto"
              style={{
                width: "24px",
                height: "23px",
                aspectRatio: 1.0416666666666667,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
              }}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "rgb(248, 246, 243)",
                  WebkitMask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g><path d="M 0 24.157 L 0 0 L 24.157 0 L 24.157 24.157 Z" fill="transparent" transform="translate(0 0)"/><path d="M 0 0 L 4.026 4.026 L 8.052 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(8.054 16.757)"/><path d="M 0 0 L 0 9.059" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(12.079 11.723)"/><path d="M 20.019 15.201 C 20.894 14.585 21.55 13.707 21.893 12.693 C 22.235 11.68 22.245 10.584 21.922 9.564 C 21.599 8.544 20.959 7.654 20.096 7.022 C 19.232 6.39 18.19 6.05 17.12 6.051 L 15.852 6.051 C 15.549 4.871 14.983 3.775 14.195 2.846 C 13.408 1.917 12.42 1.179 11.306 0.686 C 10.192 0.194 8.98 -0.039 7.763 0.005 C 6.546 0.049 5.354 0.368 4.278 0.939 C 3.202 1.51 2.27 2.318 1.551 3.301 C 0.833 4.284 0.346 5.418 0.129 6.616 C -0.088 7.815 -0.031 9.047 0.297 10.22 C 0.625 11.393 1.215 12.477 2.022 13.389" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(0.999 2.653)"/></g></svg>') alpha no-repeat center / auto`,
                  mask: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g><path d="M 0 24.157 L 0 0 L 24.157 0 L 24.157 24.157 Z" fill="transparent" transform="translate(0 0)"/><path d="M 0 0 L 4.026 4.026 L 8.052 0" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(8.054 16.757)"/><path d="M 0 0 L 0 9.059" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(12.079 11.723)"/><path d="M 20.019 15.201 C 20.894 14.585 21.55 13.707 21.893 12.693 C 22.235 11.68 22.245 10.584 21.922 9.564 C 21.599 8.544 20.959 7.654 20.096 7.022 C 19.232 6.39 18.19 6.05 17.12 6.051 L 15.852 6.051 C 15.549 4.871 14.983 3.775 14.195 2.846 C 13.408 1.917 12.42 1.179 11.306 0.686 C 10.192 0.194 8.98 -0.039 7.763 0.005 C 6.546 0.049 5.354 0.368 4.278 0.939 C 3.202 1.51 2.27 2.318 1.551 3.301 C 0.833 4.284 0.346 5.418 0.129 6.616 C -0.088 7.815 -0.031 9.047 0.297 10.22 C 0.625 11.393 1.215 12.477 2.022 13.389" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.42" stroke="currentColor" transform="translate(0.999 2.653)"/></g></svg>') alpha no-repeat center / auto`,
                }}
              />
            </motion.div>
          )}
        </>
      )}
    </Link>
  );
}
