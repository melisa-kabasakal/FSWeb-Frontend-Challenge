import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguage } from '../contexts/LanguageContext'


function Skills() {
    const [skills, setSkills] = useState([])
    const { language } = useLanguage()

    useEffect(() => {
        axios.get('/data.json')
            .then(response => {
                setSkills(response.data.skills);
            })
            .catch(error => {
                console.error("Veri çekilemedi:", error);
            });
    }, []);

    return (
        <div className="flex justify-center items-center py-12 ">
            <div className='flex justify-center max-w-[960px] sm:flex-col sm:items-center md:flex-row md:justify-between md:items-start lg:w-[960px] xl:w-[70rem] xl:justify-around 2xl:w-[80rem] '>
                <div className=' md:ml-8 md:mt-4 sm:mb-4 2xl:-ml-8'>
                    <h2 className="font-inter font-bold text-[#4832D3] text-[32px]">{language === 'en' ? 'Skills' : 'Yetenekler'}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2  font-inter text-[20px] text-[#777777] sm:gap-8 md:mr-16 sm:justify-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-row items-center h-[100px] w-[100px] gap-3 sm:mx-16 md:mx-24">
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 " />
                            <p className="font-inter text-center flex-shrink-0">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
