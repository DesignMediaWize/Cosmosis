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

// Admin Imports
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProjectEditor from './pages/admin/ProjectEditor';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cosmic-950 text-white font-sans selection:bg-neon selection:text-black">
        <div className="bg-noise"></div>
        
        {/* Depth of Field Overlay */}
        <div className="fixed top-0 left-0 right-0 h-64 z-[90] pointer-events-none backdrop-blur-[20px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"></div>
        
        <Visor />
        
        {/* We keep Navbar on all pages, but typically Admin might not want it. 
            For now, simpler to keep it layout consistent. */}
        <Navbar />
        
        <main className="flex-grow z-10">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/project/new" element={
              <ProtectedRoute>
                <ProjectEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/project/edit/:id" element={
              <ProtectedRoute>
                <ProjectEditor />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;