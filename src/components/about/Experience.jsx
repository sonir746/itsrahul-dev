import React from "react";
import bulbe from "../images/bulbe.png";
import ExpDetails from "./ExpDetails";

export default function Experience() {
  return (
    <div class="exp dtl_ctnt">
      <p class="heading">Work Experience</p>
      <div class="exp_ctnt">
        <ExpDetails
          imgicon={bulbe}
          p1="CIB on the Mobile"
          p2="Take your client onboard seamlessly by our amazing tool of digital
              onboard process."
        />
        <ExpDetails
          imgicon={bulbe}
          p1="CIB on the Mobile"
          p2="Take your client onboard seamlessly by our amazing tool of digital
              onboard process."
        />
      </div>
    </div>
  );
}
