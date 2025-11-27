import React from 'react';
import { TEAM } from '../constants';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      
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
      <section className="py-24 bg-neon">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-black text-6xl text-black mb-16 uppercase tracking-tighter">The Squad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
            {TEAM.map((member, index) => (
              <div key={index} className="group border-r border-b border-black p-8 relative overflow-hidden bg-neon hover:bg-neon-hover transition-colors duration-500">
                <div className="relative w-full aspect-square mb-6 overflow-hidden">
                  {/* Applied mix-blend-multiply to hide white background, and contrast filter to clean up JPEG noise */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 mix-blend-multiply contrast-125 brightness-110 transition-all duration-500" 
                  />
                </div>
                {/* Reduced font size to text-xl/2xl to prevent wrapping for long names */}
                <h3 className="text-xl lg:text-2xl tracking-tight font-display font-bold text-black mb-1">{member.name}</h3>
                <span className="font-mono text-xs font-bold uppercase tracking-widest block mb-4 text-black/60 group-hover:text-black transition-colors">{member.role}</span>
                <p className="text-black/80 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;