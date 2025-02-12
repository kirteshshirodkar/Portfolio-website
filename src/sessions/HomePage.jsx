import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
