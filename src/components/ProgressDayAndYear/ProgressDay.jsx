import { useEffect, useState } from "react";
import ProgressBase from "../ui/ProgressBase";

const ProgressDay = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState("0 hours left");

  const totalMillisecondsInDay = 24 * 60 * 60 * 1000;

  const updateProgress = () => {
    const now = new Date();
    const millisecondsPassed =
      now.getHours() * 60 * 60 * 1000 +
      now.getMinutes() * 60 * 1000 +
      now.getSeconds() * 1000 +
      now.getMilliseconds();
    const percentage = (millisecondsPassed / totalMillisecondsInDay) * 100;
    setProgress(percentage);

    // get hours left in current day

    const timeLeftInMilliseconds = totalMillisecondsInDay - millisecondsPassed;
    const minutesLeft = Math.floor(timeLeftInMilliseconds / 1000 / 60);
    const hoursLeft = Math.floor(minutesLeft / 60);

    setTimeLeft(hoursLeft + " hours left");
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProgressBase
      label="Day in progress"
      progress={progress}
      timeLeft={timeLeft}
    />
  );
};

export default ProgressDay;
