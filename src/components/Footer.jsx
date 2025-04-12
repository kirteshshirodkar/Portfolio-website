import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { footerLinks } from "../constants";
import { Link as LinkRouter } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#332e2e] text-white px-[200px] max-xl:px-5 py-10 text-lg font-light">
      <div className="flex flex-row justify-start space-x-15 max-sm:space-x-10 mb-10">
        <div className="flex flex-col items-center">
          <FaInstagram size={30} />
          <a className="hover:underline" href="https://www.instagram.com/_kirtesh_/" target="main">Instagram</a>
        </div>
        <div className="flex flex-col items-center">
          <FaLinkedin size={30} />
          <a className="hover:underline" href="https://www.linkedin.com/in/kirtesh-shirodkar/" target="main">Linkedin</a>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub size={30} />
          <a className="hover:underline" href="https://github.com/kirteshshirodkar" target="main">Github</a>
        </div>
      </div>
      <div className="flex flex-row max-sm:flex-col max-sm:space-y-3 space-x-15">
        {footerLinks.map((items)=>(
          <LinkRouter className="hover:underline" key={items.title} to={items.link} >{items.title}</LinkRouter>
        ))}
      </div>
      <p className=" flex justify-start mt-10 text-[15px] ">kirteshshirodkar8@gmail.com, 7350391905</p>
    </footer>
  );
}
