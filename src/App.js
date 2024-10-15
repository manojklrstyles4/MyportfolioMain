import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import '@fontsource/poppins'; // Defaults to weight 400


// Import your page components here
import Home from '../src/components/Home';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;