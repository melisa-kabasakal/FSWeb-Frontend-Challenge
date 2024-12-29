import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center  space-x-2 leading-[72px] ml-3" >
      <label className="relative w-[55px] h-[24px] flex items-center justify-center">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="hidden peer"
        />
        <span className="absolute w-full h-full rounded-full bg-customOrange transition-all duration-300 peer-checked:bg-customPurple"></span>
        <span
          className={`w-[15px] h-[15px] bg-customYellow rounded-full transition-transform duration-300 transform ${darkMode ? "translate-x-4" : "-translate-x-4"
            }`}
        ></span>
      </label>
      <h4 className={`font-inter text-[15px] font-bold  ${darkMode ? "text-indigo-500" : "text-customOrange"}`}>
        {darkMode ? "DARK MODE" : "NIGHT MODE"}
      </h4>
    </div>
  );
};

export default DarkModeToggle;
