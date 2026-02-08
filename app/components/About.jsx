import React from "react";

export const About = ({ data }) => {
  return (
    <section
      className="newspaper-page min-h-screen bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="about-section"
    >
      {/* Parchment Fold Line */}
      <div className="parchment-fold" />

      {/* Section Number Watermark */}
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          02
        </div>
      </div>

      {/* Decorative Paper Stain */}
      <div className="paper-stain" style={{ top: '20%', right: '15%', width: '200px', height: '150px' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-12">
          <h2
            className="animate-headline magical-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="about-headline"
          >
            {data.headline}
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span className="shimmer-text">Editorial · Feature Story</span>
            <span>Est. {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Editorial content */}
        <div className="grid md:grid-cols-12 gap-8 animate-content">
          {/* Main column */}
          <div className="md:col-span-8 space-y-6">
            {/* Enchanted Author Portrait */}
            <div className="enchanted-image float-right ml-6 mb-6 w-48 h-64 border-2 border-foreground p-1 bg-background relative group">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/hero/hero.png"
                  alt="Author Portrait"
                  className="w-full h-full object-cover"
                />
                {/* Magical shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 left-2 bg-foreground text-background text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider">
                Fig. 2.0
              </div>
            </div>

            {data.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed font-sans text-foreground/90 text-justify first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8] first-letter:text-amber-900"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sidebar with pull quote */}
          <div className="md:col-span-4">
            <div className="border-l-4 border-foreground pl-6 py-4 sticky top-24 float-gentle">
              <div className="text-xs tracking-widest uppercase font-mono text-muted-foreground mb-4">
                ✦ Key Insight
              </div>
              <blockquote
                className="text-2xl md:text-3xl font-serif italic text-foreground leading-tight magical-headline"
                data-testid="about-pull-quote"
              >
                "{data.pullQuote}"
              </blockquote>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-foreground to-amber-700"></div>

              {/* Tech Arsenal */}
              <div className="mt-8 border border-foreground/30 p-4 bg-muted/10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 shimmer-text">
                  Tech Arsenal
                </div>
                <div className="space-y-2">
                  {['React · Next.js', 'Node.js · .NET', 'SQL Server · MongoDB'].map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 group cursor-default">
                      <div className="w-2 h-2 bg-foreground group-hover:bg-amber-600 transition-colors"></div>
                      <span className="font-mono text-xs text-foreground/80 group-hover:text-foreground transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
