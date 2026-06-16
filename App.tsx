
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import CoreProcess from './components/CoreProcess';
import SimulationSection from './components/SimulationSection';
import Deliverables from './components/Deliverables';
import MarketStats from './components/MarketStats';
import SystemFeatures from './components/SystemFeatures';
import Comparison from './components/Comparison';
import HumanInTheLoop from './components/HumanInTheLoop';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import FlowingSquares from './components/FlowingSquares';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-seer-bg text-seer-text font-sans selection:bg-seer-accent/20 selection:text-seer-accent overflow-x-hidden">
      <FlowingSquares />
      <Navbar isScrolled={isScrolled} openModal={openModal} />

      <main className="relative z-10 flex flex-col pb-24">
        <Hero openModal={openModal} />
        <PainPoints />
        <CoreProcess />
        <SystemFeatures />
        <SimulationSection />
        <HumanInTheLoop />
        <Deliverables />
        <Comparison />
        <MarketStats />
      </main>

      <Footer openModal={openModal} />

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
