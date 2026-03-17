"use client";

import { motion } from "framer-motion";
import { IconMail, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import FooterCarousel from "./FooterCarousel";

const EMAIL = "saitej4865@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/kssaiteja";
const WHATSAPP_URL = "https://wa.me/919876543210"; // replace with your number

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative w-full max-w-[1048px] mx-auto flex flex-col items-center justify-center overflow-hidden px-6 md:px-10 py-12 md:py-16 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      style={{
        fontFamily: "var(--font-dm-sans), \"DM Sans\", sans-serif",
        color: "var(--foreground)",
      }}
    >
      {/* CTA — same typography as other section titles (Libre Baskerville italic) */}
      <h2
        className="text-2xl md:text-3xl font-medium text-center mb-8 italic leading-tight"
        style={{
          color: "var(--foreground)",
          fontFamily: "var(--font-libre-baskerville), \"Libre Baskerville\", serif",
          letterSpacing: "-0.02em",
        }}
      >
        Let&apos;s build incredible things together!
      </h2>

      {/* Contact row: Email, LinkedIn, WhatsApp — theme primary */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <IconMail size={20} stroke={2} />
          <span className="font-medium" style={{ fontFamily: "var(--font-dm-sans), \"DM Sans\", sans-serif" }}>{EMAIL}</span>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)" }}
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={22} stroke={2} />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white transition-opacity hover:opacity-90 bg-[#25D366]"
          aria-label="WhatsApp"
        >
          <IconBrandWhatsapp size={22} stroke={2} />
        </a>
      </div>

      {/* Sneak peek carousel — same as upper section */}
      <div className="w-full mb-12">
        <FooterCarousel />
      </div>

      {/* Copyright: two lines — muted theme color, DM Sans */}
      <div
        className="text-center text-sm leading-relaxed"
        style={{
          color: "var(--color-muted)",
          fontFamily: "var(--font-dm-sans), \"DM Sans\", sans-serif",
        }}
      >
        <p>© K S Sai Teja, {currentYear}.</p>
        <p>Built with ❤️ & Next.js</p>
      </div>
    </motion.footer>
  );
}
