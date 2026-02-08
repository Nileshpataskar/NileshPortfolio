import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page reveal animations
export const initPageFlipAnimations = () => {
  const sections = gsap.utils.toArray('.newspaper-page');

  sections.forEach((section, index) => {
    if (index === 0) return;

    // Elegant fade-in with slight rise
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
};

// Content fade animations
export const initFadeInAnimations = () => {
  // Headlines with magical shimmer
  const headlines = gsap.utils.toArray('.animate-headline');
  headlines.forEach((headline) => {
    gsap.fromTo(
      headline,
      {
        opacity: 0,
        y: 40,
        filter: 'blur(4px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headline,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Content blocks with stagger
  const contentBlocks = gsap.utils.toArray('.animate-content');
  contentBlocks.forEach((block) => {
    const children = block.children;
    if (children.length === 0) return;

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Images with reveal
  const images = gsap.utils.toArray('.animate-image');
  images.forEach((img) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        scale: 0.95,
        filter: 'sepia(0.5)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'sepia(0)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
};

// Magical micro-interactions
export const initMagicalEffects = () => {
  // Enchanted images - subtle movement on hover
  const enchantedImages = document.querySelectorAll('.enchanted-image img');
  enchantedImages.forEach((img) => {
    let bounds;

    const handleMouseMove = (e) => {
      bounds = img.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const moveX = (mouseX - centerX) / 20;
      const moveY = (mouseY - centerY) / 20;

      gsap.to(img, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(img, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    img.parentElement.addEventListener('mousemove', handleMouseMove);
    img.parentElement.addEventListener('mouseleave', handleMouseLeave);
  });

  // Magical headline glow on hover
  const headlines = document.querySelectorAll('.magical-headline, h1, h2');
  headlines.forEach((headline) => {
    headline.addEventListener('mouseenter', () => {
      gsap.to(headline, {
        textShadow: '0 0 30px rgba(218, 165, 32, 0.4), 0 0 60px rgba(218, 165, 32, 0.2)',
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    headline.addEventListener('mouseleave', () => {
      gsap.to(headline, {
        textShadow: 'none',
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });

  // Floating effect for cards and boxes
  const floatingElements = document.querySelectorAll('.float-gentle');
  floatingElements.forEach((el, index) => {
    gsap.to(el, {
      y: -8,
      duration: 2 + (index * 0.3),
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  });

  // Ink reveal effect for bordered elements
  const inkElements = document.querySelectorAll('.ink-reveal');
  inkElements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => el.classList.add('revealed'),
    });
  });

  // Magical border glow on interactive elements
  const buttons = document.querySelectorAll('button, a[href]');
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  });

  // Section number counter animation
  const sectionNumbers = document.querySelectorAll('.text-9xl');
  sectionNumbers.forEach((num) => {
    gsap.fromTo(
      num,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: num,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Paper crinkle effect on scroll
  const pages = document.querySelectorAll('.newspaper-page');
  pages.forEach((page) => {
    page.addEventListener('mouseenter', () => {
      gsap.to(page, {
        boxShadow: '0 10px 40px rgba(139, 115, 85, 0.15)',
        duration: 0.3,
      });
    });

    page.addEventListener('mouseleave', () => {
      gsap.to(page, {
        boxShadow: 'none',
        duration: 0.3,
      });
    });
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
