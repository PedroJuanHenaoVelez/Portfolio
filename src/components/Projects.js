
import React, { useState } from 'react';
import './Projects.css';
import team7403 from "../assets/Captura-de-Pantalla-2024-05-10-a-las-9.14.00-a.m-1200x1190.png";
import photogate from "../assets/698506e8-b6b9-49a4-a000-e101828c17be.MP4";
import sql from "../assets/databaseProject.png";

function Projects() {
    const projectList = [
        {
            title: 'Lightning Blue Lizards',
            description: 'Contributed to the FIRST Robotics Competition as a mechanic, working with C++, Java, and LabVIEW to build and program a competitive robot.',
            technologies: 'C++, Java, LabVIEW',
            role: 'Mechanic',
            link: 'https://frc-events.firstinspires.org/2024/team/7403',
            image: team7403
        },
        {
            title: 'Photogate',
            description: 'Designed and built a photogate system to measure acceleration due to gravity. Involved in both hardware construction and coding.',
            technologies: 'C++',
            role: 'Builder and coder',
            link: 'https://github.com/throwmen/GravityBlinky',
            video: photogate
        },
        {
            title: 'Online Courses Database',
            description: 'Developed a database system to manage data for an online college, including students, staff, and course information using SQL.',
            technologies: 'SQL',
            role: 'Database developer',
            link: 'https://github.com/Santy30-Bull/BD',
            image: sql
        }
    ];

    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="project-nav">
                {projectList.map((project, index) => (
                    <button 
                        key={index} 
                        onClick={() => setSelectedProject(index)}
                        className={selectedProject === index ? 'active' : ''}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            <div className="project-window">
                <h3>{projectList[selectedProject].title}</h3>
                <p>{projectList[selectedProject].description}</p>
                <p><strong>Technologies:</strong> {projectList[selectedProject].technologies}</p>
                <p><strong>Role:</strong> {projectList[selectedProject].role}</p>
                <a href={projectList[selectedProject].link} target="_blank" rel="noopener noreferrer">Check it out</a>
                {projectList[selectedProject].video ? (
                    <video controls>
                        <source src={projectList[selectedProject].video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    projectList[selectedProject].image && (
                        <img src={projectList[selectedProject].image} alt={projectList[selectedProject].title} />
                    )
                )}
            </div>
        </div>
    );
}

export default Projects;
