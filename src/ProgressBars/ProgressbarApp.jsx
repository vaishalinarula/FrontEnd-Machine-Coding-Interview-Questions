import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const ProgressBarApp = () => {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    // Add a new progress bar by appending a new entry to the array
    setBars((prevBars) => [...prevBars, <ProgressBar key={prevBars.length} />]);
  };

  console.log("-->Barssss", bars);

  return (
    <div>
      <h1>Progress Bar Demo</h1>
      {/* Button appears only once */}
      <button
        onClick={addProgressBar}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Add Progress Bar
      </button>

      {/* Render all progress bars */}
      <div>
        {bars.map((bar, index) => (
          <div key={index}>{bar}</div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarApp;
