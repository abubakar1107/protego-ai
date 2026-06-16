import React from 'react';

const MarketStats: React.FC = () => {
  return (
    <section className="px-6 py-28 bg-seer-surface">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-seer-accent"></span>
            <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">Market Opportunity</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
            The firms that dominate pre-trial prep dominate outcomes.
          </h3>
          <p className="text-seer-muted text-lg leading-relaxed">
            Litigation remains the largest revenue-generating segment in legal services, and almost none of it is decided at trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Hero stat */}
          <div className="md:col-span-3 p-10 md:p-14 rounded-2xl bg-seer-accent text-white flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="text-7xl md:text-9xl font-serif tracking-tighter leading-none mb-5">97%</h3>
              <p className="text-xl md:text-2xl font-serif">of civil lawsuits never reach trial.</p>
            </div>
            <p className="text-base md:text-lg border-t border-white/20 pt-6 mt-6 opacity-90">
              Pre-trial paperwork quality determines the outcome.
            </p>
          </div>

          {/* Supporting stats */}
          <div className="md:col-span-2 flex flex-col">
            <div className="flex-1 border-t-2 border-seer-text/80 pt-6 pb-10">
              <span className="block font-serif text-5xl md:text-6xl text-seer-text tracking-tight mb-2">~$400B</span>
              <span className="text-seer-muted">US Legal Services Market</span>
            </div>
            <div className="flex-1 border-t border-seer-border pt-6">
              <p className="font-mono text-[11px] text-seer-accent uppercase tracking-[0.2em] mb-3">Jurisdiction Coverage</p>
              <p className="text-lg text-seer-text font-serif leading-snug mb-2">
                New York · California · Texas · Illinois · Massachusetts · D.C.
              </p>
              <p className="text-seer-muted text-sm">23 federal courts and 40+ state courts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
