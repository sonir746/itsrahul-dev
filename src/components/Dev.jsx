import React, { useEffect, useState } from "react";
import "./Dev.css";

export default function Dev() {
  
  
  // useEffect(() => {
  //   setActiveIndex(currentindex);
  //   if (activeIndex === "/") {
  //     body.classList.remove("devbody");
  //   } else {
  //     body.classList.add("devbody");
  //   }
  // }, [activeIndex]);

  return (
    <div className="dev">
      <p>🛠️ Currently in Dev Mode. Still Deploying...</p>
    </div>
  );
}
