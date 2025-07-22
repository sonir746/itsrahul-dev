import React, { useState } from "react";

export default function CurrentPath(Props) {
  const path = window.location.pathname;
  const [activeIndex, setActiveIndex] = useState(path);
  console.log(path);
  return [activeIndex, setActiveIndex, path];
}
