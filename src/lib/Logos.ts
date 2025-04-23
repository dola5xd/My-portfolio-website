import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
} from "react-icons/io5";
import { createElement } from "react";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoSass,
  BiLogoBootstrap,
} from "react-icons/bi";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import {
  SiReactrouter,
  SiReactquery,
  SiStyledcomponents,
  SiGreensock,
  SiSanity,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { JSX } from "react";

export const getLogoIcon = (logoName: string) => {
  switch (logoName.toLowerCase()) {
    case "html":
      return createElement(IoLogoHtml5);
    case "css":
      return createElement(IoLogoCss3);
    case "javascript":
      return createElement(IoLogoJavascript);
    case "typescript":
      return createElement(BiLogoTypescript);
    case "reactjs":
      return createElement(IoLogoReact);
    case "nextjs":
      return createElement(TbBrandNextjs);
    case "tailwindcss":
      return createElement(BiLogoTailwindCss);
    case "gsap":
      return createElement(SiGreensock);
    case "react router":
      return createElement(SiReactrouter);
    case "react query":
      return createElement(SiReactquery);
    case "redux":
      return createElement(BiLogoRedux);
    case "styled components":
      return createElement(SiStyledcomponents);
    case "bootstrap":
      return createElement(BiLogoBootstrap);
    case "sass":
      return createElement(BiLogoSass);
    case "github":
      return createElement(IoLogoGithub);
    case "framer motion":
      return createElement(TbBrandFramerMotion);
    default:
      return null;
  }
};

type StackIconMap = Record<string, JSX.Element>;

const stackIconMap: StackIconMap = {
  React: createElement(FaReact),
  "Tailwind.CSS": createElement(SiTailwindcss),
  "Tailwind.css": createElement(SiTailwindcss),
  Tailwind: createElement(SiTailwindcss),
  "Next.js": createElement(SiNextdotjs),
  TypeScript: createElement(BiLogoTypescript),
  "Styled Components": createElement(SiStyledcomponents),
  "Styled components": createElement(SiStyledcomponents),
  "React Query": createElement(SiReactquery),
  Firebase: createElement(SiFirebase),
  Redux: createElement(SiRedux),
  Html: createElement(FaHtml5),
  Css: createElement(FaCss3Alt),
  Javascript: createElement(FaJs),
  Sanity: createElement(SiSanity),
  "Framer Motion": createElement(TbBrandFramerMotion),
  "framer motion": createElement(TbBrandFramerMotion),
  "Framer motion": createElement(TbBrandFramerMotion),
  "Framer-motion": createElement(TbBrandFramerMotion),
  Supabase: createElement(RiSupabaseFill),
};

export const getStackIcon = (tech: string): JSX.Element | null => {
  return stackIconMap[tech] || null;
};
