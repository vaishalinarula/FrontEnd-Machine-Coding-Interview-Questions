import React from "react";
import "./ProgressBar.css";

const ProgressBarMain = ({ progress }) => {
  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {progress + "%"}
    </>
  );
};

export default ProgressBarMain;
