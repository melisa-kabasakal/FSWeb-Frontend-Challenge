import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center items-center space-x-2 ">
      <label className="relative w-[55px] h-[24px] flex items-center justify-center cursor-pointer text-customWhite">
        <input
          type="checkbox"
          value=""
          checked={darkMode}
          onChange={toggleDarkMode}
          className="hidden peer cursor-pointer text-customWhite"
        />
        <span className="absolute w-full h-full rounded-full bg-customOrange transition-all peer-checked:bg-customPurple"></span>
        <span
          className={`w-[15px] h-[15px] bg-customYellow rounded-full transition-transform  transform ${darkMode ? "translate-x-4" : "-translate-x-4"}`}
        ></span>
      </label>
      <h4 className={`font-inter text-[15px] mt-2 font-bold ${darkMode ? "text-indigo-500" : "text-customOrange"}`}>
        {darkMode ? "DARK MODE" : "NIGHT MODE"}
      </h4>
    </div>
  );
};

export default DarkModeToggle;
