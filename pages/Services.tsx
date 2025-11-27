import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 border-b border-white/20 pb-10">
          <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-6">CAPABILITIES</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            We provide a constellation of high-fidelity design and strategy services.
            Precision engineered for growth.
          </p>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group border-b border-white/10 py-12 md:py-16 hover:bg-white/5 transition-colors duration-500">
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
                
                {/* Index & Title */}
                <div className="md:w-1/3">
                  <span className="font-mono text-neon text-sm mb-2 block">0{index + 1}</span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-white group-hover:text-neon transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                  <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
                    {service.description} We dive deep into the void to retrieve solutions that others miss.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        <Check className="w-4 h-4 mr-2 text-neon opacity-50 group-hover:opacity-100" />
                        <span className="text-sm font-medium uppercase tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Link to={`/services/${service.id}`}>
                      <button className="flex items-center text-neon font-bold uppercase tracking-widest text-sm hover:underline">
                        Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;