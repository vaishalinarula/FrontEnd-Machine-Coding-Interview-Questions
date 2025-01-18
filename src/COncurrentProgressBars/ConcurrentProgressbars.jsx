import React, { useState, useEffect } from "react";

const ProgressBar = ({ id, start, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            onComplete(id); // Notify parent when this bar completes
            return 100;
          }
        });
      }, 30); // Progress increments every 100ms
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [start, onComplete, id]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#ddd",
          height: "20px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: progress === 100 ? "green" : "#4caf50",
            borderRadius: "5px",
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
      <p>{`Progress ${id}: ${progress}%`}</p>
    </div>
  );
};

const ProgressList = () => {
  const [progressBars] = useState([1, 2, 3, 4, 5, 6]); // IDs of the progress bars
  const [runningBars, setRunningBars] = useState([]); // List of currently running progress bars
  const [completedBars, setCompletedBars] = useState([]); // List of completed progress bars

  // Start up to 3 bars at a time
  useEffect(() => {
    const availableBars = progressBars.filter(
      (bar) => !runningBars.includes(bar) && !completedBars.includes(bar)
    );

    // Start bars if less than 3 are running and there are available bars to start
    if (runningBars.length < 3 && availableBars.length > 0) {
      const newRunningBars = availableBars.slice(0, 3 - runningBars.length); // Fill the empty spots
      setRunningBars((prev) => [...prev, ...newRunningBars]);
    }
  }, [runningBars, completedBars, progressBars]);

  // Handle completion of a progress bar
  const handleComplete = (id) => {
    setRunningBars((prev) => prev.filter((bar) => bar !== id)); // Remove from running
    setCompletedBars((prev) => [...prev, id]); // Add to completed
  };

  return (
    <div>
      <h2>Progress Bars (Running up to 3 concurrently)</h2>
      {progressBars.map((barId) => (
        <ProgressBar
          key={barId}
          id={barId}
          start={runningBars.includes(barId)} // Only start if it's in the running list
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default ProgressList;
