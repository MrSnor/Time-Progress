import LifeProgress from "@/components/LifeProgress/index.jsx";
import ProgressDay from "@/components/ProgressDayAndYear/ProgressDay";
import ProgressHour from "@/components/ProgressDayAndYear/ProgressHour";
import ProgressMinute from "@/components/ProgressDayAndYear/ProgressMinute";
import ProgressYear from "@/components/ProgressDayAndYear/ProgressYear";
import ViewToggle from "@/components/ViewToggle/ViewToggle.jsx";
import { Toggle } from "@/components/ui/toggle";
import { Hourglass, Percent } from "lucide-react";
import { useContext } from "react";
import ToggleThemeButton from "./components/ThemeButton/ToggleThemeButton";
import { useTheme } from "./contexts/Theme/ThemeContext";
import VisibilityContext from "./contexts/Visibility/VisibilityContext";

const Index = () => {
  const {
    isPercentVisible,
    setisPercentVisible,
    isTimeLeftVisible,
    setisTimeLeftVisible,
  } = useContext(VisibilityContext);

  const { theme } = useTheme();
  return (
    <>
      <div
        className={`grid min-h-screen bg-rose-800 px-8 pb-28 pt-14 text-white transition duration-500 sm:px-16 lg:px-20 xl:px-24 ${
          theme === "dark" ? "grayscale" : ""
        }`}
      >
        <div className="w-[80vw] sm:w-full">
          <div className="mb-4 flex justify-between text-center text-3xl">
            <div className="flex gap-2">
              {" "}
              {/* percent toggle */}
              <Toggle
                onClick={() => {
                  const newPercentVisibility = !isPercentVisible;

                  setisPercentVisible(newPercentVisibility);
                  localStorage.setItem(
                    "storedPercentVisibility",
                    newPercentVisibility,
                  );
                }}
                className="whitespace-nowrap ring-1 ring-white/20"
                pressed={isPercentVisible}
              >
                <Percent className="h-4 w-4" />
              </Toggle>
              <Toggle
                onClick={() => {
                  const newTimeVisibility = !isTimeLeftVisible;
                  setisTimeLeftVisible(newTimeVisibility);
                  localStorage.setItem(
                    "storedTimeVisibility",
                    newTimeVisibility,
                  );
                }}
                className="whitespace-nowrap ring-1 ring-white/20"
                pressed={isTimeLeftVisible}
              >
                {" "}
                <Hourglass className="h-4 w-4" />{" "}
              </Toggle>
            </div>
            <span className="">Time progress</span>

            <ViewToggle />
          </div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-10">
            <LifeProgress className={"w-full sm:w-1/2"} />
            <div className={"w-full space-y-3 sm:w-1/2"}>
              <ProgressMinute />
              <ProgressHour />
              <ProgressDay />
              <ProgressYear />
            </div>
          </div>
        </div>
      </div>
      <ToggleThemeButton />
    </>
  );
};

export default Index;
