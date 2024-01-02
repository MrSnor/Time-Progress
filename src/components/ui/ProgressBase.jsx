import { Toggle } from "@/components/ui/toggle";
import { BadgePercent, Hourglass, Percent } from "lucide-react";
import { useState } from "react";

const ProgressBase = ({ label, progress: progressPercent, timeLeft }) => {
  const [isPercentVisible, setisPercentVisible] = useState(true);

  const [isTimeLeftVisible, setisTimeLeftVisible] = useState(true);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-5">
      {/* percent toggle */}
      <Toggle
        onClick={() => setisPercentVisible(!isPercentVisible)}
        className="hidden whitespace-nowrap ring-1 ring-white/20 sm:block"
        defaultPressed={isPercentVisible}
      >
        <Percent className="h-4 w-4" />
      </Toggle>

      <div className="my-4 w-full text-white">
        <div className="label">{label}</div>

        <div className="my-2 h-2.5 w-full rounded-full bg-white/20">
          <div
            className="h-2.5 rounded-full bg-white transition-[width] duration-300"
            // to show progress 1 when progress is 0
            style={{ width: `${progressPercent < 1 ? 1 : progressPercent}%` }}
          ></div>
        </div>

        {/* Progress and timeleft Container */}
        <div className="flex justify-between">
          {/* Progress percentage */}
          <span className={isPercentVisible ? "block" : "hidden"}>
            {Math.round(progressPercent)}%
          </span>

          {/* Time left */}
          <span
            className={`${
              isTimeLeftVisible ? "block" : "hidden"
            } w-full text-right`}
          >
            {timeLeft}
          </span>

          {/* placeholder text if both are not visible */}
          <div
            className={`${
              isPercentVisible || isTimeLeftVisible ? "hidden" : "block"
            } invisible select-none`}
          >
            xyz
          </div>
        </div>
      </div>

      {/* time left toggle */}
      <Toggle
        onClick={() => setisTimeLeftVisible(!isTimeLeftVisible)}
        className="hidden whitespace-nowrap ring-1 ring-white/20 sm:block"
        defaultPressed={isTimeLeftVisible}
      >
        {" "}
        <Hourglass className="h-4 w-4" />{" "}
      </Toggle>

      {/* single container for both toggles in mobiles view */}
      {/* <div className="flex gap-4 justify-center sm:hidden">
        <Toggle
          onClick={() => setisPercentVisible(!isPercentVisible)}
          className="whitespace-nowrap ring-1 ring-white/20"
          defaultPressed={isPercentVisible}
        >
          <BadgePercent className="h-4 w-4" />
        </Toggle>

        <Toggle
          onClick={() => setisTimeLeftVisible(!isTimeLeftVisible)}
          className="whitespace-nowrap ring-1 ring-white/20"
          defaultPressed={isTimeLeftVisible}
        >
          {" "}
          <Hourglass className="h-4 w-4" />{" "}
        </Toggle>
      </div> */}
    </div>
  );
};

export default ProgressBase;
