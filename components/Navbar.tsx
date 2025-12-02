import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'pt-8 pb-3 md:py-4' : 'pt-16 pb-4 md:py-6' // Increased mobile pt from 12 to 16 for Dynamic Island
      }`}
    >
      <div className={`mx-auto px-3 md:px-6 lg:px-12 transition-all duration-500 ${ // Reduced mobile px from 4 to 3
        scrolled ? 'max-w-7xl' : 'max-w-full'
      }`}>
        <div className={`relative flex items-center justify-between px-4 py-3 md:px-6 md:py-4 rounded-full transition-all duration-500 ${ // Reduced mobile inner px from 5 to 4
          scrolled ? 'bg-zinc-900/90 backdrop-blur-md border border-white/10' : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <NavLink to="/" className="block group">
              {/* Enforced h-5 (20px) on mobile, h-8 (32px) on desktop */}
              <Logo className="h-5 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-display font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:text-neon ${
                      isActive 
                        ? 'text-white after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-neon' 
                        : 'text-zinc-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1 hover:text-neon transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-10 flex items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}>
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-cosmic-950/98 backdrop-blur-2xl">
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon/5 rounded-full blur-[80px] animate-pulse-slow"></div>
           <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-900/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
           
           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-display font-bold text-xl uppercase tracking-[0.25em] transition-all duration-300 ${
                  isActive
                    ? 'text-neon scale-110 drop-shadow-[0_0_10px_rgba(193,153,119,0.3)]'
                    : 'text-zinc-500 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;