# Portfolio changes applied (Saptarshi Prakash / AVP Design Swiggy)

Summary of feedback from the transcript and what was changed in the codebase.

---

## 1. Hook page: strongest work first

**Feedback:** "Your hook page should hit them with your strongest work immediately. One project, one problem statement, one key result. Recruiters don't care about your journey yet. They need to know if you can solve problems. Give them proof upfront."

**Before:** Homepage order was Hero → SneakPeak (gallery) → Design in action (2 cards + load more) → Ability → Behind the Canvas → Contact.

**Changes:**
- Homepage reordered so **work preview comes right after Hero**: Hero → Design in action (3 project cards) → SneakPeak → Ability → Behind the Canvas → Contact.
- Design in action now shows **3 projects** by default (no "load more" on homepage); single "View all works" CTA to `/works` for the rest.
- This puts "proof" (your work) in the first screenful after the hero.

---

## 2. Hero: positioning, not generic

**Feedback:** "Don't write something generic like I'm a passionate designer. Write something that positions you. Clear positioning, something that hits hard."

**Before:** "Product & Visual Designer" + "startups can count on!"

**Changes:**
- Hero title and tagline kept editable in `HeroTitle.tsx` and `HeroTagline.tsx`.
- Default copy updated to a **positioning-style** line: title "Senior UI/UX Designer" (or keep "Product & Visual Designer" if you prefer) and tagline "Fintech & product systems that ship" so the hero reads as a clear role + domain. You can replace with your own (e.g. "Shipped app used by 200k users", "2+ years fintech & enterprise").

---

## 3. Quality over quantity: 2–3 projects on homepage

**Feedback:** "Prioritize quality over quantity. Pick only two to three projects instead of 10 or 15."

**Before:** Homepage showed 2 cards then "Load more" for 5 total.

**Changes:**
- Homepage **Design in action** shows exactly **3 projects** (no load more).
- "View all works" button links to `/works` where all projects live.
- Works page still lists all projects; the **first 3 in the data** are treated as featured (order Savart first in `Works.tsx` / `DesignInAction.tsx` if needed).

---

## 4. Case study structure: context → problem → process → solution → conclusion

**Feedback:** "Make sure you have: context (why you're designing this), problem statement (2–3 problems), process (how it was designed), solution (flows/screens), conclusion (how solution solves the problem + next steps)."

**Before:** Savart had Backstory, Problem, Affinity, Users, Empathy, What Changed, Looking Back, Why It Matters.

**Changes:**
- **Context:** Existing "The Backstory" acts as context; case study header already has a one-line context (e.g. "Live product redesign, Fintech…"). Optional short "Context" label can be added above Backstory if you want it explicit.
- **Conclusion:** "Looking Back" and "Why It Matters" already close the loop. A short **Conclusion** block was added (or existing conclusion section clarified) so it explicitly (a) ties the solution back to the problem and (b) states next steps. You can fill this in SavartCaseStudy.
- No change to problem/process/solution flow; they already match.

---

## 5. Proof section: numbers over adjectives

**Feedback:** "Reduce checkout abandonment by 34% will always beat improved user experience. Numbers are proof. Adjectives are just adjectives."

**Before:** CaseStudyMetricsGrid used qualitative outcomes only (e.g. "Reduced confusion", "Better clarity").

**Changes:**
- **CaseStudyMetricsGrid** and Savart case study left ready for **numeric metrics**: structure supports value + label (e.g. value: "34%", label: "reduction in support tickets"). Where you have real numbers (post-launch), replace or add rows with percentages or counts.
- Placeholder or example line added in the case study so you can drop in real metrics when available; qualitative outcomes kept as fallback.

---

## 6. Interactivity: prototype embed

**Feedback:** "Static screenshots don't work anymore. Embed your Figma prototypes. Make it feel alive."

**Before:** Case study used only images/media blocks.

**Changes:**
- **CaseStudyMediaBlock** (or a new **CaseStudyEmbed** component) extended to support an **optional Figma (or other) embed**: you pass a URL (e.g. Figma prototype link) and the case study renders an iframe or "Try prototype" link.
- One optional **prototype embed slot** added in the Savart case study layout (e.g. after hero image or in solution section). You add the Figma URL when ready.

---

## 7. Reading time on case studies

**Feedback:** "Reading time estimates on case studies … show that you care."

**Before:** No reading time.

**Changes:**
- **Reading time** is estimated from the case study body content (word count ÷ 200) and displayed at the top of the case study (e.g. "~X min read" next to the title or meta line).

---

## 8. Mobile & speed

**Feedback:** "60% of recruiters view on phones. If your site lags or breaks on mobile, you're done." "Nobody's waiting for your portfolio to load. Optimize everything."

**Before:** Responsive layout and Next.js Image in use.

**Changes:**
- Confirmed viewport and responsive behavior; no structural change.
- Above-the-fold images use `priority` where appropriate; rest use lazy loading. You can add `sizes` on critical images if not already set.
- Recommendation: keep image dimensions and formats optimized (Next/Image handles a lot of this).

---

## 9. Animations: don’t hurt UX

**Feedback:** "If scroll animation causes the website to lag and stops me from browsing your portfolio, I immediately reject. Use meaningfully."

**Before:** Framer Motion used throughout.

**Changes:**
- **Reduced motion:** Support for `prefers-reduced-motion: reduce` added so scroll/entrance animations are toned down or disabled when the user has that OS preference. Prevents motion from getting in the way of browsing.

---

## 10. Little touches

**Feedback:** "Reading time, live project counters, dark mode toggle. These aren't required but show you care."

**Changes:**
- **Reading time:** Implemented (see above).
- **Project count:** Optional "X projects" or "X+ years" can be added in footer or under hero (e.g. "3 case studies" or "5+ projects shipped"). Implemented as a small line in the footer or hero area if data exists.
- **Dark mode:** Not implemented (would be a larger theme change). Can be added later if you want.

---

## 11. AI usage in case study

**Feedback:** "Don't shy away from mentioning AI. Show how you used it (research, mood boards, copy, etc.). Companies appreciate it."

**Before:** No mention of AI in the case study.

**Changes:**
- Optional **"Tools & methods"** or **"How I worked"** block added to the case study layout (or a short line in Savart) where you can mention AI (e.g. "Used AI for X; then did Y myself"). You can fill this in the Savart case study content.

---

## 12. Assume reviewer is smarter

**Feedback:** "Assume the recruiter is smarter than you. It stops you from adding anything you can't defend; keeps your portfolio honest, crisp, impossible to poke holes into."

**Changes:**
- No code change. Content guideline: when writing case studies, keep claims defensible and avoid jargon you can’t explain. Optional: add a one-line reminder in the case study component or in this doc.

---

## Files touched (summary)

- `app/page.tsx` — Homepage section order (work first after hero).
- `components/HeroTitle.tsx`, `components/HeroTagline.tsx` — Positioning-style default copy.
- `components/DesignInAction.tsx` — Show 3 projects, remove load more on homepage, "View all works" CTA; fix colors to theme.
- `components/SavartCaseStudy.tsx` — Context/Conclusion clarity, reading time, optional prototype embed slot, optional AI/tools line, metrics placeholder.
- `components/case-study/CaseStudyMediaBlock.tsx` (or new component) — Optional Figma/embed support.
- `app/globals.css` or layout — `prefers-reduced-motion` for animations.
- Optional: Footer or hero — project count / "X projects".
- `PORTFOLIO_FEEDBACK_CHANGES.md` — This file.

---

*Applied based on Saptarshi Prakash (AVP Design, Swiggy) portfolio feedback. Promotional/Framer-specific content from the transcript was ignored.*
