import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import SectionHead from "../ui/SectionHead";
import { FaReact } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import SpotlightCard from "../ui/SpotlightCard";
import Particles from "../ui/Particles";

const textContent = [
  {
    text: "My journey began with a deep passion for computers and video games, which sparked my curiosity about how software works.",
    icon: GrGamepad,
  },
  {
    text: "I took my first steps into web development by learning HTML and CSS, building simple pages and experimenting with layouts.",
    icon: DiHtml5,
  },
  {
    text: "I joined the Computer Science department at Tanta University, where I began to study programming in a more structured way.",
    icon: PiStudent,
  },
  {
    text: "I started diving into JavaScript and algorithms, enjoying the logic and creativity involved in solving problems.",
    icon: IoLogoJavascript,
  },
  {
    text: "Soon after, I discovered React.js and became fascinated with building interactive user interfaces.",
    icon: FaReact,
  },
  {
    text: "Now I'm exploring Next.js, pushing my skills further by building full-stack applications with modern tools.",
    icon: RiNextjsLine,
  },
];

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = textContent.length;
    const newIndex = Math.min(Math.floor(latest * totalSteps), totalSteps - 1);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  });

  const Icon = textContent[currentIndex].icon;

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative w-full"
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 w-full h-screen pt-10">
        <div className="relative flex flex-col items-center justify-center h-full p-8 gap-y-10 md:gap-y-20 md:px-10 md:py-20">
          <SectionHead animate={false}>About Me</SectionHead>

          <div className="container flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between">
            <div className="relative w-full overflow-hidden md:w-3/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg font-bold rounded cursor-default md:text-xl text-balance"
                >
                  <SpotlightCard
                    className="px-5 text-sm md:text-base lg:text-xl md:leading-relaxed py-7 md:px-10 lg:py-20 text-pretty"
                    spotlightColor="rgba(255, 255, 255, 0.048)"
                  >
                    {textContent[currentIndex].text}
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative w-40 h-40 overflow-hidden rounded-full lg:h-[300px] lg:w-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full "
                >
                  <Icon className="w-1/2 text-white h-1/2" />
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 z-[-1]">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={1}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
    </motion.section>
  );
}

export default About;
