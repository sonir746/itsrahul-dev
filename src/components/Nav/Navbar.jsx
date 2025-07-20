import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import List from "./List";
import Icons from "../home/Icons";


export default function Navbar() {
  const currentPath = window.location.pathname;
  const [activeIndex, setActiveIndex] = useState(currentPath);

  const body = document.querySelector("body");
  console.log(currentPath)


  useEffect(() => {

    if (activeIndex === "/") {
      body.classList.remove("devbody");
    } else {
      body.classList.add("devbody");
    }
  }, [activeIndex]);

  return (
    <header className="header">
      <nav className="div1">
        <ul>
          <List
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            to="/"
            text="Home"
            svg={Icons.home}
            iconclass="home-icon"
          />

          <List
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            to="/about"
            text="About"
            svg={Icons.about}
            iconclass="about-icon"
          />

          <List
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            to="/projects"
            text="Projects"
            svg={Icons.project}
            iconclass="project-icon"
          />

          <List
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            to="/contact"
            text="Contact"
            svg={Icons.contact}
            iconclass="contact-icon"
          />
        </ul>
      </nav>
    </header>
  );
}
