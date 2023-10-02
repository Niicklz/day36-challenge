import React, { useEffect, useRef } from "react";

import { Cuadrito } from "./components/Cuadrito";
import "./styles.css";
import { randomColors } from "./utilities/randomColor";

export const App = () => {
  const containerRef = useRef();

  useEffect(() => {
    const containerElement = containerRef.current;

    const handleMouseMove = (event) => {
      if (event.target.classList.contains("cuadrito")) {
        event.target.addEventListener("mouseleave", () => {
            setTimeout(()=> {
                event.target.style.background = "#1d1d1d";
            },500)
          
        });
        event.target.style.background = `${
          randomColors[Math.floor(Math.random() * randomColors.length)]
        }`;
      }
    };

    containerElement.addEventListener("mouseover", handleMouseMove);
    containerElement;

    return () => {
      containerElement.removeEventListener("mouseover", handleMouseMove);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {Array.from({ length: 460 }).map((_, index) => (
        <Cuadrito key={index} />
      ))}
    </div>
  );
};
