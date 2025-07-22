import React from "react";
import { Link } from "react-router-dom";
import { usePath } from "../common/PathContext";
export default function HeroButtons(props) {
  const { activeIndex, setActiveIndex } = usePath();

  return (
    <div class="hero-buttons">
      <Link
        to="/projects"
        class="btn"
        onClick={() => setActiveIndex("/projects")}
      >
        🚀 View Projects
      </Link>
      <Link
        to="/contact"
        class="btn btn-outline"
        onClick={() => setActiveIndex("/contact")}
      >
        📬 Contact Me
      </Link>
    </div>
  );
}
