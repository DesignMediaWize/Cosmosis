
import React from 'react';
import { TEAM } from '../constants';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-48 pb-20">
      
      {/* Intro */}
      <section className="pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
             <span className="text-neon font-mono font-bold tracking-widest uppercase text-xs mb-6 block">Who We Are</span>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-12 uppercase leading-none">
              Creativity <br/><span className="text-stroke text-transparent stroke-white" style={{WebkitTextStroke: '2px white'}}>Unbound</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <p className="text-xl text-zinc-300 leading-relaxed">
                 Cosmosis is a collective of digital architects, designers, and strategists. We reject the mundane. We believe that in a saturated digital universe, only the distinct survive.
               </p>
               <p className="text-lg text-zinc-500 leading-relaxed">
                 Founded in Stockholm, our mission is to provide brands with the gravity they need to attract and retain an audience. We combine art-house aesthetics with enterprise-level strategy.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-800 bg-zinc-900/20 hover:border-neon transition-colors duration-300 group">
              <Target className="w-10 h-10 text-white mb-6 group-hover:text-neon" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Precision</h3>
              <p className="text-zinc-400">Every pixel serves a purpose. We design with mathematical intent and artistic flair.</p>
            </div>
            <div className="p-8 border border-zinc-800 bg-zinc-900/20 hover:border-neon transition-colors duration-300 group">
              <Zap className="w-10 h-10 text-white mb-6 group-hover:text-neon" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Velocity</h3>
              <p className="text-zinc-400">Speed matters. We build lightweight, high-performance digital experiences that fly.</p>
            </div>
            <div className="p-8 border border-zinc-800 bg-zinc-900/20 hover:border-neon transition-colors duration-300 group">
              <Users className="w-10 h-10 text-white mb-6 group-hover:text-neon" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Impact</h3>
              <p className="text-zinc-400">We don't aim for impressions. We aim for impact. Design that changes behavior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-black text-6xl text-white mb-16 uppercase tracking-tighter">The Squad</h2>
          
          {/* Changed grid layout to use dark borders and gap-px for clean separation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
            {TEAM.map((member, index) => (
              <div key={index} className="group relative bg-cosmic-950 p-8 hover:bg-zinc-900 transition-colors duration-500">
                
                {/* Image Container: Rounded full creates the circle, hiding the square corners */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden bg-neon rounded-full">
                  {/* Applied mix-blend-multiply to hide white background, revealing the gold container underneath */}
                  {/* Added group-hover:grayscale-0 to bring back color on hover */}
                  {/* Removed scale effect */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale mix-blend-multiply contrast-125 brightness-110 transition-all duration-500 group-hover:grayscale-0" 
                  />
                  {/* Optional overlay for extra style */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-xl lg:text-2xl tracking-tight font-display font-bold text-white mb-1">{member.name}</h3>
                <span className="font-mono text-xs font-bold uppercase tracking-widest block mb-4 text-neon">{member.role}</span>
                <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
  );
};

export default About;
