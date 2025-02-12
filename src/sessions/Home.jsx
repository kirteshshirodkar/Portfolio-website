import React from "react";
import me from "../assets/me.png";
import { Link as LinkRouter } from "react-router";
//import { FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <div>
      <div className="text-center  leading-[30px] bg-[#d9ffb6] text-[#332e2e] px-48 py-25 pb-20 max-sm:px-5 max-sm:py-15 sm:max-lg:px-20 sm:max-lg:py-10">
        <h1 className="text-7xl max-sm:text-5xl  font-medium font-sans mb-7">
          Welcome to my Portfolio
        </h1>
        <p className="leading-[25px] text-xl font-light mb-6">
          Whether you work on your own or with thousands of other developers,
          using React feels the same. React lets you build user interfaces out
          of individual pieces called components.
        </p>
        <button className=" text-[20px] px-7 py-2 border-2 rounded-3xl hover:bg-[#332e2e] duration-300 hover:text-white">
          <a href="https://react.dev/" target="main">
            Read More
          </a>
        </button>
      </div>
      <div className="flex justify-center items-center bg-[#fff7f3] text-[#332e2e] flex-col">
        <img
          src={me}
          alt=""
          className="w-[400px] h-[500px] rounded-b-3xl max-[400px]:mt-7 max-[400px]:rounded-none max-[400px]:h-[450px]"
        />
        <div className="flex items-center justify-center flex-col max-[450px]:px-7">
          <h1 className="text-4xl font-medium my-5">
            Hello, I'm Kirtesh Shirodkar
          </h1>
          <p className="text-xl mb-5">
            Web Developer, specializing in React.Js
          </p>
          <LinkRouter to={"/aboutme"} className="text-xl border-2 px-7 py-2 rounded-3xl hover:bg-[#332e2e] hover:text-white duration-300">
            About me
          </LinkRouter>
        </div>
      </div>
    </div>
  );
}
