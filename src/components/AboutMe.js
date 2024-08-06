
import React from 'react';
import profilePicture from '../assets/Screenshot 2024-05-20 140547.png';
import './AboutMe.css';
import javaLogo from '../assets/Java.png';
import pythonLogo from '../assets/Python.png';
import sqlLogo from '../assets/SQL.png';
import jsLogo from '../assets/JavaScript.png';
import reactLogo from '../assets/React.png';
import cssLogo from '../assets/CSS.png';
import htmlLogo from '../assets/HTML.png';
import dockerLogo from '../assets/Docker.png';
import cppLogo from '../assets/6132222.png';
import csharpLogo from '../assets/c-sharp-c-icon-1822x2048-wuf3ijab.png';
import kotlinLogo from '../assets/Kotlin_Icon.png';

function AboutMe() {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <div className="about-text">
                    <h3>Hello! I'm Pedro Juan Henao, a student at EIA university in Medellín, Colombia. I'm twenty-two years old and currently studying Systems and Computing Engineering.</h3>
                    <h3>I have a background in various technological contexts, including programming, some mechatronics, and editing videos, among other things. I've worked on projects involving coding and building systems, and even worked on robotics, focusing on the chassis and structure of the robot itself.</h3>
                    <h3>Regarding my hobbies, I enjoy playing video games, going fishing, and making videos on YouTube. While gaming doesn't directly translate to programming skills, fishing has taught me patience, a valuable trait for coding and collaborating with others.</h3>
                    </div>
            </div>
            
            <div className="skills-container">
                <h3>Skills</h3>
                <div className="skills-grid">
                    <div className="skill-item advanced">
                        <img src={javaLogo} alt="Java" />
                        <span>Java (Advanced)</span>
                    </div>
                    <div className="skill-item intermediate">
                        <img src={pythonLogo} alt="Python" />
                        <span>Python (Intermediate)</span>
                    </div>
                    <div className="skill-item intermediate">
                        <img src={sqlLogo} alt="SQL" />
                        <span>SQL (Intermediate)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={jsLogo} alt="JavaScript" />
                        <span>JavaScript (Beginner)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={reactLogo} alt="React" />
                        <span>React (Beginner)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={cssLogo} alt="CSS" />
                        <span>CSS (Beginner)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={htmlLogo} alt="HTML" />
                        <span>HTML (Beginner)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={dockerLogo} alt="Docker" />
                        <span>Docker (Beginner)</span>
                    </div>
                    <div className="skill-item intermediate">
                        <img src={cppLogo} alt="C++" />
                        <span>C++ (Intermediate)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={csharpLogo} alt="C#" />
                        <span>C# (Beginner)</span>
                    </div>
                    <div className="skill-item beginner">
                        <img src={kotlinLogo} alt="Kotlin" />
                        <span>Kotlin (Beginner)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;