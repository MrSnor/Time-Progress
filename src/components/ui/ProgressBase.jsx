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
          "w-full text-white",
          // "[&>div:not(.max-h-0)]:mb-3",
          activeView === "square" ? "space-y-1.5" : "space-y-3",
          "[&>div.max-h-0]:!my-0", // it selects children with max-h-0 and negates the effect of space-y.
          // "[&:has(div.max-h-0)]:my-0", // it selects the element itself if it has any child with max-h-0
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
            className="h-full rounded-full bg-white transition-all duration-300 ease-in-out"
            // to show progress 1 when progress is 0
            style={{ width: `${progressPercent < 1 ? 1 : progressPercent}%` }}
          ></div>
        </div>

        {/* progress in squares */}
        {/* using different max-h for "days" to maintain rate of transition */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            activeView === "square"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className={cn("flex flex-wrap gap-1 overflow-hidden")}>
            {[...Array(Math.round(timeUnitConversions[timeParts[1]]))].map(
              (_, i) => {
                const squareTime = i + 1;

                // checks if the squareTime has passed the current time
                const isSquarePassed = squareTime > timeLeft;

                return (
                  <div
                    key={i}
                    // when time is past the current square, make it red 400, otherwise make it red 200
                    className={cn(
                      "relative h-4 w-4 rounded-l-sm bg-red-200/30 ring-1 ring-red-900 transition-all duration-500",
                      isSquarePassed && "rounded-sm",
                    )}
                  >
                    {/* helper element to show progress
                           - when time is past the current square, show the element in 0 width
                           - when time is not past the current square, show the element in full width
                           */}
                    <div
                      className={cn(
                        "absolute inset-0 z-10 h-full overflow-hidden rounded-l-sm transition-all duration-1000",
                        isSquarePassed ? "w-0" : "w-full bg-red-400",
                      )}
                    ></div>
                  </div>
                );
              },
            )}
          </div>
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
