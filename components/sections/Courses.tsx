"use client";

import { motion, Variants } from "motion/react";
import SectionHead from "../ui/SectionHead";
import TiltedCard from "../ui/TiltedCard";
import { getStackIcon } from "../../lib/Logos";
import { SiUdemy, SiYoutube } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import {
  FiCalendar,
  FiUser,
  FiCheckCircle,
  FiExternalLink,
  FiAward,
  FiShield,
} from "react-icons/fi";

const MotionSection = motion.section;
const MotionDiv = motion.div;

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  init: { opacity: 0, y: 25 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface CourseItem {
  id: number;
  name: string;
  roleSubtitle?: string;
  badge: string;
  platform: string;
  platformIcon: "company" | "university" | "udemy" | "youtube";
  instructor: string;
  from: string;
  to: string;
  ref?: string;
  certificateUrl?: string;
  description: string;
  skills: string[];
  featured?: boolean;
}

const detailedCourses: CourseItem[] = [
  {
    id: 4,
    name: "Junior Frontend Developer",
    roleSubtitle: "Promoted from Software Engineering Trainee",
    badge: "Professional Experience",
    platform: "ViggoVet (ViggoTech)",
    platformIcon: "company",
    instructor: "Amr El-Sayed (CTO) • Core Product Team",
    from: "Supervised Training",
    to: "Production Engineer",
    ref: "Ref: VV/HR/TRN/2026-4",
    certificateUrl:
      "https://drive.google.com/file/d/1JiVvZdbtf_TiBBNpHwfkRhBzu_FsEChj/view?usp=sharing",
    featured: true,
    description:
      "Joined ViggoVet through a supervised practical engineering program with the product team, subsequently advancing into a Junior Frontend Developer role. Engineered production veterinary practice management software using Vue.js 3 with TypeScript, participating in architecture discussions, code reviews, task testing, and CI/CD release workflows.",
    skills: [
      "Vue.js 3",
      "Pinia",
      "Vuetify",
      "Element Plus",
      "TypeScript",
      "Git",
      "CI/CD",
    ],
  },
  {
    id: 3,
    name: "Bachelor's in Computer Science",
    badge: "Academic Degree",
    platform: "Tanta University",
    platformIcon: "university",
    instructor: "Faculty of Computer and Information",
    from: "Undergraduate",
    to: "Degree in Progress",
    description:
      "Core academic studies in computational theory, algorithm design, data structures, software engineering, and database systems.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Databases",
      "Software Engineering",
    ],
  },
  {
    id: 0,
    name: "The Ultimate React Course: React, Next.js, Redux & More",
    badge: "Advanced Mastery",
    platform: "Udemy",
    platformIcon: "udemy",
    instructor: "Jonas Schmedtmann",
    from: "Self-Paced",
    to: "Certified",
    certificateUrl:
      "https://drive.google.com/file/d/1gonF6AbDCs_iP_fJM9MdEZPpfC7G1WJO/view?usp=sharing",
    description:
      "Mastery of modern React architecture, custom hooks, state management with Redux Toolkit, React Query, and full-stack Next.js applications.",
    skills: ["React", "Next.js", "Redux", "Tailwind", "React Query"],
  },
  {
    id: 1,
    name: "The Complete JavaScript Course: Zero to Expert",
    badge: "Core JavaScript",
    platform: "Udemy",
    platformIcon: "udemy",
    instructor: "Jonas Schmedtmann",
    from: "Self-Paced",
    to: "Certified",
    description:
      "Deep dive into the JavaScript engine, execution context, event loop, asynchronous promises, modern ES6+ patterns, and modular design.",
    skills: ["Javascript", "ES6+", "Async/Await", "DOM API", "OOP"],
  },
  {
    id: 2,
    name: "HTML, CSS & Modern Web Fundamentals",
    badge: "Web Foundations",
    platform: "YouTube / Elzero Web School",
    platformIcon: "youtube",
    instructor: "Osama Elzero",
    from: "Self-Paced",
    to: "Certified",
    description:
      "Semantic HTML5, advanced CSS layouts with Flexbox and Grid, mobile-first responsive architecture, and web accessibility standards.",
    skills: ["Html", "Css", "Responsive Design", "CSS Grid", "Flexbox"],
  },
];

export default function Courses() {
  const renderPlatformBadge = (course: CourseItem) => {
    const iconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0";
    switch (course.platformIcon) {
      case "company":
        return (
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
            <BiBuilding className={iconClass} />
            <span className="truncate">{course.platform}</span>
          </span>
        );
      case "university":
        return (
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-400">
            <FaGraduationCap className={iconClass} />
            <span className="truncate">{course.platform}</span>
          </span>
        );
      case "udemy":
        return (
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-300">
            <SiUdemy className={`${iconClass} text-[#a435f0]`} />
            <span className="truncate">{course.platform}</span>
          </span>
        );
      case "youtube":
        return (
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-red-500/10 border border-red-500/25 text-red-400">
            <SiYoutube className={`${iconClass} text-red-500`} />
            <span className="truncate">{course.platform}</span>
          </span>
        );
    }
  };

  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      id="experience"
      whileInView="reveal"
      viewport={{ amount: 0.15, once: true }}
      className="relative flex flex-col items-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20 gap-y-10 md:gap-y-16 w-full max-w-7xl mx-auto overflow-hidden"
    >
      {/* Anchor for backward compatibility */}
      <span id="courses" className="absolute -top-24" />

      {/* Header */}
      <div className="flex flex-col items-center gap-y-3 text-center max-w-2xl">
        <SectionHead animate={false}>Experience & Education</SectionHead>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          Practical software engineering experience, supervised industry
          training, academic computer science education, and modern web
          certifications.
        </p>
      </div>

      {/* 3D Tilted Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-7 w-full">
        {detailedCourses.map((course) => (
          <MotionDiv
            key={course.id}
            variants={cardVariants}
            className={`w-full h-full ${
              course.featured ? "md:col-span-2" : "col-span-1"
            }`}
          >
            <TiltedCard
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.02}
              rotateAmplitude={course.featured ? 6 : 10}
              showMobileWarning={false}
              showTooltip={false}
              className="h-full"
            >
              {/* Frosted Glass 3D Card Surface */}
              <div
                className={`group relative flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-2xl shadow-xl transition-all duration-300 overflow-hidden ${
                  course.featured
                    ? "bg-linear-to-br from-neutral-900/90 via-neutral-900/80 to-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/50 shadow-emerald-950/20"
                    : "bg-neutral-900/70 border border-white/10 hover:border-indigo-500/40"
                }`}
              >
                {/* Ambient corner glow */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[70px] pointer-events-none transition-all duration-500 ${
                    course.featured
                      ? "bg-emerald-500/20 group-hover:bg-emerald-500/30"
                      : "bg-indigo-600/15 group-hover:bg-indigo-600/25"
                  }`}
                />

                <div className="flex flex-col gap-2.5 sm:gap-3.5 relative z-10">
                  {/* Badges Strip (responsive wrap on mobile, inline on desktop) */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 py-0.5 w-full">
                    {renderPlatformBadge(course)}

                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-zinc-300 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 whitespace-nowrap">
                      <FiCheckCircle
                        size={11}
                        className="text-emerald-400 shrink-0"
                      />
                      <span>{course.badge}</span>
                    </span>

                    {course.ref && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 whitespace-nowrap">
                        <FiShield
                          size={11}
                          className="text-emerald-400 shrink-0"
                        />
                        <span>{course.ref}</span>
                      </span>
                    )}

                    {course.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 shrink-0 whitespace-nowrap">
                        ✨ Production Role
                      </span>
                    )}

                    {course.certificateUrl && (
                      <a
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-white border border-emerald-500/30 transition-all cursor-pointer shrink-0 whitespace-nowrap group/btn sm:ml-auto"
                        title="View Certificate"
                      >
                        <FiAward
                          size={11}
                          className="text-amber-400 shrink-0"
                        />
                        <span>Certificate</span>
                        <FiExternalLink
                          size={10}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0"
                        />
                      </a>
                    )}
                  </div>

                  {/* Course Title + Role Subtitle */}
                  <div className="flex flex-col gap-1 mt-0.5">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {course.name}
                    </h3>
                    {course.roleSubtitle && (
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-400/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span>{course.roleSubtitle}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed text-pretty">
                    {course.description}
                  </p>

                  {/* Metadata Row: Instructor / Supervisor & Timeline */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 pt-3 text-[11px] sm:text-xs text-zinc-400 border-t border-white/5">
                    <span className="inline-flex items-center gap-1.5 min-w-0">
                      <FiUser size={12} className="text-indigo-400 shrink-0" />
                      <span className="truncate text-zinc-300 font-medium">
                        {course.instructor}
                      </span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 shrink-0 text-zinc-400">
                      <FiCalendar
                        size={12}
                        className="text-indigo-400 shrink-0"
                      />
                      <span>
                        {course.from} — {course.to}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Key Skills Tags with Tech Icons */}
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-3 sm:pt-3.5 mt-2.5 sm:mt-3 border-t border-white/10 relative z-10">
                  {course.skills.map((skill) => {
                    const icon = getStackIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium bg-neutral-950/70 border border-white/10 text-zinc-300 group-hover:border-white/20 transition-all shadow-xs"
                      >
                        {icon && (
                          <span className="text-[11px] sm:text-sm shrink-0 flex items-center">
                            {icon}
                          </span>
                        )}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </TiltedCard>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}
