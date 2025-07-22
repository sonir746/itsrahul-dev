import react from "react";
import Icons from "../common/Icons";
export default function ProjDetails(props) {
  return (
    <div class="projCards">
      <div className="projCtnt">
        <div class="img_div">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="ctnt_div">
          <h3 className="projName heading_2">{props.name}</h3>
          <p className="projDetail">{props.Details}</p>
          <p className="projButtens">
            <a
              href={props.git}
              className={"git " + props.class[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gitBtn">
                <span className="gitIcon">{Icons.git}</span><span>LEARN MORE</span>
              </button>
            </a>
            <a
              href={props.link}
              className={"link " + props.class[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="linkBtn">LIVE</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
