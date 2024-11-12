import VisibilityContext from "@/contexts/Visibility/VisibilityContext";
import { cn } from "@/lib/utils.js";
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
        <div
          className={cn(
            "flex justify-between transition-all duration-300 ease-in-out",
            // collapse the div if neither of the stat is visible
            isPercentVisible || isTimeLeftVisible ? "max-h-10" : "max-h-0",
          )}
        >
          {/* Progress percentage */}
          <span
            className={cn(
              "transition-opacity duration-300 ease-in-out",
              isPercentVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {Math.round(progressPercent)}%
          </span>

          {/* Time left */}
          <span
            className={cn(
              "transition-opacity duration-300 ease-in-out",
              isTimeLeftVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {timeLeft}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBase;
