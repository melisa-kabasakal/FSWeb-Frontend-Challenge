import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-between w-full mt-12 xl:w-[890px] xl:mx-auto sm:flex sm:flex-col-reverse  md:ml-0 md:flex-row md:max-w-[85%] 2xl:xl:mx-auto 2xl:items-center ">

      <h4 className="font-inter text-[32px] font-bold text-customGreen  sm:text-wrap sm:mb-6 md:ml-0 2xl:ml-3">
        melisa
      </h4>

      <div className="flex items-center gap-8 sm:mb-4 sm:gap-56  md:gap-6 lg:gap-6 xl:gap-4 2xl:gap-2 2xl:-mr-2">
        <h4 className="font-inter text-[15px] tracking-[0.1em] text-customGreen whitespace-nowrap -mt-10  xl:mr-4 z-10 relative ">
          {language === 'en' ? (
            <span
              onClick={toggleLanguage}
              className="cursor-pointer text-customWhite"
            >
              <span className="text-customGreen">TÜRKÇE</span>
              <span className="text-customWhite">'YE GEÇ</span>
            </span>
          ) : (
            <span
              onClick={toggleLanguage}
              className="cursor-pointer text-customWhite "
            >
              <span className="text-customGreen">SWITCH </span>
              <span className="text-customWhite">TO ENGLISH</span>
            </span>
          )}
        </h4>

        <div className="flex-shrink-0 -mt-11 xl:flex-grow:1 xl:flex-shrink-0  xl:-mr-12 md:-mr-8 lg:mr-2 2xl:-mr-36 2xl:flex-grow-0">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
