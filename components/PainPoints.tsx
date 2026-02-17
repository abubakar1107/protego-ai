import React from 'react';
import { AlertTriangle, TrendingDown, EyeOff, Gavel } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain" className="px-6 py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-protego-cyan font-mono text-sm uppercase tracking-widest mb-4">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The "Wait and See" approach costs billions.
            </h3>
            <p className="text-protego-muted text-lg mb-8 leading-relaxed">
              Every bridge and aircraft is tested before deployment. Yet lawyers file million-dollar lawsuits without ever testing their arguments against a simulated opponent.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <p className="text-sm font-medium text-white max-w-xs">
                Weak documents lead to weak settlements or dismissed cases.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: <TrendingDown size={24} />,
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
                desc: "The settlement amount isn't decided in the courtroom, it's decided by the pre-trial paperwork quality."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-xl border border-white/5 hover:border-protego-cyan/50 transition-colors group">
                <div className="mb-6 text-protego-muted group-hover:text-protego-cyan transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-protego-muted leading-relaxed">
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