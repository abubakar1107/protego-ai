import React from 'react';
import { Route, Lock, Landmark, Scale, Swords } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      tag: 'Methodology',
      icon: <Swords size={20} strokeWidth={1.5} />,
      title: 'Adversarial by Design',
      desc: "Documents aren't just reviewed, they're attacked. Two opposing teams stress-test every argument across multiple rounds, so your filings have already survived the toughest scrutiny before they reach a courtroom.",
    },
    {
      tag: 'Tools',
      icon: <Landmark size={20} strokeWidth={1.5} />,
      title: 'Jurisdiction-Specific Tools',
      desc: 'Agents connect to court-specific databases, case law libraries, and filing standards through a centralized protocol layer.',
    },
    {
      tag: 'Security',
      icon: <Lock size={20} strokeWidth={1.5} />,
      title: 'Enterprise-Grade Security',
      desc: 'Attorney-client privilege protected at every layer. Authentication and authorization built into every agent and tool interaction.',
    },
    {
      tag: 'Logic',
      icon: <Route size={20} strokeWidth={1.5} />,
      title: 'Agentic Workflows',
      desc: "An agentic system, not a fixed script. SEER dynamically routes between drafting, critiquing, and refining based on each document's needs.",
    },
    {
      tag: 'Adjudication',
      icon: <Scale size={20} strokeWidth={1.5} />,
      title: 'Neutral Adjudication',
      desc: 'A Judge agent evaluates arguments from both sides without bias, determining when documents meet the standard for filing.',
    },
  ];

  return (
    <section id="features" className="px-6 py-28 bg-seer-surface">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-seer-accent"></span>
            <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">Platform</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
            Built for accuracy and trust.
          </h3>
          <p className="text-seer-muted text-lg leading-relaxed">
            A multi-agent architecture where specialized AI agents draft, attack, and adjudicate, coordinated through a central protocol layer built for legal work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {features.map((f, i) => (
            <div key={i} className="border-t border-seer-text/15 pt-6 group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-seer-accent">{f.tag}</span>
                <span className="text-seer-accent/40 group-hover:text-seer-accent transition-colors">{f.icon}</span>
              </div>
              <h4 className="font-serif text-2xl text-seer-text mb-3">{f.title}</h4>
              <p className="text-seer-muted leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
