import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import ContactContent from '../components/ContactContent';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT." text="Let's have a chat." />
      <ContactContent />
    </div>
  );
};

export default Contact;