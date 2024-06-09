import React from "react";
import "./Quadrant.css";

const Quadrant = ({ id, isClicked, onClick }) => {
  return (
    <div
      className={`quadrant ${isClicked ? "clicked" : ""}`}
      onClick={() => onClick(id)}
    >
      {isClicked && <div className="message">Clicked: {id}</div>}
    </div>
  );
};

export default Quadrant;
