
import React from 'react';
import { SlidersHorizontal, FileText, Swords } from 'lucide-react';

const CoreProcess: React.FC = () => {
  return (
    <section id="solution" className="px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-seer-text mb-6">
            Your Case, Start to Finish
          </h3>
          <p className="text-seer-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Select your role, describe your case, and SEER handles the rest, with you in command at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[88px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-seer-border to-transparent z-0"></div>

          {[
            {
              step: "01",
              title: "Configure",
              icon: <SlidersHorizontal size={32} strokeWidth={1.5} />,
              desc: "Select Plaintiff or Defense. Pick your jurisdiction and court. Describe your case facts and upload relevant documents."
            },
            {
              step: "02",
              title: "Generate",
              icon: <FileText size={32} strokeWidth={1.5} />,
              desc: "SEER's agent teams draft court-ready documents tailored to your jurisdiction, backed by relevant case law and precedent."
            },
            {
              step: "03",
              title: "Simulate",
              icon: <Swords size={32} strokeWidth={1.5} />,
              desc: "Two AI law firms argue your documents before a neutral Judge agent. Documents are hardened through adversarial rounds until battle-ready."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="mb-6">
                <span className="text-[10px] font-mono font-semibold text-seer-accent uppercase tracking-[0.2em] bg-seer-accent/5 border border-seer-accent/15 px-4 py-1.5 rounded-md">
                  STEP {item.step}
                </span>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-seer-surface border border-seer-border group-hover:border-seer-accent/40 flex items-center justify-center text-seer-accent mb-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                {item.icon}
              </div>

              <h4 className="text-xl font-semibold tracking-tight text-seer-text mb-4 group-hover:text-seer-accent transition-colors">{item.title}</h4>
              <p className="text-seer-muted leading-relaxed px-4 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block px-10 py-5 bg-seer-surface border border-seer-border rounded-full">
            <p className="text-seer-text italic font-serif text-lg">
              File documents that have already survived the toughest scrutiny a courtroom will deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProcess;
