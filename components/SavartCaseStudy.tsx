"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CaseStudySection from "./case-study/CaseStudySection";
import CaseStudyMediaBlock from "./case-study/CaseStudyMediaBlock";
import CaseStudyCallout from "./case-study/CaseStudyCallout";
import CaseStudyEmbed from "./case-study/CaseStudyEmbed";
import CaseStudyMetricsGrid from "./case-study/CaseStudyMetricsGrid";
import CaseStudyPersonaCard, { type PersonaData } from "./case-study/CaseStudyPersonaCard";
import CaseStudyStepsRow from "./case-study/CaseStudyStepsRow";
import CaseStudyTwoColumn from "./case-study/CaseStudyTwoColumn";
import BentoFeatureSection from "./BentoFeatureSection";
import AffinityMappingSection from "./AffinityMappingSection";

const COVER_SRC =
  "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856";

const PERSONAS: PersonaData[] = [
  {
    name: "The Aspirational Beginner",
    demographics: {
      age: "25-35",
      status: "Early career",
      occupation: "Salaried / first-time investor",
      location: "Metro / Tier 1",
    },
    biography:
      "Just started earning and wants to invest but does not know where to begin. Looks for simple explanations and someone to guide them without jargon. Worried about making mistakes and losing money.",
    goals: [
      "Learn basics of investing in a simple way",
      "Get personalised advice without feeling judged",
      "Build a small portfolio with clear next steps",
      "Understand what they are paying for before subscribing",
    ],
    frustrations: [
      "Too much financial jargon in apps",
      "Fear of wrong decisions",
      "Nothing useful to do before paying for advice",
      "Unclear how portfolio is doing",
    ],
    influences: ["Family", "YouTube and finance creators", "Office colleagues"],
    personality: ["Cautious", "Curious", "Seeks reassurance"],
    technology: ["Mobile-first", "Uses WhatsApp and YouTube daily", "Prefers simple apps"],
  },
  {
    name: "The Cautious Diversifier",
    demographics: {
      age: "30-45",
      status: "Mid career",
      occupation: "Professional with some investments",
      location: "Metro / Tier 2",
    },
    biography:
      "Already has some investments and wants to diversify in a structured way. Needs clarity on current portfolio health and where to go next. Wants control and transparency, not just recommendations.",
    goals: [
      "See portfolio health at a glance",
      "Get advice that fits existing holdings",
      "Compare performance with benchmarks",
      "Reduce overlap and improve diversification",
    ],
    frustrations: [
      "Hard to track multiple holdings in one place",
      "Advice feels generic or repetitive",
      "Unclear what is working and what is not",
      "Too much data, not enough insight",
    ],
    influences: ["SEBI-registered advisors", "Financial blogs", "LinkedIn"],
    personality: ["Analytical", "Structured", "Wants control"],
    technology: ["Uses multiple apps", "Comfortable with dashboards", "Checks portfolio weekly"],
  },
  {
    name: "The Burned Trader",
    demographics: {
      age: "28-50",
      status: "Varies",
      occupation: "Self-employed or salaried",
      location: "Pan India",
    },
    biography:
      "Has lost money in the past due to impulsive decisions or bad timing. Wants to get back to investing but with discipline and a system they can trust. Needs structure, not more tips or noise.",
    goals: [
      "Follow a rule-based, disciplined approach",
      "Avoid emotional buying and selling",
      "Rebuild confidence with clear guidelines",
      "Get advice that explains the why",
    ],
    frustrations: [
      "Past losses make them hesitant",
      "Too many opinions and no clear system",
      "Fear of repeating same mistakes",
      "Need for accountability and structure",
    ],
    influences: ["Trusted advisors", "Past experience", "Regulated platforms"],
    personality: ["Disciplined", "Sceptical", "Seeks structure"],
    technology: ["Prefers simple flows", "Wants fewer decisions", "Values clarity over features"],
  },
];

function EvalCard({
  title,
  question,
  focus,
  bg,
}: {
  title: string;
  question: string;
  focus: string[];
  bg: string;
}) {
  return (
    <div
      className="aspect-square w-full min-h-[200px] rounded-xl border border-[#dce4ec] p-4 flex flex-col shadow-sm"
      style={{ backgroundColor: bg }}
    >
      <p className="text-sm font-semibold text-[#233245] mb-2" style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
        {title}
      </p>
      <p className="text-xs text-[#233245]/90 leading-snug mb-3 flex-1 min-h-0 line-clamp-4" style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
        {question}
      </p>
      <div className="pt-2 border-t border-[#e5e5e5]/80">
        <p className="text-[11px] font-medium text-[#233245]/70 mb-1" style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
          Focus areas
        </p>
        <p className="text-[11px] text-[#233245]/75 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
          {focus.join(" · ")}
        </p>
      </div>
    </div>
  );
}

const EVAL_CATEGORIES: {
  title: string;
  bg: string;
  cards: { title: string; question: string; focus: string[] }[];
}[] = [
  {
    title: "Usability",
    bg: "#e3f1f8",
    cards: [
      { title: "Ease of Use", question: "How quickly can users complete key actions like portfolio linking or raising an advice request without confusion?", focus: ["OTP flow", "Account linking", "Advice clarity", "EFG flow", "Action hierarchy"] },
      { title: "Cognitive Load", question: "Does the user feel mentally exhausted while completing risk profiling or reading advisory outputs?", focus: ["Structured EFG options", "Advisory breakdown", "Chunked financial data"] },
      { title: "Satisfaction", question: "Do users feel confident and supported after viewing portfolio health or advisory recommendations?", focus: ["Portfolio health labels", "Clear summaries", "Actionable next steps"] },
    ],
  },
  {
    title: "Clarity & Information",
    bg: "#e5f5ec",
    cards: [
      { title: "Message Clarity", question: "Are recommendations, risks, and guidelines explained in language a non-expert can understand?", focus: ["Research report readability", "Guideline simplification", "Advised vs invested clarity"] },
      { title: "Transparency", question: "Does the app clearly communicate what is locked, what is free, and why?", focus: ["Free vs locked", "Subscription CTAs", "Savart Coins", "Pricing context"] },
      { title: "Trust Signals", question: "Does the product reinforce credibility at every critical decision point?", focus: ["Nerd Stats", "Compliance disclaimers", "Portfolio vs index", "AA consent clarity"] },
    ],
  },
  {
    title: "Navigation & Behavioural Flow",
    bg: "#fdf8e3",
    cards: [
      { title: "Lifecycle Progression", question: "Does the app guide users naturally from exploration to conversion?", focus: ["Explore structure", "Free tools first", "Pricing nudges", "Dynamic banners"] },
      { title: "Flow Intuitiveness", question: "Is the movement between Portfolio → Advice → Execution seamless?", focus: ["Bottom nav", "Hamburger", "Advice icon", "Back navigation"] },
      { title: "Speed & Responsiveness", question: "Does the app feel stable and reliable during financial actions?", focus: ["Loading friction", "Refresh timestamps", "Broker re-link", "Error lock timing"] },
    ],
  },
  {
    title: "Error Handling & Recovery",
    bg: "#e8f4fc",
    cards: [
      { title: "Error Clarity", question: "Do validation failures (OTP, PAN, payment) clearly explain next steps?", focus: ["OTP retry", "Password rules", "Broker session expiry"] },
      { title: "Recovery Support", question: "Does the app guide users when things go wrong?", focus: ["FAQ → ticket", "Rating < 3 ticket", "Consent warnings", "Razorpay messaging"] },
      { title: "Emotional Impact", question: "Does the product reduce anxiety during sensitive financial flows?", focus: ["Confirmations", "Progress indicators", "Explicit consent", "Lock-out timers"] },
    ],
  },
  {
    title: "Business & Conversion",
    bg: "#f0e9ff",
    cards: [
      { title: "Product-Led Triggers", question: "Do free diagnostics create motivation to subscribe?", focus: ["Portfolio health summary", "Locked securities teaser", "Personalised persona"] },
      { title: "Upsell Context", question: "Is pricing presented at the right moment?", focus: ["After value", "After partial completion", "After insight"] },
      { title: "Operational Efficiency", question: "Does the new system reduce manual dependency?", focus: ["Self-service onboarding", "Ticket automation", "Referral tracking"] },
    ],
  },
];

export default function SavartCaseStudy() {
  return (
    <article className="case-study w-full max-w-[1048px] mx-auto flex flex-col items-stretch gap-24 px-4 sm:px-6 py-20">
      {/* Hero */}
      <motion.header
        className="w-full flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-xs font-medium tracking-[0.12em] uppercase"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "#006793",
          }}
        >
          Case Study
        </p>
        <h1
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight text-center max-w-[800px]"
          style={{
            fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
            color: "var(--foreground, #233245)",
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          Savart Gen4: Redesigning a SEBI-Registered Advisory Platform for{" "}
          <span style={{ color: "#006793" }}>Clarity, Trust</span> and Product-Led Growth
        </h1>
        <p
          className="text-base md:text-lg text-center"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "var(--color-muted, #5a6b73)",
            lineHeight: "1.5",
          }}
        >
          Live product redesign, Fintech, Sole UI/UX ownership, about 8 to 10 months
        </p>
        <p
          className="text-sm text-center"
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            color: "var(--color-muted, #5a6b73)",
          }}
        >
          ~12 min read
        </p>
        <div className="w-full aspect-video max-h-[520px] relative rounded-3xl overflow-hidden bg-[#f0f6fa] shadow-lg">
          <Image
            src={COVER_SRC}
            alt="Savart Gen4 customer application"
            fill
            className="object-cover"
            sizes="(max-width: 809px) 100vw, 1048px"
            priority
          />
        </div>
        {/* Optional: add Figma prototype embed (Share → Get embed code, paste iframe src in CaseStudyEmbed url) */}
        {/* <CaseStudyEmbed url="YOUR_FIGMA_EMBED_SRC" title="Try the prototype" className="mt-8" /> */}
      </motion.header>

      {/* 01 Context & Backstory */}
      <CaseStudySection sectionNumber="01" title="The Backstory">
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-6">
          Savart is a SEBI-registered investment advisory platform (subscription model). When I joined, Gen3 was live but struggling: crashes, cluttered UX, low engagement before subscription, manual onboarding. I became the sole designer soon after; Gen4 was ~10% complete. I owned design end to end.
        </p>
        <p className="text-[17px] leading-[1.7] text-[#233245]">
          The goal was a structural transformation, not just a visual refresh: stability and clarity, product-led growth, simpler financial logic, and a value-first experience before asking for subscription. Gen4 shipped fully redesigned from onboarding through advice engine and portfolio intelligence.
        </p>
      </CaseStudySection>

      {/* 02 The Problem */}
      <CaseStudySection sectionNumber="02" title="The Problem">
        <CaseStudyCallout variant="default">
          <strong>Problem statement:</strong> “As an investor, I need to clearly understand my financial health and advisory value before committing to a subscription, without feeling overwhelmed or confused by the system.”
        </CaseStudyCallout>
        <p className="text-[17px] leading-[1.7] text-[#233245] mt-6">
          Users struggled before subscription; the business relied on manual onboarding and persuasion instead of product-led value. Below, research signals and constraints are grouped into themes.
        </p>
      </CaseStudySection>

      {/* Affinity mapping */}
      <CaseStudySection sectionNumber="02.1" title="Affinity mapping" width="full">
        <AffinityMappingSection />
      </CaseStudySection>

      {/* 03 Identifying Users and Their Needs */}
      <CaseStudySection
        sectionNumber="03"
        title="Identifying Users and Their Needs"
        width="full"
      >
        <p className="max-w-[720px] mb-8 text-[17px] leading-[1.7] text-[#233245]">
          From behavioural signals and internal context I derived five takeaways and three primary personas.
        </p>
        <CaseStudyStepsRow
          title="Top 5 takeaways"
          steps={[
            { number: "01", text: "Clarity builds trust more than complexity." },
            { number: "02", text: "Before subscription, users must experience value." },
            { number: "03", text: "Financial literacy levels vary a lot." },
            { number: "04", text: "Free-text financial inputs overwhelm users." },
            { number: "05", text: "Product-led progression reduces manual friction." },
          ]}
          className="mb-14"
        />
        <div className="text-left mb-8">
          <h3
            className="text-xl md:text-2xl font-medium mb-2"
            style={{
              fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
              fontStyle: "italic",
              color: "var(--foreground, #233245)",
            }}
          >
            User Personas
          </h3>
          <p className="max-w-[720px] text-[15px] leading-relaxed" style={{ color: "var(--color-muted, #5a6b73)" }}>
            Shared need: better understanding, not more data.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:gap-12">
          {PERSONAS.map((persona, index) => (
            <CaseStudyPersonaCard key={persona.name} {...persona} index={index} />
          ))}
        </div>
      </CaseStudySection>

      {/* 04 Empathy Map */}
      <CaseStudySection sectionNumber="04" title="Empathy Map">
        <p className="mb-6 text-[17px] leading-[1.7] text-[#233245]">
          I mapped what investors think, feel, say and do across onboarding, portfolio review and acting on advice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl bg-[#f0f6fa] p-6 md:p-8">
          {/* Think card */}
          <div className="relative rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="text-xs text-[#5a6b73] uppercase tracking-[0.18em]">
                Zone 01
              </span>
              <span className="h-2 w-8 rounded-full bg-[#c6dde8]" />
            </div>
            <div className="px-6 pt-3 pb-5 rounded-t-3xl bg-[#e3f1f8]">
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#006793" }}
              >
                Think
              </p>
              <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
                “Is this really SEBI-registered?” “Will this disturb my existing holdings?” “Am I too
                late to start?”
              </p>
            </div>
          </div>

          {/* Feel card */}
          <div className="relative rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="text-xs text-[#5a6b73] uppercase tracking-[0.18em]">
                Zone 02
              </span>
              <span className="h-2 w-8 rounded-full bg-[#cfe8e2]" />
            </div>
            <div className="px-6 pt-3 pb-5 rounded-t-3xl bg-[#e5f4ee]">
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#006793" }}
              >
                Feel
              </p>
              <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
                Anxious at first login, relieved when numbers reconcile, frustrated when broker sync
                fails, hopeful after seeing a clear health score.
              </p>
            </div>
          </div>

          {/* Say card */}
          <div className="relative rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="text-xs text-[#5a6b73] uppercase tracking-[0.18em]">
                Zone 03
              </span>
              <span className="h-2 w-8 rounded-full bg-[#ded3f1]" />
            </div>
            <div className="px-6 pt-3 pb-5 rounded-t-3xl bg-[#f0e9ff]">
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#006793" }}
              >
                Say
              </p>
              <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
                “Bas simple bolo, kya karna hai?” “Tell me if I am doing okay or not.” “Please do not
                call me again and again.”
              </p>
            </div>
          </div>

          {/* Do card */}
          <div className="relative rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="text-xs text-[#5a6b73] uppercase tracking-[0.18em]">
                Zone 04
              </span>
              <span className="h-2 w-8 rounded-full bg-[#b8d4e8]" />
            </div>
            <div className="px-6 pt-3 pb-5 rounded-t-3xl bg-[#e3f1f8]">
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#006793" }}
              >
                Do
              </p>
              <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
                Checks the app late at night, screenshots holdings to share on WhatsApp, retries
                linking when it fails, ignores long paragraphs.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyMediaBlock
        variant="flow"
        placeholderLabel="Empathy map visual or annotated journey"
        caption="Empathy map for typical Gen4 investors."
      />

      {/* 05 Information Architecture and Key Flows */}
      <CaseStudySection
        sectionNumber="05"
        title="Information Architecture and Key Flows"
        width="full"
      >
        <p className="max-w-[720px] mb-6 text-[17px] leading-[1.7] text-[#233245]">
          With SEBI, broker and AA constraints, we kept the architecture simple and organised around four anchors. Gen3 had many menus; Gen4 used fewer, deeper surfaces. New users see a health score before being asked to subscribe; existing investors land on portfolio health first.
        </p>
        <ul className="max-w-[720px] space-y-2 text-[15px]" style={{ color: "var(--foreground, #233245)" }}>
          <li>• Home shows overall health, alerts and simple language summaries.</li>
          <li>• Advice is organised by requests, not by products.</li>
          <li>• Explore collects all free tools in one place, so users always have something to do.</li>
          <li>• Profile handles KYC, subscriptions and broker connections without mixing with value screens.</li>
        </ul>
      </CaseStudySection>

      {/* 06 Shaping the Solution */}
      <CaseStudySection sectionNumber="06" title="Shaping the Solution">
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-8">
          The challenge was not adding features. It was structuring chaos.
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#dce4ec] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold mb-2" style={{ color: "#233245" }}>1. Risk profiling (EFG)</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Initial idea was free-form input fields. Problem: users overthought, answers were inconsistent and cognitive load went up. We replaced free-text with structured selectable options. Outcome: faster completion and reduced ambiguity.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dce4ec] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold mb-2" style={{ color: "#233245" }}>2. Advice output</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Original approach was heavy text, technical language and dense breakdown. It felt intimidating and robotic. New direction: clear request summary, investment guidelines, asset breakdown, “nerd stats” for credibility and a strong action CTA. Goal: intelligent but accessible.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dce4ec] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold mb-2" style={{ color: "#233245" }}>3. Portfolio review, the hero feature</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Instead of “here are your holdings”, we shifted to portfolio health status, top and low performers, asset segregation, performance vs index and action cues. We reframed portfolio as a diagnosis, not a data sheet.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyMediaBlock
        variant="large"
        placeholderLabel="Risk profiling (EFG): before/after or option structure"
        caption="Structured risk profiling (EFG) design."
      />
      <CaseStudyMediaBlock
        variant="two-col"
        placeholderLabel="Advice output: new structure (summary, guidelines, CTA)"
        placeholderLabel2="Portfolio health: hero feature (health status, performers)"
        caption="Advice and portfolio review concepts."
      />

      {/* 07 The Turning Point */}
      <CaseStudySection sectionNumber="07" title="The Turning Point">
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-6">
          The hardest feature to crack was the <strong>Research Report</strong>. Initially it was dense, analyst-level and hard for lay users. The breakthrough was reframing the question: not “how do we show research?” but “how do we translate intelligence?” We structured reports into: recommendation (Buy/Sell/Partial), rationale in plain language, contextual explanation and supporting research note. That reduced intimidation without reducing credibility.
        </p>
        <CaseStudyCallout variant="accent">
          <strong>Turning point:</strong> Early in the project I focused heavily on visual polish. After a month or two I realised that polish without structural clarity does not solve trust problems. From then on I prioritised information hierarchy, behavioural flow, cognitive load reduction and subscription psychology. That shift changed the trajectory of Gen4.
        </CaseStudyCallout>
      </CaseStudySection>

      <CaseStudyMediaBlock
        variant="full"
        placeholderLabel="Research report: translated intelligence (recommendation, rationale, note)"
        caption="Research report structure: recommendation, rationale, supporting note."
      />

      {/* 08 Visual Design and UI System */}
      <CaseStudySection
        sectionNumber="08"
        title="Visual Design and UI System"
        width="full"
      >
        <p className="max-w-[720px] mb-8">
          Once the flows were stable, I tuned the visual language to signal trust and calm while
          still feeling modern. Deep blues and greens carry most of the weight, with a blue accent
          reserved for primary actions and important highlights.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl bg-white p-6 shadow-md space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-muted, #5a6b73)" }}>
              Typography
            </p>
            <p
              className="text-3xl md:text-4xl font-medium"
              style={{
                fontFamily: 'var(--font-libre-baskerville), "Libre Baskerville", serif',
                fontStyle: "italic",
                color: "var(--foreground, #233245)",
              }}
            >
              Aa
            </p>
            <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Libre Baskerville for headings brings a bit of editorial seriousness. DM Sans handles
              dense financial text in a friendly, readable way.
            </p>
          </div>
          <div className="rounded-3xl bg-[#e8eef4] p-6 shadow-inner space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-muted, #5a6b73)" }}>
              Colour
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="w-20 h-14 rounded-2xl bg-white border border-[#dce4ec]" />
              <div className="w-20 h-14 rounded-2xl" style={{ backgroundColor: "#233245" }} />
              <div className="w-20 h-14 rounded-2xl" style={{ backgroundColor: "#2d5a6b" }} />
              <div className="w-20 h-14 rounded-2xl" style={{ backgroundColor: "#006793" }} />
            </div>
            <p className="text-sm leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              The palette stays tight to keep charts and tables calm. The blue accent appears only when the
              app is asking for a decision.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 09 What We Shipped */}
      <CaseStudySection sectionNumber="09" title="What We Shipped">
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-8">
          Savart Gen4 became a <strong>structured investment journey</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#dce4ec] bg-[#f0f6fa] p-6">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#006793" }}>Before subscription</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Portfolio review, what-if calculator, risk profiling, financial health report, stock review and free exploration tools. Users now had things to do.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dce4ec] bg-[#f0f6fa] p-6">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#233245" }}>After subscription</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Structured advice requests, clear advisory breakdown, portfolio health tracking, deviation analysis and broker-linked execution.
            </p>
          </div>
        </div>
        <p className="text-[17px] leading-[1.7] text-[#233245] mt-6">
          Navigation was simplified with bottom navigation, hamburger for system-level actions and contextual nudges during onboarding. We prioritised performance and clarity. Complex fintech logic was layered progressively.
        </p>
      </CaseStudySection>

      <CaseStudyMediaBlock
        variant="flow"
        placeholderLabel="End-to-end flow: onboarding to free tools to subscription to advice"
        caption="High-level product flow (before and after subscription)."
      />
      <CaseStudyMediaBlock
        variant="two-col"
        placeholderLabel="Bottom nav and key screens (portfolio, advice)"
        placeholderLabel2="Onboarding and contextual nudges"
        caption="Navigation and onboarding patterns."
      />

      <BentoFeatureSection
        className="px-0"
        title="Gen4 capabilities at a glance"
        cards={[
          {
            title: "Portfolio health",
            description:
              "One place to see how you are doing, what is working and what needs attention, without digging through broker apps.",
          },
          {
            title: "Advice engine",
            description:
              "Structured requests, clear guidelines and rationale that translate complex research into simple next steps.",
          },
          {
            title: "Free exploration tools",
            description:
              "What-if calculator, stock review and health reports that let users experience value even before subscribing.",
          },
          {
            title: "Onboarding & linking",
            description:
              "Guided flows for KYC and broker linking so new investors do not get stuck before they see any insight.",
          },
          {
            title: "Tracking & nudges",
            description:
              "Lightweight reminders and deviation tracking to keep portfolios aligned with the original plan.",
          },
        ]}
      />

      {/* 09.1 Evaluating the experience */}
      <CaseStudySection sectionNumber="09.1" title="Evaluating the experience" width="full">
        <p className="max-w-[720px] mb-12 text-[17px] leading-[1.7] text-[#233245]">
          To ensure Savart Gen4 delivers clarity, trust, and structured investment guidance, I evaluated the experience across four critical dimensions — usability, comprehension, behavioural flow, and resilience under friction. These parameters helped assess whether the product reduces cognitive load while increasing investor confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-6">
          {EVAL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#233245]" style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
                {cat.title}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.cards.map((card) => (
                  <EvalCard key={card.title} title={card.title} question={card.question} focus={card.focus} bg={cat.bg} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 10 What Changed */}
      <CaseStudySection sectionNumber="10" title="What Changed" width="full">
        <CaseStudyMetricsGrid
          subtitle="The Gen4 effect"
          title="Outcomes that matter"
          metrics={[
            { value: "Reduced confusion", label: "Around portfolio tracking and clarity" },
            { value: "Better clarity", label: "In advisory output and recommendations" },
            { value: "Increased engagement", label: "With free tools before subscription" },
            { value: "Stronger alignment", label: "Internal product-led sales motion" },
            { value: "Structured onboarding", label: "Replacing manual dependency" },
          ]}
          className="mt-4"
        />
        <p className="max-w-[720px] mt-10 text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
          <strong>What did not work perfectly:</strong> Data accuracy issues via AA persisted; regulatory constraints limited some simplifications; a few advanced users wanted deeper analytics. Overall, Gen4 felt stable, structured and intentional, unlike Gen3.
        </p>
      </CaseStudySection>

      {/* 11 Looking Back & Tools */}
      <CaseStudySection sectionNumber="11" title="Looking Back">
        <div className="rounded-2xl border border-[#dce4ec] bg-[#f0f6fa] p-6 mb-6">
          <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--color-muted, #5a6b73)" }}>Tools & methods</p>
          <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
            Used Figma for design and prototyping; Miro for affinity mapping. Where helpful, AI assisted with research synthesis and copy ideas—then refined and validated by hand.
          </p>
        </div>
        <div className="rounded-2xl border border-[#dce4ec] bg-white p-6 shadow-sm mb-6">
          <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#006793" }}>What I learned</p>
          <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
            Fintech UX is about trust architecture. Structure matters more than surface. Free experience must prove value. Complexity has to be layered, not removed. Behavioural design drives subscription more than persuasion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#dce4ec] bg-[#f0f6fa] p-6">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-muted, #5a6b73)" }}>Mistakes</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              I over-prioritised UI polish early, underestimated structural complexity and took time to shift from visual thinking to systems thinking.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dce4ec] bg-[#f0f6fa] p-6">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-muted, #5a6b73)" }}>What I would do differently</p>
            <p className="text-[15px] leading-snug" style={{ color: "var(--foreground, #233245)" }}>
              Introduce lightweight usability testing loops earlier, validate advice readability with real users and push harder for research structure even in startup chaos.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 12 Conclusion: how solution solves the problem + next steps */}
      <CaseStudySection sectionNumber="12" title="Conclusion">
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-6">
          Gen4 addressed the core problem—<strong>users needed to see value before subscribing</strong>—by making portfolio health and advisory clarity the hero of the free experience, simplifying risk profiling, and aligning the product with a product-led sales motion. The solution reduced confusion, increased engagement with free tools, and replaced manual onboarding with structured flows.
        </p>
        <p className="text-[17px] leading-[1.7] text-[#233245] mb-6">
          <strong>Next steps I would take:</strong> Lightweight usability testing loops earlier; validate advice readability with real users; push for more research structure even in startup chaos. Data accuracy via AA and some regulatory constraints remain areas to improve with engineering and compliance.
        </p>
        <CaseStudyCallout variant="dark">
          Savart Gen4 was not just a redesign. It was a structural rethinking of advisory UX, a move from sales-led to product-led motion, and a system built under pressure.
          <span className="block mt-4 text-white/85 text-[15px]">
            If a hiring manager reads this: they can see that I can handle complex fintech systems, think deeply about behaviour and bring structure to ambiguity.
          </span>
        </CaseStudyCallout>
      </CaseStudySection>
    </article>
  );
}
