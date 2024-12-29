import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    const [projects, setProjects] = useState([]);

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
        <div className="bg-customGreen flex justify-center rounded-xl">
            <div className='w-[960px] p-8 border-solid border-0 rounded-xl'>
                <h2 className="font-inter text-[30px]  text-customBlue font-bold">Projects</h2>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
