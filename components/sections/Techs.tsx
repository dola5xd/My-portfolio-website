"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "motion/react";
import SectionHead from "../ui/SectionHead";
import FolderFloat, { FolderFloatItem } from "../ui/FolderFloat";
import { getStackIcon } from "../../lib/Logos";

const MotionSection = motion.section;

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.15 } },
};

interface TechCategory {
  id: string;
  label: string;
  sublabel: string;
  folderColor: string;
  frontColor: string;
  paperColor: string;
  itemColor: string;
  itemTextColor: string;
  glowColor: string;
  items: FolderFloatItem[];
}

export default function Techs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const hasTouch =
        "ontouchstart" in window ||
        (typeof navigator !== "undefined" && (navigator.maxTouchPoints ?? 0) > 0);
      setIsMobile(window.innerWidth < 768 || hasTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories: TechCategory[] = [
    {
      id: "frameworks",
      label: "Core Frameworks",
      sublabel: "5 core engines",
      folderColor: "#16152b",
      frontColor: "#3730a3",
      paperColor: "#e0e7ff",
      itemColor: "#18181b",
      itemTextColor: "#ffffff",
      glowColor: "rgba(79, 70, 229, 0.22)",
      items: [
        { label: "React", value: "React", icon: getStackIcon("React") },
        { label: "Next.js", value: "Next.js", icon: getStackIcon("Next.js") },
        { label: "Vue.js 3", value: "Vue.js", icon: getStackIcon("Vue.js") },
        {
          label: "TypeScript",
          value: "TypeScript",
          icon: getStackIcon("TypeScript"),
        },
        {
          label: "JavaScript",
          value: "JavaScript",
          icon: getStackIcon("JavaScript"),
        },
      ],
    },
    {
      id: "styling",
      label: "Styling & UI Systems",
      sublabel: "6 design systems",
      folderColor: "#20122e",
      frontColor: "#6b21a8",
      paperColor: "#f3e8ff",
      itemColor: "#18181b",
      itemTextColor: "#ffffff",
      glowColor: "rgba(168, 85, 247, 0.22)",
      items: [
        {
          label: "Tailwind CSS",
          value: "Tailwind CSS",
          icon: getStackIcon("Tailwind"),
        },
        {
          label: "Vuetify",
          value: "Vuetify",
          icon: getStackIcon("Vuetify"),
        },
        {
          label: "Element Plus",
          value: "Element Plus",
          icon: getStackIcon("Element Plus"),
        },
        {
          label: "Framer Motion",
          value: "Framer Motion",
          icon: getStackIcon("Framer Motion"),
        },
        { label: "GSAP", value: "GSAP", icon: getStackIcon("GSAP") },
        { label: "Sass / SCSS", value: "Sass", icon: getStackIcon("Sass") },
      ],
    },
    {
      id: "state",
      label: "State & Data",
      sublabel: "6 data platforms",
      folderColor: "#0a1e33",
      frontColor: "#0284c7",
      paperColor: "#e0f2fe",
      itemColor: "#18181b",
      itemTextColor: "#ffffff",
      glowColor: "rgba(14, 165, 233, 0.22)",
      items: [
        {
          label: "Redux Toolkit",
          value: "Redux",
          icon: getStackIcon("Redux"),
        },
        {
          label: "Pinia",
          value: "Pinia",
          icon: getStackIcon("Pinia"),
        },
        {
          label: "React Query",
          value: "React Query",
          icon: getStackIcon("React Query"),
        },
        {
          label: "Supabase",
          value: "Supabase",
          icon: getStackIcon("Supabase"),
        },
        {
          label: "React Router",
          value: "React Router",
          icon: getStackIcon("React Router"),
        },
        {
          label: "Sanity CMS",
          value: "Sanity",
          icon: getStackIcon("Sanity"),
        },
      ],
    },
    {
      id: "workflow",
      label: "DevOps & Standards",
      sublabel: "6 tools & standards",
      folderColor: "#0a241a",
      frontColor: "#059669",
      paperColor: "#dcfce7",
      itemColor: "#18181b",
      itemTextColor: "#ffffff",
      glowColor: "rgba(16, 185, 129, 0.22)",
      items: [
        { label: "Git", value: "Git", icon: getStackIcon("Git") },
        { label: "GitHub", value: "GitHub", icon: getStackIcon("GitHub") },
        {
          label: "CI/CD Workflows",
          value: "CI/CD",
          icon: getStackIcon("cicd"),
        },
        {
          label: "Styled Components",
          value: "Styled Components",
          icon: getStackIcon("Styled Components"),
        },
        { label: "HTML5", value: "HTML5", icon: getStackIcon("HTML5") },
        { label: "CSS3", value: "CSS3", icon: getStackIcon("CSS3") },
      ],
    },
  ];

  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      id="techs"
      whileInView="reveal"
      className="flex flex-col items-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20 gap-y-10 sm:gap-y-12 w-full max-w-7xl mx-auto overflow-hidden"
    >
      {/* Header Container */}
      <div className="flex flex-col items-center gap-y-3 text-center max-w-2xl">
        <SectionHead animate={false}>Tech Stack</SectionHead>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
          Technologies and tools I use to build fast, modern web applications.
        </p>
      </div>

      {/* Unified 3D Folders Grid */}
      <div className="w-full flex flex-col items-center gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-36 pt-24 pb-8 w-full justify-items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex flex-col items-center justify-end h-48"
            >
              {/* Subtle ambient floor glow behind each folder matching its design-system palette */}
              <div
                className="absolute -bottom-6 w-48 h-24 rounded-full blur-[45px] pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: cat.glowColor }}
              />

              <FolderFloat
                items={cat.items}
                label={cat.label}
                sublabel={cat.sublabel}
                trigger={isMobile ? "click" : "hover"}
                physics
                drift={0.6}
                width={220}
                height={155}
                radius={16}
                spread={isMobile ? 120 : 160}
                lift={28}
                tilt={9}
                folderColor={cat.folderColor}
                frontColor={cat.frontColor}
                paperColor={cat.paperColor}
                itemColor={cat.itemColor}
                itemTextColor={cat.itemTextColor}
                labelColor="#ffffff"
              />
            </div>
          ))}
        </div>

        {/* Interaction Hint */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/60 border border-white/10 text-zinc-400 text-xs shadow-md backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>
            {isMobile
              ? "Tap any folder to open"
              : "Hover any folder to open"}{" "}
          </span>
        </div>
      </div>
    </MotionSection>
  );
}
