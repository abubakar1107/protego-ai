import React from 'react';
import { Pause, MessageCircleQuestion, ClipboardCheck, Paperclip, SkipForward } from 'lucide-react';

const HumanInTheLoop: React.FC = () => {
  const features = [
    {
      icon: <Pause size={22} />,
      title: 'Pause & Resume Anytime',
      desc: 'Stop agent processing at any point, review progress, and resume when ready.',
    },
    {
      icon: <MessageCircleQuestion size={22} />,
      title: 'Answer AI Questions',
      desc: 'When agents need clarification on facts or strategy, they ask. You decide.',
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: 'Review Facts Before Drafting',
      desc: 'Approve the extracted facts and case summary before any document is generated.',
    },
    {
      icon: <Paperclip size={22} />,
      title: 'Attach Files On-Demand',
      desc: 'Upload additional documents at any stage for agents to analyze and incorporate.',
    },
    {
      icon: <SkipForward size={22} />,
      title: 'Run or Skip Simulation',
      desc: 'Choose to run the full adversarial simulation or proceed directly to the draft.',
    },
  ];

  return (
    <section id="control" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="sticky top-32">
            <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">Your Control</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-seer-text mb-6">
              Always in Control. Never Out of the Loop.
            </h3>
            <p className="text-seer-muted text-lg leading-relaxed">
              SEER runs autonomously, but you can intervene at any moment. Pause the workflow, provide feedback, redirect strategy — your input feeds directly into the process in real time.
            </p>
          </div>

          <div className="grid gap-4">
            {features.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-seer-border shadow-sm hover:shadow-md hover:border-seer-accent/30 transition-all flex items-start gap-4">
                <div className="p-2.5 bg-seer-accent/5 rounded-lg text-seer-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight text-seer-text mb-1">{item.title}</h4>
                  <p className="text-sm text-seer-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanInTheLoop;
