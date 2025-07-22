import React from "react";
import { Link } from "react-router-dom";
import CurrentPath from "../common/CurrentPath";
export default function HeroButtons(props) {
   const [activeIndex, setActiveIndex, path] = CurrentPath();
  //  console.log(path)
  //  console.log(activeIndex)
   
  return (
    <div class="hero-buttons">
      <Link to="/projects" class="btn" 
      onClick={()=>setActiveIndex("/projects")}
      >
        🚀 View Projects
      </Link>
      <Link
        to="/contact"
        class="btn btn-outline"
        onClick={()=>setActiveIndex("/contact")}
      >
        📬 Contact Me
      </Link>
    </div>
  );
}
