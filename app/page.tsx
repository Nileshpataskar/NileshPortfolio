'use client'

import React, { useEffect, useState } from 'react'
import { cleanupAnimations, initFadeInAnimations, initPageFlipAnimations, initMagicalEffects } from './utils/gsapAnimation';
import { portfolioData } from './portfolioData';
import { Loader } from './components/Loader';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Project';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import HeroSection from './components/HeroSection';

// Magical floating particles component
const MagicalParticles = () => (
  <div className="magical-particles">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="particle" />
    ))}
  </div>
);

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Initialize all animations and magical effects
      const timer = setTimeout(() => {
        initPageFlipAnimations();
        initFadeInAnimations();
        initMagicalEffects();
      }, 100);

      return () => {
        clearTimeout(timer);
        cleanupAnimations();
      };
    }
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="App">
      {/* Floating magical dust particles */}
      <MagicalParticles />

      <HeroSection data={portfolioData.personal} />
      <About data={portfolioData.about} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Skills data={portfolioData.skills} />
      <Education data={portfolioData.education} />
      <Footer data={portfolioData.personal} />
    </div>
  );
}

export default Page;
