import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressYear = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState("0 days left");

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const totalMillisecondsInYear = 365 * 24 * 60 * 60 * 1000;
      const millisecondsPassed =
        now.getTime() - new Date(now.getFullYear(), 0, 1).getTime();
      const percentage = (millisecondsPassed / totalMillisecondsInYear) * 100;
      setProgress(percentage);

      // get days left in current year

      const timeLeftInMilliseconds =
        totalMillisecondsInYear - millisecondsPassed;
      const daysLeft = Math.floor(
        timeLeftInMilliseconds / (1000 * 60 * 60 * 24),
      );

      setTimeLeft(daysLeft + " days left");
    };

    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProgressBase
      label="Year in progress"
      progress={progress}
      timeLeft={timeLeft}
    />
  );
};

export default ProgressYear;
