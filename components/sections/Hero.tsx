"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "motion/react";
import RotatingText from "../ui/RotatingText";
import Link from "next/link";
import { PiReadCvLogo } from "react-icons/pi";

const GradientWaves = dynamic(() => import("../ui/GradientWaves"), {
  ssr: false,
});

const MotionH1 = motion.h1;
const MotionH3 = motion.h3;
const MotionP = motion.p;
const MotionDiv = motion.div;

const containerVariants: Variants = {
  init: {},
  reveal: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const textVariants: Variants = {
  init: { opacity: 0, y: 25 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden">
      {/* Background Gradient Waves for Hero only - Vivid & 100% visible */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
        <GradientWaves
          horizonColor="#0b0a1f"
          waveColor="#4f39f6"
          crestColor="#818cf8"
          speed={0.25}
          amplitude={2.6}
          waveScale={0.65}
          waveRatio={0.85}
          swell={32}
          turbulence={18}
          tilt={1.12}
          zoom={1.05}
          height={5.0}
          fogDepth={22}
          detail="medium"
          brightness={1.35}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.35}
          grain={false}
          grainIntensity={0.02}
        />

        {/* Seamless bottom fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary-800 via-primary-800/50 to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center w-full gap-y-10 sm:gap-y-12 md:gap-x-10 text-center">
        <MotionDiv
          initial="init"
          animate="reveal"
          variants={containerVariants}
          className="flex flex-col items-center gap-y-5 md:gap-y-7 max-w-3xl w-full"
        >
          {/* Main Headline */}
          <MotionH1
            variants={textVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-purple-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(129,140,248,0.5)]">
              Adel Yasser
            </span>
          </MotionH1>

          {/* Subheading with Frosted Glass Rotating Badge */}
          <MotionH3
            variants={textVariants}
            className="flex flex-row flex-wrap items-center justify-center text-lg sm:text-3xl md:text-4xl font-semibold gap-y-2 gap-x-2.5 sm:gap-x-3.5"
          >
            <span className="text-zinc-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Build
            </span>
            <RotatingText
              texts={[
                "Dynamic UI",
                "Responsive Layouts",
                "Interactive Animations",
                "Pixel-Perfect Designs",
              ]}
              mainClassName="px-3 sm:px-5 py-1 sm:py-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 border border-indigo-400/40 text-indigo-100 font-bold justify-center rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.3)] backdrop-blur-md text-sm sm:text-2xl md:text-3xl"
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

          {/* Bio text */}
          <MotionP
            variants={textVariants}
            className="max-w-xl text-zinc-300 text-sm sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-2 sm:px-0"
          >
            I craft exceptional digital experiences with a focus on performance,
            design, and accessibility.
          </MotionP>

          {/* Action Buttons: Ultra-modern Resume CTA + Explore Projects */}
          <MotionDiv
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-3 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary CTA: Resume Button with Next.js Link (Solid 1 Color, No Arrow) */}
            <Link
              href="https://drive.google.com/file/d/1bQIMiBs686jE3cHK8vvmNNQfnCBKM3QR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Adel Yasser's Resume"
              className="group inline-flex items-center justify-center gap-x-2.5 px-7 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/30 cursor-pointer w-full sm:w-auto"
            >
              <PiReadCvLogo
                size={20}
                className="shrink-0 text-white transition-transform group-hover:scale-110"
              />
              <span className="tracking-wide text-white">View Resume</span>
            </Link>

            {/* Secondary CTA: Explore Projects */}
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center px-7 py-3 rounded-full text-sm sm:text-base font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer w-full sm:w-auto"
            >
              <span>Explore Projects</span>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

export default Hero;
