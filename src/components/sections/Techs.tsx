import { Variants } from "motion/react";
import SectionHead from "../ui/SectionHead";
import SpotlightCard from "../ui/SpotlightCard";
import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";
import { tech } from "../../lib/techs";

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.3 } },
};
const cardVariants: Variants = {
  init: {
    y: -200,
    opacity: 0,
  },
  reveal: { y: 0, opacity: 1 },
};

function Techs() {
  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      id="techs"
      whileInView="reveal"
      viewport={{ amount: 0.2, once: true }}
      className="flex flex-col items-center px-10 py-10 sm:px-20 md:p-20 gap-y-20 bg-gradient-to-b from-indigo-950/40 via-10% md:via-5% via-transparent to-transparent"
    >
      <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-1.5">
        <SectionHead animate={false}>Techs</SectionHead>
        <p className="text-sm text-center text-gray-300 md:text-start lg:text-center md:text-strat md:text-base">
          These are the technologies and tools I have mastered throughout my
          learning journey.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
        {tech.map((tech, i) => (
          <MotionDiv key={i} variants={cardVariants}>
            <SpotlightCard
              className="flex flex-col items-center col-span-1 gap-2 px-10 leading-relaxed rounded md:flex-row md:justify-center md:gap-4 py-7 md:py-7 md:px-0 bg-neutral-900/40"
              spotlightColor="rgba(255, 255, 255, 0.089)"
            >
              <span>
                <tech.icon size={50} />
              </span>
              <h2 className="text-lg font-semibold md:min-w-1/2">
                {tech.name}
              </h2>
            </SpotlightCard>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

export default Techs;
