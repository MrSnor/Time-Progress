import VisibilityContext from "@/contexts/Visibility/VisibilityContext.jsx";
import { cn } from "@/lib/utils.js";
import { useContext } from "react";

const LifeProgress = () => {
  const { isPercentVisible, isTimeLeftVisible } = useContext(VisibilityContext);

  const baseYear = new Date("2003");

  const currentYear = new Date();

  const age = currentYear.getFullYear() - baseYear.getFullYear();

  const expectedAge = 69;

  const arr = [...Array(expectedAge)].map((_, i) => i + 1);
  return (
    <div>
      <h2 className={""}>Life Progress</h2>
      {/* Years passed */}
      <div className="my-2 grid grid-cols-8 gap-3">
        {arr.map((item, i) => {
          return (
            <div
              key={i}
              className={"relative grid aspect-square h-full w-full"}
            >
              {/* div for background effect */}
              {item === age + 1 && (
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 aspect-square h-[70%] w-[70%] origin-bottom-right -translate-x-1/2 -translate-y-1/2 rounded bg-white",
                    item === age + 1 && "animate-ping",
                  )}
                ></span>
              )}
              <span
                className={cn(
                  `z-10 grid aspect-square h-full w-full place-content-center rounded bg-white p-1 text-black`,
                  item <= age && "bg-black text-white",
                )}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
      {/* stats*/}
      <div
        className={cn(
          "flex justify-between transition-all duration-300 ease-in-out",
          // collapse the div if neither of the stat is visible
          isPercentVisible || isTimeLeftVisible ? "max-h-10" : "max-h-0",
        )}
      >
        {/* years left in percentage */}
        <span
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isPercentVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {((age / expectedAge) * 100).toFixed(1)}%
        </span>
        {/* years left in numbers */}
        <span
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isTimeLeftVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {expectedAge - age} years left
        </span>
      </div>
    </div>
  );
};

export default LifeProgress;
