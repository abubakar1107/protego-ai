import React from 'react';
import { Hourglass, EyeOff, Gavel } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain" className="px-6 py-20 bg-seer-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-seer-text mb-5">
              The "Wait and See" approach costs billions every year.
            </h3>
            <p className="text-seer-muted text-base leading-relaxed">
              Every bridge and aircraft is tested before deployment. Yet lawyers file million-dollar lawsuits without ever testing their arguments against a simulated opponent.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: <Hourglass size={20} />,
                title: "Zero Testing Hours",
                desc: "Lawyers spend countless hours crafting arguments, but zero hours testing them against realistic opposition before filing."
              },
              {
                icon: <EyeOff size={20} />,
                title: "Blind Spots",
                desc: "Weaknesses are only discovered after opposing counsel attacks in court. By then, it's too late to pivot strategy."
              },
              {
                icon: <Gavel size={20} />,
                title: "Settlement Value",
                desc: "The settlement amount isn't decided in the courtroom. It's decided by the pre-trial paperwork quality."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all group flex gap-4 items-start">
                <div className="p-2 bg-seer-accent/5 rounded-lg text-seer-muted group-hover:text-seer-accent transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold tracking-tight text-seer-text mb-1">{item.title}</h4>
                  <p className="text-sm text-seer-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
