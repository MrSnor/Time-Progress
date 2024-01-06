import VisibilityContext from "@/contexts/Visibility/VisibilityContext";
import { useContext } from "react";

const ProgressBase = ({ label, progress: progressPercent, timeLeft }) => {
  const { isPercentVisible, isTimeLeftVisible } = useContext(VisibilityContext);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-5">
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
    </div>
  );
};

export default ProgressBase;
