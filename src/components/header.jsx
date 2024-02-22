import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li><a href="#about">About</a></li>
//           <li><a href="#achievements">Achievements</a></li>
//           <li><a href="#experience">Experience</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
