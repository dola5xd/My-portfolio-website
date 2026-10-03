"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "motion/react";
import dynamic from "next/dynamic";
import ListItem from "../ui/ListItem";
import { useDeviceTier } from "../../hooks/useDeviceTier";

const GlassSurface = dynamic(() => import("../ui/GlassSurface"), {
  ssr: false,
});

const MotionUl = motion.ul;

const listVariants: Variants = {
  init: {},
  reveal: {
    transition: { staggerChildren: 0.3 },
  },
};

const Links = [
  {
    href: "/#about",
    name: "About me",
  },
  {
    href: "/#techs",
    name: "Techs",
  },
  {
    href: "/#experience",
    name: "Experience",
  },
  {
    href: "/#projects",
    name: "Projects",
  },
  {
    href: "/#contact",
    name: "Contact",
  },
];

const SocialLinks = [
  {
    href: "https://github.com/Adel-Yasser-dev",
    name: "github",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/adel-yasser-a28181242/",
    name: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/dola2005ti",
    name: "facebook",
    icon: FaFacebook,
  },
];

interface HeaderProps {
  alwaysVisible?: boolean;
}

function Header({ alwaysVisible = false }: HeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  const deviceTier = useDeviceTier();
  const canHover = deviceTier.canHover;

  useEffect(() => {
    const handleScroll = () => {
      // Past Hero threshold: after scrolling down 300px
      setIsPastHero(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // In Hero: hidden unless hovering top area or the header itself
  // Past Hero or alwaysVisible: stays visible as sticky navigation across all devices
  const isHeaderVisible = alwaysVisible || isPastHero || isTopHovered;

  return (
    <>
      {/* Invisible top hover detection zone to trigger drop-down in hero */}
      {!alwaysVisible && !isPastHero && (
        <div
          className="fixed top-0 inset-x-0 h-24 z-40 pointer-events-auto"
          onMouseEnter={() => {
            if (canHover) setIsTopHovered(true);
          }}
          onMouseLeave={() => {
            if (canHover) setIsTopHovered(false);
          }}
        />
      )}

      <header
        className="fixed top-3 sm:top-4 inset-x-0 z-50 flex items-center justify-center px-2 sm:px-4 pointer-events-none"
        onMouseEnter={() => {
          if (canHover) setIsTopHovered(true);
        }}
        onMouseLeave={() => {
          if (canHover) setIsTopHovered(false);
        }}
      >
        {/* Navigation bar container */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={
            isHeaderVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="pointer-events-auto max-w-[96vw] sm:max-w-fit"
        >
          <GlassSurface
            width="auto"
            height="auto"
            borderRadius={50}
            borderWidth={0.04}
            distortionScale={-75}
            displace={3}
            redOffset={4}
            greenOffset={10}
            blueOffset={18}
            brightness={45}
            opacity={0.92}
            backgroundOpacity={isPastHero ? 0.36 : 0.22}
            saturation={1.8}
            mixBlendMode="normal"
            darkMode={true}
            onMouseEnter={() => {
              if (canHover) setIsHovered(true);
            }}
            onMouseLeave={() => {
              if (canHover) setIsHovered(false);
            }}
            className="shadow-2xl shadow-indigo-500/10 pointer-events-auto px-3 sm:px-6 py-1.5 sm:py-2 transition-all duration-300 border border-white/20 hover:border-white/35"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="flex items-center justify-between"
            >
              {/* Main navigation section links (always visible) */}
              <MotionUl
                initial="init"
                animate="reveal"
                variants={listVariants}
                className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6 text-[11px] sm:text-xs md:text-sm font-medium text-white/95 *:relative *:cursor-pointer *:transition-colors *:hover:text-white *:before:content-[''] *:before:block *:before:bg-indigo-400 *:before:w-full *:before:rounded-full *:before:opacity-0 *:before:h-0.5 *:before:absolute *:before:-bottom-1 *:before:duration-300 *:hover:before:opacity-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap overflow-x-auto scrollbar-none py-0.5"
              >
                {Links.map((link, i) => (
                  <ListItem key={i} link={link} />
                ))}
              </MotionUl>

              {/* Smoothly expanding social icons on hover (Desktop with mouse only) */}
              <AnimatePresence>
                {canHover && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: "auto", marginLeft: 16 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden md:flex items-center gap-x-3 sm:gap-x-4 overflow-hidden whitespace-nowrap border-l border-white/20 pl-3 sm:pl-4"
                  >
                    <MotionUl
                      initial="init"
                      animate="reveal"
                      variants={listVariants}
                      className="flex items-center gap-x-3 sm:gap-x-3.5 text-white/85 text-base sm:text-lg *:transition-all *:duration-200 *:hover:text-indigo-400 *:hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                    >
                      {SocialLinks.map((link, i) => (
                        <ListItem key={i} link={link} />
                      ))}
                    </MotionUl>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </GlassSurface>
        </motion.nav>
      </header>
    </>
  );
}

export default Header;
