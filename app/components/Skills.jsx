import React from "react";

export const Skills = ({ data }) => {
  return (
    <section
      className="newspaper-page min-h-screen bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="skills-section"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          05
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-12">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="skills-headline"
          >
            Capabilities
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span>System Specs · Stack Analysis</span>
            <span>Ref. Tech-001</span>
          </div>
        </div>

        {/* Skills as technical specs / classifieds */}
        <div className="grid md:grid-cols-3 gap-8 animate-content">
          {[
            { title: "Frontend Architecture", skills: data.frontend },
            { title: "Backend Systems", skills: data.backend },
            { title: "DevOps & Tooling", skills: data.tools },
          ].map((category, idx) => (
            <div
              key={idx}
              className="border-2 border-foreground p-0 relative group bg-background"
            >
              {/* Header of the card */}
              <div className="bg-foreground text-background p-3 text-center border-b-2 border-foreground">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>

              {/* List */}
              <div className="p-4 space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-dashed border-foreground/30 pb-2 last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-mono font-medium text-foreground uppercase tracking-tight">
                      {skill}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      v1.0
                    </span>
                  </div>
                ))}
              </div>

              {/* Corner decor */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-foreground"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
