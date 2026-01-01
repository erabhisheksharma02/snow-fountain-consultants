import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Training from './pages/Training';
import Typography from './pages/Typography';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/training" element={<Layout><Training /></Layout>} />
        <Route path="/typography" element={<Layout><Typography /></Layout>} />
        <Route path="/contacts" element={<Layout><Contacts /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
