import avatar from "../../assets/images/avatar.webp";
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
              className="flex item-center self-center gap-x-1.5 w-full px-4 py-2 rounded outline-1 hover:bg-indigo-600 cursor-pointer relative before:absolute before:top-1.5 before:-left-1.5 before:w-full before:h-full before:bg-indigo-600 before:rounded before:-z-10 hover:before:top-0 hover:before:left-0 outline-white bg-transparent duration-500 before:duration-500"
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
            src={avatar}
            alt="avatar"
            className="object-cover object-top w-full h-full rounded-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
}

export default Hero;
