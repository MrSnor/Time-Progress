import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressYear = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState("0 days left");

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
      const totalMillisecondsInYear =
        endOfYear.getTime() - startOfYear.getTime();
      const millisecondsPassed = now.getTime() - startOfYear.getTime();
      const percentage = (millisecondsPassed / totalMillisecondsInYear) * 100;
      setProgress(percentage);

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
