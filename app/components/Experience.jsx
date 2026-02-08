import React from "react";

export const Experience = ({ data }) => {
  return (
    <section
      className="newspaper-page min-h-screen bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="experience-section"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          03
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-12">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="experience-headline"
          >
            Chronicle
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span>Career Timeline · News Archive</span>
            <span>Ed. {data.length} Records</span>
          </div>
        </div>

        {/* Timeline as news articles */}
        <div className="space-y-12 animate-content">
          {data.map((job, index) => (
            <article
              key={index}
              className="border-b border-foreground/20 pb-10 last:border-0 group"
              data-testid={`experience-item-${index}`}
            >
              <div className="grid md:grid-cols-4 gap-8">
                {/* Meta column */}
                <div className="md:col-span-1 border-l-2 border-foreground pl-4 h-fit sticky top-24">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {job.duration}
                  </div>
                  <div className="font-serif text-xl font-bold text-foreground mb-1 leading-none">
                    {job.company}
                  </div>
                  <div className="text-sm font-sans text-foreground/70 mb-4">
                    {job.location}
                  </div>
                  <div className="inline-block px-2 py-1 bg-foreground text-background text-xs font-mono font-bold uppercase">
                    {job.period}
                  </div>
                </div>

                {/* Content column */}
                <div className="md:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6 group-hover:underline underline-offset-4 decoration-2">
                    {job.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {job.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-3 items-start">
                        <span className="text-accent-foreground font-serif text-xl leading-none mt-1">
                          ›
                        </span>
                        <p className="text-sm md:text-base font-sans text-foreground/80 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
