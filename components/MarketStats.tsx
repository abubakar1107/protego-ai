import React from 'react';

const MarketStats: React.FC = () => {
  return (
    <section className="px-6 py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Market Opportunity</h2>
        <p className="text-protego-muted max-w-2xl mx-auto">
          Litigation remains the largest revenue generating service segment within the industry. If you dominate the paperwork, you dominate the settlement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-protego-cyan to-blue-600 text-black flex flex-col justify-between min-h-[300px]">
           <div>
              <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">97%</h3>
              <p className="text-xl font-medium opacity-80">of Civil Lawsuits never reach trial.</p>
           </div>
           <p className="text-lg font-medium border-t border-black/10 pt-8 mt-8">
             Outcomes are decided by pre-trial paperwork.
           </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
           <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <span className="text-protego-cyan text-5xl font-bold font-mono mb-2">~$400B</span>
              <span className="text-protego-muted text-lg">US Legal Services Market Value</span>
           </div>
           <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <p className="text-xl text-white font-medium leading-relaxed">
                 "A weak document leads to weak settlements. The 'Wait and See' approach costs clients billions annually."
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;