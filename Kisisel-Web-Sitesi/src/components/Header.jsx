import React from 'react';
import DarkModeToggle from './DarkModeToggle'
import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <div className="flex justify-between items-center w-full px-6 xl:flex max-xl:justify-between max-xl:items-center xl:max-w-[1140px] xl:ml-[350px] sm:flex sm:justify-between sm:items-center  ">

      <h4 className="font-inter text-[32px] font-bold text-customGreen mt-12">melisa</h4>


      <div className="flex items-center gap-8 ">
        <h4 className="font-inter text-[15px] font-bold tracking-[0.1em] text-customGreen whitespace-nowrap">
          {language === 'en' ? (
            <span
              onClick={toggleLanguage}
              className="cursor-pointer text-customWhite"
            >
              <span className="text-customGreen">TÜRKÇE</span> <span className="text-customWhite">'YE GEÇ</span>
            </span>

          ) : (
            <span
              onClick={toggleLanguage}
              className="cursor-pointer text-customWhite"
            >
              <span className="text-customGreen">SWITCH</span> <span className="text-customWhite">TO ENGLISH</span>
            </span>

          )}
        </h4>

        <div className="2xl:mr-3 max-sm:-ml-4 max-sm:-mr-8">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
