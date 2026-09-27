"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProjectCard, { ProjectItem } from "../ui/ProjectCard";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

interface AllProjectsClientProps {
  initialProjects: ProjectItem[];
}

export default function AllProjectsClient({
  initialProjects,
}: AllProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "personal" | "freelance"
  >("all");

  // Extract all unique tech tags from projects
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    initialProjects.forEach((p) => {
      (p.stack || []).forEach((t) => tagSet.add(t));
    });
    // Priority popular tags first
    const popular = [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Tailwind.CSS",
      "Three.Js",
      "Gsap",
      "Sanity",
    ];
    const sorted = Array.from(tagSet).sort((a, b) => {
      const aPop = popular.indexOf(a);
      const bPop = popular.indexOf(b);
      if (aPop !== -1 && bPop !== -1) return aPop - bPop;
      if (aPop !== -1) return -1;
      if (bPop !== -1) return 1;
      return a.localeCompare(b);
    });
    return ["All", ...sorted.slice(0, 10)];
  }, [initialProjects]);

  // Filter projects by search query, tag, and category
  const filteredProjects = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    const queryWords = rawQuery ? rawQuery.split(/\s+/).filter(Boolean) : [];

    return initialProjects.filter((project) => {
      const title = (project.title || "").toLowerCase();
      const desc = (project.description || "").toLowerCase();
      const stack = (project.stack || []).map((t) => t.toLowerCase());

      const matchesSearch =
        queryWords.length === 0 ||
        queryWords.every(
          (word) =>
            title.includes(word) ||
            desc.includes(word) ||
            stack.some((tech) => tech.includes(word)),
        );

      const matchesTag =
        selectedTag === "All" ||
        stack.some(
          (t) =>
            t === selectedTag.toLowerCase() ||
            t.replace(/[^a-z0-9]/g, "") ===
              selectedTag.toLowerCase().replace(/[^a-z0-9]/g, ""),
        );

      const matchesCategory =
        selectedCategory === "all" ||
        (project as { category?: string }).category === selectedCategory;

      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [initialProjects, searchQuery, selectedTag, selectedCategory]);

  return (
    <div className="min-h-screen bg-primary-800 text-white pt-28 sm:pt-32 pb-20 px-4 sm:px-10 md:px-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-87.5 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Bar with Back Button */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 mb-10 sm:mb-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 shadow-sm"
        >
          <FiArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-1.5 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
          {initialProjects.length} Total Projects
        </span>
      </div>

      {/* Header Title Section */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight">
          All <span className="text-indigo-500">Projects</span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl text-balance">
          Browse the complete catalog of web applications, commercial platforms,
          and interactive experiences I&apos;ve developed.
        </p>

        {/* Search Input Bar */}
        <div className="w-full max-w-md mt-2 sm:mt-4 relative flex items-center">
          <FiSearch
            size={18}
            className="absolute left-4 text-zinc-400 pointer-events-none z-10"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name or technology..."
            className="w-full pl-12 pr-16 py-3 rounded-full bg-neutral-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 backdrop-blur-md"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 px-2 py-0.5 rounded text-xs text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-10 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1 mt-4 sm:mt-5 bg-neutral-900/70 border border-white/10 rounded-full backdrop-blur-md shadow-md max-w-full overflow-x-auto scrollbar-none">
          {(
            [
              { key: "all", label: "✦ All Projects" },
              { key: "personal", label: "💻 Personal" },
              { key: "freelance", label: "💼 Freelance" },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === key
                  ? key === "freelance"
                    ? "bg-amber-500/90 text-black shadow-md shadow-amber-500/30"
                    : "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tech Stack Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-3xl">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40 border border-indigo-400/40"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Card Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id || project._id || idx}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(idx * 0.05, 0.3),
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center flex flex-col items-center justify-center gap-3">
              <p className="text-zinc-400 text-lg">
                No projects found matching &ldquo;{searchQuery || selectedTag}
                &rdquo; No projects found
                {searchQuery && <> matching &ldquo;{searchQuery}&rdquo;</>}
                {selectedTag !== "All" && (
                  <>
                    {" "}
                    in <strong className="text-white">{selectedTag}</strong>
                  </>
                )}
                {selectedCategory !== "all" && (
                  <>
                    {" "}
                    under{" "}
                    <strong className="text-white capitalize">
                      {selectedCategory}
                    </strong>
                  </>
                )}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                  setSelectedCategory("all");
                }}
                className="text-sm text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                Reset filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA to Contact */}
      <div className="max-w-4xl mx-auto mt-24 text-center p-10 rounded-3xl border border-white/10 bg-linear-to-b from-neutral-900/60 to-indigo-950/20 backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Interested in working together?
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-6 max-w-lg mx-auto">
          Have an idea or a project that needs a high-performance frontend?
          Let&apos;s bring it to life.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/30"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
