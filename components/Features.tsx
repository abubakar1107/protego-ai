import React from 'react';
import { Route, Lock, Landmark, Scale, Swords } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">Platform</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-seer-text">Built for Accuracy and Trust</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Feature 1: Adversarial Methodology */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-orange-50 rounded-lg text-seer-accent">
                <Swords size={24} />
              </div>
              <span className="text-xs font-mono text-seer-muted border border-seer-border px-2 py-1 rounded">METHODOLOGY</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-seer-text mb-3">Adversarial by Design</h3>
            <p className="text-seer-muted leading-relaxed">
              Documents aren't just reviewed — they're attacked. Two opposing teams stress-test every argument across multiple rounds, so your filings have already survived the toughest scrutiny before they reach a courtroom.
            </p>
          </div>

          {/* Feature 2: Jurisdiction Tools */}
          <div className="bg-white p-8 rounded-2xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-orange-100/50 rounded-lg text-orange-700">
                <Landmark size={24} />
              </div>
              <span className="text-xs font-mono text-seer-muted border border-seer-border px-2 py-1 rounded">TOOLS</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-seer-text mb-3">Jurisdiction-Specific Tools</h3>
            <p className="text-seer-muted leading-relaxed">
              Agents connect to court-specific databases, case law libraries, and filing standards through a centralized protocol layer.
            </p>
          </div>

           {/* Feature 3: Security */}
           <div className="bg-white p-8 rounded-2xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
                <Lock size={24} />
              </div>
              <span className="text-xs font-mono text-seer-muted border border-seer-border px-2 py-1 rounded">SECURITY</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-seer-text mb-3">Enterprise-Grade Security</h3>
            <p className="text-seer-muted leading-relaxed">
              Attorney-client privilege protected at every layer. Authentication and authorization built into every agent and tool interaction.
            </p>
          </div>

           {/* Feature 4: Dynamic Workflows */}
           <div className="bg-white p-8 rounded-2xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                <Route size={24} />
              </div>
              <span className="text-xs font-mono text-seer-muted border border-seer-border px-2 py-1 rounded">LOGIC</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-seer-text mb-3">Dynamic Workflows</h3>
            <p className="text-seer-muted leading-relaxed">
              Agents don't follow a fixed script. The system dynamically routes between drafting, critiquing, and refining based on each document's needs.
            </p>
          </div>

           {/* Feature 5: Neutral Adjudication */}
           <div className="bg-white p-8 rounded-2xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-amber-50 rounded-lg text-amber-700">
                <Scale size={24} />
              </div>
              <span className="text-xs font-mono text-seer-muted border border-seer-border px-2 py-1 rounded">ADJUDICATION</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-seer-text mb-3">Neutral Adjudication</h3>
            <p className="text-seer-muted leading-relaxed">
              A Judge agent evaluates arguments from both sides without bias, determining when documents meet the standard for filing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
