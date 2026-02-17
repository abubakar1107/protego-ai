
import React from 'react';
import { Edit3, Crosshair, ShieldCheck } from 'lucide-react';

const CoreProcess: React.FC = () => {
  return (
    <section id="solution" className="px-6 py-24 bg-protego-panel/30 border-y border-white/5 relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-protego-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-protego-cyan font-mono text-sm uppercase tracking-widest mb-4">The Solution</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Two Rival Agent Teams
          </h3>
          <p className="text-protego-muted max-w-3xl mx-auto text-lg leading-relaxed">
            We deploy two teams of specialized AI Agents pitching against each other in a continuous 
            <span className="text-white font-semibold ml-1">Draft, Attack, Fortify</span> loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector Line (Desktop) - Adjusted top to perfectly center with icons */}
          <div className="hidden md:block absolute top-[88px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-protego-cyan/40 to-transparent z-0"></div>

          {[
            {
              step: "01",
              title: "Draft",
              icon: <Edit3 size={32} strokeWidth={1.5} />,
              desc: "The Proponent Agent Team drafts the initial argument. They access jurisdiction-specific databases to craft narratives backed by case law."
            },
            {
              step: "02",
              title: "Attack",
              icon: <Crosshair size={32} strokeWidth={1.5} />,
              desc: "A rival Opposing Agent Team aggressively attacks the document—finding loopholes, missing facts, and logical fallacies just like a real opponent."
            },
            {
              step: "03",
              title: "Fortify",
              icon: <ShieldCheck size={32} strokeWidth={1.5} />,
              desc: "The system automatically fortifies the document based on the adversarial simulation, resulting in an iron-clad, bullet-proof filing."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step Label - Styled to match screenshot */}
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold text-protego-cyan uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-1.5 rounded-md">
                  STEP {item.step}
                </span>
              </div>

              {/* Icon Box */}
              <div className="w-24 h-24 rounded-2xl bg-black border border-white/10 group-hover:border-protego-cyan/50 flex items-center justify-center text-protego-cyan mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(0,209,255,0.15)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-protego-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  {item.icon}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-protego-cyan transition-colors">{item.title}</h4>
              <p className="text-protego-muted leading-relaxed px-4 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="px-10 py-5 bg-black/40 backdrop-blur-sm rounded-full border border-white/5 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-protego-cyan animate-pulse"></div>
              <p className="text-protego-text italic text-sm md:text-base font-medium">
                Enter the courtroom with a document that has already survived the toughest possible scrutiny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProcess;
