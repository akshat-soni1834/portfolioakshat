import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path='' element={ <About/>}></Route>
    //   <Route path='/projects' element={ <Projects/>}></Route>
    //   <Route path='/contact' element={ <Contact/>}></Route>
    //   <Route path=''> </Route>
    //   </Routes>
    // </Router>

    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    // <div>

    //   <Header />
    //   <Home />
    //   <About />
    //   <Achievements />
    //   <Experience />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </div>
  );
};

export default App;
