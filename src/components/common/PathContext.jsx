import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create Context
const PathContext = createContext();

// 2. Create a provider component
export function PathProvider({ children }) {
  const currentPath = window.location.pathname;
  const [activeIndex, setActiveIndex] = useState(currentPath);

  // optional: update on URL change
  useEffect(() => {
    const handlePopState = () => {
      setActiveIndex(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <PathContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </PathContext.Provider>
  );
}

// 3. Custom hook to use context
export function usePath() {
  return useContext(PathContext);
}











// export default function CurrentPath(Props) {
//   const path = window.location.pathname;
//   const [activeIndex, setActiveIndex] = useState(path);
//   console.log(path);
//   return [activeIndex, setActiveIndex, path];
// }
