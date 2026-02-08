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
      }, 200);
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      data-testid="loader-screen"
    >
      <div className="text-center">
        <div className="border-t-2 border-b-2 border-[#F5F3EE] py-8 px-12">
          <h1
            className="text-6xl md:text-8xl font-bold font-['Playfair_Display'] text-[#F5F3EE] animate-pulse"
            data-testid="loader-greeting"
          >
            {greetings[currentIndex] || greetings[greetings.length - 1]}
          </h1>
          <div className="mt-6 flex justify-center gap-2">
            {greetings.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 transition-colors duration-300 ${
                  index <= currentIndex ? "bg-[#F5F3EE]" : "bg-[#F5F3EE]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
