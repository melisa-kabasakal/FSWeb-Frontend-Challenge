import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center items-center space-x-2 ml-3">
      <label className="relative w-[55px] h-[24px] flex items-center justify-center">
        <input
          type="checkbox"
          value=""
          checked={darkMode}
          onChange={toggleDarkMode}
          className="hidden peer"
        />
        <span className="absolute w-full h-full rounded-full bg-customOrange transition-all duration-300 peer-checked:bg-customPurple"></span>
        <span
          className={`w-[15px] h-[15px] bg-customYellow rounded-full transition-transform duration-300 transform ${darkMode ? "translate-x-4" : "-translate-x-4"}`}
        ></span>
      </label>
      <h4 className={`font-inter text-[15px] font-bold ${darkMode ? "text-indigo-500" : "text-customOrange"}`}>
        {darkMode ? "DARK MODE" : "NIGHT MODE"}
      </h4>
    </div>
  );
};

export default DarkModeToggle;
