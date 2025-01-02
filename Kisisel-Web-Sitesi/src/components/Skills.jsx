import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';

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
        <div className="flex justify-center items-center my-12 ">
            <div className="flex flex-row border-solid border-0 w-[960px] p-12 md:flex-nowrap md:items-start  sm:flex sm:flex-wrap sm:gap-8 sm:items-center sm:justify-center sm:ml-10  md:gap-0 lg:ml-0">
                <h2 className="font-inter font-bold mr-32 text-[#4832D3] text-[32px] text-left  md:-ml-8  sm:ml-12">{language === 'en' ? 'Skills' : 'Beceriler'}</h2>
                <div className="grid grid-cols-2 md:grid-cols-2  gap-8 font-inter text-[20px] text-[#777777] max-sm:gap-6 max-sm:-ml-16 max-sm:flex-col">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 mr-28 max-sm:flex max-sm:justify-around">
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 " />
                            <p className="font-inter text-center ">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
