import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-48 px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-display mb-4">Project Not Found</h1>
        <p className="text-zinc-400 mb-8">This file has been redacted or does not exist.</p>
        <Link to="/">
          <Button variant="outline">Return to Base</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-48 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 hover:text-white transition-colors">
          <Link to="/#work" className="hover:text-neon transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-neon">{project.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="text-neon font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
            Case Study: {project.category}
          </span>
          <h1 className="font-display font-black text-5xl md:text-8xl text-white mb-8 uppercase leading-none max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video bg-zinc-900 mb-20 overflow-hidden relative group border border-zinc-800">
           <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           />
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-zinc-800 py-8">
          <div>
            <span className="block text-zinc-600 text-xs font-mono uppercase mb-2">Client</span>
            <span className="block text-white font-display font-bold text-lg">{project.details.client}</span>
          </div>
          <div>
            <span className="block text-zinc-600 text-xs font-mono uppercase mb-2">Year</span>
            <span className="block text-white font-display font-bold text-lg">{project.details.year}</span>
          </div>
          <div className="col-span-2 md:col-span-2">
            <span className="block text-zinc-600 text-xs font-mono uppercase mb-2">Role</span>
            <span className="block text-white font-display font-bold text-lg">{project.details.role}</span>
          </div>
        </div>

        {/* Mission Report (Challenge & Solution) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display font-bold text-3xl text-white mb-6">The Challenge</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.details.challenge}
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-3xl text-white mb-6">The Solution</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.details.solution}
            </p>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-4">Mission Impact</h3>
              <ul className="space-y-2">
                {project.details.results.map((result, idx) => (
                  <li key={idx} className="text-zinc-300 flex items-start text-sm">
                     <span className="mr-2 text-neon">•</span> {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-24">
          <h2 className="font-display font-bold text-2xl text-white mb-8">Mission Archives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {project.details.gallery.map((img, idx) => (
               <div key={idx} className="aspect-square bg-zinc-900 overflow-hidden relative group">
                 <img 
                  src={img} 
                  alt={`${project.title} gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:contrast-125"
                 />
                 <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
               </div>
             ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="flex justify-between items-center border-t border-zinc-800 pt-12">
          <Link to="/#work">
             <Button variant="outline" size="sm">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Base
             </Button>
          </Link>
          <Link to="/contact">
             <Button variant="neon" size="lg">
               Start Your Project
             </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;