import React from 'react';
import SectionTitle from "./SectionTitle";
import Education from "./Education";

const EducationList = ({ educationList }) => (
  <div className='education-list'>
    <SectionTitle title='Education' />
    {educationList.map(edu => <Education education={edu} />)}
  </div>
);

export default EducationList;
