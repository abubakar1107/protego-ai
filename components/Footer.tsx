import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return (
    <footer id="contact" className="bg-seer-surface border-t border-seer-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
             <span className="text-2xl font-serif text-seer-text">SEER</span>
             <span className="text-sm text-seer-muted">by Seerlex</span>
          </div>
          <p className="text-seer-muted mb-8">
            Litigation preparation, battle-tested before the courtroom.
          </p>
          <div className="flex gap-4">
             <a href="https://www.linkedin.com/in/absiddiq1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-seer-border flex items-center justify-center text-seer-muted hover:bg-seer-indigo hover:text-white transition-colors">
               <Linkedin size={20} />
             </a>
             <a href="mailto:abubakarsiddiqpalli99@gmail.com" className="w-10 h-10 rounded-full bg-seer-border flex items-center justify-center text-seer-muted hover:bg-seer-indigo hover:text-white transition-colors">
               <Mail size={20} />
             </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-seer-muted text-sm">Interested in early access?</p>
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-seer-indigo hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-sm text-seer-muted">Accepting Early Access Partners</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-seer-border text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-seer-muted">
        <p>&copy; {new Date().getFullYear()} Seerlex. All rights reserved.</p>
        <p>Designed for Litigators.</p>
      </div>
    </footer>
  );
};

export default Footer;
