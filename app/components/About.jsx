import React from "react";

export const About = ({ data }) => {
  return (
    <section
      className="newspaper-page min-h-screen bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="about-section"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          02
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-12">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="about-headline"
          >
            {data.headline}
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span>Editorial · Feature Story</span>
            <span>Est. {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Editorial content */}
        <div className="grid md:grid-cols-12 gap-8 animate-content">
          {/* Main column */}
          <div className="md:col-span-8 space-y-6">
            {/* Author Visual Placeholder */}
            <div className="float-right ml-6 mb-6 w-48 h-64 border border-foreground p-1 bg-background relative group">
              <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-foreground/5"></div>
                <div className="text-center">
                  <span className="block text-4xl font-serif text-muted-foreground/50">
                    ?
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mt-2">
                    Author
                    <br />
                    Portrait
                  </span>
                </div>
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent h-[200%] w-full animate-scanline opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 bg-foreground text-background text-[10px] font-mono px-1">
                FIG. 2.0
              </div>
            </div>

            {data.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed font-sans text-foreground/90 text-justify first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sidebar with pull quote */}
          <div className="md:col-span-4">
            <div className="border-l-4 border-foreground pl-6 py-4 sticky top-24">
              <div className="text-xs tracking-widest uppercase font-mono text-muted-foreground mb-4">
                Key Insight
              </div>
              <blockquote
                className="text-2xl md:text-3xl font-serif italic text-foreground leading-tight"
                data-testid="about-pull-quote"
              >
                "{data.pullQuote}"
              </blockquote>
              <div className="mt-4 w-12 h-1 bg-foreground"></div>

              {/* Additional small visual placeholder */}
              <div className="mt-8 border border-foreground/20 aspect-video flex items-center justify-center bg-muted/30">
                <span className="font-mono text-[10px] uppercase text-muted-foreground">
                  Schematic view
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
