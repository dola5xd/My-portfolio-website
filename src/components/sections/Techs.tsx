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
  reveal: { transition: { staggerChildren: 0.1 } },
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
      viewport={{ once: true }}
      className="flex flex-col items-center px-5 py-10 md:p-20 gap-y-20"
    >
      <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-1.5">
        <SectionHead animate={false}>Techs</SectionHead>
        <p className="text-sm text-center md:text-start lg:text-center text-primary-200 md:text-strat md:text-base">
          These are the technologies and tools I have mastered throughout my
          learning journey.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
        {tech.map((tech, i) => (
          <MotionDiv key={i} variants={cardVariants}>
            <SpotlightCard
              className="flex flex-col items-center col-span-1 px-10 leading-relaxed rounded gap-y-2 md:gap-y-4 py-7 md:px-0 "
              spotlightColor="rgba(255, 255, 255, 0.048)"
            >
              <span>
                <tech.icon size={50} />
              </span>
              <h5 className="text-lg">{tech.name}</h5>
            </SpotlightCard>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

export default Techs;
