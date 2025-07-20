import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollEffect from "./components/ScrollEffect";
import Notice from "./components/Notice"
import "./App.css";
import { useState } from "react";

function App() {

  return (
    <Router>
      <ScrollEffect />
      <Notice/>

      <Navbar />
      <div className="l-side"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="r-side"></div>
      <div className="footer"></div>
    </Router>
  );
}

export default App;
