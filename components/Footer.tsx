import React from 'react';
import { Mail, Phone, Linkedin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-8 h-8 rounded bg-protego-cyan text-black flex items-center justify-center">
                <Shield size={18} strokeWidth={3} />
             </div>
             <span className="text-xl font-bold text-white">Protego-AI</span>
          </div>
          <p className="text-protego-muted mb-8">
            Building a future where legal strategy is data-driven, battle-tested, and predictable.
          </p>
          <div className="flex gap-4">
             <a href="https://www.linkedin.com/in/absiddiq1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-protego-cyan hover:text-black transition-colors">
               <Linkedin size={20} />
             </a>
             <a href="mailto:abubakarsiddiqpalli99@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-protego-cyan hover:text-black transition-colors">
               <Mail size={20} />
             </a>
          </div>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6">Contact</h4>
           <ul className="space-y-4 text-protego-muted">
             <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} />
                abubakarsiddiqpalli99@gmail.com
             </li>
             <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} />
                240-481-3766
             </li>
             <li className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
                Accepting Early Access Partners
             </li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
        <p>&copy; {new Date().getFullYear()} Protego-AI. All rights reserved.</p>
        <p>Designed for Litigators.</p>
      </div>
    </footer>
  );
};

export default Footer;