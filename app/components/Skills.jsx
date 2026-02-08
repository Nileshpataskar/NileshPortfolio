import React from 'react';

export const Skills = ({ data }) => {
  return (
    <section 
      className="newspaper-page min-h-screen bg-[#F5F3EE] px-6 md:px-12 lg:px-20 py-20"
      style={{ perspective: '1200px' }}
      data-testid="skills-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header - Classifieds style */}
        <div className="border-t-2 border-b border-[#1A1A1A] py-4 mb-12">
          <h2 
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-[#1A1A1A]"
            data-testid="skills-headline"
          >
            Technical Expertise
          </h2>
          <div className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mt-2">
            Classifieds · Skills Directory
          </div>
        </div>

        {/* Skills as classified ads */}
        <div className="grid md:grid-cols-3 gap-8 animate-content">
          {/* Frontend */}
          <div className="border-2 border-[#1A1A1A] p-6">
            <div className="border-b border-[#1A1A1A] pb-3 mb-4">
              <h3 className="text-sm tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A] font-bold">
                Frontend Development
              </h3>
            </div>
            <div className="space-y-2">
              {data.frontend.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#1A1A1A] text-xs mt-1">■</span>
                  <span className="text-sm font-['Inter'] text-[#1A1A1A]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border-2 border-[#1A1A1A] p-6">
            <div className="border-b border-[#1A1A1A] pb-3 mb-4">
              <h3 className="text-sm tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A] font-bold">
                Backend Development
              </h3>
            </div>
            <div className="space-y-2">
              {data.backend.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#1A1A1A] text-xs mt-1">■</span>
                  <span className="text-sm font-['Inter'] text-[#1A1A1A]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border-2 border-[#1A1A1A] p-6">
            <div className="border-b border-[#1A1A1A] pb-3 mb-4">
              <h3 className="text-sm tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A] font-bold">
                Tools & Methodologies
              </h3>
            </div>
            <div className="space-y-2">
              {data.tools.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#1A1A1A] text-xs mt-1">■</span>
                  <span className="text-sm font-['Inter'] text-[#1A1A1A]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
