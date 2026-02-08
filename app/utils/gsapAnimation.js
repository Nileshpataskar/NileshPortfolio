import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initPageFlipAnimations = () => {
  const sections = gsap.utils.toArray('.newspaper-page');
  
  sections.forEach((section, index) => {
    // Skip animation for the first section (hero)
    if (index === 0) return;
    
    // Enhanced newspaper page flip effect
    gsap.fromTo(
      section,
      {
        rotateX: -15,
        opacity: 0,
        scale: 0.85,
        transformOrigin: 'top center',
        y: 100,
      },
      {
        rotateX: 0,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      }
    );
    
    // Enhanced shadow effect for page depth
    gsap.fromTo(
      section,
      {
        boxShadow: '0 30px 80px rgba(26, 26, 26, 0.5)',
      },
      {
        boxShadow: '0 2px 12px rgba(26, 26, 26, 0.15)',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.5,
        },
      }
    );
    
    // Add subtle page curl effect
    gsap.fromTo(
      section,
      {
        filter: 'brightness(0.7)',
      },
      {
        filter: 'brightness(1)',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.5,
        },
      }
    );
  });
};

export const initFadeInAnimations = () => {
  // Headlines animation
  const headlines = gsap.utils.toArray('.animate-headline');
  headlines.forEach((headline) => {
    gsap.fromTo(
      headline,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headline,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Content blocks staggered animation
  const contentBlocks = gsap.utils.toArray('.animate-content');
  contentBlocks.forEach((block) => {
    const children = block.children;
    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Image reveal animations
  const images = gsap.utils.toArray('.animate-image');
  images.forEach((img) => {
    gsap.fromTo(
      img,
      {
        clipPath: 'inset(0 100% 0 0)',
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
