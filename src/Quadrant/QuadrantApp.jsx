import React, { useState } from "react";
import Quadrant from "./Quadrant";
import "./Quadrant.css";

function QuadrantApp() {
  const [clickedQuadrant, setClickedQuadrant] = useState(null);

  const handleQuadrantClick = (quadrant) => {
    setClickedQuadrant(quadrant);
  };

  return (
    <div className="Quadrant">
      <div className="quadrant-container">
        <Quadrant
          id="Top Left"
          isClicked={clickedQuadrant === "Top Left"}
          onClick={handleQuadrantClick}
        />
        <Quadrant
          id="Top Right"
          isClicked={clickedQuadrant === "Top Right"}
          onClick={handleQuadrantClick}
        />
        <Quadrant
          id="Bottom Left"
          isClicked={clickedQuadrant === "Bottom Left"}
          onClick={handleQuadrantClick}
        />
        <Quadrant
          id="Bottom Right"
          isClicked={clickedQuadrant === "Bottom Right"}
          onClick={handleQuadrantClick}
        />
      </div>
    </div>
  );
}

export default QuadrantApp;
