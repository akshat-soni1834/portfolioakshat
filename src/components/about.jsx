// About.js
import React, { useState } from 'react';
import profileImage from '../images/profile-pic.png';
import './About.css';
import Skills from './Skills';
const About = () => {
  const [selectedSection, setSelectedSection] = useState('skill');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div id='about' className='about-container'>
      <h2>About Me</h2>
      <div className='profile-section'>
      <div className='profile-details'>
          <p>
            Hi, I'm <span>Akshat Soni</span>, a passionate and dedicated Technology and Content Creation.
          </p>
          <p>
            I have a strong background in <span>Content-Creation, Web-Devloping and Logic building</span>, and I am
            committed to delivering high-quality work and creating meaningful projects.
          </p>

          
        </div>
        <img src={profileImage} alt='Profile' className='profile-image' />
        
      </div>

      {/* Section navigation */}
      <table className='section-navigation'>
            <tbody>
              <tr>
                <td className={selectedSection === 'skill' ? 'selected' : ''} onClick={() => handleSectionChange('skill')}>Skills</td>
                <td className={selectedSection === 'experience' ? 'selected' : ''} onClick={() => handleSectionChange('experience')}>Experience</td>
                <td className={selectedSection === 'achievements' ? 'selected' : ''} onClick={() => handleSectionChange('achievements')}>Achievements</td>
              </tr>
              <tr>
                <td colSpan='3'>
                  {/* Render the selected section */}
                  {selectedSection === 'skill' && (
                    <div className='section-content'>
                      {/* Add content for Skills section */}
                      <h3 className='sec'>Skills</h3>
                      <Skills/>
                      {/* Add your skills content here */}
                    </div>
                  )}

                  {selectedSection === 'experience' && (
                    <div className='section-content'>
                      {/* Add content for Experience section */}
                      <h3 className='sec'>Experience</h3>
                      <p className='sea'>1. 4 Years of experience in Content-Creation.
                      <br/>
                      2. Worked for various clients to help them to grow on social media.
                      <br />
                      </p>
                      {/* Add your experience content here */}
                    </div>
                  )}

                  {selectedSection === 'achievements' && (
                    <div className='section-content'>
                      {/* Add content for Achievements section */}
                      <h3 className='sec'>Achievements</h3>
                      <p className='sea'>1. 1300+ Suscribers on Youtube.
                      <br/>
                      2. 1100+ Followers on Instagram.
                      <br />
                      3. National Level Project Championship winner.
                      <br />
                      4. Created 40+ projects in past Year.
                      </p>
                      {/* Add your achievements content here */}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

    </div>
  );
};
export default About;
