import { useTheme } from "@/contexts/Theme/ThemeContext";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`fixed -bottom-[4.5rem] -right-16 grid aspect-square grid-cols-2 rounded-full p-2 pl-4 text-sm transition-all duration-500 md:-bottom-20 md:text-base ${
        theme === "dark"
          ? "rotate-[360deg] bg-rose-800 font-semibold"
          : "bg-black text-white"
      }`}
      type="button"
      onClick={toggleTheme}
    >
      <span className={`grid h-full place-content-center`}>Color Me</span>
      {/* empty spans for maintaining grid */}
      <span className=""></span>
      <span className=""></span>
      <span className=""></span>
    </button>
  );
};

export default ToggleThemeButton;
