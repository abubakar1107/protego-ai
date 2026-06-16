import React from 'react';
import { Pause, MessageCircleQuestion, ClipboardCheck, Paperclip, SkipForward } from 'lucide-react';

const HumanInTheLoop: React.FC = () => {
  const features = [
    {
      icon: <Pause size={18} />,
      title: 'Pause & Resume Anytime',
      desc: 'Stop agent processing at any point, review progress, and resume when ready.',
    },
    {
      icon: <MessageCircleQuestion size={18} />,
      title: 'Answer AI Questions',
      desc: 'When agents need clarification on facts or strategy, they ask. You decide.',
    },
    {
      icon: <ClipboardCheck size={18} />,
      title: 'Review Facts Before Drafting',
      desc: 'Approve the extracted facts and case summary before any document is generated.',
    },
    {
      icon: <Paperclip size={18} />,
      title: 'Attach Files On-Demand',
      desc: 'Upload additional documents at any stage for agents to analyze and incorporate.',
    },
    {
      icon: <SkipForward size={18} />,
      title: 'Run or Skip Simulation',
      desc: 'Choose to run the full adversarial simulation or proceed directly to the draft.',
    },
  ];

  return (
    <section id="control" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-seer-accent"></span>
              <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">Your Control</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
              Always in control. Never out of the loop.
            </h3>
            <p className="text-seer-muted text-lg leading-relaxed">
              SEER runs autonomously, but you can intervene at any moment. Pause the workflow, provide feedback, redirect strategy. Your input feeds directly into the process in real time.
            </p>
          </div>

          <div>
            {features.map((item, i) => (
              <div key={i} className="flex items-baseline gap-5 py-6 border-t border-seer-text/15 group">
                <span className="font-mono text-xs text-seer-muted/60 pt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-seer-text">{item.title}</h4>
                  <p className="text-sm text-seer-muted mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-seer-accent/50 group-hover:text-seer-accent transition-colors shrink-0">
                  {item.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanInTheLoop;
