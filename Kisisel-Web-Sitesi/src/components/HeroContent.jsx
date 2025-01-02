import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

function HeroContent() {
    const [heroData, setHeroData] = useState(null);
    const { language } = useLanguage();

    useEffect(() => {
        axios.get('/data.json')
            .then(response => {
                setHeroData(response.data.hero);
            })
            .catch(error => {
                console.error("Veri çekilemedi:", error);
            });
    }, []);

    if (!heroData) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div className="flex justify-center items-center w-full px-4 sm:ml-10 sm:flex-1 sm:-mt-10 md:flex-row md:justify-between md:items-center md:-mt-20">
            <div className="flex flex-col sm:flex-col md:flex-row md:gap-4 items-center justify-between w-full md:max-w-[85%] ">
                <div className="flex flex-col items-start md:max-w-[70%] md:flex- sm:max-w-[56%] sm:order-1">
                    <h4 className="text-[40px] font-inter text-customGreen font-bold mt-4 ">
                        {language === 'en' ? heroData.title.en : heroData.title.tr}
                    </h4>
                    <p className="text-[15px] font-inter text-customWhite mt-4 sm:w-[300px] md:w-[400px]">
                        {language === 'en' ? heroData.about.en : heroData.about.tr}
                    </p>
                    <div className="flex gap-4 mt-6 sm:ml-16 md:ml-0 ">
                        <a
                            className="flex justify-center items-center w-24 h-8 pl-2 pr-3 gap-2 bg-customWhite rounded-sm text-decoration-none"
                            href=""
                            alt="GitHub"
                        >
                            <FaGithub size={30} />
                            <p className="text-[#3730A3] text-[15px] pt-3">Github</p>
                        </a>
                        <a
                            className="flex justify-center items-center w-24 h-8 pl-2 pr-3 gap-2 bg-customWhite rounded-sm text-decoration-none"
                            href=""
                            alt="Linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <p className="text-[#3730A3] text-[15px] pt-3">Linkedin</p>
                        </a>
                    </div>
                </div>


                <div className="mt-8 md:mt-0 sm:mt-4 sm:order-2 md:order-2">
                    <img
                        src={heroData.img}
                        className="w-[270px] h-[300px] border-0 rounded-xl sm:w-[170px] sm:h-[200px] md:w-[260px] md:h-[300px] lg:w-[300px] lg:h-[350px] md:ml-8 md:mt-4"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroContent;
