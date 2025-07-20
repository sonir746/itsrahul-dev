import React from "react";
import "../components/home/Home.css";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import HeroButtons from "../components/home/HeroButtons";
import Project from "../components/home/Project";


const Home = () => {
  return (
    <div class="main">
      <Hero />
      <About />
      <HeroButtons />
      <Project />
    </div>
  );
};
export default Home;
