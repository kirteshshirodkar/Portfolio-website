import React from "react";
import { projects } from "../constants";


export default function Projects() {
  return (
    <div name="Projects" className="bg-[#fff7f3] text-[#332e2e] ">
      <h1 className="text-center text-4xl font-medium mb-15 ">My Projects</h1>
      <div className="flex flex-col">
        {projects.map((items) => (
          <div
            key={items.title}
            className="flex flex-row  items-center space-x-8 mb-25 max-sm:flex-col max-sm:pl-7 pl-20  "
          >
            <img
              src={items.img}
              className="h-[400px] w-[800px] max-sm:h-[200px] max-sm:w-[300px] sm:max-lg:h-[200px] sm:max-lg:w-[300px] max-lg:rounded-2xl max-sm:mb-10 rounded-[60px]  shadow-black shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-medium ">
                <a href={items.link} className="hover:underline" target="main">{items.title}</a>
                
              </h1>
              <p className="text-xl">{items.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
