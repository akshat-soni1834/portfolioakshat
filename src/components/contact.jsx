import React from 'react';
import { FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div>
    {/* <h1 className="logo">Cont<span className="ab">act</span></h1> */}
    <div id='contact' className='contact-container'>
      <h2>Contact Me</h2>
      <a className="button" href="mailto:sakshat923@gmail.com">Send Mail</a>

      <div className="social-media">
        <a href="https://www.instagram.com/as_hacks_1" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCp1I0dqG_2JWrwcGJH66SSA" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="https://github.com/akshat-soni1834" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </div></div>
  );
};

export default Contact;
