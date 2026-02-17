import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="px-6 py-20 bg-protego-panel/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-8">
          
          <div className="lg:col-span-2 pr-0 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-protego-cyan font-mono text-sm uppercase tracking-widest mb-4">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Everyone else Generates. We Test.
            </h3>
            <p className="text-protego-muted mb-6">
              Companies like Harvey, EvenUp, and LegalMation are focusing solely on text generation.
            </p>
            <p className="text-white font-medium">
              We account for the "Adversarial Nature" of Law.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden border border-white/10">
              {/* Header */}
              <div className="grid grid-cols-2 bg-white/5 border-b border-white/10">
                <div className="p-6 border-r border-white/10 text-center">
                  <span className="text-lg font-bold text-white">GenAI Tools</span>
                  <div className="text-xs text-protego-muted mt-1">(Harvey, EvenUp)</div>
                </div>
                <div className="p-6 text-center bg-protego-cyan/10 relative">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-protego-cyan"></div>
                  <span className="text-lg font-bold text-protego-cyan">Protego-AI</span>
                  <div className="text-xs text-protego-cyan/70 mt-1">(Agentic Workflows)</div>
                </div>
              </div>

              {/* Rows */}
              {[
                { label: "Document Drafting", comp: true, us: true },
                { label: "Legal Research", comp: true, us: true },
                { label: "Adversarial Simulation", comp: false, us: true },
                { label: "Loophole Detection", comp: false, us: true },
                { label: "Strategy Stress-Testing", comp: false, us: true },
                { label: "Automatic Fortification", comp: false, us: true },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="p-4 md:p-6 border-r border-white/10 flex items-center justify-between">
                    <span className="text-sm md:text-base text-protego-muted">{row.label}</span>
                    <div className="md:hidden">
                       {row.comp ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-red-500" />}
                    </div>
                    <div className="hidden md:block">
                        {row.comp ? <Check size={20} className="text-green-500" /> : <X size={20} className="text-red-500" />}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex items-center justify-center bg-protego-cyan/5">
                     <Check size={20} className="text-protego-cyan" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;