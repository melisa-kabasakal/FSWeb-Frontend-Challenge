import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
    const [projects, setProjects] = useState([])
    const { language } = useLanguage()

    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                setProjects(response.data.projects);
            })
            .catch((error) => {
                console.error('Proje verileri alınamadı:', error);
            });
    }, []);



    return (
        <div className="bg-customGreen flex justify-center">
            <div className='p-8 border-solid border-0 '>
                <h2 className="font-inter text-[30px]  text-customBlue font-bold sm:text-center sm:mb-4 md:text-start lg:text-start lg:my-8">{language === 'en' ? "Projects" : "Projeler"}</h2>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} language={language} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
