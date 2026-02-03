import React from 'react';
import { Link } from "react-router-dom";
import MyPhoto from "../assets/img1.png"; 

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm Lina, a Computer Science student and a passionate Full-Stack Developer. 
          I specialize in building robust backend systems using <strong>Java, Python, and PHP</strong>, 
          while creating interactive user interfaces with <strong>HTML, CSS, JavaScript, and React</strong>.
        </p>
        <p>
          I have a deep interest in <strong>Algorithm Analysis</strong> and database management with <strong>MySQL</strong>. 
          I love bridging the gap between complex backend logic and seamless frontend experiences.
        </p>
        
        <div className="skills-container">
          <div className="skill-tag">Java</div>
          <div className="skill-tag">Python</div>
          <div className="skill-tag">JavaScript</div>
          <div className="skill-tag">React</div>
          <div className="skill-tag">MySQL</div>
          <div className="skill-tag">PHP</div>
        </div>
        
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="main-glow-circle">
            
            <img src={MyPhoto} alt="Lina's Avatar" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;