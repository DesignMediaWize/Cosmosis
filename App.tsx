import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Visor from './components/Visor';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cosmic-950 text-white font-sans selection:bg-neon selection:text-black">
        <div className="bg-noise"></div>
        
        {/* Depth of Field Overlay: Blurs content scrolling near/behind navbar */}
        {/* Adjusted height to h-64, blur to 20px, and mask to 40% to ensure full blur behind navbar */}
        <div className="fixed top-0 left-0 right-0 h-64 z-[90] pointer-events-none backdrop-blur-[20px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"></div>
        
        <Visor />
        <Navbar />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;