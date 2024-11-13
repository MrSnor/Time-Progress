import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressMinute = () => {
  const [progress, setProgress] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [formattedTimeLeft, setFormattedTimeLeft] = useState("0 seconds left");

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const totalMillisecondsInMinute = 60 * 1000;
      const millisecondsPassed =
        now.getSeconds() * 1000 + now.getMilliseconds();
      const percentage = (millisecondsPassed / totalMillisecondsInMinute) * 100;
      setProgress(percentage);

      // get seconds left in current minute
      const timeLeftInMilliseconds =
        totalMillisecondsInMinute - millisecondsPassed;
      const secondsLeft = Math.floor(timeLeftInMilliseconds / 1000);

      setTimeLeft(secondsLeft);
      setFormattedTimeLeft(secondsLeft + " seconds left");
    };

    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProgressBase
      label="Minute in progress"
      progress={progress}
      timeLeft={timeLeft}
      formattedTimeLeft={formattedTimeLeft}
    />
  );
};

export default ProgressMinute;
