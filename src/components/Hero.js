import React from 'react';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="hero">
      <div id="stars"></div>
      
      <div className="content">
        {/* هنا جعلنا الترحيب هو الذي يكتب تلقائياً */}
        <p>
          <Typewriter
            options={{
              strings: ['HI, I’M LINA'],
              autoStart: true,
              loop: true, // اجعليه false إذا أردتِ أن يكتبها مرة واحدة فقط عند التحميل
              delay: 75,
            }}
          />
        </p>
        
        {/* كلمة Backend Developer أصبحت ثابتة هنا */}
        <h1>Backend Developer</h1>

        <div>
          <Link to="/project" className="btn">projects</Link>
          <Link to="/contact" className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;