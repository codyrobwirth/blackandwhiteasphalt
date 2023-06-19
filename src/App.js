import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Faq from './pages/faq/faq';
import Estimate from './pages/estimate/estimate';
import Services from './pages/services/services';

function App() {
  const basename = '/blackandwhiteasphalt'; // Replace <your-repo-name> with your repository name

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
