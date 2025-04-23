import SectionHead from "../ui/SectionHead";
import { Variants } from "motion/react";
import { use } from "react";
import { useState } from "react";
import {
  section as MotionSection,
  div as MotionDiv,
  button as MotionButton,
} from "motion/react-client";
import { getProjects } from "../../lib/api";
import ProjectCard from "../ui/ProjectCard";

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.3 } },
};

const cardVariants: Variants = {
  init: { opacity: 0, x: -100 },
  reveal: {
    opacity: 1,
    x: 0,
  },
};

const projectPromise = getProjects();

const BATCH_SIZE = 9;

export default function Projects() {
  const projects = use(projectPromise);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, projects.length));
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      id="projects"
      whileInView="reveal"
      className="flex flex-col items-center gap-12 px-6 py-16 md:px-20"
    >
      <div>
        <SectionHead animate={false}>Projects</SectionHead>
        <p className="mt-4 text-gray-500">
          A selection of projects showcasing my skills in frontend development,
          animations, and responsive design.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-4">
        {visibleProjects.map((project) => (
          <MotionDiv
            key={project._id}
            variants={cardVariants}
            initial="init"
            whileInView="reveal"
            viewport={{ amount: 0.3, once: true }}
            className={`w-full ${
              String(project.description).length >= 100
                ? "col-span-1 md:col-span-2"
                : "col-span-1"
            }`}
          >
            <ProjectCard project={project} />
          </MotionDiv>
        ))}
      </div>

      {visibleCount < projects.length && (
        <MotionButton
          type="button"
          onClick={handleSeeMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 mt-8 text-white bg-indigo-600 rounded-lg cursor-pointer"
        >
          See More
        </MotionButton>
      )}
    </MotionSection>
  );
}
