import React, { useEffect, useRef, useState } from "react";

import { Cuadrito } from "./components/Cuadrito";
import "./styles.css";
import { randomColors } from "./utilities/randomColor";

export const App = () => {
  const containerRef = useRef();
  const [highlightedCuadrito, setHighlightedCuadrito] = useState(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    const handleMouseMove = (event) => {
      if (event.target.classList.contains("cuadrito")) {
        const cuadrito = event.target;
        cuadrito.style.background = `${
          randomColors[Math.floor(Math.random() * randomColors.length)]
        }`;
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.classList.contains("cuadrito")) {
        const cuadrito = event.target;
        setTimeout(()=> {
            cuadrito.style.background = "#1d1d1d";
        },500)
        
      }
    };

    containerElement.addEventListener("mouseover", handleMouseMove);
    containerElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      containerElement.removeEventListener("mouseover", handleMouseMove);
      containerElement.removeEventListener("mouseout", handleMouseOut);
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
