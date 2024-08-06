
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
            <div className="skills-section">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <img src={javaLogo} alt="Java" className="skill-logo" />
                        <p>Java (Advanced)</p>
                    </div>
                    <div className="skill-item">
                        <img src={pythonLogo} alt="Python" className="skill-logo" />
                        <p>Python (Intermediate)</p>
                    </div>
                    <div className="skill-item">
                        <img src={sqlLogo} alt="SQL" className="skill-logo" />
                        <p>SQL (Intermediate)</p>
                    </div>
                    <div className="skill-item">
                        <img src={jsLogo} alt="JavaScript" className="skill-logo" />
                        <p>JavaScript (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={reactLogo} alt="React" className="skill-logo" />
                        <p>React (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={cssLogo} alt="CSS" className="skill-logo" />
                        <p>CSS (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={htmlLogo} alt="HTML" className="skill-logo" />
                        <p>HTML (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={dockerLogo} alt="Docker" className="skill-logo" />
                        <p>Docker (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={cppLogo} alt="C++" className="skill-logo" />
                        <p>C++ (Intermediate)</p>
                    </div>
                    <div className="skill-item">
                        <img src={csharpLogo} alt="C#" className="skill-logo" />
                        <p>C# (Beginner)</p>
                    </div>
                    <div className="skill-item">
                        <img src={kotlinLogo} alt="Kotlin" className="skill-logo" />
                        <p>Kotlin (Beginner)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
