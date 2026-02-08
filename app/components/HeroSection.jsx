import React from "react";

const HeroSection = ({ data }) => {
  return (
    <section
      className="newspaper-page min-h-screen flex items-center justify-center bg-[#F5F3EE] px-6 md:px-12 lg:px-20"
      data-testid="hero-section"
    >
      <div className="max-w-5xl w-full">
        <div className="border-t-4 border-b-4 border-[#1A1A1A] py-12 md:py-16">
          {/* Masthead */}
          <div className="text-center mb-8">
            <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#1A1A1A] mb-2 font-['Inter']">
              Portfolio · {new Date().getFullYear()}
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Playfair_Display'] text-[#1A1A1A] leading-none mb-4"
              data-testid="hero-name"
            >
              {data.name}
            </h1>
            <div className="w-24 h-[2px] bg-[#1A1A1A] mx-auto mb-4"></div>
            <p className="text-lg md:text-xl font-['Inter'] text-[#1A1A1A] max-w-2xl mx-auto">
              {data.tagline}
            </p>
          </div>

          {/* Front page columns */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#1A1A1A]">
            <div className="text-center md:text-left">
              <h3 className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mb-2">
                Role
              </h3>
              <p className="font-['Playfair_Display'] text-xl text-[#1A1A1A]">
                {data.title}
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mb-2">
                Location
              </h3>
              <p className="font-['Playfair_Display'] text-xl text-[#1A1A1A]">
                {data.location}
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mb-2">
                Contact
              </h3>
              <p className="font-['Inter'] text-sm text-[#1A1A1A]">
                {data.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
