import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  nav as MotionNav,
  span as MotionSpan,
  ul as MotionUl,
} from "motion/react-client";
import { AnimatePresence, Variants } from "motion/react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import ListItem from "../ui/ListItem";

const headerVariants: Variants = {
  init: { y: -20, opacity: 0 },
  reveal: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  init: {},
  reveal: {
    transition: { staggerChildren: 0.3 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Links = [
  {
    href: "#about",
    name: "About me",
  },
  {
    href: "#techs",
    name: "Techs",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#contact",
    name: "Contact",
  },
];

const SocialLinks = [
  {
    href: "https://github.com/dola5xd",
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-full p-4 md:justify-center md:p-7">
        <MotionNav
          variants={headerVariants}
          initial="init"
          animate="reveal"
          className="items-center justify-between hidden px-10 py-3 shadow-2xl md:flex bg-primary-900/25 shadow-primary-900/25 rounded-4xl gap-x-7 divide-x-1 divide-primary-200/75"
        >
          <MotionUl
            initial="init"
            animate="reveal"
            variants={listVariants}
            className="flex items-center justify-between gap-x-4 text-lg *:relative *:cursor-pointer *:before:content-[''] *:before:block *:before:bg-indigo-500 *:before:w-full *:before:rounded-full *:before:opacity-0 *:before:h-1 *:before:absolute *:before:-bottom-3 *:before:duration-500 *:hover:before:opacity-100 pr-7"
          >
            {Links.map((link, i) => (
              <ListItem key={i} link={link} />
            ))}
          </MotionUl>
          <MotionUl
            initial="init"
            animate="reveal"
            variants={listVariants}
            className="flex items-center justify-between gap-x-4 *:text-xl"
          >
            {SocialLinks.map((link, i) => (
              <ListItem key={i} link={link} />
            ))}
          </MotionUl>
        </MotionNav>

        <MotionSpan className="md:hidden">Portfolio</MotionSpan>
        <MotionSpan
          className="self-end md:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(true)}
        >
          <IoMdMenu color="#fff" size={35} />
        </MotionSpan>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MotionNav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 w-full h-screen bg-primary-800"
          >
            <span
              className="absolute cursor-pointer top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose size={40} color="#fff" />
            </span>
            <MotionUl
              initial="init"
              animate="reveal"
              variants={listVariants}
              className="flex flex-col h-full py-20 px-20 justify-center gap-y-8 text-2xl text-white *:relative *:cursor-pointer"
            >
              {Links.map((link, i) => (
                <ListItem key={i} link={link} />
              ))}
            </MotionUl>
          </MotionNav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
