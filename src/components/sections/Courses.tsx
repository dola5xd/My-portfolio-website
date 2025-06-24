import { coursesInfo } from "../../lib/info";
import SectionHead from "../ui/SectionHead";
import SpotlightCard from "../ui/SpotlightCard";
import { Variants } from "motion/react";

import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";

const ContainerVariants: Variants = {
  init: {},
  reveal: { transition: { staggerChildren: 0.3 } },
};
const cardVariants: Variants = {
  init: {
    opacity: 0,
    y: 20,
  },
  reveal: { opacity: 1, y: 0 },
};

function Courses() {
  return (
    <MotionSection
      variants={ContainerVariants}
      initial="init"
      whileInView="reveal"
      viewport={{ amount: 0.2, once: true }}
      className="flex flex-col items-center px-3 py-10 md:p-20 gap-y-10 md:gap-y-20"
    >
      <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-1.5">
        <SectionHead animate={false}>Courses</SectionHead>
        <p className="text-sm text-center text-gray-400 md:text-strat md:text-base">
          Here are some of the courses I've completed.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 ">
        {coursesInfo?.map((course) => (
          <MotionDiv key={course.id} variants={cardVariants}>
            <SpotlightCard
              className="leading-relaxed px-5 lg:px-10 col-span-1 flex flex-col gap-y-4 py-7 rounded min-h-[200px] justify-center cursor-default md:px-4"
              spotlightColor="rgba(255, 255, 255, 0.048)"
            >
              <h3 className="text-base font-semibold lg:text-lg">
                {course.name}
              </h3>
              <span className="flex flex-wrap items-center justify-between text-sm text-gray-400 lg:text-base">
                <h4>Platform: {course.platform}</h4>
                <h4>Instructor: {course.instructor}</h4>
              </span>
              <p className="flex items-center justify-between text-sm text-gray-400 lg:text-base ">
                <span>From: {course.from}</span>
                <span>To: {course.to}</span>
              </p>
            </SpotlightCard>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

export default Courses;
