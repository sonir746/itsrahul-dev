import react from "react";

export default function ProjDetails(props) {
  return (
    <div class={"ctnt_div " + props.showclass}>
      <div class="heading_2">
        <p>{props.name}</p>
      </div>
      <div class="text">
        <p>
          <span>{props.details}</span>
          <br />
          <a href={props.git} target="_blank" rel="noopener noreferrer">
            <button>LEARN MORE</button>
          </a>
        </p>
      </div>
      <div class="overview">
        <img src={props.sampleimage} alt="" />
      </div>
    </div>
  );
}
