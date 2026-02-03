import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Work from '../components/Work'; // سننشئه في الخطوة القادمة ليجمع البطاقات

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
      <Work /> 
    </div>
  );
};

export default Project;