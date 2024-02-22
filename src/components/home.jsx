import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file for styling


const Home = () => {
  const dynamicTexts = ["Film Maker", "Web Developer", "Content Creator"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 1500);

    return () => {
      clearInterval(textInterval);
    };
  }, [dynamicTexts.length]);

  return (
    <section id="home" className="home-section"> 
      <div className="overlay"></div>
      <div className="home-container">
        <div className="text-container">
          <h1>Welcome to My Portfolio</h1>
          <h3 className='fn'><span className='ff'>A</span>kshat Soni</h3>
          <p className="dynamic-text">I am a <span>{dynamicTexts[textIndex]}</span></p>
        </div>
      </div>
    </section>
  );
};

export default Home;
