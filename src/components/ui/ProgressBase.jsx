import VisibilityContext from "@/contexts/Visibility/VisibilityContext";
import { cn } from "@/lib/utils.js";
import { useContext } from "react";

const ProgressBase = ({
  label,
  progress: progressPercent,
  timeLeft,
  formattedTimeLeft,
}) => {
  const { isPercentVisible, isTimeLeftVisible, activeView } =
    useContext(VisibilityContext);

  const timeParts = formattedTimeLeft.split(" ");

  // let full = progressPercent / (1 - timeLeft / 100);
  // full = Math.round(timeLeft / (1 - progressPercent / 100));

  const timeUnitConversions = {
    seconds: 60,
    minutes: 60,
    hours: 24,
    days: 365,
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-5">
      <div
        className={cn(
          "my-4 w-full text-white",
          // "[&>div:not(.max-h-0)]:mb-3",
          activeView === "square" ? "space-y-1.5" : "space-y-3",
          "[&:has(div.max-h-0)]:my-0",
          // "[&>div.max-h-0]:my-0",
          // transition and related properties for its children
          "[&>div]:overflow-hidden [&>div]:transition-all [&>div]:duration-300",
        )}
      >
        <div className="label">{label}</div>

        {/* progress bar */}
        <div
          className={cn(
            "h-2.5 w-full rounded-full bg-white/20",
            activeView === "progress" ? "max-h-5" : "max-h-0",
          )}
        >
          <div
            className="h-full rounded-full bg-white "
            // to show progress 1 when progress is 0
            style={{ width: `${progressPercent < 1 ? 1 : progressPercent}%` }}
          ></div>
        </div>

        {/* progress in squares */}
        {/* using different max-h for "days" to maintain rate of transition */}
        <div
          className={cn(
            "flex flex-wrap gap-1",
            activeView === "square" && "opacity-100",
            activeView !== "square" && "max-h-0 opacity-0",
            activeView === "square" && timeParts[1] !== "days" && "max-h-20",
            activeView === "square" &&
              timeParts[1] === "days" &&
              "max-h-[360px]",
          )}
        >
          {[...Array(Math.round(timeUnitConversions[timeParts[1]]))].map(
            (_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4 w-4 rounded-l-sm bg-white transition-all duration-500",
                  i + 1 <= timeLeft
                    ? "bg-red-400"
                    : "rounded-sm bg-red-200 bg-opacity-30 ring-1 ring-red-900",
                )}
              ></div>
            ),
          )}
        </div>

        {/* Progress and timeleft Container */}
        <div
          className={cn(
            "flex justify-between ease-in-out",
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
            {formattedTimeLeft}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBase;
