import React from "react";
import { skills } from "../constants";

export default function Skills() {
  return (
    <div name="Skills" className="flex justify-center items-center flex-col bg-[#fff7f3] text-[#332e2e] py-35">
      <h1 className="text-4xl font-medium mb-10"> My skills</h1>
      <div className="flex flex-row max-sm:flex-col max-sm:space-y-5   items-center justify-center sm:space-x-6 xl:space-x-8">
        {skills.map((items) => (
          <div
            key={items.title}
            className="h-[250px] w-[300px] md:max-lg:w-[230px] md:max-lg:h-[300px] border-2 p-5 hover:bg-[#332e2e] hover:text-white duration-300 rounded-3xl "
          >
            <h2 className="text-xl font-medium mb-4 text-center">
              {items.title}
            </h2>
            <p className="text-center">{items.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
