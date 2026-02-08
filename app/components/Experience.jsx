import React from 'react';

export const Experience = ({ data }) => {
  return (
    <section 
      className="newspaper-page min-h-screen bg-[#F5F3EE] px-6 md:px-12 lg:px-20 py-20"
      style={{ perspective: '1200px' }}
      data-testid="experience-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="border-t-2 border-b border-[#1A1A1A] py-4 mb-12">
          <h2 
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-[#1A1A1A]"
            data-testid="experience-headline"
          >
            Professional Chronicle
          </h2>
          <div className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mt-2">
            Career Timeline · News Archive
          </div>
        </div>

        {/* Timeline as news articles */}
        <div className="space-y-12 animate-content">
          {data.map((job, index) => (
            <article 
              key={index} 
              className="border-b border-[#1A1A1A] pb-10"
              data-testid={`experience-item-${index}`}
            >
              {/* Article header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-[#1A1A1A]">
                    {job.title}
                  </h3>
                  <span className="text-lg font-['Playfair_Display'] text-[#1A1A1A]">
                    at {job.company}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A]">
                  <span>{job.duration}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                  <span>·</span>
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Article body - highlights as columns */}
              <div className="grid md:grid-cols-2 gap-6">
                {job.highlights.map((highlight, hIndex) => (
                  <div 
                    key={hIndex} 
                    className="flex gap-3"
                  >
                    <span className="text-[#1A1A1A] font-['Playfair_Display'] text-xl flex-shrink-0">
                      •
                    </span>
                    <p className="text-base font-['Inter'] text-[#1A1A1A] leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
