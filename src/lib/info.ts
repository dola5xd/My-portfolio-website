export type courseType = {
  id: number;
  name: string;
  platform: string;
  instructor: string;
  from: string;
  to: string;
};

export const coursesInfo: courseType[] = [
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
