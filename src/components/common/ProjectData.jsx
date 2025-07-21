import React from "react";
import proj1 from "../images/Drowsiness.png";
import proj2 from "../images/NoteKeeper.png";
import proj3 from "../images/color classification.jpg";
import proj4 from "../images/Simon.png";
import proj5 from "../images/website_analyzer.png";

const ProjectData = {
  p1: {
    name: "Drowsiness Detection",
    image: proj1,
    GitHub: "https://github.com/sonir746/Drowsiness_Detection_and_Alert_System.git",
    livelink: "",
    details:
      "A Python project that detects driver drowsiness using a custom-trained deep learning model on facial features. It monitors eye states in real-time from webcam input and triggers voice alerts if the eyes remain closed for over a second—helping prevent accidents. Built with OpenCV, PyTorch, and pyttsx3.",
  },
  p2: {
    name: "NoteKeeper",
    image: proj2,
    GitHub: "https://github.com/sonir746/NoteKeeper--React.js.git",
    livelink: "https://note-keeper-pied.vercel.app/",
    details:
      "A sleek and responsive note-taking app built with React. It lets users create and delete notes through a clean, minimalist interface. Designed for simplicity, with Material UI icons and a smooth user experience—perfect for quick thoughts and to-dos.",
  },
  p3: {
    name: "Color-Classification",
    image: proj3,
    GitHub: "https://github.com/sonir746/Color_Classification_Model.git",
    livelink: "",
    details:
      "A deep learning-based color classification system that detects and announces the name of colors from images using a custom-trained Ultralytics model with text-to-speech (TTS) support.",
  },
  p4: {
    name: "Simon-Game",
    image: proj4,
    GitHub: "https://github.com/sonir746/Simon-Game.git",
    livelink: "https://sonir746.github.io/Simon-Game/",
    details:
      "A web-based remake of the classic Simon memory game where players repeat increasingly complex color and sound sequences. The game challenges memory and focus with each advancing level. Built using HTML, CSS, JavaScript, and jQuery for smooth interaction and animations.",
  },
  p5: {
    name: "Website-Analyzer",
    image: proj5,
    GitHub: "https://github.com/sonir746/website_analyzer.git",
    livelink: "",
    details:
      "A deep learning-based tool that detects and classifies HTML tags from webpage screenshots using a trained YOLOv8 model. Built with Python, OpenCV, and PyTorch, the system processes images and highlights predicted elements. The model is trained on custom-labeled data using LabelImg, achieving around 50–65% accuracy. Includes real-time prediction with GPU support.",
  },
};

export default ProjectData;
