import React from 'react';
import { Edit3, Crosshair, ShieldCheck } from 'lucide-react';

const CoreProcess: React.FC = () => {
  return (
    <section id="solution" className="px-6 py-24 bg-protego-panel/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-protego-cyan font-mono text-sm uppercase tracking-widest mb-4">The Solution</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Two Rival Agent Teams
          </h3>
          <p className="text-protego-muted max-w-3xl mx-auto text-lg">
            We deploy two teams of specialized AI Agents pitching against each other in a continuous 
            <span className="text-white font-semibold ml-1">Draft, Attack, Fortify</span> loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-white/5 via-protego-cyan/50 to-white/5 z-0"></div>

          {[
            {
              step: "01",
              title: "Draft",
              icon: <Edit3 size={32} />,
              desc: "The Proponent Agent Team drafts the initial argument. They access jurisdiction-specific databases to craft narratives backed by case law."
            },
            {
              step: "02",
              title: "Attack",
              icon: <Crosshair size={32} />,
              desc: "A rival Opposing Agent Team aggressively attacks the document—finding loopholes, missing facts, and logical fallacies just like a real opponent."
            },
            {
              step: "03",
              title: "Fortify",
              icon: <ShieldCheck size={32} />,
              desc: "The system automatically fortifies the document based on the adversarial simulation, resulting in an iron-clad, bullet-proof filing."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-black border border-protego-cyan/30 flex items-center justify-center text-protego-cyan mb-8 shadow-[0_0_30px_rgba(0,209,255,0.1)]">
                {item.icon}
              </div>
              <span className="text-6xl font-bold text-white/5 absolute -top-4 -right-4 select-none font-mono">
                {item.step}
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-protego-muted leading-relaxed px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-protego-cyan/50 to-transparent">
            <div className="px-8 py-4 bg-black rounded-full border border-white/10 flex items-center gap-3">
              <span className="text-protego-cyan text-xl">"</span>
              <p className="text-white italic text-sm md:text-base">
                Lawyers enter the courtroom with a battle-tested document that has already survived the toughest possible scrutiny.
              </p>
              <span className="text-protego-cyan text-xl">"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProcess;