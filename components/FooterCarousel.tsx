"use client";

import ScrollingGallery from "./ScrollingGallery";

/** Same scrolling gallery as the upper SneakPeak section — no customizations. */
export default function FooterCarousel() {
  return (
    <div
      className="h-[366px] w-screen relative"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        maxWidth: "100vw",
      }}
    >
      <ScrollingGallery />
    </div>
  );
}
