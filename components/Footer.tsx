import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
          <div className="max-w-xs">
            {/* Reduced size by approx 20% */}
            <Logo className="h-6 md:h-10 mb-6 block" />
            <p className="text-zinc-500 text-sm leading-relaxed">
              A design agency for the bold. <br/>
              Distorting reality since 2024.
            </p>
          </div>

          <div className="flex gap-16 md:gap-32 flex-wrap">
            <div>
              <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-6">Sitemap</h3>
              <ul className="space-y-4 text-zinc-400 font-display font-medium">
                <li><Link to="/" className="hover:text-white transition-colors">Index</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Agency</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-6">Social</h3>
              <ul className="space-y-4 text-zinc-400 font-display font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 text-zinc-600 text-xs font-mono uppercase">
          <p>&copy; {new Date().getFullYear()} Cosmosis. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Stockholm / Earth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;