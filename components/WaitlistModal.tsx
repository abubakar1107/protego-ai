import React, { useState } from 'react';
import { X, Send, Shield, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Handle the response
      const contentType = response.headers.get("content-type");
      let data;
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // If Vercel crashes (e.g. 504 Timeout or 500 Error page), it returns HTML/text, not JSON.
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(response.status === 500 ? "Internal Server Error (Check Vercel Logs)" : `Server returned ${response.status}`);
      }

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        console.error("API Error:", data);
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please check your connection.');
      }
    } catch (err: any) {
      console.error('Submission Exception:', err);
      setStatus('error');
      // Show the actual error message to help debugging
      setErrorMessage(err.message || 'Network Error. Please try again.');
    }
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
      <div className="relative w-full max-w-lg glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200 min-h-[500px] flex flex-col justify-center">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-protego-muted hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-protego-cyan/10 flex items-center justify-center text-protego-cyan">
                <CheckCircle2 size={48} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Sent</h2>
            <p className="text-protego-muted text-lg leading-relaxed mb-8">
              Thank you for your interest in Protego-AI. Your details have been received.
            </p>
            <p className="text-protego-cyan font-mono text-sm tracking-widest uppercase">
              We'll get back to you ASAP
            </p>
            <button 
              onClick={onClose}
              className="mt-10 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded bg-protego-cyan text-black flex items-center justify-center shrink-0">
                <Shield size={20} strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
                <p className="text-sm text-protego-muted">Experience the future of litigation.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-protego-muted uppercase tracking-[0.2em] mb-2">Full Name</label>
                <input 
                  required
                  disabled={status === 'submitting'}
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Harvey Specter"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-protego-muted uppercase tracking-[0.2em] mb-2">Email</label>
                  <input 
                    required
                    disabled={status === 'submitting'}
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="harvey@pearson.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-protego-muted uppercase tracking-[0.2em] mb-2">Company</label>
                  <input 
                    required
                    disabled={status === 'submitting'}
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Pearson Hardman"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-protego-muted uppercase tracking-[0.2em] mb-2">Message</label>
                <textarea 
                  required
                  disabled={status === 'submitting'}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="How can we help reinforce your litigation?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-protego-cyan/50 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <p className="text-xs font-medium text-left break-words max-h-32 overflow-y-auto">
                    {errorMessage}
                  </p>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-protego-cyan text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 group mt-2 disabled:bg-protego-muted disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-protego-muted">
              We'll get back to you <span className="text-white font-bold">ASAP</span>.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;