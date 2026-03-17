"use client";

import { motion } from "framer-motion";

export interface PersonaData {
  name: string;
  demographics: {
    age: string;
    status: string;
    occupation: string;
    location: string;
  };
  biography: string;
  goals: string[];
  frustrations: string[];
  influences: string[];
  personality: string[];
  technology: string[];
}

interface CaseStudyPersonaCardProps extends PersonaData {
  index: number;
}

function ListCard({
  title,
  items,
  bgClass,
}: {
  title: string;
  items: string[];
  bgClass: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${bgClass}`}
      style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
    >
      <p className="font-semibold text-[15px] mb-3" style={{ color: "var(--foreground, #233245)" }}>
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-snug"
            style={{ color: "var(--foreground, #233245)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
              style={{ backgroundColor: "var(--color-primary, #006793)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudyPersonaCard({
  name,
  demographics,
  biography,
  goals,
  frustrations,
  influences,
  personality,
  technology,
  index,
}: CaseStudyPersonaCardProps) {
  return (
    <motion.article
      className="rounded-3xl bg-[#f0f6fa] p-6 shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Profile */}
        <div className="flex flex-col">
          <div className="rounded-2xl bg-white/90 p-6 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold text-white mb-4 ring-4 shrink-0"
              style={{
                backgroundColor: "#233245",
                boxShadow: "0 0 0 4px rgba(0, 103, 147, 0.25)",
              }}
            >
              {name.charAt(0)}
            </div>
            <p className="font-bold text-lg mb-3" style={{ color: "var(--foreground, #233245)" }}>
              {name}
            </p>
            <div
              className="rounded-xl px-4 py-3 w-full text-left text-sm space-y-1 mb-4"
              style={{ backgroundColor: "#e2eaf0", color: "var(--foreground, #233245)" }}
            >
              <p>Age: {demographics.age}</p>
              <p>Status: {demographics.status}</p>
              <p>Occupation: {demographics.occupation}</p>
              <p>Location: {demographics.location}</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground, #233245)" }}>
              {biography}
            </p>
          </div>
        </div>

        {/* Middle: Goals & Frustrations */}
        <div className="flex flex-col gap-4">
          <ListCard
            title="Goals"
            items={goals}
            bgClass="bg-white/95 shadow-sm"
          />
          <ListCard
            title="Frustrations"
            items={frustrations}
            bgClass="bg-white/95 shadow-sm"
          />
        </div>

        {/* Right: Influences, Personality, Technology */}
        <div className="flex flex-col gap-4">
          <ListCard
            title="Influences"
            items={influences}
            bgClass="bg-[#e8f0f8] shadow-sm"
          />
          <ListCard
            title="Personality"
            items={personality}
            bgClass="bg-[#e3eef8] shadow-sm"
          />
          <ListCard
            title="Technology"
            items={technology}
            bgClass="bg-[#e0eef4] shadow-sm"
          />
        </div>
      </div>
    </motion.article>
  );
}
