import nike from "../src/assets/nikeWeb.png";
import weather from "../src/assets/weather.png";
//import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
export const navLinks = [
  // { label: "Home", href: "Home" },
  // { label: "About Me", href: "About me" },
  { label: "Skills", href: "Skills" },
  { label: "Projects", href: "Projects" },
  { label: "Experience", href: "Experience" },
];

export const skills = [
  {
    title: "Frontend Development",
    note: "I have a strong foundation in HTML,CSS and Javascript. I also use React for building dynamic and interactive user interfaces efficiently using components and state management.",
  },
  {
    title: "CSS Frameworks",
    note: "I am also specialized in using CSS Frameworks like Tailwind CSS and Bootstrap which enhance frontend development by providing pre-designed styles and utility classes.",
  },
  {
    title: "Programing Languages",
    note: "I'm familiar with programing languages like Python, C, CPP, Java, Javascript , and can debug to improve code quality, reduce unexpected failures.",
  },
];

export const projects = [
  {
    img: nike,
    title: "Nike Website",
    note: "A static Nike Website made with React.Js and Tailwind CSS.",
    link: "https://kirteshshirodkar.github.io/Nike-Website/",
  },
  {
    img: weather,
    title: "Weather App",
    note: "A weather detecting website made with React.Js, Tailwind CSS and Weather API.",
    link: "https://kirteshshirodkar.github.io/weather-forecast/",
  },
];

export const footerLinks=[
  {link:"*", title:"Resources"},
  {link:"/", title:"Home"},
  {link:"/aboutme", title:"About me"},
  {link:"*", title:"Projects"},
  {link:"*", title:"Blogs"},
  {link:"*", title:"Privacy Policy"}
]