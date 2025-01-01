import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

function HeroContent() {
    const [heroData, setHeroData] = useState(null)
    const { language } = useLanguage()

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
        <div className="flex justify-center items-center w-full mt-12 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[960px] sm:flex sm:flex-row ">
                <div className="flex flex-col items-start md:max-w-[60%] sm:max-w-[60%] ">
                    <h4 className="text-[40px] font-inter text-customGreen font-bold mt-4 md:mt-14">
                        {language === 'en' ? heroData.title.en : heroData.title.tr}
                    </h4>
                    <p className="text-[15px] font-inter text-customWhite mt-4">
                        {language === 'en' ? heroData.about.en : heroData.about.tr}
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a
                            className="flex justify-center items-center w-24 h-8 pl-2  pr-3 gap-2 bg-customWhite rounded-sm text-decoration-none"
                            href=""
                            alt="GitHub"
                        >
                            <FaGithub size={30} />
                            <p className="text-[#3730A3] text-[15px] pt-3 ">Github</p>
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


                <div className="mt-8 md:mt-0  sm:flex-row-reverse">
                    <img src={heroData.img} className="w-[270px] h-[300px] border-0 rounded-xl max-sm:w-[170px]" alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default HeroContent;
