import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { PROJECTS, SERVICES } from '../constants';

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate distance from center
    // Tuned divisor to 60 for visible but smooth parallax movement
    setMousePos({
      x: (clientX - centerX) / 60, 
      y: (clientY - centerY) / 60
    });
  };

  // Generate random stars for the cosmos background
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, // 1px to 3px
      opacity: Math.random() * 0.5 + 0.2,
      animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  // Generate random floating debris (tiny crosses/specs)
  const debris = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      rotation: `${Math.random() * 360}deg`,
      scale: Math.random() * 0.5 + 0.5,
      animationDuration: `${Math.random() * 20 + 20}s`, // 20s to 40s
      animationDelay: `${Math.random() * 10}s`,
    }));
  }, []);

  // Generate shooting stars
  // Reduced count to 2 for sparsity
  const shootingStars = useMemo(() => {
    return Array.from({ length: 2 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`, // Start from upper half
      left: `${Math.random() * 80 + 10}%`, // Avoid edges
      delay: `${Math.random() * 5}s`, // Staggered start
      duration: `${Math.random() * 5 + 8}s` // 8-13 seconds
    }));
  }, []);

  const MARQUEE_ITEMS = ["Branding", "Web Design", "Strategy", "Media", "Development", "Art Direction"];

  return (
    <div className="w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
      >
        
        {/* Animated Background Mesh & Cosmos */}
        <div className="absolute inset-0 z-0">
           {/* Deep Space Base */}
           <div className="absolute inset-0 bg-cosmic-950 opacity-80"></div>

           {/* Parallax Layer: Background Glows (Move inverse to mouse) */}
           <div 
             className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
             style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
           >
              {/* Primary Gold Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 rounded-full blur-[120px] animate-pulse-slow"></div>
              
              {/* Secondary Grey/Purple Glow */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-secondary/20 rounded-full blur-[100px] animate-float"></div>
           </div>

           {/* Cosmos Layer: Stars (Move slightly with mouse) */}
           <div 
             className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-300 ease-out will-change-transform"
             style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
           >
             {stars.map((star) => (
               <div
                 key={`star-${star.id}`}
                 className="absolute bg-white rounded-full animate-pulse"
                 style={{
                   top: star.top,
                   left: star.left,
                   width: star.size,
                   height: star.size,
                   opacity: star.opacity,
                   animationDuration: '4s', // Consistent pulse
                 }}
               >
                 {/* Inner wrapper for floating movement */}
                 <div 
                   className="w-full h-full animate-float"
                   style={{ 
                     animationDuration: star.animationDuration,
                     animationDelay: star.animationDelay 
                   }}
                 />
               </div>
             ))}

             {/* Shooting Stars Layer */}
             {shootingStars.map((star) => (
               <div
                 key={`shooting-star-${star.id}`}
                 className="absolute h-px w-[150px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shoot"
                 style={{
                   top: star.top,
                   left: star.left,
                   animationDelay: star.delay,
                   animationDuration: star.duration
                 }}
               />
             ))}

             {/* Cosmos Layer: Debris/Tech Elements */}
             {debris.map((item) => (
               <div
                 key={`debris-${item.id}`}
                 className="absolute text-zinc-600 animate-float opacity-40"
                 style={{
                   top: item.top,
                   left: item.left,
                   transform: `rotate(${item.rotation}) scale(${item.scale})`,
                   animationDuration: item.animationDuration,
                   animationDelay: item.animationDelay,
                 }}
               >
                 <Plus strokeWidth={1} size={12} />
               </div>
             ))}
           </div>
        </div>

        {/* Content Layer with Parallax (Moves opposite to background for depth) */}
        <div 
          className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <div className="mb-6 animate-float">
             <span className="px-4 py-1 rounded-full border border-white/20 text-xs font-display uppercase tracking-widest text-zinc-400 bg-black/50 backdrop-blur-sm">
                Next Gen Digital Agency
             </span>
          </div>
          
          <h1 className="font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-white mix-blend-overlay opacity-90 select-none">
            COSMOSIS
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            We distort digital reality to create brand experiences that are <span className="text-neon font-medium">impossible to ignore</span>.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link to="/contact">
              <Button variant="neon" size="lg">Start Project</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">Our Services</Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 text-xs font-display uppercase tracking-widest text-zinc-500">
          <div className="h-px w-12 bg-zinc-700"></div>
          Scroll to explore
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="py-12 bg-black border-y border-zinc-900 overflow-hidden relative select-none">
        <div className="flex w-full">
          {/* Track 1 */}
          <div className="flex animate-marquee whitespace-nowrap flex-shrink-0 items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={`t1-${index}`}>
                <span className="text-5xl md:text-7xl font-display font-bold text-neon opacity-20 px-6 md:px-10">
                  {item}
                </span>
                <span className="text-3xl text-neon-secondary opacity-40 px-2">•</span>
              </React.Fragment>
            ))}
          </div>
          {/* Track 2 */}
          <div className="flex animate-marquee whitespace-nowrap flex-shrink-0 items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={`t2-${index}`}>
                <span className="text-5xl md:text-7xl font-display font-bold text-neon opacity-20 px-6 md:px-10">
                  {item}
                </span>
                <span className="text-3xl text-neon-secondary opacity-40 px-2">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / ABOUT TEASER */}
      <section className="py-32 relative bg-cosmic-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="font-display font-semibold text-4xl md:text-6xl text-white leading-tight mb-8">
                The universe favors the <span className="text-neon">bold</span>. We don't just build websites; we build gravity wells that pull customers in.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                In a void of generic templates and safe choices, Cosmosis is your launchpad for the extraordinary. We blend brutalist aesthetics with refined strategy.
              </p>
              <Link to="/about">
                <Button variant="outline" className="w-full justify-between group">
                  About The Agency <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 border-t border-white/10 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-display text-sm uppercase tracking-widest text-zinc-500">Core Competencies</h3>
            <Link to="/services" className="text-neon hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center">
              View All <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="group p-8 border border-white/5 hover:border-neon/50 bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col h-full justify-between">
                <div>
                  <service.icon className="w-10 h-10 text-white mb-6 group-hover:text-neon transition-colors" />
                  <h4 className="font-display font-bold text-2xl text-white mb-4">{service.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
                <div className="w-full h-px bg-white/10 group-hover:bg-neon/50 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-5xl md:text-8xl text-white mb-20 opacity-20">WORK</h2>
          
          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`flex flex-col md:flex-row gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center group`}>
                <div className="w-full md:w-3/5 overflow-hidden">
                   <Link to={`/work/${project.id}`}>
                     <div className="relative aspect-video bg-zinc-800 overflow-hidden cursor-pointer">
                       <div className="absolute inset-0 bg-neon/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                       />
                     </div>
                   </Link>
                </div>
                <div className="w-full md:w-2/5">
                   <span className="text-neon font-mono text-xs mb-4 block">0{index + 1} — {project.category.toUpperCase()}</span>
                   <Link to={`/work/${project.id}`} className="block">
                     <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 group-hover:text-neon transition-colors">{project.title}</h3>
                   </Link>
                   <p className="text-zinc-400 mb-8 max-w-sm">{project.description}</p>
                   <Link to={`/work/${project.id}`}>
                      <Button variant="outline" size="sm">Case Study</Button>
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYPERSPACE CTA - REPLACED */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden border-t border-zinc-900 group">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#84817C_1px,transparent_1px),linear-gradient(to_bottom,#84817C_1px,transparent_1px)] bg-[size:4rem_4rem]"
            style={{ 
              transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
              transformOrigin: 'top center',
              maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
            }}
          ></div>
        </div>

        {/* Glowing Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] group-hover:bg-neon/10 transition-colors duration-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-neon/20 rounded-full blur-[50px] animate-pulse-slow"></div>

        <div className="relative z-10 text-center px-6">
          <span className="inline-flex items-center gap-2 text-neon font-mono text-xs uppercase tracking-widest mb-6 border border-neon/30 px-3 py-1 rounded-full bg-neon/5">
            <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
            Signal Detected
          </span>
          
          <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tighter leading-none mix-blend-difference">
            START<br className="md:hidden"/> PROJECT
          </h2>
          
          <p className="text-zinc-500 mb-12 max-w-lg mx-auto text-lg">
            The trajectory is calculated. The engines are primed. <br/>
            All we need is the command.
          </p>
          
          <Link to="/contact">
            <button className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-none border border-zinc-700 hover:border-neon transition-colors duration-300">
              <div className="absolute inset-0 w-0 bg-neon transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center font-display font-bold text-xl uppercase tracking-widest text-white group-hover:text-neon transition-colors">
                Initiate Sequence <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Decorative Data Lines */}
        <div className="absolute bottom-10 left-10 hidden md:block">
           <div className="flex flex-col gap-1">
             <div className="h-px w-24 bg-zinc-800"></div>
             <div className="h-px w-16 bg-zinc-800"></div>
             <div className="h-px w-32 bg-zinc-800"></div>
           </div>
        </div>
        <div className="absolute top-10 right-10 hidden md:block text-right">
           <span className="block font-mono text-[10px] text-zinc-700">SECURE_CONNECTION</span>
           <span className="block font-mono text-[10px] text-zinc-700">ENCRYPTION_ENABLED</span>
        </div>

      </section>

    </div>
  );
};

export default Home;