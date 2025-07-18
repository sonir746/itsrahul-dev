import React from "react";
import proj1 from "../images/Drowsiness.png";
import proj2 from "../images/NoteKeeper.png";
import ProjDetails from "./ProjDetails";

const project = {
  p1: {
    show:"",
    name: "Drowsiness Detection",
    image:proj1,
    details:
      "A Python project that detects driver drowsiness using a custom-trained deep learning model on facial features. It monitors eye states in real-time from webcam input and triggers voice alerts if the eyes remain closed for over a second—helping prevent accidents. Built with OpenCV, PyTorch, and pyttsx3.",
  },
  p2: {
    show:"r",
    name: "Example Project",
    image:proj2,
    details:
      "A sleek and responsive note-taking app built with React. It lets users create and delete notes through a clean, minimalist interface. Designed for simplicity, with Material UI icons and a smooth user experience—perfect for quick thoughts and to-dos.",
  },
};
export default function Project() {
  return (
    <div class="home_proj dtl_ctnt">
      <p class="heading">Featured Projects</p>
      <div class="home_proj_ctnt">
        <ProjDetails
        showclass={project.p1.show}
          sampleimage={project.p1.image}
          name={project.p1.name}
          details={project.p1.details}
        />
        <ProjDetails
          showclass={project.p2.show}
          sampleimage={project.p2.image}
          name={project.p2.name}
          details={project.p2.details}
        />
      </div>
    </div>
  );
}
