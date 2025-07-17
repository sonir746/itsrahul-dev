import react from "react";

export default function ExpDetails(props) {
  return (
    <div>
      <img src={props.imgicon} alt="" />
      <div class="ctnt">
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}
