"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import SectionHead from "../ui/SectionHead";
import SpotlightCard from "../ui/SpotlightCard";
import { getStackIcon } from "../../lib/Logos";
import dynamic from "next/dynamic";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";
import { GrGamepad } from "react-icons/gr";
import { PiGraduationCap } from "react-icons/pi";

const Squares = dynamic(() => import("../ui/Squares"), { ssr: false });

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 30 : direction < 0 ? -30 : 0,
    y: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -30 : direction < 0 ? 30 : 0,
    y: 0,
  }),
};

interface Chapter {
  id: string;
  step: string;
  badge: string;
  badgeColor: string;
  glowColor: string;
  accentHex: string;
  title: string;
  subtitle: string;
  story: string;
  milestone: string;
  tags: string[];
  cta?: {
    label: string;
    href: string;
  };
}

const chapters: Chapter[] = [
  {
    id: "origins",
    step: "01 // ORIGINS",
    badge: "The Curiosity Spark",
    badgeColor: "bg-pink-500/15 border-pink-500/30 text-pink-300",
    glowColor: "rgba(236, 72, 153, 0.2)",
    accentHex: "#ec4899",
    title: "From Gamer to Creator",
    subtitle: "Video games, hardware curiosity, and the first lines of code",
    story:
      "My passion for computers didn't begin in a lecture hall — it was born playing video games and taking apart hardware to see how digital worlds tick. That intense curiosity pushed me to write my very first lines of HTML and CSS. The moment I witnessed simple markup render into an interactive web page, I knew software engineering was my calling.",
    milestone: "Curiosity turned into code • Built first responsive web pages",
    tags: ["HTML5", "CSS3", "JavaScript", "Problem Solving", "Curiosity"],
  },
  {
    id: "foundations",
    step: "02 // FOUNDATIONS",
    badge: "Computer Science",
    badgeColor: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
    glowColor: "rgba(99, 102, 241, 0.2)",
    accentHex: "#6366f1",
    title: "Algorithmic Discipline",
    subtitle: "Tanta University • Faculty of Computers and Information",
    story:
      "To build enduring software, I immersed myself in the rigorous Computer Science program at Tanta University. Moving far beyond syntax, I focused deeply on Data Structures, Algorithm Optimization, Object-Oriented Design, and Database Architecture — mastering the analytical discipline needed to write high-performance, maintainable code.",
    milestone: "Data Structures & Algorithms • Degree in Progress",
    tags: [
      "Algorithms",
      "Data Structures",
      "OOP",
      "Databases",
      "System Design",
    ],
    cta: {
      label: "View Academic Details",
      href: "/#experience",
    },
  },
  {
    id: "specialization",
    step: "03 // MODERN STACK",
    badge: "UI Engineering",
    badgeColor: "bg-sky-500/15 border-sky-500/30 text-sky-300",
    glowColor: "rgba(2, 132, 199, 0.2)",
    accentHex: "#0284c7",
    title: "Mastering the Modern Web",
    subtitle: "React, Next.js, TypeScript & fluid state machines",
    story:
      "When I discovered React, frontend development shifted from styling pages to architecting reactive component trees. I mastered custom hooks, predictable state management with Redux Toolkit and React Query, and adopted Next.js as my primary foundation for server-side rendering, sub-second routing, and strict TypeScript safety.",
    milestone: "Certified React & Next.js Mastery • Fluid Animation Engines",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "GSAP"],
    cta: {
      label: "Explore Tech Stack",
      href: "/#techs",
    },
  },
  {
    id: "production",
    step: "04 // PRODUCTION",
    badge: "ViggoVet Engineering",
    badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    glowColor: "rgba(16, 185, 129, 0.25)",
    accentHex: "#10b981",
    title: "Production at Scale",
    subtitle:
      "Promoted from Software Engineering Trainee to Junior Frontend Developer",
    story:
      "Theory transformed into production discipline at ViggoVet. Collaborating with the CTO and senior engineering team on enterprise medical software, I took on reactive frontend architectures using Vue.js 3, Pinia, Vuetify, and Element Plus. From complex clinical user flows to automated CI/CD workflows, I experienced firsthand how mission-critical software is built and maintained.",
    milestone:
      "✨ Promoted to Junior Frontend Developer • Ref: VV/HR/TRN/2026-4",
    tags: [
      "Vue.js 3",
      "Pinia",
      "Vuetify",
      "Element Plus",
      "TypeScript",
      "CI/CD",
    ],
    cta: {
      label: "View Production Card",
      href: "/#experience",
    },
  },
  {
    id: "impact",
    step: "05 // GLOBAL IMPACT",
    badge: "Commercial Client Work",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    glowColor: "rgba(245, 158, 11, 0.22)",
    accentHex: "#f59e0b",
    title: "Delivering Across Borders",
    subtitle:
      "Platforms for international clients in France and the Middle East",
    story:
      "Taking my engineering skills to the global market, I built and shipped high-performance client platforms: an e-commerce store for vintage football jerseys for a French client (S7 Légendes), a comprehensive e-learning platform with checkout flows and admin dashboards (Galaxy Gates), and consumer hardware stores integrated with Supabase (Elkaed).",
    milestone: "International Client Deliveries • Full E-commerce & Dashboards",
    tags: ["Next.js", "Supabase", "REST APIs", "Dashboards", "Tailwind CSS"],
    cta: {
      label: "Browse Freelance Projects",
      href: "/projects",
    },
  },
];

const AUTO_INTERVAL = 7000; // 7 seconds per chapter

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const currentChapter = chapters[activeIdx];

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % chapters.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + chapters.length) % chapters.length);
    setProgress(0);
  }, []);

  const selectChapter = useCallback(
    (index: number) => {
      setDirection(index > activeIdx ? 1 : -1);
      setActiveIdx(index);
      setProgress(0);
    },
    [activeIdx],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null)
      return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Detect horizontal swipe with clear intent over vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Chapter progress timer: increments smoothly every 50ms without impure Date.now() calls
  useEffect(() => {
    if (!isPlaying || isHovered) {
      return;
    }

    const stepTime = 50;
    const increment = (stepTime / AUTO_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <section
      id="about"
      className="relative w-full py-20 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-10 text-white overflow-hidden"
    >
      {/* Background: Interactive Cyber Grid (Squares) + Dynamic Chapter Aura */}
      <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Dynamic Chapter Glow Aura that morphs color per active chapter */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-112.5 rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: currentChapter.accentHex }}
        />

        {/* Interactive Squares Grid Canvas */}
        <div className="absolute inset-0 pointer-events-auto opacity-35">
          <Squares
            direction="diagonal"
            speed={0.35}
            squareSize={44}
            borderColor="rgba(255, 255, 255, 0.05)"
            hoverFillColor={`${currentChapter.accentHex}25`}
          />
        </div>
      </div>

      {/* Header Container */}
      <div className="flex flex-col items-center gap-y-3 text-center max-w-2xl">
        <SectionHead animate={false}>About Me</SectionHead>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl text-balance">
          The story of an engineer: from gaming curiosity to building production
          software and global commercial platforms.
        </p>
      </div>

      {/* Storyboard Container with Pause-on-Hover */}
      <div
        className="w-full max-w-5xl flex flex-col gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Story Chapters Progress Bar (Instagram / Apple Style) with Hover Tooltips (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 w-full">
          {chapters.map((ch, idx) => {
            const isActive = idx === activeIdx;
            const isCompleted = idx < activeIdx;
            const isFirst = idx === 0;
            const isLast = idx === chapters.length - 1;

            return (
              <div key={ch.id} className="relative flex-1 group">
                <button
                  type="button"
                  onClick={() => selectChapter(idx)}
                  aria-label={`Jump to chapter ${idx + 1}: ${ch.title}`}
                  title={`Chapter ${idx + 1}: ${ch.title}`}
                  className="w-full h-2 rounded-full bg-white/10 overflow-hidden cursor-pointer transition-all duration-200 hover:bg-white/25 block"
                >
                  <div
                    className="h-full rounded-full transition-all duration-100"
                    style={{
                      backgroundColor: ch.accentHex,
                      width: isActive
                        ? `${progress}%`
                        : isCompleted
                          ? "100%"
                          : "0%",
                    }}
                  />
                </button>

                {/* Floating Chapter Tooltip on Progress Bar */}
                <div
                  className={`absolute bottom-full mb-2.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-30 hidden sm:flex flex-col whitespace-nowrap ${
                    isFirst
                      ? "left-0 translate-x-0 items-start"
                      : isLast
                        ? "right-0 translate-x-0 items-end"
                        : "left-1/2 -translate-x-1/2 items-center"
                  }`}
                >
                  <div className="px-3 py-1.5 rounded-xl bg-neutral-900/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col gap-0.5 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ backgroundColor: ch.accentHex }}
                      />
                      <span>Chapter {idx + 1}</span>
                      <span>•</span>
                      <span>{ch.badge}</span>
                    </span>
                    <span className="text-xs font-bold text-white tracking-tight">
                      {ch.title}
                    </span>
                  </div>
                  {/* Tooltip arrow */}
                  <div
                    className={`w-2 h-2 rotate-45 bg-neutral-900/95 border-r border-b border-white/15 -mt-1 ${
                      isFirst ? "ml-4" : isLast ? "mr-4" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Chapter Tabs Strip with Play/Pause & Nav Arrows (Desktop & Tablet only) */}
        <div className="hidden sm:flex items-center justify-between gap-2 overflow-x-auto sm:overflow-visible pb-1 scrollbar-none">
          <div className="flex items-center gap-2">
            {chapters.map((ch, idx) => {
              const isActive = idx === activeIdx;
              const isFirst = idx === 0;
              const isLast = idx === chapters.length - 1;

              return (
                <div key={ch.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => selectChapter(idx)}
                    title={`Chapter ${idx + 1}: ${ch.title} — ${ch.subtitle}`}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? "bg-white/15 text-white border border-white/25 shadow-md shadow-black/40"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: isActive ? ch.accentHex : "#71717a",
                      }}
                    />
                    <span>Chapter {idx + 1}</span>
                  </button>

                  {/* Chapter Tab Tooltip */}
                  <div
                    className={`absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-30 hidden sm:flex flex-col whitespace-nowrap ${
                      isFirst
                        ? "left-0 translate-x-0 items-start"
                        : isLast
                          ? "right-0 translate-x-0 items-end"
                          : "left-1/2 -translate-x-1/2 items-center"
                    }`}
                  >
                    <div className="px-3 py-1.5 rounded-xl bg-neutral-900/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col gap-0.5 text-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block"
                          style={{ backgroundColor: ch.accentHex }}
                        />
                        <span>{ch.badge}</span>
                      </span>
                      <span className="text-xs font-bold text-white tracking-tight">
                        {ch.title}
                      </span>
                    </div>
                    {/* Tooltip arrow */}
                    <div
                      className={`w-2 h-2 rotate-45 bg-neutral-900/95 border-r border-b border-white/15 -mt-1 ${
                        isFirst ? "ml-4" : isLast ? "mr-4" : ""
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls: Play/Pause & Next/Prev */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title={isPlaying ? "Pause auto-advance" : "Play auto-advance"}
            >
              {isPlaying ? <FiPause size={13} /> : <FiPlay size={13} />}
            </button>
            <button
              type="button"
              onClick={goToPrev}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Previous chapter (←)"
            >
              <FiChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Next chapter (→)"
            >
              <FiChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Main Interactive Storyboard Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentChapter.id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              if (offset.x < -30 || velocity.x < -0.2) {
                goToNext();
              } else if (offset.x > 30 || velocity.x > 0.2) {
                goToPrev();
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="touch-pan-y cursor-grab active:cursor-grabbing w-full"
          >
            <SpotlightCard
              className="p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-neutral-950/40 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden"
              spotlightColor={
                currentChapter.glowColor as `rgba(${number}, ${number}, ${number}, ${number})`
              }
            >
              {/* Corner Ambient Glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[90px] pointer-events-none transition-all duration-500 opacity-60"
                style={{ backgroundColor: currentChapter.accentHex }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Story Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {/* Step & Badge Header */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      {currentChapter.step}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${currentChapter.badgeColor}`}
                    >
                      {currentChapter.badge}
                    </span>
                  </div>

                  {/* Chapter Heading */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                      {currentChapter.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                      {currentChapter.subtitle}
                    </p>
                  </div>

                  {/* Narrative Paragraph */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-pretty">
                    {currentChapter.story}
                  </p>

                  {/* Milestone Key Takeaway Pill */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-zinc-200 mt-1">
                    <FiCheckCircle
                      size={16}
                      style={{ color: currentChapter.accentHex }}
                      className="shrink-0"
                    />
                    <span>{currentChapter.milestone}</span>
                  </div>

                  {/* CTA & Hint Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 mt-2">
                    {currentChapter.cta ? (
                      <Link
                        href={currentChapter.cta.href}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all duration-200 cursor-pointer shadow-sm"
                      >
                        <span>{currentChapter.cta.label}</span>
                        <FiArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    ) : (
                      <span className="text-xs text-zinc-500 font-mono">
                        ✦ Hover card to pause reading
                      </span>
                    )}

                    <div className="text-xs text-zinc-500 font-mono hidden sm:block">
                      Use ← → keys to navigate
                    </div>
                  </div>
                </div>

                {/* Right Interactive Visual Stage (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-neutral-950/40 border border-white/10 backdrop-blur-xl relative min-h-65">
                  <ChapterVisual
                    chapterId={currentChapter.id}
                    accentHex={currentChapter.accentHex}
                  />

                  {/* Stack / Concept Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5 w-full pt-4 border-t border-white/10">
                    {currentChapter.tags.map((tag) => {
                      const icon = getStackIcon(tag);
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {icon && <span className="text-xs">{icon}</span>}
                          <span>{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Pagination Dots & Gesture Prompt */}
        <div className="flex sm:hidden items-center justify-between px-2 pt-1 w-full">
          <div className="flex items-center gap-1.5">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => selectChapter(idx)}
                aria-label={`Go to chapter ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? "w-6" : "w-1.5 bg-white/20"
                }`}
                style={{
                  backgroundColor: idx === activeIdx ? ch.accentHex : undefined,
                }}
              />
            ))}
          </div>

          <span className="font-mono text-[11px] text-zinc-400 flex items-center gap-1">
            <span>Swipe</span>
            <span className="text-zinc-300 font-bold">← / →</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/**
 * Custom Visual Interactive Graphic for each Story Chapter
 */
function ChapterVisual({
  chapterId,
  accentHex,
}: {
  chapterId: string;
  accentHex: string;
}) {
  switch (chapterId) {
    case "origins":
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center py-4">
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl relative"
            style={{
              backgroundColor: `${accentHex}20`,
              border: `1px solid ${accentHex}50`,
            }}
          >
            <GrGamepad size={40} style={{ color: accentHex }} />
            <span
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: accentHex }}
            />
          </motion.div>
          <div className="space-y-1">
            <div className="text-sm font-bold text-white">
              First Code Executed
            </div>
            <div className="text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-md border border-white/10">
              &lt;h1&gt;Hello World!&lt;/h1&gt;
            </div>
          </div>
        </div>
      );

    case "foundations":
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center py-4">
          <motion.div
            initial={{ scale: 0.8, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              backgroundColor: `${accentHex}20`,
              border: `1px solid ${accentHex}50`,
            }}
          >
            <PiGraduationCap size={44} style={{ color: accentHex }} />
          </motion.div>
          <div className="space-y-1">
            <div className="text-sm font-bold text-white">Tanta University</div>
            <div className="text-xs text-indigo-300 font-medium">
              Faculty of Computers & Information
            </div>
            <div className="text-[11px] font-mono text-emerald-400">
              ● Degree in Progress
            </div>
          </div>
        </div>
      );

    case "specialization":
      return (
        <div className="flex flex-col items-center justify-center gap-3 text-center py-1 w-full">
          <div className="w-full max-w-xs sm:max-w-sm rounded-xl bg-neutral-900/90 border border-sky-500/30 overflow-hidden shadow-2xl text-left font-mono">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-neutral-950/80 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-zinc-400">
                Architecture.tsx
              </span>
              <span className="text-[10px] text-sky-400 font-bold">
                React 19
              </span>
            </div>
            {/* Terminal Code Body */}
            <div className="p-3 text-[11px] leading-relaxed space-y-1 text-zinc-300">
              <div className="text-zinc-500">
                {"// Modern Reactive Foundation"}
              </div>
              <div>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-sky-300">stack</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">framework:</span>{" "}
                <span className="text-emerald-300">
                  &quot;Next.js App Router&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">typeSafety:</span>{" "}
                <span className="text-amber-300">
                  &quot;Strict TypeScript&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">animation:</span>{" "}
                <span className="text-purple-300">
                  &quot;GSAP + Motion 60fps&quot;
                </span>
                ,
              </div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>
      );

    case "production":
    case "viggovet":
      return (
        <div className="flex flex-col items-center justify-center gap-3 text-center py-2 w-full">
          <div className="w-full p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                <FiBriefcase size={13} />
                <span>ViggoVet</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                Production
              </span>
            </div>
            <div className="text-sm font-bold text-white">
              Junior Frontend Developer
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Promoted from Engineering Trainee</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1.5 border-t border-emerald-500/20">
              <span>Ref: VV/HR/TRN/2026-4</span>
              <a
                href="https://drive.google.com/file/d/1JiVvZdbtf_TiBBNpHwfkRhBzu_FsEChj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white underline inline-flex items-center gap-0.5 transition-colors cursor-pointer"
              >
                <span>Certificate</span>
                <FiArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>
      );

    case "impact":
      return (
        <div className="flex flex-col items-center justify-center gap-3 text-center py-2 w-full">
          <div className="w-full space-y-2 text-left">
            <a
              href="https://galaxy-gates.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/item p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 flex items-center justify-between transition-all duration-200 cursor-pointer block"
            >
              <div>
                <div className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                  Galaxy Gates
                </div>
                <div className="text-[11px] text-amber-400">
                  E-Learning & Checkout
                </div>
              </div>
              <span className="text-xs font-mono text-amber-300 group-hover/item:text-white inline-flex items-center gap-1 transition-colors">
                <span>Live</span>
                <FiArrowUpRight
                  size={13}
                  className="transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                />
              </span>
            </a>

            <a
              href="https://s7-legends.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/item p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 flex items-center justify-between transition-all duration-200 cursor-pointer block"
            >
              <div>
                <div className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                  S7 Légendes 🇫🇷
                </div>
                <div className="text-[11px] text-zinc-400">
                  Client in France
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-400 group-hover/item:text-white inline-flex items-center gap-1 transition-colors">
                <span>Live</span>
                <FiArrowUpRight
                  size={13}
                  className="transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                />
              </span>
            </a>

            <a
              href="https://elkaed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/item p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 flex items-center justify-between transition-all duration-200 cursor-pointer block"
            >
              <div>
                <div className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                  Elkaed
                </div>
                <div className="text-[11px] text-zinc-400">
                  Tech Store + Supabase
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-400 group-hover/item:text-white inline-flex items-center gap-1 transition-colors">
                <span>Live</span>
                <FiArrowUpRight
                  size={13}
                  className="transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>
      );

    default:
      return null;
  }
}
