import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import React from "react";


export const HERO_CONTENT = `I ’m a programmer who pays close attention to details. I love working with C++, and I’m always eager to learn more about data structures, algorithms, and web development.`

export const ABOUT_TEXT = `Hello, I’m Venkata Sai Abhinay, pursuing Computer Science at CMR TECHNICAL CAMPUS. My self-motivation drives me to learn and solve problems daily. Besides my studies, I’ve explored web development and created practical projects that address real-world challenges. I continuously expand my knowledge and contribute to meaningful solutions.`;

export const QUALIFICATION = [
  {
    year: "Nov 2021 - Present",
    clg: "CMR TECHNICAL CAMPUS",
    gpa: "(GPA of 7.99)",
    description: `Computer Science Engineering`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2019 - 2021",
    clg: "ALPHORES JUNIOR COLLEGE",
    gpa: "(GPA of 9.6)",
    description: `MPC`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2018 - 2019",
    clg: "SACHDEVA SCHOOL PF EXCELLENCE",
    gpa: "(GPA OF 9.7)",
    description: `State Board`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Expence Tracker App",
    image: project2,
    description:
      "An application for  a comprehensive expense management system capable of dynamically adapting to users’ budgets, providing real-time insights into spending habits and financial health..",
    technologies: ["ReactJs", "Bootstrap"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },


  {
    title: "Blood Bank Management System",
    image: project4,
    description:
      "A web-based application which acts as a platform between Donors and recipient, with features like donating, purchase, and tracking blood of various groups.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

// export const SKILLS = [
//   {
//   tag: <TbBrandCpp />,
//   title: "C++",
//   },
//   {
//   tag: <FaJava />,
//   title: "Java",
//   },
//   {
//   tag: <RiReactjsLine />,
//   title: "React",
//   },
//   {
//   tag: <FaHtml5 />,
//   title: "HTML",
//   },
//   {
//   tag: <FaCss3Alt />,
//   title: "CSS",
//   },
//   {
//   tag: <FaGithub />,
//   title: "Github",
//   },
//   {
//   tag: <SiMysql />,
//   title: "MySQL",
//   },

// ];
