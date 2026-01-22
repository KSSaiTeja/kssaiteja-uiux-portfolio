"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  useEffect(() => {
    // Inject responsive styles matching Framer exactly
    const styleId = "footer-responsive-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* Base styles - Desktop */
      .footer-section {
        padding: 8px;
        gap: 0px;
        height: min-content;
        width: min-content;
        overflow: hidden;
      }
      .footer-logo-container {
        width: 136px;
        height: auto;
        flex: none;
        position: relative;
      }
      .footer-copyright {
        gap: 4px;
        align-self: stretch;
        align-content: center;
        align-items: center;
        display: flex;
        flex: none;
        flex-direction: row;
        flex-wrap: nowrap;
        height: min-content;
        justify-content: center;
        overflow: visible;
        padding: 0px;
        position: relative;
        width: auto;
      }
      .footer-copyright-text {
        flex: none;
        height: auto;
        position: relative;
        white-space: pre;
        width: auto;
      }
      .footer-year {
        flex: none;
        height: auto;
        position: relative;
        width: auto;
      }
      
      /* Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .footer-copyright-text, .footer-year {
          letter-spacing: 0px !important;
        }
      }
      
      /* Phone: < 810px */
      @media (max-width: 809px) {
        .footer-copyright-text, .footer-year {
          letter-spacing: 0px !important;
          line-height: 1.4em !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer-section relative mx-auto flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
    >
      {/* Logo */}
      <div className="footer-logo-container relative flex justify-center">
        <Logo href="/" />
      </div>

      {/* Copyright */}
      <motion.div
        className="footer-copyright flex flex-row items-center justify-center gap-1 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {/* Copyright Symbol */}
        <p
          className="footer-copyright-text font-dm-sans text-base leading-[1.3em]"
          style={{
            color: "rgb(95, 101, 102)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "-0.1px",
            lineHeight: "1.3em",
          }}
        >
          ©
        </p>

        {/* Current Year */}
        <p
          className="footer-year font-dm-sans text-base leading-[1.3em]"
          style={{
            color: "rgb(95, 101, 102)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0px",
            lineHeight: "1.3em",
          }}
        >
          {currentYear}
        </p>
      </motion.div>
    </motion.footer>
  );
}
