"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ScrollingGallery from "./ScrollingGallery";

export default function SneakPeak() {
  return (
    <>
      <section className="relative w-full max-w-[1048px] mx-auto flex flex-col items-center gap-10 overflow-visible max-xl:max-w-[730px] max-md:max-w-[358px] max-md:flex-col-reverse max-md:gap-10">
        {/* Section Title */}
        <div className="flex-none w-full order-0 max-md:order-1">
          <SectionTitle title="Sneak peak of my works" />
        </div>
      </section>
      
      {/* Spacing between title and carousel */}
      <div className="h-16 max-md:h-12"></div>
      
      {/* Scrolling Gallery - Full viewport width, outside section constraints */}
      <div 
        className="h-[366px] w-screen relative"
        style={{ 
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          maxWidth: "100vw"
        }}
      >
        <ScrollingGallery />
      </div>
    </>
  );
}
