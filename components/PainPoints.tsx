import React from 'react';
import { Hourglass, EyeOff, Gavel } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Hourglass size={18} />,
      title: 'Zero Testing Hours',
      desc: 'Lawyers spend countless hours crafting arguments, but zero hours testing them against realistic opposition before filing.',
    },
    {
      icon: <EyeOff size={18} />,
      title: 'Blind Spots',
      desc: "Weaknesses are only discovered after opposing counsel attacks in court. By then, it's too late to pivot strategy.",
    },
    {
      icon: <Gavel size={18} />,
      title: 'Settlement Value',
      desc: "The settlement amount isn't decided in the courtroom. It's decided by the pre-trial paperwork quality.",
    },
  ];

  return (
    <section id="pain" className="px-6 py-28 bg-seer-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-seer-accent"></span>
              <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">The Problem</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
              The "wait and see" approach costs billions every year.
            </h3>
            <p className="text-seer-muted text-lg leading-relaxed">
              Every bridge and aircraft is tested before deployment. Yet lawyers file million-dollar lawsuits without ever testing their arguments against a simulated opponent.
            </p>
          </div>

          <div>
            {points.map((item, i) => (
              <div key={i} className="flex items-baseline gap-5 py-6 border-t border-seer-text/15 group">
                <span className="font-mono text-xs text-seer-muted/60 pt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-seer-text">{item.title}</h4>
                  <p className="text-sm text-seer-muted mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-seer-accent/50 group-hover:text-seer-accent transition-colors shrink-0">
                  {item.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
