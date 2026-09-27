import { createElement, JSX } from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoSass,
  BiLogoBootstrap,
  BiBell,
} from "react-icons/bi";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbWaveSine,
  TbShieldLock,
  TbFlame,
} from "react-icons/tb";
import {
  SiReactrouter,
  SiReactquery,
  SiStyledcomponents,
  SiGreensock,
  SiSanity,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiThreedotjs,
  SiShadcnui,
  SiStripe,
  SiCloudinary,
  SiSwiper,
  SiLeaflet,
  SiReacthookform,
  SiVuedotjs,
  SiGit,
  SiVuetify,
  SiPinia,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

const ElementPlusIcon = () =>
  createElement(
    "svg",
    {
      viewBox: "0 0 34 38",
      fill: "#409EFF",
      className: "w-[1em] h-[1em]",
    },
    createElement("path", {
      d: "M33.3 27.22c0 1.57-.83 1.93-.83 1.93S18.32 37.31 17.4 37.83a1.68 1.68 0 0 1-1.52 0S1.09 29.25.55 28.87a1.29 1.29 0 0 1-.55-1s0-17 0-17.78S1 8.76 1 8.76L15.75.21a2 2 0 0 1 1.79 0S30.6 7.8 32 8.62a2.08 2.08 0 0 1 1.25 2.06s0 15.07 0 16.54Zm-5.9-17c-3-1.74-10.16-5.87-10.16-5.87a1.58 1.58 0 0 0-1.41 0L4.22 11s-.77.46-.76 1.08S3.46 26 3.46 26a1 1 0 0 0 .43.75c.43.3 12 7 12 7a1.3 1.3 0 0 0 1.19 0c.72-.4 11.82-6.79 11.82-6.79s.65-.28.65-1.51c0-.36 0-1.74 0-3.47L16.53 29.88v-3a3 3 0 0 1 1-2.07l11.56-7a2.49 2.49 0 0 0 .55-1.46c0-1.27 0-2.37 0-3.07L16.53 21.2V18a2.17 2.17 0 0 1 .83-1.79Z",
    }),
  );

export const getLogoIcon = (logoName: string): JSX.Element | null => {
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

const normalizeKey = (tech: string): string => {
  return tech
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
};

// Factory mapping supporting all technologies used in projects
const iconMap: Record<string, () => JSX.Element> = {
  react: () => createElement(FaReact, { className: "text-[#61DAFB]" }),
  reactjs: () => createElement(FaReact, { className: "text-[#61DAFB]" }),
  reacticons: () => createElement(FaReact, { className: "text-[#61DAFB]" }),
  typescript: () =>
    createElement(BiLogoTypescript, { className: "text-[#3178C6]" }),
  ts: () => createElement(BiLogoTypescript, { className: "text-[#3178C6]" }),
  javascript: () => createElement(FaJs, { className: "text-[#F7DF1E]" }),
  js: () => createElement(FaJs, { className: "text-[#F7DF1E]" }),
  html: () => createElement(FaHtml5, { className: "text-[#E34F26]" }),
  html5: () => createElement(FaHtml5, { className: "text-[#E34F26]" }),
  css: () => createElement(FaCss3Alt, { className: "text-[#1572B6]" }),
  css3: () => createElement(FaCss3Alt, { className: "text-[#1572B6]" }),
  tailwind: () => createElement(SiTailwindcss, { className: "text-[#06B6D4]" }),
  tailwindcss: () =>
    createElement(SiTailwindcss, { className: "text-[#06B6D4]" }),
  nextjs: () =>
    createElement(TbBrandNextjs, { className: "text-white dark:text-white" }),
  next: () =>
    createElement(TbBrandNextjs, { className: "text-white dark:text-white" }),
  threejs: () => createElement(SiThreedotjs, { className: "text-zinc-200" }),
  three: () => createElement(SiThreedotjs, { className: "text-zinc-200" }),
  gsap: () => createElement(SiGreensock, { className: "text-[#88CE02]" }),
  greensock: () => createElement(SiGreensock, { className: "text-[#88CE02]" }),
  sanity: () => createElement(SiSanity, { className: "text-[#F03E2F]" }),
  sanityio: () => createElement(SiSanity, { className: "text-[#F03E2F]" }),
  stripe: () => createElement(SiStripe, { className: "text-[#635BFF]" }),
  firebase: () => createElement(SiFirebase, { className: "text-[#FFCA28]" }),
  supabase: () =>
    createElement(RiSupabaseFill, { className: "text-[#3ECF8E]" }),
  redux: () => createElement(SiRedux, { className: "text-[#764ABC]" }),
  reduxtoolkit: () => createElement(SiRedux, { className: "text-[#764ABC]" }),
  reactquery: () =>
    createElement(SiReactquery, { className: "text-[#FF4154]" }),
  tanstackquery: () =>
    createElement(SiReactquery, { className: "text-[#FF4154]" }),
  shadcn: () => createElement(SiShadcnui, { className: "text-zinc-100" }),
  shadcnui: () => createElement(SiShadcnui, { className: "text-zinc-100" }),
  framermotion: () =>
    createElement(TbBrandFramerMotion, { className: "text-[#F01777]" }),
  styledcomponents: () =>
    createElement(SiStyledcomponents, { className: "text-[#DB7093]" }),
  reacthookform: () =>
    createElement(SiReacthookform, { className: "text-[#EC5990]" }),
  swiper: () => createElement(SiSwiper, { className: "text-[#6366F1]" }),
  leaflet: () => createElement(SiLeaflet, { className: "text-[#199900]" }),
  cloudinary: () =>
    createElement(SiCloudinary, { className: "text-[#3448C5]" }),
  nextauth: () => createElement(TbShieldLock, { className: "text-[#10B981]" }),
  authjs: () => createElement(TbShieldLock, { className: "text-[#10B981]" }),
  nodemailer: () => createElement(IoMail, { className: "text-[#38BDF8]" }),
  reacthottoast: () => createElement(TbFlame, { className: "text-[#F97316]" }),
  reacttoastify: () => createElement(BiBell, { className: "text-[#F59E0B]" }),
  lenis: () => createElement(TbWaveSine, { className: "text-[#E879F9]" }),
  reactrouter: () =>
    createElement(SiReactrouter, { className: "text-[#F44250]" }),
  aos: () =>
    createElement(FaWandMagicSparkles, { className: "text-[#A78BFA]" }),
  vue: () => createElement(SiVuedotjs, { className: "text-[#42B883]" }),
  vuejs: () => createElement(SiVuedotjs, { className: "text-[#42B883]" }),
  vue3: () => createElement(SiVuedotjs, { className: "text-[#42B883]" }),
  vuejs3: () => createElement(SiVuedotjs, { className: "text-[#42B883]" }),
  git: () => createElement(SiGit, { className: "text-[#F05032]" }),
  cicd: () => createElement(TbWaveSine, { className: "text-[#06B6D4]" }),
  bootstrap: () =>
    createElement(BiLogoBootstrap, { className: "text-[#7952B3]" }),
  sass: () => createElement(BiLogoSass, { className: "text-[#CF649A]" }),
  github: () => createElement(IoLogoGithub, { className: "text-white" }),
  vuetify: () => createElement(SiVuetify, { className: "text-[#1867C0]" }),
  pinia: () => createElement(SiPinia, { className: "text-[#FFD859]" }),
  elementplus: () => ElementPlusIcon(),
  element: () => ElementPlusIcon(),
};

export const getStackIcon = (tech: string): JSX.Element | null => {
  if (!tech) return null;
  const key = normalizeKey(tech);
  const factory = iconMap[key];
  if (factory) {
    return factory();
  }
  return null;
};
