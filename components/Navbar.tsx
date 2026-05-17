
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, openModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Problem', href: '#pain' },
    { name: 'How It Works', href: '#solution' },
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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-serif tracking-wide text-seer-text group-hover:text-seer-indigo transition-colors">
            SEER
          </span>
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
            onClick={openModal}
            className="flex items-center gap-2 bg-seer-indigo hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors group"
          >
            Request Access
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
            className="flex items-center justify-center gap-2 bg-seer-indigo text-white px-4 py-3 rounded-lg font-semibold mt-2 w-full text-center"
          >
            Request Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
