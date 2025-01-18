import { useEffect, useState } from "react";

const useTimer = (hoursEntered, minutesEntered, secondsEntered, started) => {
  let totalSecondsInput =
    Number(secondsEntered) +
    Number(minutesEntered * 60) +
    Number(hoursEntered * 3600);

  const [secondsLeft, setSecondsLeft] = useState(totalSecondsInput);

  useEffect(() => {
    if (!started) return;

    setSecondsLeft(totalSecondsInput);
    let interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, totalSecondsInput]);

  return { secondsLeft };
};

export default useTimer;
