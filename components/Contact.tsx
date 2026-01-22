"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import TelephoneIcon from "./TelephoneIcon";
import ContactButton from "./ContactButton";

interface ContactItem {
  label: string;
  linkName: string;
  linkUrl: string;
  variant?: "contact" | "download";
}

const contactItems: ContactItem[] = [
  {
    label: "Email",
    linkName: "hello@artemis.com",
    linkUrl: "mailto:hello@artemis.com",
    variant: "contact",
  },
  {
    label: "LinkedIn",
    linkName: "linkedin.com/artemis",
    linkUrl: "linkedin.com/",
    variant: "contact",
  },
  {
    label: "Website",
    linkName: "artemis1.framer.website",
    linkUrl: "artemis1.framer.website",
    variant: "contact",
  },
  {
    label: "ARE.NA",
    linkName: "are.na/artemis",
    linkUrl: "are.na/",
    variant: "contact",
  },
  {
    label: "Download this template",
    linkName: "",
    linkUrl:
      "https://framer.link/CwLLucQ?utm_source=product-demo&utm_medium=button&utm_campaign=contact-section",
    variant: "download",
  },
];

export default function Contact() {
  useEffect(() => {
    // Inject responsive styles matching Framer exactly
    const styleId = "contact-responsive-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* Base styles - Desktop */
      .contact-section {
        width: 1048px;
        padding: 0px 40px;
        gap: 40px;
        height: min-content;
        border-radius: 48px;
      }
      .contact-heading {
        gap: 16px;
        max-width: 720px;
      }
      .contact-title-container {
        gap: 0px;
      }
      .contact-telephone-icon {
        width: 100px;
        height: 100px;
      }
      .contact-title {
        max-width: 720px;
      }
      .contact-headline {
        max-width: 720px;
      }
      .contact-details {
        gap: 8px;
        max-width: 500px;
      }
      .contact-button {
        width: 100%;
        max-width: 500px;
      }
      
      /* Tablet: 810px - 1199px */
      @media (min-width: 810px) and (max-width: 1199px) {
        .contact-section {
          width: 730px !important;
        }
        .contact-title, .contact-headline {
          max-width: 500px !important;
        }
      }
      
      /* Phone: < 810px */
      @media (max-width: 809px) {
        .contact-section {
          width: 358px !important;
          padding: 0px !important;
        }
        .contact-title, .contact-headline {
          max-width: 500px !important;
        }
        .contact-telephone-icon {
          width: 125px !important;
          height: 125px !important;
        }
      }
      
      /* Extra small phones */
      @media (max-width: 357px) {
        .contact-section {
          width: 100% !important;
          padding: 0 16px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <motion.section
      className="contact-section relative mx-auto flex flex-col items-center justify-center overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
    >
      {/* Heading Section */}
      <motion.div
        className="contact-heading flex flex-col items-center justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title Container */}
        <div className="contact-title-container flex flex-col items-center justify-center gap-0 w-full">
          <TelephoneIcon className="contact-telephone-icon mb-0" />
          <h2
            className="contact-title font-libre-baskerville italic text-center text-[64px] leading-[1.2em] tracking-[-2px] max-xl:text-[40px] max-md:text-[32px] mt-0"
            style={{
              color: "rgb(0, 22, 102)",
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            }}
          >
            Ready to build something amazing?
          </h2>
        </div>

        {/* Headline */}
        <p
          className="contact-headline font-dm-sans text-[20px] leading-[1.3em] text-center max-w-full max-xl:text-base max-xl:leading-[1.3em] max-md:text-base max-md:leading-[1.2em]"
          style={{
            color: "rgb(118, 125, 126)",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            letterSpacing: "-0.2px",
          }}
        >
          I'd love to connect with you!
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="contact-details flex flex-col items-start justify-start w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.8,
          delay: 0.2,
        }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.8,
              delay: 0.2 + index * 0.1,
            }}
          >
            <ContactButton
              label={item.label}
              linkName={item.linkName}
              linkUrl={item.linkUrl}
              variant={item.variant || "contact"}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
