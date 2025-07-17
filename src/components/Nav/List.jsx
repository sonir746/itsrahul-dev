import React from "react";
import { Link } from "react-router-dom";

export default function List(props) {


  return (
    <li
      onClick={() => props.setActiveIndex(props.to)}
      className={props.activeIndex === props.to ? "active" : ""}
    >
      <Link to={props.to}>
        <span class="text">{props.text}</span>
        <span class={"nav-icon " + props.iconclass}>{props.svg}</span>
        <span class="nav-underline"></span>
      </Link>
    </li>
  );
}
