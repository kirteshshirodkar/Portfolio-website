import React from "react";
import {Routes,Route} from "react-router"
import AboutMe from "./sessions/AboutMe"
import HomePage from "./sessions/HomePage";

export default function App() {
  return (
    <div>
      
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="aboutme" element={<AboutMe/>}/>


       </Routes>
       
    </div>
  );
}
