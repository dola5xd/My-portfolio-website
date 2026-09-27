import {
  h1 as MotionH1,
  h2 as MotionH2,
  h3 as MotionH3,
  p as MotionP,
  div as MotionDiv,
  a as MotionA,
} from "motion/react-client";
import { Variants } from "motion/react";
import RotatingText from "../ui/RotatingText";
import { PiReadCvLogo } from "react-icons/pi";

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
            className="text-2xl font-bold md:text-5xl"
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
            className="flex flex-row flex-wrap items-center text-xl font-semibold gap-y-1 md:text-4xl gap-x-4"
          >
            Build
            <RotatingText
              texts={[
                "Dynamic UI",
                "Responsive Layouts",
                "Interactive Animations",
                "Pixel-Perfect Designs",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </MotionH3>
          <MotionP
            variants={textVariants}
            className="max-w-md mt-4 text-gray-400 md:text-lg"
          >
            I craft exceptional digital experiences with a focus on performance,
            design, and accessibility.
          </MotionP>
          <MotionA
            href="https://drive.google.com/file/d/1bQIMiBs686jE3cHK8vvmNNQfnCBKM3QR/view?usp=sharing"
            target="_blank"
            rel="noopener"
            variants={textVariants}
            className="cursor-pointer w-fit"
          >
            <button
              title="My CV"
              type="button"
              className="flex item-center self-center gap-x-1.5 w-full px-4 py-2 rounded-sm bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              My Resume <PiReadCvLogo size={25} />
            </button>
          </MotionA>
        </MotionDiv>
        <MotionDiv
          className="md:max-w-1/2 rounded-full h-[200px] md:h-[400px] aspect-square shadow-2xl shadow-primary-700 pointer-events-none"
          variants={{
            hidden: { opacity: 0, x: 200 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="animate"
        >
          <img
            src={"/assets/avatar.webp"}
            alt="avatar"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="object-cover object-top w-full h-full rounded-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
}

export default Hero;
