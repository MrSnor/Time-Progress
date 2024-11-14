import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressHour = () => {
  const [progress, setProgress] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [formattedTimeLeft, setFormattedTimeLeft] = useState("0 minutes left");

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const totalMillisecondsInHour = 60 * 60 * 1000;
      const millisecondsPassed =
        now.getMinutes() * 60 * 1000 +
        now.getSeconds() * 1000 +
        now.getMilliseconds();
      const percentage = (millisecondsPassed / totalMillisecondsInHour) * 100;
      setProgress(Math.floor(percentage));

      // get minutes left in current hour

      const timeLeftInMilliseconds =
        totalMillisecondsInHour - millisecondsPassed;
      const minutesLeft = Math.floor(timeLeftInMilliseconds / 1000 / 60);

      setTimeLeft(minutesLeft);
      setFormattedTimeLeft(minutesLeft + " minutes left");
    };

    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProgressBase
      label="Hour in progress"
      progress={progress}
      timeLeft={timeLeft}
      formattedTimeLeft={formattedTimeLeft}
    />
  );
};

export default ProgressHour;
