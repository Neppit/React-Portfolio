import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Developer's Name</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="section">
          {/* About Me Content */}
          <h2>About Me</h2>
          <p>Alice Ayres is an aspiring web developer</p>
        </section>

        <section id="portfolio" className="section">
          {/* Portfolio Content */}
          <h2>Portfolio</h2>
          {/* Titled images of projects with links */}
        </section>

        <section id="contact" className="section">
          {/* Contact Form */}
          <h2>Contact</h2>
          {/* Contact form with fields for name, email, and message */}
        </section>

        <section id="resume" className="section">
          {/* Resume Content */}
          <h2>Resume</h2>
          {/* Link to downloadable resume and list of proficiencies */}
        </section>
      </main>

      <footer>
        {/* Footer Content */}
        <p>Connect with me:</p>
        {/* Links to GitHub, LinkedIn, and other profiles */}
      </footer>
    </div>
  );
}

export default App;