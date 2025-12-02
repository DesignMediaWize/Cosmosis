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
        scrolled ? 'pt-8 pb-3 md:py-4' : 'pt-12 pb-4 md:py-6'
      }`}
    >
      <div className={`mx-auto px-4 md:px-6 lg:px-12 transition-all duration-500 ${
        scrolled ? 'max-w-7xl' : 'max-w-full'
      }`}>
        <div className={`relative flex items-center justify-between px-5 py-3 md:px-6 md:py-4 rounded-full transition-all duration-500 ${
          scrolled ? 'bg-zinc-900/90 backdrop-blur-md border border-white/10' : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <NavLink to="/" className="block group">
              {/* Reduced size on mobile (h-5) to fit better with dynamic island spacing, kept desktop h-8 */}
              <Logo className="h-5 md:h-8 transition-transform duration-300 group-hover:scale-105" />
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
      <div className={`fixed inset-0 bg-cosmic-950/95 backdrop-blur-xl z-10 flex items-center justify-center transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-display font-bold text-4xl uppercase tracking-tighter ${
                  isActive
                    ? 'text-neon'
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