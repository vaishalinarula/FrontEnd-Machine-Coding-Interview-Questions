import React, { useEffect, useState } from "react";
import ProgressBarMain from "./ProgressBarMain";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>React Progress Bar</h1>
      <ProgressBarMain progress={progress} />
    </div>
  );
};

export default ProgressBar;
