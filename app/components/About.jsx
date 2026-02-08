import React from 'react';

export const About = ({ data }) => {
  return (
    <section 
      className="newspaper-page min-h-screen bg-[#F5F3EE] px-6 md:px-12 lg:px-20 py-20"
      style={{ perspective: '1200px' }}
      data-testid="about-section"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="border-t-2 border-b border-[#1A1A1A] py-4 mb-12">
          <h2 
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-[#1A1A1A]"
            data-testid="about-headline"
          >
            {data.headline}
          </h2>
          <div className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mt-2">
            Editorial · Feature Story
          </div>
        </div>

        {/* Editorial content */}
        <div className="grid md:grid-cols-12 gap-8 animate-content">
          {/* Main column */}
          <div className="md:col-span-8 space-y-6">
            {data.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base md:text-lg leading-relaxed font-['Inter'] text-[#1A1A1A] text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sidebar with pull quote */}
          <div className="md:col-span-4">
            <div className="border-l-4 border-[#1A1A1A] pl-6 py-4 sticky top-24">
              <div className="text-sm tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A] mb-3">
                Pull Quote
              </div>
              <blockquote 
                className="text-2xl md:text-3xl font-['Playfair_Display'] italic text-[#1A1A1A] leading-tight"
                data-testid="about-pull-quote"
              >
                "{data.pullQuote}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
