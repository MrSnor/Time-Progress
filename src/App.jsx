import ProgressDay from "@/components/ProgressDayAndYear/ProgressDay";
import ProgressHour from "@/components/ProgressDayAndYear/ProgressHour";
import ProgressMinute from "@/components/ProgressDayAndYear/ProgressMinute";
import ProgressYear from "@/components/ProgressDayAndYear/ProgressYear";
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
        className={`grid min-h-screen place-content-center bg-rose-800 text-white transition duration-500 ${
          theme === "dark" ? "grayscale" : ""
        }`}
      >
        <div className="title mb-4 flex justify-between text-center text-3xl">
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
          <span className="">Time progress:</span>

          <Toggle
            onClick={() => {
              const newTimeVisibility = !isTimeLeftVisible;
              setisTimeLeftVisible(newTimeVisibility);
              localStorage.setItem("storedTimeVisibility", newTimeVisibility);
            }}
            className="whitespace-nowrap ring-1 ring-white/20"
            pressed={isTimeLeftVisible}
          >
            {" "}
            <Hourglass className="h-4 w-4" />{" "}
          </Toggle>
        </div>
        <div className="w-[90vw] sm:w-[40rem]">
          <ProgressMinute />
          <ProgressHour />
          <ProgressDay />
          <ProgressYear />
        </div>
      </div>
      <ToggleThemeButton />
    </>
  );
};

export default Index;
