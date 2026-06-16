
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, openModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let rafId: number;
    const tick = () => {
      const data = (window as any).__seerWaveBtn || { intensity: 0, dirX: 0, dirY: 0 };
      if (btnRef.current) {
        if (window.scrollY < window.innerHeight) {
          const amt = Math.sin(data.intensity * Math.PI) * 5;
          const tx = data.dirX * amt;
          const ty = data.dirY * amt;
          btnRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
        } else {
          btnRef.current.style.transform = '';
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#pain' },
    { name: 'Process', href: '#solution' },
    { name: 'Simulation', href: '#simulation' },
    { name: 'Platform', href: '#features' },
    { name: 'Why Us', href: '#comparison' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-seer-border shadow-sm py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-serif tracking-wide text-seer-text group-hover:text-seer-accent transition-colors">
            SEER
          </span>
          <span className="text-xs text-seer-muted ml-1.5 hidden sm:inline">by Seerlex</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-seer-muted hover:text-seer-text transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            ref={btnRef}
            onClick={openModal}
            className="bg-seer-accent hover:bg-[#C4684E] text-white px-5 py-2 rounded-lg text-base font-serif italic tracking-wide transition-colors"
          >
            Try SEER
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-seer-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-seer-border p-6 md:hidden flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-seer-muted hover:text-seer-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="flex items-center justify-center gap-2 bg-seer-accent text-white px-4 py-3 rounded-lg font-serif italic text-lg mt-2 w-full text-center"
          >
            Try SEER
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
