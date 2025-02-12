import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router";
export default function Navbar() {
  return (
    <div className="flex flex-row justify-between lg:px-[200px] sm:py-[75px]  bg-[#fff7f3] lg:max-xl:px-5  text-[#332e2e] max-lg:flex-col max-sm:py-10 max-sm:px-3 ">
      <div className="flex flex-row  justify-center items-center">
        <span className="pr-5 py-6 max-sm:p-3 border-r-2 font-serif text-5xl max-sm:text-3xl">
          <LinkRouter to={"/"}>Kirtesh</LinkRouter>
        </span>
        <Link
          to="Contact"
          duration={500}
          smooth
          className="ml-2 p-3 text-2xl max-sm:text-xl hover:bg-[#332e2e] hover:text-[#fff7f3] rounded-xl duration-300"
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-row space-x-10 max-sm:space-x-4 max-sm:text-[13px] max-lg:mt-5 max-sm:py-5 max-sm:border-t-2 max-sm:border-b-2 text-xl justify-center items-center font-sans ">
        <LinkRouter className="hover:underline cursor-pointer" to={"/"}>Home</LinkRouter>
        <LinkRouter className="hover:underline cursor-pointer" to={"/aboutme"}>About Me</LinkRouter>
        {navLinks.map((items) => (
          <Link
            key={items.label}
            to={items.href}
            duration={500}
            smooth
            className="hover:underline cursor-pointer"
          >
            {items.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
