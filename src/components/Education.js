import React from 'react';

const Education = ({ education }) => (
  <div className='section education'>
    <table className='education-table'>
      <tbody>
        <tr>
          <td rowSpan={2} className='education-year'>{education.year}</td>
          <td className='education-text description'>{education.description}</td>
        </tr>
        <tr>
          <td className='education-text details'>{education.details}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Education;
