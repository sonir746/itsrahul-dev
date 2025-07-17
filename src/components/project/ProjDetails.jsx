import react from "react";

export default function ProjDetails(props) {
  return (
    <div class="ctnt_div">
      <div class="heading_2">
        <p>{props.name}</p>
      </div>
      <div class="text">
        <p>{props.details}</p>
      </div>
      <div class="overview">
        <img src={props.sampleimage} alt="" />
      </div>
    </div>
  );
}
