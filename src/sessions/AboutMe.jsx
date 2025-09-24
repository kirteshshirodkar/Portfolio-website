import React from "react";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Footer from "../components/Footer";
import aboutme from "../assets/aboutme.jpg";
import aboutme2 from "../assets/aboutme2.png";

export default function AboutMe() {
  return (
    <div className="bg-[#fff7f3]">
      <Navbar />
      <div className=" text-[#332e2e] text-xl  pt-10 mb-30 ">
        <h1 className="text-6xl font-bold pl-50 max-sm:px-5 sm:max-xl:pl-5 max-xl:mb-10 ">
          {" "}
          I'm Kirtesh Shirodkar
        </h1>
        <div className="flex flex-row items-center pl-50 max-sm:px-5 sm:max-xl:pl-5 max-sm:flex-col-reverse ">
          <div className="pr-25 sm:max-xl:pr-5 max-sm:pr-5">
            <h1 className="text-3xl font-medium mb-5 max-sm:mt-10">About Me</h1>
            <p className="mb-10">
              a passionate Front-End Developer based in Goa, India. Currently
              pursuing my Masters of Computer Applications (MCA) Garden City
              Univercity Bengalore, I have a strong foundation in programming
              and a keen interest in creating seamless, user-friendly web
              experiences.
            </p>
            <h1 className="text-3xl font-medium mb-5">My Journey</h1>
            <p>
              My journey into web development started with a deep curiosity for
              how digital interfaces work. Over time, I honed my skills in HTML,
              CSS, JavaScript, and React, allowing me to craft interactive and
              responsive websites. I've also worked with Python, C, C++, and
              Java, expanding my technical expertise beyond front-end
              development.
            </p>
          </div>

          <img
            className="  h-[550px] w-[400px] max-sm:h-[340px] max-sm:w-[300px] max-sm:rounded-2xl rounded-tl-[150px] rounded-bl-[150px] "
            src={aboutme}
            alt=""
          />
        </div>
        <div className="flex flex-row items-center  max-sm:px-5 mt-20 sm:mt-40 max-xl:flex-col">
          <img
            className="  h-[500px] w-[500px] rounded-tr-[150px] rounded-br-[150px] max-sm:h-[300px] max-sm:w-[300px] max-xl:mb-10 max-xl:rounded-2xl  "
            src={aboutme2}
            alt=""
          />
          <div className="pr-25 sm:max-xl:pr-5 max-sm:p-0  ml-20 sm:max-xl:ml-5 max-sm:m-0">
            <h1 className="text-3xl font-medium mb-5">What I Do</h1>

            <ol className="space-y-5 mb-10">
              <li>
                <b>Freelance Web Development</b> – I design and maintain client
                websites, focusing on performance, accessibility, and
                aesthetics.
              </li>
              <li>
                <b>AI Integration</b> – I leverage AI tools to enhance project
                development, ensuring efficiency and innovation.
              </li>
              <li>
                <b>Project Building</b> – Some of my notable projects include a
                Nike-themed static website and a Weather App, showcasing my
                ability to turn ideas into functional web applications.
              </li>
            </ol>

            <h1 className="text-3xl font-medium mb-5">My Vision</h1>
            <p>
              I strive to build intuitive and visually appealing digital
              experiences while continuously learning and evolving with the
              latest industry trends. Whether it’s debugging, optimizing
              performance, or experimenting with new frameworks, I’m always
              excited to push my limits.
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
