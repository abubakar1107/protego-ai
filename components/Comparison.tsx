import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="px-6 py-24 bg-seer-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-8">

          <div className="lg:col-span-2 pr-0 lg:pr-12 mb-12 lg:mb-0 lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-seer-accent"></span>
              <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">Why Us</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
              Everyone else generates. We simulate.
            </h3>
            <p className="text-seer-muted text-lg leading-relaxed mb-5">
              Tools like Harvey, EvenUp, and LegalMation focus on document generation alone.
            </p>
            <p className="text-seer-text font-serif text-xl italic">
              SEER accounts for the adversarial nature of law.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden border border-seer-border bg-white shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-2 bg-seer-surface border-b border-seer-border">
                <div className="p-6 border-r border-seer-border text-center">
                  <span className="text-lg font-semibold tracking-tight text-seer-text">GenAI Tools</span>
                  <div className="text-xs text-seer-muted mt-1">(Harvey, EvenUp)</div>
                </div>
                <div className="p-6 text-center relative">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-seer-accent"></div>
                  <span className="text-lg font-semibold tracking-tight text-seer-accent">SEER</span>
                  <div className="text-xs text-seer-muted mt-1">(Adversarial Simulation)</div>
                </div>
              </div>

              {/* Rows */}
              {[
                { label: "Document Drafting", comp: true, us: true },
                { label: "Legal Research", comp: true, us: true },
                { label: "Adversarial Simulation", comp: false, us: true },
                { label: "Loophole Detection", comp: false, us: true },
                { label: "Strategy Stress-Testing", comp: false, us: true },
                { label: "Human-in-the-Loop Control", comp: false, us: true },
                { label: "Full Traceability & Audit Trail", comp: false, us: true },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-seer-border last:border-0 hover:bg-seer-surface/50 transition-colors">
                  <div className="p-4 md:p-6 border-r border-seer-border flex items-center justify-between">
                    <span className="text-sm md:text-base text-seer-muted">{row.label}</span>
                    <div className="md:hidden">
                       {row.comp ? <Check size={16} className="text-green-600" /> : <X size={16} className="text-red-400" />}
                    </div>
                    <div className="hidden md:block">
                        {row.comp ? <Check size={20} className="text-green-600" /> : <X size={20} className="text-red-400" />}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex items-center justify-center bg-seer-accent/5">
                     <Check size={20} className="text-green-600" />
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
