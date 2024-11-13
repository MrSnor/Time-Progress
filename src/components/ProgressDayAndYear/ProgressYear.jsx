import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressYear = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [formattedTimeLeft, setFormattedTimeLeft] = useState("0 days left");

  const updateProgress = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const totalMillisecondsInYear = endOfYear.getTime() - startOfYear.getTime();
    const millisecondsPassed = now.getTime() - startOfYear.getTime();
    const percentage = (millisecondsPassed / totalMillisecondsInYear) * 100;
    setProgress(percentage);

    const timeLeftInMilliseconds = totalMillisecondsInYear - millisecondsPassed;
    const daysLeft = Math.floor(timeLeftInMilliseconds / (1000 * 60 * 60 * 24));

    setTimeLeft(daysLeft);
    setFormattedTimeLeft(daysLeft + " days left");
  };

  useEffect(() => {
    const interval = setTimeout(updateProgress, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <ProgressBase
      label="Year in progress"
      progress={progress}
      timeLeft={timeLeft}
      formattedTimeLeft={formattedTimeLeft}
    />
  );
};

export default ProgressYear;
