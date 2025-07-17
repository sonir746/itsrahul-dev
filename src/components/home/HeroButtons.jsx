import React from "react";
import { Link } from "react-router-dom";

export default function HeroButtons(props) {
  return (
    <div class="hero-buttons">
      <Link to="/projects" class="btn">
        🚀 View Projects
      </Link>
      <Link to="/contact" class="btn btn-outline">
        📬 Contact Me
      </Link>
    </div>
  );
}
