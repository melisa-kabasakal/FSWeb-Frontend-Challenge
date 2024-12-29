import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills() {
    const [skills, setSkills] = useState([]);

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
        <div className="flex justify-center items-center mt-20">
            <div className="flex flex-row border-solid border-0 w-[960px]  p-8 gap-20">
                <h2 className="font-inter font-bold text-[#4832D3] text-4xl mb-8 text-left">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-2  gap-8 font-inter text-[20px] text-[#777777]">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 mr-28">
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
