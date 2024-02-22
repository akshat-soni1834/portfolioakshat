import React from 'react';
import "./Skills.css"

const Skills = () => {
  // Sample data, you can replace it with your actual data
  const skillsData = [
    { skill: 'React', progress: 80 },
    { skill: 'JavaScript', progress: 90 },
    { skill: 'Python', progress: 60 },
    // Add more skills as needed
  ];

  return (
    <div>
      {skillsData.map((skillItem, index) => (
        <div key={index} className="skill-item">
          <p className='skn'>{skillItem.skill}</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${skillItem.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
