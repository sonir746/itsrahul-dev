import React from "react";
import Me from "../images/Me.png";
const Hero = () => {
  return (
    <div class="avtar_ctnt">
      <div class="my_nm">
        <p>
          <strong>Hello! I Am</strong> <span>RAHUL SONI</span>
        </p>
        <div class="arrow-container">
          <div class="curve-line"></div>
          <div class="arrow-head"></div>
        </div>
      </div>
      <div class="avtar-div">
        <img class="avtar" src={Me} alt="" />
      </div>
      <div class="ctnt">
        <p>A Developer who</p>
        <p class="big_font">
          Builds what's under the{" "}
          <span class="border">
            <span class="text">cover</span>
          </span>
          ...
        </p>
        <p>Because great systems need both smart logic and sleek design.</p>
      </div>
    </div>
  );
};

export default Hero;
