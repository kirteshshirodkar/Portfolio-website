import React from "react";
import { VscSend } from "react-icons/vsc";

export default function Contact() {
  return (
    <div
      name="Contact"
      className="bg-[#d9ffb6] text-[#332e2e] flex flex-row max-sm:flex-col max-sm:px-3 max-sm:space-y-5 sm:max-xl:px-7 px-[200px] py-[40px]"
    >
      <h1 className="text-[150px] max-sm:text-[120px] md:max-lg:text-8xl font-bold leading-[130px] md:max-lg:leading-[100px]">
        Shall We?
      </h1>
      <div className="flex flex-col justify-center items-start ml-25 max-sm:ml-3 sm:max-xl:ml-10  text-xl space-y-6">
        <p className="font-light">
          If you're looking for a front-end developer skilled in React,
          JavaScript, and UI/UX design, or just want to discuss tech, don't
          hesitate to drop a message. Looking forward to connecting with you! 😊
        </p>

        <button className="bg-[#332e2e] text-white px-7 py-3 rounded-3xl hover:scale-110 duration-200  flex items-center ">
          <a href="mailto:kirteshshirodkar8@email.com">Email me</a>
          <span className="ml-3">
            <VscSend size={25} />
          </span>
        </button>
      </div>
    </div>
  );
}
