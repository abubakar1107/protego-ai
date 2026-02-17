
import React, { useState } from 'react';
import { X, Send, Shield } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent("Waitlist Request: Protego-AI Access");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Message: ${formData.message}`
    );
    
    window.location.href = `mailto:abubakarsiddiqpalli99@gmail.com?subject=${subject}&body=${body}`;
    
    // Closer modal after a small delay
    setTimeout(onClose, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-protego-muted hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded bg-protego-cyan text-black flex items-center justify-center">
            <Shield size={20} strokeWidth={3} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
            <p className="text-sm text-protego-muted">Experience the future of litigation.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-protego-muted uppercase tracking-wider mb-2">Full Name</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Harvey Specter"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-protego-muted uppercase tracking-wider mb-2">Email</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="harvey@pearson.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-protego-muted uppercase tracking-wider mb-2">Company</label>
              <input 
                required
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Law Firm / Corp"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-protego-muted uppercase tracking-wider mb-2">Message (Optional)</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="How can we help you reinforce your litigation?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-protego-cyan text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 group mt-2"
          >
            Submit Request
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-protego-muted">
          We'll get back to you <span className="text-protego-cyan font-bold">ASAP</span>.
        </p>
      </div>
    </div>
  );
};

export default WaitlistModal;
