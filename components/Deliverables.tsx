import React from 'react';
import { Check, Shield, Swords, Clock } from 'lucide-react';

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

  return (
    <section id="deliverables" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-seer-accent font-mono text-sm uppercase tracking-widest mb-4">What You Get</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-seer-text mb-6">
            Court-Ready Documents, Jurisdiction-Specific
          </h3>
          <p className="text-seer-muted max-w-2xl mx-auto text-lg">
            SEER produces complete document suites for both sides of litigation, tailored to your specific court and jurisdiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Plaintiff */}
          <div className="bg-white p-8 rounded-xl border border-seer-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-50 rounded-lg text-seer-accent">
                <Shield size={20} />
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-seer-text">Plaintiff Documents</h4>
            </div>
            <ul className="space-y-3">
              {plaintiffDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-seer-muted">
                  <Check size={16} className="text-seer-accent shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Defense */}
          <div className="bg-white p-8 rounded-xl border border-seer-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <Swords size={20} />
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-seer-text">Defense Documents</h4>
            </div>
            <ul className="space-y-3">
              {defenseDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-seer-muted">
                  <Check size={16} className="text-slate-500 shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discovery Phase - Coming Soon */}
        <div className="bg-white p-8 rounded-xl border-2 border-dashed border-seer-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <Clock size={20} />
            </div>
            <h4 className="font-semibold tracking-tight text-seer-text text-lg">Discovery Phase</h4>
            <span className="text-[10px] font-mono font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">Coming Soon</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1">
            {[
              'Interrogatories',
              'Requests for Production',
              'Requests for Admission',
              'Deposition Notices',
              'Subpoenas (Duces Tecum)',
              'Responses to Discovery Requests',
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-seer-muted">
                <Clock size={14} className="text-amber-500 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-seer-muted mt-6 italic">
          Additional document types are continuously being developed. More phases of litigation coming soon.
        </p>

        <p className="text-center text-sm text-seer-muted mt-8">
          Covering <span className="font-medium text-seer-text">New York, California, Texas, Illinois, Massachusetts & D.C.</span>, covering 23 federal courts and 40+ state courts.
        </p>
      </div>
    </section>
  );
};

export default Deliverables;
