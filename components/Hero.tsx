
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-seer-text leading-[1.1] mb-8">
          Litigation Documents,{' '}
          <span className="italic text-seer-accent">Battle-Tested</span>{' '}
          Before Filing
        </h1>

        <p className="text-lg md:text-xl text-seer-muted max-w-2xl mb-12 leading-relaxed">
          SEER drafts court-ready legal documents, then stress-tests them in a simulated courtroom. Two opposing AI legal teams argue every angle before you file.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-8 py-4 bg-seer-accent hover:bg-[#C4684E] text-white font-semibold text-sm tracking-wide rounded-lg transition-colors flex items-center justify-center gap-2 group"
          >
            Request Early Access
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-8 border-t border-seer-border grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl">
          {[
            { label: 'Specialized Agents', value: '7+' },
            { label: 'Federal Courts', value: '23+' },
            { label: 'State Courts', value: '40+' },
            { label: 'Document Types and growing', value: '12+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <span className="text-3xl md:text-4xl font-serif text-seer-text">{stat.value}</span>
              <span className="text-xs text-seer-muted uppercase tracking-wider mt-1 font-mono">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
