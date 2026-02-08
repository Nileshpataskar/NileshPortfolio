import React, { useState, useEffect } from "react";

export const Loader = ({ onLoadComplete }) => {
  const greetings = [
    "Hello", // English
    "Namaste", // Hindi
    "Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Hallo", // German
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "Olá", // Portuguese
    "Привет", // Russian
    "مرحبا", // Arabic
    "你好", // Chinese
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // All greetings shown, start fade out
      setFadeOut(true);
      const fadeTimer = setTimeout(() => {
        onLoadComplete();
      }, 800);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, greetings.length, onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-foreground transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      data-testid="loader-screen"
    >
      <div className="text-center w-full max-w-4xl px-4">
        <div className="border-y border-background/20 py-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-background animate-progress"></div>

          <h1
            className="text-6xl md:text-9xl font-black font-serif text-background tracking-tighter mix-blend-difference"
            data-testid="loader-greeting"
          >
            {greetings[Math.min(currentIndex, greetings.length - 1)]}
          </h1>

          <div className="mt-8 flex justify-between items-center font-mono text-xs text-background/50 uppercase tracking-widest">
            <span>System Initialization</span>
            <span>
              {Math.round(
                (Math.min(currentIndex, greetings.length) / greetings.length) *
                  100,
              )}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
