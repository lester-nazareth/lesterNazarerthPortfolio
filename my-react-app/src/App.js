import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Lester Nazareth</h2>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Hi, I'm Lester </h1>
        <p>React Developer | Problem Solver | Tech Enthusiast</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate and detail-oriented software developer focused on
          creating modern, user-friendly web applications using{" "}
          <strong>React</strong>, <strong>Node.js</strong>, and other
          cutting-edge technologies. I enjoy transforming complex problems into
          intuitive and visually appealing interfaces. My experience includes
          building responsive designs, integrating APIs, and optimizing
          performance for better user experiences.
        </p>

        <p>
          I’m constantly learning new technologies to improve my development
          workflow and stay current with industry trends. I have a strong
          interest in front-end development, UI/UX design, and real-time
          data-driven applications.
        </p>

        <p>
          Beyond coding, I enjoy collaborating with cross-functional teams,
          mentoring junior developers, and contributing to open-source projects.
          My goal is to build impactful software that simplifies everyday tasks
          and creates positive user experiences.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Smart Nutrition App</h3>
            <p>A real-time health insights app built with React Native.</p>
          </div>
          <div className="card">
            <h3>Weather Dashboard</h3>
            <p>Displays live weather updates using an external API.</p>
          </div>
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal website to showcase my work and skills.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Let's work together! Reach out via email:</p>
        <a href="mailto:lester@example.com" className="btn">
          Email Me
        </a>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Lester Nazareth 
        </p>
      </footer>
    </div>
  );
};

export default App;
