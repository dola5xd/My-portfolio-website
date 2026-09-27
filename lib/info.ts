export type courseType = {
  id: number;
  name: string;
  roleSubtitle?: string;
  platform: string;
  instructor: string;
  from: string;
  to: string;
  badge?: string;
  ref?: string;
  type?: "company" | "degree" | "course";
  certificateUrl?: string;
  description?: string;
  skills?: string[];
};

export const coursesInfo: courseType[] = [
  {
    id: 4,
    name: "Junior Frontend Developer",
    roleSubtitle: "Promoted from Software Engineering Trainee",
    badge: "Professional Experience",
    platform: "ViggoVet (ViggoTech)",
    instructor: "Amr El-Sayed (CTO) • Core Product Team",
    from: "Supervised Training",
    to: "Junior Frontend Developer",
    ref: "Ref: VV/HR/TRN/2026-4",
    certificateUrl:
      "https://drive.google.com/file/d/1JiVvZdbtf_TiBBNpHwfkRhBzu_FsEChj/view?usp=sharing",
    type: "company",
    description:
      "Joined ViggoVet through a supervised practical training program with the product team, subsequently advancing into a Junior Frontend Developer role. Engineered production veterinary practice management software using Vue.js 3 with TypeScript, participating in architecture discussions, code reviews, task testing, and CI/CD release workflows.",
    skills: [
      "Vue.js 3",
      "Pinia",
      "Vuetify",
      "Element Plus",
      "TypeScript",
      "Git",
      "CI/CD",
    ],
  },
  {
    id: 3,
    name: "Bachelor's in Computer Science",
    badge: "Academic Degree",
    platform: "Tanta University",
    instructor: "Faculty of Computer and Information, Tanta University",
    from: "Undergraduate",
    to: "Degree in Progress",
    type: "degree",
    description:
      "Foundational computer science education covering algorithms, data structures, object-oriented programming, database systems, and software engineering principles.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Databases",
      "Software Engineering",
    ],
  },
  {
    id: 0,
    name: "The Ultimate React Course: React, Next.js, Redux & More",
    badge: "Advanced Mastery",
    platform: "Udemy",
    instructor: "Jonas Schmedtmann",
    from: "Completed",
    to: "Certified",
    type: "course",
    description:
      "Comprehensive mastery of modern React architecture, custom hooks, Redux Toolkit, React Query, and full-stack Next.js applications.",
    skills: ["React", "Next.js", "Redux", "Tailwind", "React Query"],
  },
  {
    id: 1,
    name: "The Complete JavaScript Course: Zero to Expert",
    badge: "Core JavaScript",
    platform: "Udemy",
    instructor: "Jonas Schmedtmann",
    from: "Completed",
    to: "Certified",
    type: "course",
    description:
      "In-depth mastery of the JavaScript engine, execution context, event loop, asynchronous programming, modern ES6+ patterns, and modular OOP.",
    skills: ["Javascript", "ES6+", "Async/Await", "DOM API", "OOP"],
  },
  {
    id: 2,
    name: "HTML, CSS & Modern Web Fundamentals",
    badge: "Web Foundations",
    platform: "YouTube / Elzero Web School",
    instructor: "Osama Elzero",
    from: "Completed",
    to: "Certified",
    type: "course",
    description:
      "Semantic HTML5, advanced CSS layouts with Flexbox and Grid, mobile-first responsive architecture, and web accessibility standards.",
    skills: ["Html", "Css", "Responsive Design", "CSS Grid", "Flexbox"],
  },
];
