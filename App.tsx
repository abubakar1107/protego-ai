import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import CoreProcess from './components/CoreProcess';
import MarketStats from './components/MarketStats';
import SystemFeatures from './components/SystemFeatures';
import Comparison from './components/Comparison';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-protego-dark text-protego-text font-sans selection:bg-protego-cyan selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] grid-bg"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-protego-cyan opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      <Navbar isScrolled={isScrolled} />
      
      <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-24">
        <Hero />
        <PainPoints />
        <CoreProcess />
        <MarketStats />
        <SystemFeatures />
        <Comparison />
      </main>

      <Footer />
    </div>
  );
};

export default App;