import React from 'react';
import { Check } from 'lucide-react';

const Deliverables: React.FC = () => {
  const plaintiffDocs = [
    'Litigation Hold Notices',
    'Demand Letters',
    'Complaints',
    'Civil Cover Sheets',
    'Opposition to Motions to Dismiss',
    'Replies to Counterclaims',
  ];

  const defenseDocs = [
    'Litigation Hold Notices',
    'Complaint Analyses',
    'Answers',
    'Counterclaims',
    'Motions to Dismiss (Rule 12(b) grounds)',
    'Replies in Support of MTD',
  ];

  const discoveryDocs = [
    'Interrogatories',
    'Requests for Production',
    'Requests for Admission',
    'Deposition Notices',
    'Subpoenas (Duces Tecum)',
    'Responses to Discovery Requests',
  ];

  const Column = ({ title, count, docs }: { title: string; count: string; docs: string[] }) => (
    <div>
      <div className="flex items-baseline justify-between border-b-2 border-seer-text/80 pb-3 mb-1">
        <h4 className="font-serif text-2xl text-seer-text">{title}</h4>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-seer-muted">{count}</span>
      </div>
      <ul>
        {docs.map((doc, i) => (
          <li key={i} className="flex items-center justify-between py-3.5 border-b border-seer-border text-seer-muted group">
            <span className="group-hover:text-seer-text transition-colors">{doc}</span>
            <Check size={15} className="text-seer-accent shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="deliverables" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-seer-accent"></span>
            <span className="text-seer-accent font-mono text-xs uppercase tracking-[0.2em]">What You Get</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-seer-text leading-[1.1] mb-6">
            Court-ready documents, jurisdiction-specific.
          </h3>
          <p className="text-seer-muted text-lg leading-relaxed">
            SEER produces complete document suites for both sides of litigation, tailored to your specific court and jurisdiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          <Column title="Plaintiff" count="06 Documents" docs={plaintiffDocs} />
          <Column title="Defense" count="06 Documents" docs={defenseDocs} />
        </div>

        {/* Discovery - in development */}
        <div className="mt-16 border-t border-dashed border-seer-border pt-8">
          <div className="flex items-center gap-3 mb-6">
            <h4 className="font-serif text-2xl text-seer-text">Discovery Phase</h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-seer-muted border border-seer-border rounded px-2 py-0.5">
              In Development
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            {discoveryDocs.map((doc, i) => (
              <span key={i} className="text-[15px] text-seer-muted/70">{doc}</span>
            ))}
          </div>
        </div>

        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.15em] text-seer-muted leading-relaxed">
          Coverage · New York · California · Texas · Illinois · Massachusetts · D.C.
          <span className="block mt-1 text-seer-muted/60">23 Federal Courts · 40+ State Courts</span>
        </p>
      </div>
    </section>
  );
};

export default Deliverables;
