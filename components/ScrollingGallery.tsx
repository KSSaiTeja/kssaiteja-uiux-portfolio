"use client";

import Image from "next/image";

interface MediaItem {
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "https://framerusercontent.com/images/sOV9oVng8G6eTcJz9mcCnJarYGE.jpg?width=1500&height=2100",
    width: 259,
    height: 363,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/bItSXFPavhU2dit81jnbKTXR0JE.jpg?width=2700&height=3600",
    width: 225,
    height: 300,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/2DpNdbCobj1SacO4OMpr1IvlGE.mp4",
    width: 393,
    height: 215,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/mTIgomHRzjbLd0XLW5T7qOrhxU.jpg?width=1080&height=1350",
    width: 232,
    height: 290,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=1800&height=1675",
    width: 339,
    height: 316,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/40YISsvwSJc4RxvqVYZATAMwlM.jpg?width=1800&height=1483",
    width: 232,
    height: 191,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/W6EKuDKZ6ilw7quzpU9IfkL248E.jpg?width=2700&height=3600",
    width: 250,
    height: 334,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/5gmEX58ZB6E6bhMpCUhzutgd48.jpg?width=1459&height=1800",
    width: 266,
    height: 328,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/EkqBLYkO1YzBqFZ5QtGCbxnKg.jpg?width=1080&height=1350",
    width: 217,
    height: 271,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/Hhqb6e3FMAW5LJAIbJ1sxl6Dnhg.jpg?width=1080&height=1350",
    width: 299,
    height: 374,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/216jYTG59MjWaGTdoFmxyKeLs2Q.mp4",
    width: 290,
    height: 354,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/c6idvUjrSpE7PPwnzZRpEBQoLiA.png?width=496&height=496",
    width: 289,
    height: 289,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/A4ctABxvbRaq6aq99HPazcljFA.mp4",
    width: 285,
    height: 369,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/NH8EQlfaxl91U2nhBaq8RC4NODQ.mp4",
    width: 399,
    height: 284,
  },
];

export default function ScrollingGallery() {
  // Calculate total width of one set: sum of all item widths + gaps (13 gaps of 24px)
  const gapSize = 24; // gap-6 = 24px
  const totalItemWidth = mediaItems.reduce((sum, item) => sum + item.width, 0);
  const totalGapsWidth = (mediaItems.length - 1) * gapSize;
  const oneSetWidth = totalItemWidth + totalGapsWidth;

  return (
    <div
      className="relative h-[366px] overflow-hidden"
      style={{
        "--scroll-width": `${oneSetWidth}px`,
        width: "100vw",
        maxWidth: "100vw",
      } as React.CSSProperties & { "--scroll-width": string }}
    >
      <div
        className="flex gap-6 h-full items-end"
        style={{
          animationName: "scrollGallery",
          animationDuration: "16s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
      >
          {/* First set */}
          {mediaItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 rounded-lg overflow-hidden"
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {mediaItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 rounded-lg overflow-hidden"
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
  );
}
