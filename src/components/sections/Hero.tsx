import avatar from "../../assets/images/avatar.webp";
import {
  img as MotionImg,
  h1 as MotionH1,
  h2 as MotionH2,
  h3 as MotionH3,
  p as MotionP,
  div as MotionDiv,
} from "motion/react-client";
import { Variants } from "motion/react";
import RotatingText from "../ui/RotatingText";

const containerVariants: Variants = {
  init: {},
  reveal: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const textVariants: Variants = {
  init: { opacity: 0, x: -200 },
  reveal: { opacity: 1, x: 0 },
};

function Hero() {
  return (
    <section className="py-20 px-10 lg:p-20 flex md:min-h-[75vh] items-center justify-center overflow-x-hidden">
      <div className="container flex flex-col items-center justify-between w-full gap-y-20 md:gap-x-10 lg:flex-row">
        <MotionDiv
          initial="init"
          animate="reveal"
          variants={containerVariants}
          className="flex flex-col gap-y-2 md:gap-y-6"
        >
          <MotionH1
            variants={textVariants}
            className="text-2xl font-bold text-gray-400 md:text-5xl"
          >
            Hi, I'm
          </MotionH1>
          <MotionH2
            variants={textVariants}
            className="text-4xl font-extrabold md:text-6xl"
          >
            <span className="text-indigo-500">Adel Yasser</span>
          </MotionH2>
          <MotionH3
            variants={textVariants}
            className="flex flex-wrap text-xl font-semibold flex-row gap-y-1 items-center md:text-4xl gap-x-4"
          >
            Build
            <RotatingText
              texts={[
                "Dynamic UI",
                "Responsive Layouts",
                "Interactive Animations",
                "Pixel-Perfect Designs",
              ]}
              mainClassName="px-2 sm:px-3 text-black overflow-hidden py-1 sm:py-2 flex justify-center rounded-lg font-bold text-white bg-indigo-600"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </MotionH3>
          <MotionP
            variants={textVariants}
            className="max-w-md mt-4 text-gray-500 md:text-lg"
          >
            I craft exceptional digital experiences with a focus on performance,
            design, and accessibility.
          </MotionP>
        </MotionDiv>
        <div className="md:max-w-1/2 rounded-full h-[200px] md:h-[400px] aspect-square shadow-2xl shadow-primary-700 pointer-events-none">
          <MotionImg
            variants={{
              hidden: { opacity: 0, x: 200 },
              animate: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="animate"
            src={avatar}
            alt="avatar"
            className="object-cover object-top w-full h-full rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
