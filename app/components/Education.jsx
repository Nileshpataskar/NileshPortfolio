import React from "react";

export const Education = ({ data }) => {
  return (
    <section
      className="newspaper-page bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="education-section"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          06
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-12">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="education-headline"
          >
            Education
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span>Academic Transcript · Verified</span>
            <span>Auth. ID: EDU-{new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Education entries */}
        <div className="grid md:grid-cols-2 gap-8 animate-content">
          {data.map((edu, index) => (
            <div
              key={index}
              className="border-2 border-foreground p-8 relative bg-background group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-shadow duration-300"
              data-testid={`education-item-${index}`}
            >
              <div className="absolute top-0 right-0 bg-foreground text-background px-2 py-1 text-[10px] font-mono uppercase tracking-widest">
                Certified
              </div>

              <div className="mb-6 border-b border-foreground/10 pb-4">
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  {edu.field}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-sans font-bold text-foreground">
                    Institution
                  </span>
                  <span className="text-sm font-sans text-right">
                    {edu.institution}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-sans font-bold text-foreground">
                    Term
                  </span>
                  <span className="text-sm font-mono text-right">
                    {edu.duration}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-sans font-bold text-foreground">
                    Performance
                  </span>
                  <span className="text-sm font-mono font-bold bg-foreground/10 px-2 py-0.5 rounded text-right">
                    {edu.grade}
                  </span>
                </div>
              </div>

              {/* Stamp decoration */}
              <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none rotate-[-15deg] border-4 border-foreground rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-[10px] font-mono uppercase text-center leading-tight">
                  Official
                  <br />
                  Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
