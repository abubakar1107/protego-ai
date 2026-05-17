import React from 'react';
import { Briefcase, PenLine, Search, FileSearch, ScanSearch, Scale } from 'lucide-react';

const SimulationSection: React.FC = () => {
  const agents = [
    { icon: <Briefcase size={22} />, name: 'Lead Counsel', role: 'Directs legal strategy and argument flow' },
    { icon: <PenLine size={22} />, name: 'Argument Specialist', role: 'Crafts and refutes legal arguments' },
    { icon: <Search size={22} />, name: 'Researcher', role: 'Finds case law and precedent' },
    { icon: <FileSearch size={22} />, name: 'Discovery Analyst', role: 'Analyzes documents and evidence' },
    { icon: <ScanSearch size={22} />, name: 'Fact Extractor', role: 'Identifies and verifies key facts' },
    { icon: <Scale size={22} />, name: 'Judge', role: 'Neutral arbiter — determines hardening' },
  ];

  return (
    <section id="simulation" className="px-6 py-24 bg-seer-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-seer-indigo font-mono text-sm uppercase tracking-widest mb-4">The Differentiator</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-seer-text mb-6">
            Dynamic Courtroom Simulation
          </h3>
          <p className="text-seer-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Every substantive document is argued by two AI law firms before a neutral Judge — six specialized agents stress-testing until the document is hardened.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {agents.map((agent, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-indigo/30 transition-all flex items-start gap-4">
              <div className="p-2.5 bg-seer-indigo/5 rounded-lg text-seer-indigo shrink-0">
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
              <div className="w-3 h-3 rounded-full bg-seer-indigo"></div>
              <h4 className="font-semibold tracking-tight text-seer-text text-lg">Public Rounds</h4>
            </div>
            <p className="text-seer-muted leading-relaxed">
              Both firms present arguments before the Judge agent. Each side attacks the other's position, exposing weaknesses in logic, precedent, and factual support.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-seer-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <h4 className="font-semibold tracking-tight text-seer-text text-lg">Private Strategy Rounds</h4>
            </div>
            <p className="text-seer-muted leading-relaxed">
              Within each firm, agents regroup to refine strategy, identify new angles of attack, and strengthen their position before the next public round.
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
