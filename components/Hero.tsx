import React from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-protego-cyan/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-protego-cyan/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      
      <div className="z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-protego-cyan/10 border border-protego-cyan/20 text-protego-cyan text-xs font-mono font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-protego-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-protego-cyan"></span>
          </span>
          SYSTEMS DESIGN PHASE ACTIVE
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
          Reinforcing Litigation with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-protego-cyan to-blue-600 text-glow">
            Agentic AI Workflows
          </span>
        </h1>

        <p className="text-lg md:text-xl text-protego-muted max-w-2xl mb-12 leading-relaxed">
          The first Adversarial AI simulation system for litigators. 
          Don't just draft documents. <span className="text-white font-semibold">Draft. Attack. Fortify.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-protego-cyan text-black font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors flex items-center justify-center gap-2 group">
            Join the Waitlist
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <Play size={16} fill="currentColor" />
            Watch Simulation
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl">
          {[
            { label: 'Market Value', value: '$400B+' },
            { label: 'Civil Lawsuits', value: '97% Settle' },
            { label: 'Technology', value: 'MCP Server' },
            { label: 'Architecture', value: 'Adversarial' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono">{stat.value}</span>
              <span className="text-xs text-protego-muted uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;