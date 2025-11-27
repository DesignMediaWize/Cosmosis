import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-display mb-4">Signal Lost</h1>
        <p className="text-zinc-400 mb-8">The service you are looking for does not exist in this sector.</p>
        <Link to="/services">
          <Button variant="outline">Return to Base</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 hover:text-white transition-colors">
          <Link to="/services" className="hover:text-neon transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-neon">{service.title}</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display font-black text-5xl md:text-8xl text-white mb-6 uppercase leading-none">
            {service.title}
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-neon via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] bg-zinc-900 mb-20 overflow-hidden relative group">
           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
           <img 
            src={service.details.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
           />
           {/* Scanline Effect */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Two Column Layout: Description & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left: Description */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-bold text-3xl text-white mb-8">The Mission</h2>
            <p className="text-xl text-zinc-300 leading-relaxed font-light">
              {service.details.fullDescription}
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="lg:col-span-4 bg-zinc-900/30 p-8 border border-white/5">
            <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-6">
              System Upgrades
            </h3>
            <ul className="space-y-4">
              {service.details.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-zinc-400 text-sm">
                  <Check className="w-4 h-4 text-neon mr-3 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="font-display font-bold text-3xl text-white mb-12 border-l-4 border-neon pl-4">
            Execution Protocol
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.details.process.map((step, idx) => (
              <div key={idx} className="relative p-6 border-t border-white/20 hover:border-neon transition-colors duration-300 group">
                <span className="text-4xl font-display font-bold text-zinc-800 group-hover:text-neon/20 transition-colors absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-white font-bold text-lg mb-4 mt-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-neon p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          <div className="relative z-10">
            <h2 className="font-display font-black text-4xl text-black mb-6 uppercase">
              Ready to Initiate?
            </h2>
            <p className="text-black/70 mb-8 max-w-xl mx-auto font-medium">
              We are standing by to deploy this service for your brand. Let's build something impossible.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-black text-white font-display font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Start Project
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;