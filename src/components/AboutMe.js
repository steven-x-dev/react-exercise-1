import React from 'react';
import SectionTitle from "./SectionTitle";

const AboutMe = ({ text }) => (
  <div className='section about-me'>
    <SectionTitle title='About me' />
    <p className='text about-me-text'>{text}</p>
  </div>
);

export default AboutMe;
