"use client";

import SpotlightCard from "../ui/SpotlightCard";
import { getStackIcon } from "../../lib/Logos";
import { sanityImageUrl, SanityImageSource } from "../../lib/sanity";

export interface ProjectItem {
  id?: string;
  _id?: string;
  title: string;
  description?: string;
  stack?: string[];
  image?: SanityImageSource;
  imageUrl?: string;
  url?: {
    demo?: string;
    repo?: string;
  };
  category?: "personal" | "freelance";
}

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack = [], url, category } = project;
  const { demo, repo } = url ?? {};

  const imageSrc =
    project.imageUrl ||
    (typeof project.image === "string"
      ? project.image
      : project.image
        ? sanityImageUrl(project.image)
        : "/fallback.jpg");

  return (
    <div className="flex flex-col gap-4 p-0 rounded-sm cursor-default">
      {imageSrc && (
        <div className="w-full rounded-xl overflow-hidden bg-neutral-900/60 border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-72 sm:h-80 md:h-96 object-cover object-top rounded-xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      )}

      <SpotlightCard
        className="flex flex-col justify-between w-full px-4 py-6 md:min-h-[275px]"
        spotlightColor="rgba(255, 255, 255, 0.048)"
      >
        <div className="flex flex-col items-start justify-between h-full">
          <div className="flex flex-col my-2 gap-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold sm:text-3xl md:text-2xl">
                {title}
              </h3>
              {category === "freelance" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-400/30 text-amber-400 shrink-0">
                  💼 Freelance
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 sm:text-sm">{description}</p>
          </div>

          <div className="flex flex-col gap-2.5 my-4 w-full">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Technologies:
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {stack.map((tech: string) => {
                const icon = getStackIcon(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-900/90 border border-white/10 text-zinc-300 hover:text-white hover:border-indigo-500/40 transition-colors shadow-xs"
                    title={tech}
                  >
                    {icon && (
                      <span className="text-sm shrink-0 flex items-center">
                        {icon}
                      </span>
                    )}
                    <span className="whitespace-nowrap">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full gap-2 items-center">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-center text-white transition-colors bg-indigo-600 rounded sm:text-sm md:text-base lg:text-sm hover:bg-indigo-700 md:w-1/2 md:py-2"
            >
              Live Demo
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-white transition-colors bg-gray-700 rounded sm:text-sm md:text-base lg:text-sm hover:bg-gray-800 md:w-1/2 md:py-2 md:text-center text-nowrap"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </SpotlightCard>
    </div>
  );
}
