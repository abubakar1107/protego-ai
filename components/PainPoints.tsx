import React from 'react';
import { Hourglass, EyeOff, Gavel } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain" className="px-6 py-24 bg-seer-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="sticky top-32">
            <h2 className="text-seer-indigo font-mono text-sm uppercase tracking-widest mb-4">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-seer-text mb-6">
              The "Wait and See" approach costs billions.
            </h3>
            <p className="text-seer-muted text-lg leading-relaxed">
              Every bridge and aircraft is tested before deployment. Yet lawyers file million-dollar lawsuits without ever testing their arguments against a simulated opponent.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: <Hourglass size={24} />,
                title: "Zero Testing Hours",
                desc: "Lawyers spend countless hours crafting arguments, but zero hours testing them against realistic opposition before filing."
              },
              {
                icon: <EyeOff size={24} />,
                title: "Blind Spots",
                desc: "Weaknesses are only discovered after opposing counsel attacks in court. By then, it's too late to pivot strategy."
              },
              {
                icon: <Gavel size={24} />,
                title: "Settlement Value",
                desc: "The settlement amount isn't decided in the courtroom — it's decided by the pre-trial paperwork quality."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-indigo/30 transition-all group">
                <div className="mb-6 text-seer-muted group-hover:text-seer-indigo transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold tracking-tight text-seer-text mb-3">{item.title}</h4>
                <p className="text-seer-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
