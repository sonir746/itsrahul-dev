import React from "react";
import ProjDetails from "./ProjDetails";
import ProjectData from "../common/ProjectData";

export default function Project() {
  return (
    <div class="home_proj dtl_ctnt">
      <p class="heading">Featured Projects</p>
      <div class="home_proj_ctnt">
        <ProjDetails
          showclass={""}
          sampleimage={ProjectData.p1.image}
          name={ProjectData.p1.name}
          git={ProjectData.p1.GitHub}
          // live={ProjectData.p1.livelink}
          details={ProjectData.p1.details}
        />
        <ProjDetails
          showclass={"r"}
          sampleimage={ProjectData.p2.image}
          name={ProjectData.p2.name}
          git={ProjectData.p2.GitHub}
          // live={ProjectData.p2.livelink}
          details={ProjectData.p2.details}
        />
      </div>
    </div>
  );
}
