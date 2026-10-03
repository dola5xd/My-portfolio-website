export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  stack: string[];
  url: {
    demo: string;
    repo: string;
  };
  publishedAt: string;
}

export interface Course {
  id: number;
  name: string;
  platform: string;
  instructor: string;
  from: string;
  to: string;
}

export interface AboutStep {
  step: number;
  text: string;
  iconName: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend / Database" | "Tools / Other";
}

export const profileData = {
  name: "Adel Yasser",
  title: "Frontend Developer",
  rotatingHeadlines: [
    "Dynamic UI",
    "Responsive Layouts",
    "Interactive Animations",
    "Pixel-Perfect Designs",
  ],
  bio: "I craft exceptional digital experiences with a focus on performance, design, and accessibility.",
  cvUrl:
    "https://drive.google.com/file/d/1bQIMiBs686jE3cHK8vvmNNQfnCBKM3QR/view?usp=sharing",
  avatarUrl: "/assets/avatar.webp",
  email: "adelyasser5002@gmail.com",
  phone: "+20 1069142906",
  socials: {
    github: "https://github.com/Adel-Yasser-dev",
    linkedin: "https://www.linkedin.com/in/adel-yasser-a28181242/",
    facebook: "https://www.facebook.com/dola2005ti",
  },
};

export const aboutSteps: AboutStep[] = [
  {
    step: 1,
    text: "My journey began with a deep passion for computers and video games, which sparked my curiosity about how software works.",
    iconName: "GrGamepad",
  },
  {
    step: 2,
    text: "I took my first steps into web development by learning HTML and CSS, building simple pages and experimenting with layouts.",
    iconName: "DiHtml5",
  },
  {
    step: 3,
    text: "I joined the Computer Science department at Tanta University, where I began to study programming in a more structured way.",
    iconName: "PiStudent",
  },
  {
    step: 4,
    text: "I started diving into JavaScript and algorithms, enjoying the logic and creativity involved in solving problems.",
    iconName: "IoLogoJavascript",
  },
  {
    step: 5,
    text: "Soon after, I discovered React.js and became fascinated with building interactive user interfaces.",
    iconName: "FaReact",
  },
  {
    step: 6,
    text: "Now I'm exploring Next.js, pushing my skills further by building full-stack applications with modern tools.",
    iconName: "RiNextjsLine",
  },
];

export const coursesInfo: Course[] = [
  {
    id: 0,
    name: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    platform: "Udemy",
    instructor: "Jonas Schmedtmann",
    from: "February 2024",
    to: "April 2024",
  },
  {
    id: 1,
    name: "The Complete JavaScript Course 2024: From Zero to Expert!",
    platform: "Udemy",
    instructor: "Jonas Schmedtmann",
    from: "October 2023",
    to: "January 2024",
  },
  {
    id: 2,
    name: "HTML, CSS, and JavaScript Courses",
    platform: "YouTube",
    instructor: "Osama Elzero",
    from: "July 2023",
    to: "October 2023",
  },
  {
    id: 3,
    name: "Bachelor's in Computer Science",
    platform: "Tanta University",
    instructor: "Faculty of Computer and Information, Tanta University",
    from: "2023",
    to: "2027 (Expected)",
  },
];

export const skillsData: Skill[] = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Three.js", category: "Frontend" },
  { name: "Lenis", category: "Frontend" },
  { name: "React Query", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Styled Components", category: "Frontend" },
  { name: "Sass", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "ShadCN", category: "Frontend" },
  { name: "Supabase", category: "Backend / Database" },
  { name: "Firebase", category: "Backend / Database" },
  { name: "Sanity CMS", category: "Backend / Database" },
  { name: "Git & GitHub", category: "Tools / Other" },
];

export const projectsData: Project[] = [
  {
    id: "16e6594d-6062-49e8-a297-d61dc2f911ef",
    title: "Monsba",
    slug: "monsba",
    description:
      "Monsba is a leading construction company specializing in residential and commercial projects. We deliver quality construction services with a focus on innovation, sustainability, and client satisfaction.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/ba6386cc8f975b84b40cae9cfdcc07d831875e43-1919x948.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind.CSS",
      "React Hook Form",
      "Lenis",
      "Framer-motion",
    ],
    url: {
      demo: "https://monsba.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/monsba",
    },
    publishedAt: "2025-10-04T11:19:47.534Z",
  },
  {
    id: "40ebc2c5-cbf9-478f-b698-a902596c7fe4",
    title: "Nike E-commerce",
    slug: "nike-e-commerce",
    description:
      "A modern Nike-inspired e-commerce site built with Next.js, React, Tailwind CSS, and GSAP. It offers a sleek, responsive shopping experience with dynamic animations, Firebase authentication, and Cloudinary media storage.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/c1f4347779ba95d294a977fab52ee9fe4eee298c-1900x946.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind.CSS",
      "ShadCN",
      "Gsap",
      "React Hook Form",
      "Firebase",
      "Sanity",
      "Stripe",
      "Nodemailer",
      "React Hot Toast",
      "NextAuth",
      "Cloudinary",
    ],
    url: {
      demo: "https://nike-ecommerce-smoky.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Nike-Ecommerce",
    },
    publishedAt: "2025-10-04T11:25:10.251Z",
  },
  {
    id: "7bec6bdd-7692-44b3-b23a-d8cb3283fad6",
    title: "QMenu",
    slug: "qmenu",
    description:
      "A modern multilingual café menu platform QR-ready, customizable, and built for restaurants.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/b0869ac34caa9671dd965fc7a5d17dd513da9ade-1898x943.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind.CSS",
      "React Hook Form",
      "Lenis",
      "Framer-motion",
      "Firebase",
      "ShadCN",
      "NextAuth",
    ],
    url: {
      demo: "https://q-menu-delta.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/QMenu",
    },
    publishedAt: "2025-10-04T11:22:44.570Z",
  },
  {
    id: "a82901c4-16b1-4ae2-985c-7571941a3cfd",
    title: "Estatein Dashboard",
    slug: "estatein-dashboard",
    description:
      "Estatein Dashboard: manage clients, properties, ratings, and settings efficiently with a modern real estate platform",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/24506b9c79776f8ed870cf2bfa0ad2142d31fd2f-1755x867.jpg",
    stack: [
      "React",
      "TypeScript",
      "Tailwind.CSS",
      "React Router",
      "ShadCN",
      "React Hook Form",
      "React Query",
      "Firebase",
    ],
    url: {
      demo: "https://estatein-dahboard.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Estatein-Dahboard",
    },
    publishedAt: "2025-06-24T10:21:49.226Z",
  },
  {
    id: "5164d217-44eb-45bc-938c-0fe67eafe909",
    title: "Xbox Series X redesign",
    slug: "xbox-series-x-redesign",
    description:
      "Experience the power of next-generation gaming with Xbox Series X. 🎮 Explore stunning visuals, immersive 3D experiences, and smooth animations in this interactive showcase of Microsoft's flagship console.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/29cd58cce94b7ccad71c0071c3a1ec6e4b3728d9-1881x947.png",
    stack: [
      "Next.js",
      "Three.Js",
      "Gsap",
      "Tailwind.CSS",
      "TypeScript",
      "Lenis",
      "React-icons",
    ],
    url: {
      demo: "https://xbox-series-x.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/xbox-series-x",
    },
    publishedAt: "2025-05-31T10:13:33.500Z",
  },
  {
    id: "cf6c3f4a-d5c2-4b76-a6f1-f14af5a4cd85",
    title: "Estatein",
    slug: "estatein",
    description:
      "Estatein helps you discover, compare, and buy homes across the U.S. Browse verified listings, get local market insights, and connect with top agents.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/ac093f9b43d1f85846f4ee1159b35fce3ca9df79-1890x940.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind.CSS",
      "Sanity",
      "React Hook Form",
      "Lenis",
      "Framer-motion",
    ],
    url: {
      demo: "https://estatein-nu.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Estatein",
    },
    publishedAt: "2025-04-14T13:07:31.697Z",
  },
  {
    id: "49ab927e-3550-46f4-b564-962eda8cfaf5",
    title: "Ui/Ux Designer portfolio",
    slug: "ui-ux-designer-portfolio",
    description: "Kareem Yasser Ui/Ux Designer portfolio",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/53c56faa733f539e94d9257f508778a257377b6c-1280x916.png",
    stack: ["React", "TypeScript", "Tailwind.CSS", "Gsap", "Lenis", "Sanity"],
    url: {
      demo: "https://kareem-portfolio-one.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Kareem-portfolio",
    },
    publishedAt: "2025-04-02T16:44:33.067Z",
  },
  {
    id: "b9ff9241-a786-445d-958b-53318bec4e46",
    title: "Krist",
    slug: "krist",
    description:
      "Kirst is an innovative e-commerce platform for online clothing shops. It offers a seamless shopping experience with a user-friendly interface, secure payment options, and efficient order management. Perfect for fashion retailers and boutique owners looking to grow their business.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/36ce1f44825aceb2de4c972debb6aa93470eefcf-1840x4509.jpg",
    stack: [
      "Next.js",
      "Tailwind.CSS",
      "Sanity",
      "Firebase",
      "React Hook Form",
      "AOS",
      "Lenis",
    ],
    url: {
      demo: "https://kirst.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Kirst",
    },
    publishedAt: "2025-02-05T10:38:34.141Z",
  },
  {
    id: "443fb36b-7364-4c0d-a0a0-c22a36639b2c",
    title: "Movies Watcher",
    slug: "movies-watcher",
    description:
      "Movies Watcher is a web application designed to help users manage and track their favorite movies. Add movies to your watchlist, mark them as watched, and explore your collection seamlessly with a clean and responsive design.",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/fe13e7b1569e30f9caf90e52760b8cbf882bd734-1755x5490.jpg",
    stack: [
      "Next.js",
      "Tailwind",
      "Swiper",
      "Framer-motion",
      "React-icons",
      "React-Toastify",
      "React-Hook-Form",
    ],
    url: {
      demo: "https://movies-watcher.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/movies-watcher",
    },
    publishedAt: "2024-11-26T02:26:17.559Z",
  },
  {
    id: "04154118-a5c7-4f50-a6a4-05cec95b68df",
    title: "Job listings with filtering",
    slug: "job-listings-with-filtering",
    description: "Job listings with filtering challenge from front-end mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/06d274fcc049717665b17ab7dce2c1d60c02d4a9-1308x816.png",
    stack: ["React", "TypeScript", "Tailwind.css"],
    url: {
      demo: "https://job-listings-with-filtering-blue.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Job-listings-with-filtering",
    },
    publishedAt: "2024-11-25T06:28:00.000Z",
  },
  {
    id: "b6eb3dc5-d7d9-4f5b-ab9d-dbf8fde883ba",
    title: "The wild oasis website",
    slug: "the-wild-oasis-website",
    description:
      "Wild oasis is a great application I do from Next js course!, have authentication and reservation!",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/1d2c79f198dc47989b4749efcb3d0c5bf562f469-1308x816.png",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    url: {
      demo: "https://the-wild-oasis-website-seven-blond.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/The-wild-oasis-website",
    },
    publishedAt: "2024-11-22T06:27:00.000Z",
  },
  {
    id: "c0bd7d69-4bd2-4479-86d0-b5501115f89f",
    title: "Positivus",
    slug: "positivus",
    description: "Positivus landing page with great framer-motion animations!",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/fac59a1262f0aea9b944fa9057dde13e061012d2-1308x816.png",
    stack: ["React", "Tailwind", "Framer Motion"],
    url: {
      demo: "https://positivus-mocha.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Positivus",
    },
    publishedAt: "2024-11-20T06:27:00.000Z",
  },
  {
    id: "2b353906-bfe4-4494-82af-f81321ffb07c",
    title: "Rest Countries Website",
    slug: "rest-countries-website",
    description:
      "Frontend Mentor - REST Countries API with color theme switcher",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/ed57b39e42bc2d860d98f020c9f4185a1015cda7-1755x1227.jpg",
    stack: ["React", "Framer Motion", "Styled Components", "React Query"],
    url: {
      demo: "https://rest-countries-website-cyan.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/REST-Countries-Website/tree/react-version",
    },
    publishedAt: "2024-11-19T06:28:00.000Z",
  },
  {
    id: "4306f9e0-8eb9-4885-85a9-bb6efe80e61a",
    title: "To Do List application",
    slug: "to-do-list-application",
    description: "To do list application with theme changer!",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/2143464c2ea7c5146a30bf6acf30fdcfdb7b04af-1308x816.png",
    stack: ["React", "Tailwind"],
    url: {
      demo: "https://to-do-list-project-roan.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/To-do-list-Project",
    },
    publishedAt: "2024-11-19T06:28:00.000Z",
  },
  {
    id: "edacd0ea-1d6f-42d8-936a-b2f6cb652c65",
    title: "Multi step form",
    slug: "multi-step-form",
    description:
      "Multi step form with save data in local storage from Frontend Mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/55f4b48c337508f3ca24c019ec5345d7aa34b8d6-1308x816.png",
    stack: ["React", "Tailwind", "Framer motion", "Redux"],
    url: {
      demo: "https://multi-step-form-murex-gamma.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Multi-Step-Form/tree/React-Version",
    },
    publishedAt: "2024-11-18T06:28:00.000Z",
  },
  {
    id: "8d833c24-1b15-439e-a421-f7d8a7c5bf7a",
    title: "Smart Home Landing page",
    slug: "smart-home-landing-page",
    description:
      "Smart Home Landing Page Challange with Framer motion great animations!",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/645212372e207b8de30681c4d2a0ca84225b7427-1899x1312.jpg",
    stack: ["React", "framer motion", "Styled components"],
    url: {
      demo: "https://smart-home-landing-page-gules.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Smart-Home-Landing-Page",
    },
    publishedAt: "2024-11-18T06:30:00.000Z",
  },
  {
    id: "a6a3c57c-59b2-4d41-9400-126c6292510e",
    title: "Rock Paper Scissors Game",
    slug: "rock-paper-scissors-game",
    description: "Rock paper scissors game Challange from frontend mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/4fbe79897df20a366c3114bdf9b95516e7b301a3-1308x816.png",
    stack: ["Html", "Tailwind", "Javascript"],
    url: {
      demo: "https://rock-paper-scissors-game-phi-one.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Rock-paper-scissors-game",
    },
    publishedAt: "2024-11-17T06:28:00.000Z",
  },
  {
    id: "0be2ee8a-ed53-445f-bca1-da4f2b0ad877",
    title: "Easybank Website",
    slug: "easybank-website",
    description: "Easybank page challenge from frontend-mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/7dc1490940c171f5e8fcce3775433393f8aae8e9-1308x816.png",
    stack: ["Html", "Css", "Javascript", "Tailwind"],
    url: {
      demo: "https://easybank-page-black.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Easybank-Page",
    },
    publishedAt: "2024-10-28T16:53:54.671Z",
  },
  {
    id: "c0e4eec1-1193-4e5d-9869-b83893ee2877",
    title: "Bankist Website",
    slug: "bankist-website",
    description:
      "Bankist Website from Jonas Schmedtmann Javascript course (Not Responsive!)",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/a7e73766996633c2e7e3dee21dceb1f9aba10278-1308x816.png",
    stack: ["Html", "Css", "Javascript", "Tailwind"],
    url: {
      demo: "https://bankist-website-alpha.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Bankist-Website",
    },
    publishedAt: "2024-10-28T16:52:56.241Z",
  },
  {
    id: "ac61f2bd-75e7-47b9-b6ca-e0d52a8a8193",
    title: "Space Tourism Website",
    slug: "space-tourism-website",
    description: "Space tourism multipage responsive website",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/3c14b81ede4f864df443b7fb14e11a4598fee491-1755x999.jpg",
    stack: ["Html", "Css", "Javascript", "Tailwind"],
    url: {
      demo: "https://space-tourism-indol-omega.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Space-tourism",
    },
    publishedAt: "2024-10-28T16:51:56.489Z",
  },
  {
    id: "c0e970a4-be27-4467-b1fe-9b7f2e6c808c",
    title: "Social Media Dashboard",
    slug: "social-media-dashboard",
    description: "Social media dashboard with theme switcher",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/a6dbd894bd55b0c87bf7752dbdb0835238e1adbc-1308x816.png",
    stack: ["Html", "Css", "Javascript"],
    url: {
      demo: "https://social-media-dashboard-front-end-mentor.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Social-media-dashboard",
    },
    publishedAt: "2024-10-28T16:49:47.894Z",
  },
  {
    id: "d14aada7-0140-4269-9457-a80143a41aea",
    title: "Tip Calculator Application",
    slug: "tip-calculator-application",
    description: "Tip calculator app Challange from front-end mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/5db2fde25a5d3f1343b1cf3475113b699ec3ee87-1535x944.jpg",
    stack: ["Html", "Css", "Javascript"],
    url: {
      demo: "https://tip-calculator-app-theta-teal.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Tip-Calculator-App",
    },
    publishedAt: "2024-10-28T16:49:09.734Z",
  },
  {
    id: "aeed8e3c-db22-4174-af7f-8aeab2aabfc4",
    title: "Advice Generator Api App",
    slug: "advice-generator-api-app",
    description: "Advice Generator Api App mentor project",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/0df3ead8ded3f1ee8a4281d398d561b1a086d5a8-1308x816.png",
    stack: ["Html", "Css", "Javascript", "Tailwind"],
    url: {
      demo: "https://advice-generator-api-app-lyart.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Advice-Generator-Api-App",
    },
    publishedAt: "2024-10-28T16:48:16.132Z",
  },
  {
    id: "957fd9b0-8662-4172-bce6-ac727a7c7def",
    title: "Entertainment Website",
    slug: "entertainment-website",
    description: "Movie and Entertainment application",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/c4ead92e2bfb505ddcefc149f8ffabab945f8a7a-1897x1020.jpg",
    stack: ["Html", "Css", "Javascript", "Tailwind", "swiper"],
    url: {
      demo: "https://entertainment-web-application.vercel.app/",
      repo: "https://github.com/Adel-Yasser-dev/Entertainment-Web-application",
    },
    publishedAt: "2024-10-28T16:47:06.994Z",
  },
  {
    id: "c5947ef5-c43b-4c2f-aef9-bfba418488de",
    title: "IP Address Tracker",
    slug: "ip-address-tracker",
    description:
      "Ip Address tracker challange from front-end mentor with leaflet and ip api!",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/3936bf78751304063099cacc523659ca9766b2a2-1308x816.png",
    stack: ["Html", "Tailwind", "Javascript", "Leaflet"],
    url: {
      demo: "https://ip-address-tracker-livid.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Ip-Address-Tracker",
    },
    publishedAt: "2024-10-28T16:45:59.827Z",
  },
  {
    id: "e9ad4199-9b38-4500-8ab1-49d5ead4ab6f",
    title: "Interactive Comments components",
    slug: "interactive-comments-components",
    description: "Interactive Comments challenge from front-end mentor",
    image:
      "https://cdn.sanity.io/images/yedl08o1/production/ab58300cb6c3c3e2e5ba07426c76499d8439f129-1280x1007.jpg",
    stack: ["React", "Tailwind", "Framer motion", "Redux"],
    url: {
      demo: "https://interactive-comments-phi.vercel.app",
      repo: "https://github.com/Adel-Yasser-dev/Interactive-Comments",
    },
    publishedAt: "2024-10-28T16:42:26.983Z",
  },
];
