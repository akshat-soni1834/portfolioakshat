// Import React, useState, and the CSS file for styling
import React, { useState } from 'react';
import './Projects.css';

// Import the project images from the images folder
import busReservationImage from '../images/project5.png';
import Parking from '../images/project1.png';
import Agrobot from '../images/Agrobot.jpg';
const Projects = () => {
  const projectsData = [
    {
      title: 'Library Management System',
      image: 'https://thumbs.dreamstime.com/b/online-library-e-book-research-coming-out-computer-screen-computer-representing-school-classes-manual-31531667.jpg',
      description: 'Automatic Library Management System using C++',
      moreDetails: 'This project is to make the library system automated and digitalized. By this project, you can perform various tasks like Adding a Book, Deleting a Book, Book Issue, Book Submit, Counting of Books, Displaying the Books, Searching and Sorting of Books',
    },
    // Add more projects as needed

    {
      title: 'Agriculture Robot',
      image: Agrobot,
      description: 'Robot that can perform various all the task of Farming',
      moreDetails: 'This project was builded with intension of reducing the work load on farmer and make the farming automated. This projects is based on Arduino. The project has to modes: first is watering mode , Second is seeding mode.',
    },

    {
      title: 'Bus Reservation System',
      image: busReservationImage,
      description: 'Used to reserve a book seat using file handeling concept with C++',
      moreDetails: 'This project was builded during our course object oriented programming. In this project we have used concept of file handling to add or remove a bus from the bus station.',
    },

    {
      title: 'Parking Space Count System',
      image: Parking,
      description: 'To display the available slots in the Parking Zone',
      moreDetails: 'This was the course project of our data structure course in semester 3rd. We have created linked list in this project to store the data of multiple vehicles in the parking zone. The main reason to build this project was to save the time and money of the drivers so that they do not have to come back from the parking zone when there is no slot left. This project is able to display the slots available in the parking zone.',
    },
  ];

  const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <div className="project-card">
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button onClick={toggleDetails}>{showDetails ? 'See Less' : 'Know More'}</button>
          {showDetails && (
            <div className="project-details">
              <p>{project.moreDetails}</p>
            </div>
          )}
        </div>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    );
  };

  return (
    <div id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-cards">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
