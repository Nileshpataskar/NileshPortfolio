import React from 'react';

export const Education = ({ data }) => {
  return (
    <section 
      className="newspaper-page bg-[#F5F3EE] px-6 md:px-12 lg:px-20 py-20"
      style={{ perspective: '1200px' }}
      data-testid="education-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="border-t-2 border-b border-[#1A1A1A] py-4 mb-12">
          <h2 
            className="animate-headline text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1A1A1A]"
            data-testid="education-headline"
          >
            Academic Background
          </h2>
          <div className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mt-2">
            Education · Credentials
          </div>
        </div>

        {/* Education entries */}
        <div className="grid md:grid-cols-2 gap-8 animate-content">
          {data.map((edu, index) => (
            <div 
              key={index} 
              className="border border-[#1A1A1A] p-6"
              data-testid={`education-item-${index}`}
            >
              <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#1A1A1A] mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm font-['Inter'] text-[#1A1A1A] mb-1">
                {edu.field}
              </p>
              <p className="text-sm font-['Inter'] text-[#1A1A1A] mb-2">
                {edu.institution}
              </p>
              <div className="flex justify-between items-center text-xs font-['Inter'] text-[#1A1A1A] border-t border-[#1A1A1A] pt-2 mt-2">
                <span>{edu.duration}</span>
                <span className="font-bold">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
