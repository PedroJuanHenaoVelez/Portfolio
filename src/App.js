
import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <a href="#about-me">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#hobbies">Hobbies</a>
                    <a href="#contact-me">Contact Me</a>
                </nav>
            </header>
            <div className="app-container">
                <section id="about-me">
                    <AboutMe />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="hobbies">
                    <Hobbies />
                </section>
                <section id="contact-me">
                    <ContactMe />
                </section>
            </div>
        </div>
    );
}

export default App;
