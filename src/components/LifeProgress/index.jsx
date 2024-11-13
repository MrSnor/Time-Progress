import { Input } from "@/components/ui/input";
import VisibilityContext from "@/contexts/Visibility/VisibilityContext.jsx";
import { cn } from "@/lib/utils.js";
import { Settings } from "lucide-react";
import { useContext, useState } from "react";

const LifeProgress = ({ className }) => {
  const { isPercentVisible, isTimeLeftVisible } = useContext(VisibilityContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    baseYear: 2003,
    expectedAge: 69,
  });

  const currentYear = new Date();
  const age = currentYear.getFullYear() - settings.baseYear;
  const arr = [...Array(settings.expectedAge)].map((_, i) => i + 1);

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSettings({
      baseYear: parseInt(formData.get("baseYear")),
      expectedAge: parseInt(formData.get("expectedAge")),
    });
    setIsSettingsOpen(false);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2>Life Progress</h2>
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="rounded-sm p-2 transition-colors hover:bg-gray-800/20"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isSettingsOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <form onSubmit={handleSettingsSubmit} className="mb-4 space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none text-white">
                Birth Year:
              </label>
              <Input
                type="number"
                name="baseYear"
                defaultValue={settings.baseYear}
                min="1900"
                max={currentYear.getFullYear()}
                className="bg-white text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onWheel={(e) => e.target.blur()}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none text-white">
                Expected Age:
              </label>
              <Input
                type="number"
                name="expectedAge"
                defaultValue={settings.expectedAge}
                min="1"
                max="150"
                className="bg-white text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onWheel={(e) => e.target.blur()}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 text-white transition-colors hover:bg-gray-800"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Years passed */}
      <div className="my-2 grid grid-cols-8 gap-3">
        {arr.map((item, i) => {
          return (
            <div
              key={i}
              className={"relative grid aspect-square h-full w-full"}
            >
              {/* div for background effect for current year */}
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
      {/* stats container */}
      <div
        className={cn(
          "flex justify-between transition-all duration-300 ease-in-out",
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
          {((age / settings.expectedAge) * 100).toFixed(1)}%
        </span>
        {/* years left in numbers */}
        <span
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isTimeLeftVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {settings.expectedAge - age} years left
        </span>
      </div>
    </div>
  );
};

export default LifeProgress;
