import React, { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Duration is 3 seconds (3000ms), and we update the progress every 30ms
    const duration = 3000;
    const interval = 30;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + increment;
        if (nextProgress >= 100) {
          clearInterval(timer); // Stop the timer when progress reaches 100%
          return 100;
        }
        return nextProgress;
      });
    }, interval);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", margin: "20px 0" }}>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#e0e0df",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#76c7c0",
            borderRadius: "5px",
            transition: "width 0.1s ease-in-out",
          }}
        />
      </div>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
};
