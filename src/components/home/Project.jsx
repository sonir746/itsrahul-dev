import React from "react";
import Labeling from "../images/Labeling.png";
import ProjDetails from "./ProjDetails";

const project = {
  p1: {
    show:"",
    name: "Example Project",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio totam, non blanditiis voluptate saepe vitae doloribus excepturi harum in quam nulla. Iure nihil numquam quam adipisci error similique nostrum?",
  },
  p2: {
    show:"r",
    name: "Example Project",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio totam, non blanditiis voluptate saepe vitae doloribus excepturi harum in quam nulla. Iure nihil numquam quam adipisci error similique nostrum?",
  },
};
export default function Project() {
  return (
    <div class="home_proj dtl_ctnt">
      <p class="heading">Featured Projects</p>
      <div class="home_proj_ctnt">
        <ProjDetails
        showclass={project.p1.show}
          sampleimage={Labeling}
          name={project.p1.name}
          details={project.p1.details}
        />
        <ProjDetails
          showclass={project.p2.show}
          sampleimage={Labeling}
          name={project.p2.name}
          details={project.p2.details}
        />
      </div>
    </div>
  );
}
