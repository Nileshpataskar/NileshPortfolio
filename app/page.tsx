'use client'

import React, { useEffect, useState } from 'react'
import { cleanupAnimations, initFadeInAnimations, initPageFlipAnimations } from './utils/gsapAnimation';
import { portfolioData } from './portfolioData';
import { Loader } from './components/Loader';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Project';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import HeroSection from './components/HeroSection';
// import { Hero } from './components/Hero';


function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Initialize GSAP animations after loading is complete
      const timer = setTimeout(() => {
        initPageFlipAnimations();
        initFadeInAnimations();
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
