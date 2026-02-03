import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT ME." text="Backend Developer." />
      <AboutContent />
    </div>
  );
};

export default About;