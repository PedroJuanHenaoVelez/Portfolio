
import React, { useState } from 'react';
import './Projects.css';
import team7403 from "../assets/Captura-de-Pantalla-2024-05-10-a-las-9.14.00-a.m-1200x1190.png";
import photogate from "../assets/698506e8-b6b9-49a4-a000-e101828c17be.MP4";
import sql from "../assets/1_KTDZHTVaVbvbyhIf2PmBAw.png"

function Projects() {
    const projectList = [
        {
            title: 'Lightning Blue Lizards',
            description: 'FIRST Robotics Competition.',
            technologies: 'C++, Java and LabVIEW.',
            role: 'Mechanic.',
            link: 'https://frc-events.firstinspires.org/2024/team/7403',
            image: team7403
        },
        {
            title: 'Photogate',
            description: 'Design and construct a photogate with a pair of LED-Photo resistors, in which we are to calculate the acceleration of gravity.',
            technologies: 'C++.',
            role: 'Builder of Photogate, assist with coding for the board alongside Juan David Oliveros.',
            link: 'https://github.com/throwmen/GravityBlinky',
            video: photogate
        },
        {
            title: 'Online Courses',
            description: 'Database for a virtual "College" for maintaining data related to students, staff, courses, grades, etc... in Microsoft SQL Management Studio',
            technologies: 'SQL.',
            role: 'Worked alongside Johan Daniel Duque, Santiago Augusto Toro and Juan David Oliveros.',
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
                <a href={projectList[selectedProject].link}>Check it out</a>
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
