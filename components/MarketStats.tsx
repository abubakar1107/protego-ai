import React from 'react';

const MarketStats: React.FC = () => {
  return (
    <section className="px-6 py-24 bg-seer-surface">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-seer-text mb-4">Market Opportunity</h2>
        <p className="text-seer-muted max-w-2xl mx-auto">
          Litigation remains the largest revenue-generating segment in legal services. The firms that dominate pre-trial preparation dominate outcomes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 md:p-12 rounded-2xl bg-seer-accent text-white flex flex-col justify-between min-h-[300px]">
           <div>
              <h3 className="text-6xl md:text-8xl font-serif tracking-tighter mb-4">97%</h3>
              <p className="text-xl font-medium opacity-90">of civil lawsuits never reach trial.</p>
           </div>
           <p className="text-lg font-medium border-t border-white/20 pt-8 mt-8 opacity-90">
             Pre-trial paperwork quality determines the outcome.
           </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
           <div className="p-8 rounded-2xl bg-white border border-seer-border shadow-sm flex flex-col justify-center h-full">
              <span className="text-seer-accent text-5xl font-serif mb-2">~$400B</span>
              <span className="text-seer-muted text-lg">US Legal Services Market</span>
           </div>
           <div className="p-8 rounded-2xl bg-white border border-seer-border shadow-sm flex flex-col justify-center h-full">
              <p className="text-sm font-mono text-seer-accent uppercase tracking-widest mb-3">Jurisdiction Coverage</p>
              <p className="text-xl text-seer-text font-medium leading-relaxed">
                New York, California, Texas, Illinois, Massachusetts & D.C.
              </p>
              <p className="text-seer-muted text-sm mt-2">23 federal courts and 40+ state courts</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
