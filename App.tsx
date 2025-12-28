
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HireSection } from './components/HireSection';
import { GlobalSection } from './components/GlobalSection';
import { WhoWeServe } from './components/WhoWeServe';
import { MobileApp } from './components/MobileApp';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <HireSection />
        <GlobalSection />
        <WhoWeServe />
        <MobileApp />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
