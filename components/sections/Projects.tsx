"use client";

import Link from "next/link";
import SectionHead from "../ui/SectionHead";
import { motion, Variants } from "motion/react";
import FlowingMenu from "../ui/FlowingMenu";
import { SanityProject } from "../../lib/sanity";
import { FiArrowRight } from "react-icons/fi";

const MotionSection = motion.section;

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.25 } },
};

interface ProjectsProps {
  initialProjects?: SanityProject[];
  totalProjectsCount?: number;
}

export default function Projects({
  initialProjects = [],
  totalProjectsCount = 0,
}: ProjectsProps) {
  // Map featured projects from Sanity to FlowingMenu items
  const flowingItems = initialProjects.map((project) => ({
    link: project.url?.demo || project.url?.repo || "#",
    text: project.title,
    image:
      typeof project.image === "string"
        ? project.image
        : project.imageUrl || "/fallback.jpg",
  }));

  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      id="projects"
      whileInView="reveal"
      viewport={{ amount: 0.1, once: true }}
      className="flex flex-col items-center gap-10 py-16 w-full overflow-hidden"
    >
      {/* Header Container with padding */}
      <div className="flex flex-col items-center gap-y-3 px-6 md:px-20">
        <SectionHead animate={false}>Featured Projects</SectionHead>
        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base">
          A curated selection of featured applications showcasing frontend
          engineering, WebGL graphics, and responsive UI design.
        </p>
      </div>

      {/* Full-width Flowing Menu */}
      {flowingItems.length > 0 ? (
        <div className="w-full flex flex-col items-center gap-4">
          {/* FULL WIDTH Edge-to-Edge Container */}
          <div className="w-full border-y border-white/10 overflow-hidden bg-neutral-950/40 backdrop-blur-md shadow-2xl relative">
            <FlowingMenu
              items={flowingItems}
              speed={14}
              bgColor="transparent"
              textColor="#ffffff"
              borderColor="rgba(255, 255, 255, 0.12)"
              marqueeBgColor="#4f46e5"
              marqueeTextColor="#ffffff"
            />
          </div>
          <div className="flex flex-col items-center gap-0.5 text-xs md:text-sm text-zinc-400 px-6 text-center">
            <span className="hidden sm:inline">
              ✦ Hover over any project line to view animated screenshots
            </span>
            <span className="sm:hidden">
              ✦ Tap any project to preview animated screenshots
            </span>
            <span className="text-zinc-500 text-[11px] sm:text-xs">
              <span className="hidden sm:inline">
                Click anywhere on a project to open live demo ↗
              </span>
              <span className="sm:hidden">
                Tap again or double-tap to open live demo ↗
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div className="py-12 px-6 text-center max-w-md mx-auto flex flex-col items-center gap-3">
          <p className="text-zinc-400 text-sm">
            Select projects as &ldquo;Featured&rdquo; in Sanity Studio to
            showcase them here.
          </p>
        </div>
      )}

      {/* CTA Button to All Projects Page */}
      <div className="flex flex-col items-center gap-2 mt-4 px-6">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_45px_rgba(99,102,241,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/40 cursor-pointer"
        >
          <span>
            Explore All {totalProjectsCount > 0 ? `${totalProjectsCount} ` : ""}
            Projects
          </span>
          <FiArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </MotionSection>
  );
}
