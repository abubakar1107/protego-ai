import React from 'react';
import { Briefcase, PenLine, Search, FileSearch, ScanSearch, Scale } from 'lucide-react';

const SimulationSection: React.FC = () => {
  const agents = [
    { icon: <Briefcase size={18} />, name: 'Lead Counsel', role: 'Ensures no strategic gap goes unaddressed across your entire case' },
    { icon: <PenLine size={18} />, name: 'Argument Specialist', role: 'Finds the holes in your arguments before opposing counsel does' },
    { icon: <Search size={18} />, name: 'Researcher', role: 'Surfaces the case law your opponent will cite against you' },
    { icon: <FileSearch size={18} />, name: 'Discovery Analyst', role: 'Catches document inconsistencies that could undermine your position' },
    { icon: <ScanSearch size={18} />, name: 'Fact Extractor', role: 'Flags factual vulnerabilities before they become courtroom surprises' },
    { icon: <Scale size={18} />, name: 'Judge', role: 'Decides when your documents can withstand real courtroom scrutiny', presiding: true },
  ];

  return (
    <section id="simulation" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-seer-accent"></span>
            <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">The Differentiator</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
            Dynamic courtroom simulation
          </h3>
          <p className="text-seer-muted text-lg leading-relaxed">
            A single AI reviews your work in one pass. SEER runs an agentic simulation: six specialist AI agents, split into two opposing firms and a presiding judge, each trained to examine your case from a different angle.
          </p>
        </div>

        {/* Roster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="flex items-baseline gap-5 py-5 border-t border-seer-text/15 group"
            >
              <span className={`font-mono text-xs pt-1 w-6 shrink-0 ${agent.presiding ? 'text-seer-accent' : 'text-seer-muted/60'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2.5">
                  <h4 className="font-serif text-xl text-seer-text">{agent.name}</h4>
                  {agent.presiding && (
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-seer-accent border border-seer-accent/30 rounded px-1.5 py-0.5">
                      Presiding
                    </span>
                  )}
                </div>
                <p className="text-sm text-seer-muted mt-1 leading-relaxed">{agent.role}</p>
              </div>
              <span className="text-seer-accent/50 group-hover:text-seer-accent transition-colors shrink-0">
                {agent.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 border-t border-seer-text/15">
          <div className="py-10 md:pr-14 md:border-r border-seer-border">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-seer-accent"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-seer-text">Public Rounds</span>
            </div>
            <p className="text-seer-muted leading-relaxed">
              Your documents face direct attack. Opposing counsel challenges every argument, citation, and factual claim, exposing the same weaknesses a real courtroom would.
            </p>
          </div>
          <div className="py-10 md:pl-14 border-t md:border-t-0 border-seer-border">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-seer-text">Private Strategy Rounds</span>
            </div>
            <p className="text-seer-muted leading-relaxed">
              After each exchange, teams regroup behind closed doors, patching exposed weaknesses, identifying new angles of attack, and developing counter-strategies before the next round.
            </p>
          </div>
        </div>

        <p className="mt-12 text-seer-muted leading-relaxed max-w-2xl">
          Simulation continues until the Judge determines the document is <span className="text-seer-text font-medium">sufficiently hardened</span> against all identified attack vectors.
        </p>
      </div>
    </section>
  );
};

export default SimulationSection;
