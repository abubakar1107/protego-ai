import React from 'react';
import { Briefcase, PenLine, Search, FileSearch, ScanSearch, Scale } from 'lucide-react';

const SimulationSection: React.FC = () => {
  const agents = [
    { icon: <Briefcase size={22} />, name: 'Lead Counsel', role: 'Ensures no strategic gap goes unaddressed across your entire case' },
    { icon: <PenLine size={22} />, name: 'Argument Specialist', role: 'Finds the holes in your arguments before opposing counsel does' },
    { icon: <Search size={22} />, name: 'Researcher', role: 'Surfaces the case law your opponent will cite against you' },
    { icon: <FileSearch size={22} />, name: 'Discovery Analyst', role: 'Catches document inconsistencies that could undermine your position' },
    { icon: <ScanSearch size={22} />, name: 'Fact Extractor', role: 'Flags factual vulnerabilities before they become courtroom surprises' },
    { icon: <Scale size={22} />, name: 'Judge', role: 'Decides when your documents can withstand real courtroom scrutiny' },
  ];

  return (
    <section id="simulation" className="px-6 py-24 bg-seer-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">The Differentiator</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-seer-text mb-6">
            Dynamic Courtroom Simulation
          </h3>
          <p className="text-seer-muted max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Every substantive document is argued by two AI law firms before a neutral Judge. The same adversarial pressure your filings will face in court.
          </p>
          <p className="text-seer-text max-w-2xl mx-auto text-base font-medium">
            A single AI reviews your work in one pass. SEER deploys six specialists, each one trained to examine your case from a different angle.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {agents.map((agent, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all flex items-start gap-4">
              <div className="p-2.5 bg-seer-accent/5 rounded-lg text-seer-accent shrink-0">
                {agent.icon}
              </div>
              <div>
                <h4 className="font-semibold tracking-tight text-seer-text mb-1">{agent.name}</h4>
                <p className="text-sm text-seer-muted">{agent.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-xl border border-seer-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-seer-accent"></div>
              <h4 className="font-semibold tracking-tight text-seer-text text-lg">Public Rounds</h4>
            </div>
            <p className="text-seer-muted leading-relaxed">
              Your documents face direct attack. Opposing counsel challenges every argument, citation, and factual claim, exposing the same weaknesses a real courtroom would.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-seer-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <h4 className="font-semibold tracking-tight text-seer-text text-lg">Private Strategy Rounds</h4>
            </div>
            <p className="text-seer-muted leading-relaxed">
              After each exchange, teams regroup behind closed doors, patching exposed weaknesses, identifying new angles of attack, and developing counter-strategies before the next round.
            </p>
          </div>
        </div>

        {/* End condition */}
        <div className="text-center">
          <div className="inline-block px-8 py-4 bg-white border border-seer-border rounded-full shadow-sm">
            <p className="text-seer-muted text-sm">
              Simulation continues until the Judge determines the document is <span className="text-seer-text font-semibold">sufficiently hardened</span> against all identified attack vectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
