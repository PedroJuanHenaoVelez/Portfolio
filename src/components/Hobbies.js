
import React from 'react';
import './Hobbies.css';
import pfp from '../assets/pfp.png';
import fishing from '../assets/IMG_4053.jpg';
import games from '../assets/MV5BMzc4NGI0NGYtYTkxNy00MzcxLWExOWQtNWJkODg3NDlhODIxXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg';

function Hobbies() {
    const hobbies = [
        {
            name: 'Fishing',
            description: "Fishing may not appeal to everyone, but for me, it serves as a personal retreat. When I'm out on the water, I can set aside life's concerns and fully immerse myself in the moment. Despite the challenges it may present, fishing ultimately brings me a profound sense of peace and relaxation.",
            image: fishing
        },
        {
            name: 'Video Games',
            description: "As I mentioned earlier, while playing video games may not directly contribute to skill development, it serves as a relaxing hobby that helps reduce stress. This, in turn, enhances my ability to focus on work and maintain a balanced lifestyle.",
            image: games
        },
        {
            name: 'YouTube',
            description: "Creating content on YouTube has provided me with valuable skills in time management and maintaining focus over extended periods. In addition, I have developed proficiency in video editing, content production, and graphic design, including the creation of thumbnails.",
            link: "https://www.youtube.com/@SamPJ",
            image: pfp
        }
    ];

    return (
        <div className="hobbies-container">
            <h2>Hobbies</h2>
            <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-card">
                        <img src={hobby.image} alt={hobby.name} className="hobby-image" />
                        <h3>{hobby.name}</h3>
                        <p>{hobby.description}</p>
                        {hobby.link && <a href={hobby.link} className="hobby-link" target="_blank" rel="noopener noreferrer">SamPJ</a>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobbies;
