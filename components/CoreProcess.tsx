import React from 'react';

const CoreProcess: React.FC = () => {
  const steps = [
    {
      n: '01',
      title: 'Configure',
      desc: 'Select Plaintiff or Defense. Pick your jurisdiction and court. Describe your case facts and upload relevant documents.',
    },
    {
      n: '02',
      title: 'Generate',
      desc: "SEER's agentic AI team drafts court-ready documents tailored to your jurisdiction, backed by relevant case law and precedent.",
    },
    {
      n: '03',
      title: 'Simulate',
      desc: 'Two AI law firms argue your documents before a neutral Judge agent. Documents are hardened through adversarial rounds until battle-ready.',
    },
  ];

  return (
    <section id="solution" className="px-6 py-28 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-seer-accent"></span>
            <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">How It Works</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1]">
            Your case, from intake to filing.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
          {steps.map((item, i) => (
            <div key={i} className="border-t border-seer-text/15 pt-8 md:pr-6 group">
              <span className="font-serif text-6xl md:text-7xl text-seer-accent/25 leading-none group-hover:text-seer-accent/50 transition-colors duration-500">
                {item.n}
              </span>
              <h4 className="mt-6 text-2xl font-serif text-seer-text">{item.title}</h4>
              <p className="mt-3 text-seer-muted leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 border-l-2 border-seer-accent pl-7 max-w-3xl">
          <p className="font-serif text-2xl md:text-[2rem] text-seer-text leading-snug italic">
            File documents that have already survived the toughest scrutiny a courtroom can deliver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreProcess;
