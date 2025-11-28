import React, { useState } from 'react';
import { Mail, MapPin, Phone, Sparkles, Send, Terminal, Globe, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { generateCreativeConcept } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body with a thematic format
    const subject = `Mission Brief from ${formData.name}`;
    const body = `IDENTIFIER: ${formData.name}
FREQUENCY (EMAIL): ${formData.email}

MISSION BRIEF:
${formData.message}`;

    // Open default mail client
    window.location.href = `mailto:inquiries@cosmosis.se?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleAiBrainstorm = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    setAiResponse(null);
    
    const concept = await generateCreativeConcept(aiPrompt);
    
    setAiResponse(concept);
    setIsAiLoading(false);
  };

  return (
    <div className="w-full pt-48 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Info & Form */}
          <div className="space-y-16">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
                CONTACT<span className="text-neon">.</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-md">
                We are currently accepting new missions. 
                Establish a connection below.
              </p>
            </div>

            {/* FORM (Moved to Top) */}
            <form onSubmit={handleFormSubmit} className="space-y-8 pt-8 border-t border-white/10">
              <h3 className="font-mono text-white text-xs font-bold uppercase tracking-widest mb-2">Send Encrypted Message</h3>
              <div className="space-y-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-neon transition-colors placeholder-zinc-700"
                    placeholder="IDENTIFIER (NAME)"
                    required
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-neon transition-colors placeholder-zinc-700"
                    placeholder="FREQUENCY (EMAIL)"
                    required
                  />
                </div>
                <div className="relative group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-neon transition-colors placeholder-zinc-700 resize-none"
                    placeholder="MISSION BRIEF (MESSAGE)"
                    required
                  ></textarea>
                </div>
              </div>
              <Button type="submit" variant="neon" size="lg" className="w-full md:w-auto">
                Transmit Signal <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>

            {/* Detailed Contact Info (Moved Below Form) */}
            <div className="space-y-10 border-t border-white/10 pt-10">
              
              {/* Transmission Channels */}
              <div>
                <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-2 h-2 bg-neon rounded-full mr-2 animate-pulse"></span>
                  Transmission Channels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="mailto:inquiries@cosmosis.se" className="group p-6 border border-zinc-800 bg-zinc-900/30 hover:border-neon transition-all duration-300 h-full">
                    <Mail className="w-5 h-5 text-white mb-4 group-hover:text-neon transition-colors" />
                    <span className="block text-zinc-500 text-xs font-mono uppercase mb-1">General Inquiries</span>
                    <span className="text-white font-display font-bold text-lg break-words">inquiries@cosmosis.se</span>
                  </a>
                  <div className="group p-6 border border-zinc-800 bg-zinc-900/30 hover:border-neon transition-all duration-300 h-full">
                    <Phone className="w-5 h-5 text-white mb-4 group-hover:text-neon transition-colors" />
                    <span className="block text-zinc-500 text-xs font-mono uppercase mb-1">Direct Line</span>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+46727266624" className="text-white font-display font-bold text-lg hover:text-neon transition-colors">+46 72 726 6624</a>
                      <a href="tel:+468239566" className="text-white font-display font-bold text-lg hover:text-neon transition-colors">+46 823 9566</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Bases */}
              <div>
                <h3 className="font-mono text-neon text-xs font-bold uppercase tracking-widest mb-6 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Operational Bases
                </h3>
                <div className="space-y-4">
                  
                  {/* Stockholm */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 p-6 border-l-2 border-zinc-800 hover:border-neon bg-white/5 transition-all duration-300">
                    <div className="md:w-1/3">
                      <span className="text-white font-display font-bold text-xl block">Stockholm</span>
                      <span className="text-neon text-xs font-mono uppercase">Headquarters</span>
                    </div>
                    <div className="md:w-2/3 text-zinc-400 text-sm leading-relaxed">
                      <p>Kungsgatan 29</p>
                      <p>111 56, Stockholm</p>
                      <p>Sweden</p>
                    </div>
                  </div>

                  {/* Norway */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 p-6 border-l-2 border-zinc-800 hover:border-neon bg-white/5 transition-all duration-300">
                    <div className="md:w-1/3">
                      <span className="text-white font-display font-bold text-xl block">Norway</span>
                    </div>
                    <div className="md:w-2/3 text-zinc-400 text-sm leading-relaxed">
                      <p>Larvik, Norway</p>
                    </div>
                  </div>

                  {/* Colombo */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 p-6 border-l-2 border-zinc-800 hover:border-neon bg-white/5 transition-all duration-300">
                    <div className="md:w-1/3">
                      <span className="text-white font-display font-bold text-xl block">Sri Lanka</span>
                    </div>
                    <div className="md:w-2/3 text-zinc-400 text-sm leading-relaxed">
                      <p>Colombo, Sri Lanka</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: AI Terminal */}
          <div className="lg:pt-20">
            <div className="sticky top-32">
              <div className="bg-black border border-zinc-800 rounded-sm p-6 md:p-8 relative overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                    AI_BRAINSTORM_MODULE_V2.5
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl text-white mb-2 flex items-center">
                    <Terminal className="w-6 h-6 text-neon mr-3" />
                    CONCEPT_GENERATOR
                  </h3>
                  <p className="text-zinc-500 text-sm font-mono">
                    &gt; Input raw parameters.<br/>&gt; System will output a creative brief.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-0">
                    <span className="bg-zinc-800 text-neon px-3 py-3 font-mono border border-zinc-700 border-r-0 flex items-center">$</span>
                    <input 
                      type="text" 
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Enter keywords (e.g. 'Cyberpunk bakery')"
                      className="flex-1 bg-zinc-900/50 border border-zinc-700 text-white font-mono px-4 py-3 focus:outline-none focus:border-neon focus:ring-0 transition-colors placeholder-zinc-700"
                    />
                  </div>
                  <Button 
                    onClick={handleAiBrainstorm} 
                    isLoading={isAiLoading}
                    variant="outline"
                    size="sm"
                    className="w-full font-mono text-xs uppercase"
                  >
                    RUN_GENERATION.EXE
                  </Button>
                </div>

                {aiResponse && (
                  <div className="mt-8 p-6 bg-zinc-900/80 border border-neon/30 text-neon font-mono text-sm max-h-80 overflow-y-auto custom-scrollbar">
                    <ReactMarkdown 
                      components={{
                        strong: ({node, ...props}) => <span className="text-white font-bold bg-neon/10 px-1" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-2 my-2" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />
                      }}
                    >
                      {aiResponse}
                    </ReactMarkdown>
                  </div>
                )}
                
                {/* Decorative Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent h-px animate-pulse-slow pointer-events-none top-1/2"></div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Sparkles className="text-zinc-800 w-24 h-24 opacity-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;