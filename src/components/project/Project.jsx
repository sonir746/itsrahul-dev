import React from "react";
import Labeling from "../images/Labeling.png";
import ProjDetails from "./ProjDetails";

const project = {
  p1: {
    name: "Example Project",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio totam, non blanditiis voluptate saepe vitae doloribus excepturi harum in quam nulla. Iure nihil numquam quam adipisci error similique nostrum?",
  },
  p2: {
    name: "Example Project",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio totam, non blanditiis voluptate saepe vitae doloribus excepturi harum in quam nulla. Iure nihil numquam quam adipisci error similique nostrum?",
  },
};
export default function Project() {
  return (
    <div class="proj dtl_ctnt">
      <p class="heading">Featured Projects</p>
      <div class="proj_ctnt">
        <ProjDetails
          sampleimage={Labeling}
          name={project.p1.name}
          details={project.p1.details}
        />
        <ProjDetails
          sampleimage={Labeling}
          name={project.p2.name}
           details={project.p2.details}
        />
      </div>
    </div>
  );
}
