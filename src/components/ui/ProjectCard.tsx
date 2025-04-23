import { SanityDocument } from "@sanity/client";
import SpotlightCard from "../ui/SpotlightCard";
import { urlFor } from "../../lib/utils";
import { getStackIcon } from "../../lib/Logos";

interface ProjectCardProps {
  project: SanityDocument;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, url } = project;
  const { demo, repo } = url ?? {};
  const imageSrc = project.image
    ? urlFor(project.image)?.url()
    : "/fallback.jpg";

  return (
    <div className={`flex flex-col gap-4 p-0 rounded-sm cursor-default`}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="object-cover object-top w-full h-64 rounded-lg "
        />
      )}

      {/* CONTENT */}
      <SpotlightCard
        className="flex flex-col justify-between w-full px-4 py-6 md:min-h-[275px]"
        spotlightColor="rgba(255, 255, 255, 0.048)"
      >
        <div className="flex flex-col items-start justify-between h-full">
          <div className="flex flex-col my-2 gap-y-2">
            <h3 className="text-xl font-semibold sm:text-3xl md:text-2xl">
              {title}
            </h3>
            <p className="text-xs text-gray-400 sm:text-sm ">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 my-4">
            <h4 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">
              Technologies:
            </h4>
            {stack.map((tech: string) => (
              <div key={tech} className="flex items-center space-x-1">
                {getStackIcon(tech) || (
                  <span className="text-xs whitespace-nowrap">{tech}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-center text-white transition-colors bg-indigo-600 rounded sm:text-sm md:text-base lg:text-base hover:bg-indigo-700 md:w-1/2 md:py-2"
            >
              Live Demo
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-white transition-colors bg-gray-700 rounded sm:text-sm md:text-base lg:text-base hover:bg-gray-800 md:w-1/2 md:py-2 md:text-center"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </SpotlightCard>
    </div>
  );
}
