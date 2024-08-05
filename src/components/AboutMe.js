
import React from 'react';
import profilePicture from '../assets/Screenshot 2024-05-20 140547.png';
import './AboutMe.css';

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
        </div>
    );
}

export default AboutMe;
