import React, { useState, useEffect } from "react";
import "./SequentialProgressbars.css"; // Optional CSS file for styling

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${progress}%` }} />
    </div>
  );
};

const SequentialProgressBars = () => {
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    progressValues.forEach((_, index) => {
      setTimeout(() => {
        fillProgress(index);
      }, index * 1000); // Delay each bar start by 2 seconds
    });
  }, []);

  const fillProgress = (index) => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress <= 100) {
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = progress;
          return newValues;
        });
        progress += 1;
      } else {
        clearInterval(interval);
      }
    }, 30); // Control the speed of filling
  };

  return (
    <div className="progress-bars-container">
      {progressValues.map((progress, index) => (
        <ProgressBar key={index} progress={progress} />
      ))}
    </div>
  );
};

export default SequentialProgressBars;
